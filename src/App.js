import React, { useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ResumeProvider } from './context/resumecontext';
import { ThemeProvider } from './context/ThemeContext';
import FooterComponent from './components/FooterComponent';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';
import ThemeToggle from './components/ThemeToggle';
import './SlidePanel.css';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const FormPage = lazy(() => import('./pages/FormPage'));
const TemplateSelection = lazy(() => import('./pages/TemplateSelection.jsx'));

function App() {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [showAboutPanel, setShowAboutPanel] = useState(false);
  return (
    <ThemeProvider>
      <ResumeProvider>
        <Router>
          <div className="d-flex flex-column min-vh-100">
            <nav className="navbar custom-navbar shadow-sm px-4 py-3">
              <div className="container-fluid d-flex justify-content-between align-items-center">
                <Link className="navbar-brand brand-text" to="/">Rapid Resume</Link>
                <div className="d-flex gap-3 align-items-center">
                  <ThemeToggle />
                  <button className="btn btn-accent-outline fw-semibold" onClick={() => setShowAboutPanel(true)}>
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
                  <Route path="/template" element={
                    <TemplateSelection
                      selectedTemplate={selectedTemplate}
                      setSelectedTemplate={setSelectedTemplate}
                    />
                  } />
                  <Route path="/form" element={<FormPage />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/about" element={<About />} />
                </Routes>
              </Suspense>
            </ErrorBoundary>
          </div>

          <FooterComponent />

          {/* Right Slide About Panel */}
          <div className={`slide-panel ${showAboutPanel ? 'open' : ''}`}>
            <div className="slide-header">
              <h5>About Us</h5>
              <button onClick={() => setShowAboutPanel(false)} className="close-btn">&times;</button>
            </div>
           <div className="slide-content">
  <p>
    Welcome to <strong>RapidResume.in</strong> — your fast and hassle-free resume builder. Create a professional resume effortlessly with no signup, no login, and completely free.
  </p>
  <p>
    We value your privacy — your data stays local and is never stored on our servers.
  </p>
  <p>
    Build your resume in just three simple steps and download it instantly in multiple formats.
  </p>
  <p>
    Have questions or feedback? We'd love to hear from you! Reach out anytime at <a href="mailto:arunvaidyanadhan@gmail.com">arunvaidyanadhan@gmail.com</a>.
  </p>
</div>

          </div>
          </div>
        </Router>
      </ResumeProvider>
    </ThemeProvider>
  );
}

export default App;
