import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import FormPage from './pages/FormPage';


function App() {
  return (
    <Router>
     
      <nav  className="navbar  navbar-expand-lg navbar-primary bg-light">
        <div className="container-fluid d-flex">
          <Link className="navbar-brand  " to="/">Rapid Resume.in</Link>
          <div className="collapse navbar-collapse">
            <div className="navbar-nav  col-4 ">
              <div className="nav-item fw-bold fs-5 "><Link className="nav-link " to="/">Home</Link></div>
              <div className="nav-item fw-bold fs-5"><Link className="nav-link" to="/form">Resume Page</Link></div>
              <div className="nav-item fw-bold fs-5"><Link className="nav-link" to="/about">About</Link></div>
              <div className="nav-item fw-bold fs-5"><Link className="nav-link" to="/contact">Contact</Link></div>
            </div>
          </div>
        </div>
      </nav>
     

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
