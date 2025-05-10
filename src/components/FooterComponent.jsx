import React from 'react';
import './Footer.css';

function FooterComponent() {
  return (
    <footer class="footer sticky-bottom">
        <div class="footer-container">
          <p>&copy; 2025 RapidResume. All rights reserved.</p>
          <div class="social-icons">
            <a href="#" class="icon"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="icon"><i class="fab fa-twitter"></i></a>
            <a href="#" class="icon"><i class="fab fa-instagram"></i></a>
            <a href="#" class="icon"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </footer>
  );
}

export default FooterComponent;
