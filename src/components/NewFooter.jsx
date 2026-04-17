import React from 'react';
import { Link } from 'react-router-dom';

const NewFooter = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="footer-logo">Rapid<span>.</span>Resume</div>
          <p style={{ fontSize: '13px', lineHeight: '1.65', maxWidth: '280px', marginTop: '8px' }}>
            Build a professional resume in minutes. Free, no signup, no watermarks. Land the job you deserve.
          </p>
        </div>
        <div>
          <div style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,.3)', marginBottom: '14px' }}>
            Product
          </div>
          <Link className="footer-link" to="/builder">Templates</Link>
          <Link className="footer-link" to="/builder">Resume Builder</Link>
          <Link className="footer-link" to="/blog">Resume Tips</Link>
          <Link className="footer-link" to="/about">About Us</Link>
        </div>
        <div>
          <div style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,.3)', marginBottom: '14px' }}>
            Templates
          </div>
          <Link className="footer-link" to="/builder">Classic</Link>
          <Link className="footer-link" to="/builder">Modern</Link>
          <Link className="footer-link" to="/builder">Minimal</Link>
          <Link className="footer-link" to="/builder">Executive</Link>
          <Link className="footer-link" to="/builder">Creative</Link>
        </div>
        <div>
          <div style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,.3)', marginBottom: '14px' }}>
            Legal
          </div>
          <Link className="footer-link" to="/legal">Privacy Policy</Link>
          <Link className="footer-link" to="/legal">Terms of Use</Link>
          <Link className="footer-link" to="/legal">Copyright Notice</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <div>© 2026 Rapid Resume. All rights reserved.</div>
        <div style={{ display: 'flex', gap: '20px', fontSize: '12px' }}>
          <Link className="footer-link" style={{ margin: 0 }} to="/legal">Privacy</Link>
          <Link className="footer-link" style={{ margin: 0 }} to="/legal">Terms</Link>
          <Link className="footer-link" style={{ margin: 0 }} to="/legal">Copyright</Link>
        </div>
      </div>
    </footer>
  );
};

export default NewFooter;
