import React, { memo, useState } from 'react';
import LoadingSpinner from './LoadingSpinner';
import { getApiBaseUrl } from '../utils/api';
import './TemplateCard.css';

const TemplateCard = memo(({ templateId, templateName, description, preview, onSelect, isSelected = false }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Construct full preview image URL
  const apiBaseUrl = getApiBaseUrl();
  const hasPreview = typeof preview === 'string' && preview.trim().length > 0;
  const previewUrl = hasPreview
    ? (preview.startsWith('http') ? preview : `${apiBaseUrl}${preview}`)
    : null;

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  return (
    <div
      className={`template-card-wrapper ${isSelected ? 'template-selected' : ''}`}
      data-template-id={templateId}
      onClick={onSelect}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect();
        }
      }}
      role="button"
      tabIndex={0}
      aria-pressed={isSelected}
    >
      <div className="thumbnail-card">
        <div className="thumbnail-preview">
          {!imageLoaded && (
            <div className="template-skeleton">
              <LoadingSpinner size="small" text="" />
            </div>
          )}
          {!hasPreview || imageError ? (
            <div className="template-placeholder">
              <div className="template-placeholder-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 9H9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="template-placeholder-text">{templateName}</p>
              <p className="template-placeholder-subtext">Preview coming soon</p>
            </div>
          ) : (
            <img
              src={previewUrl}
              alt={templateName}
              className="template-preview"
              onLoad={handleImageLoad}
              onError={handleImageError}
            />
          )}
        </div>
        <div className="template-overlay">
          <button className="template-select-btn">
            {isSelected ? 'Selected' : 'Select Template'}
          </button>
        </div>
        <div className="template-info">
          <p className="template-title">{templateName}</p>
          {description && (
            <p className="template-description">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
});

TemplateCard.displayName = 'TemplateCard';

export default TemplateCard;
