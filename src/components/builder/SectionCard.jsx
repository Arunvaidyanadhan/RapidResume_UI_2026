/**
 * ============================================
 * SectionCard.jsx
 * ============================================
 * Collapsible section wrapper for form fields
 * Used for Personal Info, Experience, Education, etc.
 */

import React from 'react';
import './SectionCard.css';

export default function SectionCard({
  id,
  title,
  icon,
  required = false,
  isExpanded = false,
  onToggle = () => {},
  children,
  className = '',
}) {
  const handleToggle = () => {
    onToggle();
  };

  return (
    <div className={`section-card ${isExpanded ? 'expanded' : ''} ${className}`}>
      {/* Section Header */}
      <button
        className="section-header"
        onClick={handleToggle}
        aria-expanded={isExpanded}
        aria-controls={`section-content-${id}`}
        type="button"
      >
        {/* Left: Icon + Title */}
        <div className="section-header-left">
          {icon && <span className="section-icon">{icon}</span>}
          <div className="section-title-group">
            <h3 className="section-title">{title}</h3>
            {required && (
              <span className="section-badge required" title="Required section">
                Required
              </span>
            )}
          </div>
        </div>

        {/* Right: Chevron */}
        <div className="section-toggle">
          <svg
            className="toggle-chevron"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M7 8L10 11L13 8"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>

      {/* Section Content */}
      {isExpanded && (
        <div
          className="section-content"
          id={`section-content-${id}`}
          role="region"
          aria-labelledby={`section-header-${id}`}
        >
          {children}
        </div>
      )}
    </div>
  );
}
