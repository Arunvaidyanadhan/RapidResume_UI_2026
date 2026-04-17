import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    if (path === '/builder') return ['/builder', '/templates', '/template', '/headings', '/form'].includes(location.pathname);
    return location.pathname === path;
  };

  return (
    <nav className="top-bar">
      <Link className="logo" to="/">
        Rapid<span className="logo-dot">.</span>Resume
      </Link>
      <div className="nav-links">
        <Link 
          className={`nav-link ${isActive('/') ? 'active' : ''}`} 
          to="/"
        >
          Home
        </Link>
        <Link 
          className={`nav-link ${isActive('/builder') ? 'active' : ''}`} 
          to="/builder"
        >
          Builder
        </Link>
        <Link 
          className={`nav-link ${isActive('/blog') ? 'active' : ''}`} 
          to="/blog"
        >
          Blog
        </Link>
        <Link 
          className={`nav-link ${isActive('/about') ? 'active' : ''}`} 
          to="/about"
        >
          About
        </Link>
      </div>
      <Link className="btn-primary" to="/builder">
        Build My Resume →
      </Link>
    </nav>
  );
};

export default Navbar;
