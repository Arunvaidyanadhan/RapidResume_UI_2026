import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function FooterComponent() {
  return (
    <footer className="footer mt-auto">
      <div className="container text-center">
        <p className="mb-2">&copy; 2026 Rapid Resume</p>
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <Link to="/template" className="footer-link">View templates</Link>
          <Link to="/contact" className="footer-link">Contact</Link>
          <a className="footer-link" href="mailto:arunvaidyanadhan@gmail.com">Feedback</a>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
