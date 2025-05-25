import React from 'react';
import { Link } from 'react-router-dom';
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
    <div className="hero-section text-white">
      <div className="overlay container">
        <h1 className="display-4 fw-bold text-center">Welcome to RapidResume.in</h1>
        <p className="lead mb-4 text-center">Create a professional resume in just minutes. No login. No cost.</p>
        <div className="text-center mb-5">
          <Link to="/template" className="btn btn-accent btn-lg">Start Now</Link>
        </div>

        {/* Features inside Hero */}
        <div className="features-container d-flex flex-wrap justify-content-center gap-4">
          {features.map((feature, index) => (
            <div className="feature-card bg-white text-dark" key={index}>
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
