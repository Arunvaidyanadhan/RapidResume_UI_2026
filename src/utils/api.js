import axios from 'axios';
import { transformResumeData } from './dataTransformer';

const CONFIGURED_API_BASE_URL = (process.env.REACT_APP_API_URL || '').trim();

function getLocalApiBaseUrl() {
  if (typeof window === 'undefined') return 'http://localhost:3001';
  const host = window.location.hostname;
  if (host === 'localhost' || host === '127.0.0.1') return 'http://localhost:3001';
  return `http://${host}:3001`;
}

let activeApiBaseUrl = (() => {
  if (typeof window !== 'undefined') {
    const host = window.location.hostname;
    const isPrivateIp =
      /^10\./.test(host) ||
      /^192\.168\./.test(host) ||
      /^172\.(1[6-9]|2\d|3[0-1])\./.test(host);
    if (host === 'localhost' || host === '127.0.0.1' || isPrivateIp) return getLocalApiBaseUrl();
  }

  if (CONFIGURED_API_BASE_URL) return CONFIGURED_API_BASE_URL;

  return getLocalApiBaseUrl();
})();

export function getApiBaseUrl() {
  return activeApiBaseUrl;
}

function getFallbackApiBaseUrl(primary) {
  const localBase = getLocalApiBaseUrl();
  if (primary === localBase) return CONFIGURED_API_BASE_URL || '';
  return localBase;
}

async function parseBlobError(blob) {
  try {
    const text = await blob.text();
    try {
      const asJson = JSON.parse(text);
      return asJson?.message || asJson?.error || text;
    } catch {
      return text;
    }
  } catch {
    return '';
  }
}

async function getErrorMessage(error, fallbackHint = '') {
  let errorMessage = 'Request failed. Please try again.';

  if (error?.response) {
    const data = error.response.data;

    if (data instanceof Blob) {
      const decoded = await parseBlobError(data);
      errorMessage = decoded || `Server error: ${error.response.status}`;
    } else if (typeof data === 'string') {
      errorMessage = data;
    } else if (data?.message) {
      errorMessage = data.message;
    } else if (data?.error) {
      errorMessage = data.error;
    } else {
      errorMessage = `Server error: ${error.response.status}`;
    }
  } else if (error?.request) {
    errorMessage = fallbackHint || 'Unable to connect to the server. Please ensure the backend is running.';
  } else {
    errorMessage = error?.message || errorMessage;
  }

  return errorMessage;
}

async function withApiFallback(requestFn) {
  const primary = activeApiBaseUrl;
  try {
    return await requestFn(primary);
  } catch (error) {
    // Only retry on network-like failures (no response). CORS failures also land here.
    if (!error?.response) {
      const fallback = getFallbackApiBaseUrl(primary);
      if (fallback && fallback !== primary) {
        try {
          const result = await requestFn(fallback);
          activeApiBaseUrl = fallback;
          return result;
        } catch (secondError) {
          throw secondError;
        }
      }
    }
    throw error;
  }
}

/**
 * Fetch all available templates from backend
 * @returns {Promise<Array>} Array of template metadata objects with id, name, description, and preview
 */
export async function fetchTemplates() {
  try {
    const response = await withApiFallback((base) => axios.get(`${base}/templates`));
    return response.data.templates || [];
  } catch (error) {
    const errorMessage = await getErrorMessage(error, 'Unable to connect to the server. Please ensure the backend is running.');
    throw new Error(errorMessage);
  }
}

/**
 * Generates PDF by calling backend API
 * @param {Object} resumeData - Frontend resume data structure
 * @param {string} templateId - Template ID from backend (e.g., 'modern', 'template-2')
 * @returns {Promise<Blob>} PDF blob
 */
export async function generatePDF(resumeData, templateId) {
  try {
    const transformedData = transformResumeData(resumeData);
    
    const response = await withApiFallback((base) =>
      axios.post(
        `${base}/generate-pdf/${templateId}`,
        transformedData,
        {
          responseType: 'blob',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
    );

    return response.data;
  } catch (error) {
    const errorMessage = await getErrorMessage(error, 'Unable to connect to the server. Please ensure the backend is running.');
    throw new Error(errorMessage);
  }
}

/**
 * Downloads a blob as a file
 * @param {Blob} blob - The blob to download
 * @param {string} filename - The filename for the download
 */
export function downloadBlob(blob, filename = 'resume.pdf') {
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
}
