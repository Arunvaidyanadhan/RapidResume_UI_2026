/**
 * ============================================
 * TemplateGrid.jsx
 * ============================================
 * Responsive grid layout for template cards
 * Automatically adjusts columns based on breakpoint:
 * - 1280px+: 4 columns
 * - 1024px+: 3 columns
 * - 768px+: 2 columns
 * - <768px: 1 column
 */

import React from 'react';
import './TemplateGrid.css';

export default function TemplateGrid({
  templates = [],
  selectedTemplate = null,
  onSelectTemplate = () => {},
  isLoading = false,
  error = null,
  className = '',
}) {
  if (error) {
    return (
      <div className="template-grid-error">
        <p className="error-message">Failed to load templates. Please try again.</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="template-grid">
        {Array.from({ length: 4 }).map((_, idx) => (
          <div key={idx} className="template-card-skeleton" />
        ))}
      </div>
    );
  }

  if (!templates || templates.length === 0) {
    return (
      <div className="template-grid-empty">
        <p className="empty-message">No templates available</p>
      </div>
    );
  }

  return (
    <div className={`template-grid ${className}`}>
      {templates.map((template) => (
        <React.Fragment key={template.templateId || template.id}>
          {React.cloneElement(template, {
            isSelected: selectedTemplate?.id === template.props?.templateId || selectedTemplate === template.templateId,
            onSelect: () => onSelectTemplate(template),
          })}
        </React.Fragment>
      ))}
    </div>
  );
}
