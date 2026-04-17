import React from 'react';
import { Link } from 'react-router-dom';

const Legal = () => {
  return (
    <>
      <div style={{ 
        background: 'linear-gradient(135deg,#1A1916,#1F2E23)', 
        padding: 60, 
        textAlign: 'center' 
      }}>
        <h1 style={{ fontSize: 40, color: 'white', marginBottom: 10 }}>Legal & Copyright</h1>
        <p style={{ color: 'rgba(255,255,255,.5)', fontSize: 15 }}>
          Last updated: April 14, 2026
        </p>
      </div>

      <div className="page-sm" style={{ paddingTop: 48, paddingBottom: 60 }}>
        <div className="card mb-16">
          <h3 style={{ fontSize: 22, marginBottom: 16 }}>© Copyright Notice</h3>
          <p className="text-secondary" style={{ lineHeight: 1.75, marginBottom: 14 }}>
            All content, templates, code, design, and branding on Rapid Resume — including but not limited to the website design, resume templates, blog articles, and UI components — are the exclusive intellectual property of Rapid Resume and its creators.
          </p>
          <p className="text-secondary" style={{ lineHeight: 1.75, marginBottom: 14 }}>
            © 2026 Rapid Resume. All Rights Reserved.
          </p>
          <p className="text-secondary" style={{ lineHeight: 1.75 }}>
            You may use the <strong>resume output you generate</strong> for any personal or professional purpose, including job applications. However, the underlying template code, design files, and platform itself may not be copied, redistributed, or resold without written permission.
          </p>
        </div>

        <div className="card mb-16">
          <h3 style={{ fontSize: 22, marginBottom: 16 }}>🔒 Privacy Policy</h3>
          <p className="text-secondary" style={{ lineHeight: 1.75, marginBottom: 12 }}>
            <strong>We do not collect your personal data.</strong> All information you enter into the resume builder stays in your browser's memory and is never transmitted to our servers.
          </p>
          <ul style={{ color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.8, marginLeft: 20 }}>
            <li>No account creation required</li>
            <li>No email address collected</li>
            <li>No resume data stored on our servers</li>
            <li>No third-party tracking beyond anonymous analytics</li>
            <li>No data sold to advertisers, ever</li>
          </ul>
          <p className="text-secondary" style={{ lineHeight: 1.75, marginTop: 12 }}>
            We use privacy-respecting analytics (no cookies, no fingerprinting) to understand aggregate usage and improve the product.
          </p>
        </div>

        <div className="card mb-16">
          <h3 style={{ fontSize: 22, marginBottom: 16 }}>📋 Terms of Use</h3>
          <p className="text-secondary" style={{ lineHeight: 1.75, marginBottom: 12 }}>
            By using Rapid Resume, you agree to the following:
          </p>
          <ul style={{ color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.8, marginLeft: 20 }}>
            <li>The service is provided free of charge for personal, non-commercial use</li>
            <li>You will not attempt to scrape, copy, or replicate the platform or templates</li>
            <li>You are solely responsible for the accuracy and truthfulness of your resume content</li>
            <li>We make no guarantees regarding job placement or interview success</li>
            <li>The service may change or be discontinued at any time without notice</li>
          </ul>
        </div>

        <div className="card">
          <h3 style={{ fontSize: 22, marginBottom: 16 }}>📬 Contact Us</h3>
          <p className="text-secondary" style={{ lineHeight: 1.75 }}>
            For legal inquiries, copyright concerns, or partnership requests, reach us at: <strong>arunvaidyanadhan@gmail,com</strong>
          </p>
        </div>

        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <Link to="/" className="btn-secondary">← Back to Home</Link>
        </div>
      </div>
    </>
  );
};

export default Legal;
