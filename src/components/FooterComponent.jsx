import React from 'react';
import './Footer.css';

function FooterComponent() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <span className="footer-brand">Rapid Resume</span>
        <span className="footer-divider">•</span>
        <span className="footer-tagline">
          Tell your story well
        </span>
        <span className="footer-divider">•</span>
        <span className="footer-copy">
          © 2026
        </span>
      </div>
    </footer>
  );
}

export default FooterComponent;
