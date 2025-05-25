import React from 'react';
import './Footer.css';

function FooterComponent() {
  return (
    <footer className="footer bg-dark text-white py-4 mt-auto">
      <div className="container text-center">
        <p className="mb-2">&copy; 2025 RapidResume. All rights reserved.</p>
        <div className="d-flex justify-content-center gap-3">
          <a href="#" className="icon" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="icon" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
          <a href="#" className="icon" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
          <a href="#" className="icon" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
