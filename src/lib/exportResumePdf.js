import React from 'react';
import { pdf } from '@react-pdf/renderer';
import { ResumePdfDocument } from './pdfTemplates';

export async function exportResumePdf(resume, templateId) {
  const blob = await pdf(<ResumePdfDocument resume={resume} templateId={templateId} />).toBlob();
  return blob;
}
