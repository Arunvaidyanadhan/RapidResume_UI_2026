import axios from 'axios';
import { transformResumeData } from './dataTransformer';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

/**
 * Fetch all available templates from backend
 * @returns {Promise<Array>} Array of template metadata objects with id, name, description, and preview
 */
export async function fetchTemplates() {
  try {
    const response = await axios.get(`${API_BASE_URL}/templates`);
    return response.data.templates || [];
  } catch (error) {
    let errorMessage = 'Failed to fetch templates. Please try again.';
    
    if (error.response) {
      if (error.response.data?.message) {
        errorMessage = error.response.data.message;
      } else {
        errorMessage = `Server error: ${error.response.status}`;
      }
    } else if (error.request) {
      errorMessage = 'Unable to connect to the server. Please ensure the backend is running.';
    } else {
      errorMessage = error.message || errorMessage;
    }
    
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
    
    const response = await axios.post(
      `${API_BASE_URL}/generate-pdf/${templateId}`,
      transformedData,
      {
        responseType: 'blob',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data;
  } catch (error) {
    // Handle different error response formats
    let errorMessage = 'Failed to generate PDF. Please try again.';
    
    if (error.response) {
      // Backend returned an error response
      if (error.response.data) {
        if (typeof error.response.data === 'string') {
          errorMessage = error.response.data;
        } else if (error.response.data.message) {
          errorMessage = error.response.data.message;
        } else if (error.response.data.error) {
          errorMessage = error.response.data.error;
        }
      } else {
        errorMessage = `Server error: ${error.response.status}`;
      }
    } else if (error.request) {
      // Request was made but no response received
      errorMessage = 'Unable to connect to the server. Please ensure the backend is running.';
    } else {
      // Error in request setup
      errorMessage = error.message || errorMessage;
    }
    
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
