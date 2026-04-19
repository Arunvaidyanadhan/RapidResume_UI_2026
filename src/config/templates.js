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
 * Template Registry - Zety-Inspired ATS-Friendly Templates
 *
 * Only templates with backendTemplate are available for PDF generation.
 * Templates without backendTemplate will show in UI but won't generate PDFs.
 */
export const TEMPLATE_REGISTRY = [
  {
    id: 'professional',
    displayName: 'Professional',
    description: 'Clean two-column layout with accent sidebar, perfect for corporate roles',
    backendTemplate: 'professional.hbs',
    category: 'professional',
  },
  {
    id: 'elegant',
    displayName: 'Elegant',
    description: 'Sophisticated single-column design with refined typography',
    backendTemplate: 'elegant.hbs',
    category: 'professional',
  },
  {
    id: 'modern',
    displayName: 'Modern',
    description: 'Contemporary layout with bold headers and clean structure',
    backendTemplate: 'modern.hbs',
    category: 'professional',
  },
  {
    id: 'minimalist',
    displayName: 'Minimalist',
    description: 'Ultra-clean design with maximum white space and focus on content',
    backendTemplate: 'minimalist.hbs',
    category: 'minimal',
  },
  {
    id: 'creative',
    displayName: 'Creative',
    description: 'Expressive layout with subtle visual elements for creative industries',
    backendTemplate: 'creative.hbs',
    category: 'creative',
  },
  {
    id: 'executive',
    displayName: 'Executive',
    description: 'Premium layout with strong hierarchy for senior leadership roles',
    backendTemplate: 'executive.hbs',
    category: 'executive',
  },
  {
    id: 'bold',
    displayName: 'Bold',
    description: 'High-contrast design with strong visual impact',
    backendTemplate: 'bold.hbs',
    category: 'creative',
  },
  {
    id: 'classic',
    displayName: 'Classic',
    description: 'Traditional ATS-optimized format for maximum compatibility',
    backendTemplate: 'classic.hbs',
    category: 'professional',
  },
  {
    id: 'clean',
    displayName: 'Clean',
    description: 'Simple, readable layout with subtle color accents',
    backendTemplate: 'clean.hbs',
    category: 'professional',
  },
  {
    id: 'sophisticated',
    displayName: 'Sophisticated',
    description: 'Refined design with elegant spacing and professional polish',
    backendTemplate: 'sophisticated.hbs',
    category: 'executive',
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
