import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import FormPage from './pages/FormPage';
import TemplateSelection from './pages/TemplateSelection.jsx';
import { ResumeProvider } from './context/resumecontext';
import FooterComponent from './components/FooterComponent';
import './SlidePanel.css'; // <-- add this

function App() {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [showAboutPanel, setShowAboutPanel] = useState(false);
  return (
    <ResumeProvider>
      <Router>
        <div className="d-flex flex-column min-vh-100">
<nav className="navbar custom-navbar shadow-sm px-4 py-3">
  <div className="container-fluid d-flex justify-content-between align-items-center">
    <Link className="navbar-brand brand-text" to="/">RapidResume.in</Link>
    <div className="d-flex gap-2">
     
      <button className="btn btn-accent-outline fw-semibold" onClick={() => setShowAboutPanel(true)}>
        About
      </button>
    </div>
  </div>
</nav>




          <div className="flex-grow-1">
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
    Have questions or feedback? We’d love to hear from you! Reach out anytime at <a href="mailto:arunvaidyanadhan@gmail.com" style={{color: '#007bff', textDecoration: 'underline'}}>arunvaidyanadhan@gmail.com</a>.
  </p>
</div>

          </div>
        </div>
      </Router>
    </ResumeProvider>
  );
}

export default App;
