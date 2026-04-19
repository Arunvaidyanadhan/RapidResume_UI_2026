/**
 * ============================================
 * TemplateCard.jsx (REDESIGNED)
 * ============================================
 * Premium template card with hover effects
 * Shows live template component preview with CTA overlay and selection state
 */

import React, { memo, useState } from 'react';
import './TemplateCard.css';

const TemplateCard = memo(({
  templateId,
  templateName,
  description,
  templateComponent: TemplateComponent,
  sampleData,
  onSelect,
  isSelected = false,
  badge = null,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleSelect = () => {
    onSelect?.();
  };

  return (
    <div
      className={`template-card ${isSelected ? 'selected' : ''} ${isHovered ? 'hovered' : ''}`}
      data-template-id={templateId}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleSelect}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleSelect();
        }
      }}
      role="button"
      tabIndex={0}
      aria-pressed={isSelected}
      aria-label={`${templateName} template`}
    >
      {/* Badge (e.g., "Popular", "New") */}
      {badge && <div className="template-badge">{badge}</div>}

      {/* Live Preview Container */}
      <div className="template-preview-container">
        {TemplateComponent ? (
          <div className="template-live-preview">
            <TemplateComponent data={sampleData} />
          </div>
        ) : (
          <div className="template-placeholder">
            <div className="template-placeholder-icon">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 2V8H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 13H8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 17H8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 9H9H8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="template-placeholder-text">{templateName}</p>
            <p className="template-placeholder-subtext">Preview not available</p>
          </div>
        )}

        {/* Overlay on hover */}
        {isHovered && (
          <div className="template-overlay">
            <button
              className="template-cta-button"
              onClick={(e) => {
                e.stopPropagation();
                handleSelect();
              }}
              aria-label={`Use ${templateName} template`}
            >
              {isSelected ? '✓ Selected' : 'Use Template'}
            </button>
          </div>
        )}
      </div>

      {/* Info Section */}
      <div className="template-info">
        <h3 className="template-title">{templateName}</h3>
        {description && <p className="template-description">{description}</p>}
      </div>

      {/* Selection checkmark */}
      {isSelected && (
        <div className="template-checkmark">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M20 6L9 17L4 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}
    </div>
  );
});

TemplateCard.displayName = 'TemplateCard';

export default TemplateCard;
