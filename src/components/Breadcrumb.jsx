import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Breadcrumb.css';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const getPageName = (path) => {
    const names = {
      template: 'Templates',
      headings: 'Sections',
      form: 'Build Resume',
      'thank-you': 'Done',
    };
    return names[path] || path.charAt(0).toUpperCase() + path.slice(1);
  };

  return (
    <nav className="breadcrumb-nav" aria-label="breadcrumb">
      <div className="breadcrumb-container">
        <Link to="/" className="breadcrumb-item">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 1L1 7V15H6V10H10V15H15V7L8 1Z" fill="currentColor"/>
          </svg>
          <span>Home</span>
        </Link>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          
          return (
            <React.Fragment key={to}>
              <span className="breadcrumb-separator">/</span>
              {isLast ? (
                <span className="breadcrumb-item active">{getPageName(value)}</span>
              ) : (
                <Link to={to} className="breadcrumb-item">
                  {getPageName(value)}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
};

export default Breadcrumb;
