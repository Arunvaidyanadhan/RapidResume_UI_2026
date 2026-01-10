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
    id: 'modern',
    displayName: 'Modern',
    description: 'Clean and professional design',
    backendTemplate: 'modern.hbs',
    category: 'professional',
  },
  {
    id: 'template-2',
    displayName: 'Classic',
    description: 'Traditional resume layout',
    backendTemplate: 'template-2.hbs',
    category: 'professional',
  },
  {
    id: 'template-3',
    displayName: 'Executive',
    description: 'Bold and impactful design',
    backendTemplate: 'template-3.hbs',
    category: 'executive',
  },
  {
    id: 'template-4',
    displayName: 'Creative',
    description: 'Modern with creative flair',
    backendTemplate: 'template-4.hbs',
    category: 'creative',
  },
  {
    id: 'template-5',
    displayName: 'Minimalist',
    description: 'Simple and elegant',
    backendTemplate: 'template-5.hbs',
    category: 'minimal',
  },
  {
    id: 'template-6',
    displayName: 'Professional',
    description: 'ATS-friendly format',
    backendTemplate: 'template-6.hbs',
    category: 'professional',
  },
  {
    id: 'template-7',
    displayName: 'Simple ATS',
    description: 'Ultra-clean single-column layout for fast scanning',
    backendTemplate: 'template-7.hbs',
    category: 'minimal',
  },
  {
    id: 'template-8',
    displayName: 'Fresher Focus',
    description: 'Education and projects first. Great for students and freshers',
    backendTemplate: 'template-8.hbs',
    category: 'minimal',
  },
  {
    id: 'template-9',
    displayName: 'Project Spotlight',
    description: 'Project-first layout for portfolios and hands-on roles',
    backendTemplate: 'template-9.hbs',
    category: 'minimal',
  },
  {
    id: 'ats-minimal',
    displayName: 'Minimal ATS',
    description: 'Strict ATS-safe typography and spacing with clean section rules',
    backendTemplate: 'ats-minimal.hbs',
    category: 'minimal',
  },
  {
    id: 'complete',
    displayName: 'Complete',
    description: 'Comprehensive layout',
    backendTemplate: 'complete.hbs',
    category: 'professional',
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
