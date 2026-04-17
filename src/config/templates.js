/**
 * Template Registry - Single Source of Truth
 * 
 * This file defines all available resume templates.
 * Both frontend and backend should reference this structure.
 * 
 * Frontend: Uses id and displayName for UI
 * Backend: Uses backendTemplate to map to actual .hbs file
 */

/**
 * Template Registry
 * 
 * Only templates with backendTemplate are available for PDF generation.
 * Templates without backendTemplate will show in UI but won't generate PDFs.
 */
export const TEMPLATE_REGISTRY = [
  {
    id: 'classic',
    displayName: 'Classic',
    description: 'Clean ATS-focused single-column layout',
    backendTemplate: 'classic.hbs',
    category: 'professional',
  },
  {
    id: 'modern',
    displayName: 'Modern',
    description: 'Balanced two-column professional layout',
    backendTemplate: 'modern-pro.hbs',
    category: 'professional',
  },
  {
    displayName: 'Executive',
    id: 'executive',
    description: 'Leadership-oriented layout with premium hierarchy',
    backendTemplate: 'executive.hbs',
    category: 'executive',
  },
  {
    displayName: 'Minimalist',
    id: 'minimal',
    description: 'Editorial white-space-first layout',
    backendTemplate: 'minimal.hbs',
    category: 'minimal',
  },
  {
    displayName: 'Creative',
    id: 'creative',
    description: 'Distinctive layout with tasteful visual contrast',
    backendTemplate: 'creative.hbs',
    category: 'creative',
  },
];

/**
 * Get template by ID
 */
export function getTemplateById(id) {
  return TEMPLATE_REGISTRY.find(t => t.id === id);
}

/**
 * Get templates available for PDF generation
 */
export function getAvailableTemplates() {
  return TEMPLATE_REGISTRY.filter(t => t.backendTemplate !== null);
}

/**
 * Check if template supports PDF generation
 */
export function canGeneratePDF(templateId) {
  const template = getTemplateById(templateId);
  return template && template.backendTemplate !== null;
}
