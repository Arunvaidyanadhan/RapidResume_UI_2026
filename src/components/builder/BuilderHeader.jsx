/**
 * ============================================
 * BuilderHeader.jsx
 * ============================================
 * Top navigation for builder page (replaces sidebar)
 * Shows: Logo, progress, auto-save status, CTAs
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BuilderHeader.css';

export default function BuilderHeader({
  templateName = 'Classic',
  autoSaveStatus = 'saved', // 'saved' | 'saving' | 'error'
  onPreview = () => {},
}) {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/templates');
  };

  const handlePreview = () => {
    onPreview?.();
    navigate('/preview');
  };

  return (
    <header className="builder-header glass-header">
      <div className="builder-header-content">
        {/* Left: Logo + Progress */}
        <div className="header-left">
          <button
            className="header-back-button"
            onClick={handleGoBack}
            aria-label="Back to templates"
            title="Back to templates"
          >
            <span className="back-icon">←</span>
            <span className="back-text">Rapid Resume</span>
          </button>

          <div className="header-divider"></div>

          <div className="header-progress">
            <span className="progress-label">Template:</span>
            <span className="progress-value">{templateName}</span>
          </div>
        </div>

        {/* Right: Auto-save + Actions */}
        <div className="header-right">
          {/* Auto-save indicator */}
          <div className={`auto-save-indicator ${autoSaveStatus}`}>
            {autoSaveStatus === 'saved' && (
              <>
                <span className="save-icon">✓</span>
                <span className="save-text">Saved</span>
              </>
            )}
            {autoSaveStatus === 'saving' && (
              <>
                <span className="save-icon spinning">⟳</span>
                <span className="save-text">Saving...</span>
              </>
            )}
            {autoSaveStatus === 'error' && (
              <>
                <span className="save-icon error">!</span>
                <span className="save-text">Error saving</span>
              </>
            )}
          </div>

          {/* Print button */}
          <button
            className="header-action-button"
            onClick={() => window.print()}
            aria-label="Print preview"
            title="Print preview"
          >
            <span className="button-icon">🖨</span>
            <span className="button-text">Print</span>
          </button>

          {/* Preview & Download CTA */}
          <button
            className="header-action-button primary"
            onClick={handlePreview}
            aria-label="Preview and download resume"
            title="Preview and download resume"
          >
            <span className="button-icon">📥</span>
            <span className="button-text">Preview & Download</span>
          </button>
        </div>
      </div>
    </header>
  );
}
