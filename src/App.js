import React, { useState } from 'react'; // <-- You missed importing useState
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import FormPage from './pages/FormPage';
import TemplateSelection from './pages/TemplateSelection.jsx';
import { ResumeProvider } from './context/resumecontext';

function App() {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  return (
    <ResumeProvider>
      <Router>
        <nav className="navbar navbar-expand-lg navbar-primary bg-light">
          <div className="container-fluid d-flex">
            <Link className="navbar-brand" to="/">Rapid Resume.in</Link>
            <div className="collapse navbar-collapse">
              <div className="navbar-nav col-12">
                <div className="nav-item fw-bold fs-5">
                  <Link className="nav-link" to="/">Home</Link>
                </div>
                <div className="nav-item fw-bold fs-5">
                  <Link className="nav-link" to="/form">Resume Page</Link>
                </div>
                <div className="nav-item fw-bold fs-5">
                  <Link className="nav-link" to="/about">About</Link>
                </div>
                <div className="nav-item fw-bold fs-5">
                  <Link className="nav-link" to="/contact">Contact</Link>
                </div>
                <div className="nav-item fw-bold fs-5">
                  <Link className="nav-link" to="/template">Template Selection</Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/template" element={
            <TemplateSelection
              selectedTemplate={selectedTemplate}
              setSelectedTemplate={setSelectedTemplate}
            />
          } />
          <Route path="/form" element={<FormPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </ResumeProvider>
  );
}

export default App;
