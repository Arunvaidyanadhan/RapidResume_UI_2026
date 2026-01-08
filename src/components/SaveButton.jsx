import React from 'react';
import LoadingSpinner from './LoadingSpinner';
import './SaveButton.css';

const SaveButton = ({
  onClick,
  isLoading = false,
  disabled = false,
  children = 'Save & Continue',
  variant = 'primary',
  fullWidth = false,
  className = '',
}) => {
  const isDisabled = disabled || isLoading;

  return (
    <button
      className={`save-button save-button-${variant} ${fullWidth ? 'save-button-full' : ''} ${className}`}
      onClick={onClick}
      disabled={isDisabled}
      aria-busy={isLoading}
    >
      {isLoading ? (
        <>
          <LoadingSpinner size="small" text="" />
          <span>Saving...</span>
        </>
      ) : (
        <>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13.3333 4L6 11.3333L2.66667 8"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>{children}</span>
        </>
      )}
    </button>
  );
};

export default SaveButton;
