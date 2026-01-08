import React, { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';
import './HomePage.css';

function HomePage() {
  const features = [
    {
      icon: '🔓',
      title: 'No Signup Required',
      description: 'Start building your resume instantly without any registration.',
    },
    {
      icon: '🔐',
      title: 'Privacy First',
      description: 'Your data stays in your browser only. No servers involved.',
    },
    {
      icon: '💸',
      title: '100% Free',
      description: 'No subscriptions, no payments. Just free resume building.',
    },
    {
      icon: '📄',
      title: '3 Simple Steps',
      description: 'Choose a template, fill in details, and download your resume.',
    },
  ];

  return (
    <div className="hero-section">
      <div className="overlay">
        <h1>Welcome to Rapid Resume</h1>
        <p className="lead">Create a professional resume in just minutes. Stand out with style.</p>
        <div className="cta-buttons">
          <Link to="/template" className="btn btn-accent">Create Resume</Link>
          <Link to="/template" className="btn btn-accent-secondary">View Templates</Link>
        </div>

        {/* Features inside Hero */}
        <div className="features-container">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
