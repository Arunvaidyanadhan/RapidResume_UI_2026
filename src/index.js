import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import './index.css';

// Light theme only
try {
  localStorage.removeItem('theme');
} catch {
  // ignore
}
document.documentElement.setAttribute('data-theme', 'light');

// Performance optimization: Preload critical resources
if ('requestIdleCallback' in window) {
  requestIdleCallback(() => {
    // Preload template selection route
    import('./pages/TemplateSelection');
  });
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
