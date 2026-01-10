import React, { Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ResumeProvider } from './context/resumecontext';
import FooterComponent from './components/FooterComponent';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';
import './SlidePanel.css';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const HeadingsSelection = lazy(() => import('./pages/HeadingsSelection'));
const FormPage = lazy(() => import('./pages/FormPage'));
const TemplateSelection = lazy(() => import('./pages/TemplateSelection.jsx'));
const ThankYou = lazy(() => import('./pages/ThankYou'));

function App() {
  const [showAboutPanel, setShowAboutPanel] = useState(false);

  return (
    <ResumeProvider>
      <Router>
        <div className="d-flex flex-column min-vh-100">
          <nav className="navbar custom-navbar shadow-sm px-4 py-3">
            <div className="container-fluid d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-baseline gap-3">
                <Link className="navbar-brand brand-text" to="/">Rapid Resume</Link>
                <span className="text-muted" style={{ fontSize: 14, fontWeight: 600 }}>
                  Tell your story well
                </span>
              </div>
              <div className="d-flex gap-3 align-items-center">
                <button
                  type="button"
                  className="btn btn-accent-outline fw-semibold"
                  onClick={() => setShowAboutPanel(true)}
                >
                  About
                </button>
              </div>
            </div>
          </nav>

          <div className="flex-grow-1">
            <ErrorBoundary>
              <Suspense fallback={
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
                  <LoadingSpinner size="large" text="Loading..." />
                </div>
              }>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/template" element={<TemplateSelection />} />
                  <Route path="/headings" element={<HeadingsSelection />} />
                  <Route path="/form" element={<FormPage />} />
                  <Route path="/thank-you" element={<ThankYou />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/about" element={<About />} />
                </Routes>
              </Suspense>
            </ErrorBoundary>
          </div>

          <FooterComponent />

          <div className={`slide-panel ${showAboutPanel ? 'open' : ''}`}>
            <div className="slide-header">
              <h5>About Rapid Resume</h5>
              <button
                type="button"
                onClick={() => setShowAboutPanel(false)}
                className="close-btn"
                aria-label="Close"
              >
                &times;
              </button>
            </div>

            <div className="slide-content">
              <p>
                Rapid Resume helps you create a clean, professional resume quickly — without signup, complicated editors, or distracting templates.
              </p>
              <p>
                Your progress is saved securely in your browser, so you can refresh the page or return later without losing your work.
              </p>
              <p>
                We actively welcome feedback and community contributions. If you have suggestions, identify limitations, or would like to contribute new resume templates or improvements, feel free to reach out at arunvaidyanadhan@gmail.com
.
              </p>
              <p>
                Thoughtful feedback helps us improve Rapid Resume for everyone.
              </p>
              <p style={{ marginBottom: 0 }}>
                <Link to="/about" onClick={() => setShowAboutPanel(false)}>
                  Read the full About page
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Router>
    </ResumeProvider>
  );
}

export default App;
