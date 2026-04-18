import React from 'react';
import { Link } from 'react-router-dom';
import { AdSenseBanner } from '../components/AdSense';
import '../components/AdSense/AdSense.css';

function AboutPage() {
  return (
    <>
      <div className="about-hero">
        <h1>About <em>Rapid Resume</em></h1>
        <p style={{ fontSize: 16, color: 'rgba(255,255,255,.6)', maxWidth: 560, margin: '0 auto' }}>
          We built a simple, privacy-first resume builder because we believe everyone deserves a clean, professional resume — without paywalls, signups, or complicated tools.
        </p>
      </div>

      <div className="page-sm" style={{ paddingTop: 48, paddingBottom: 60 }}>
        <div className="card mb-20">
          <h3 style={{ fontSize: 22, marginBottom: 12 }}>Our Mission</h3>
          <p className="text-secondary" style={{ lineHeight: 1.75, marginBottom: 14 }}>
            Rapid Resume exists to democratize access to professional resume design. Whether you're a fresh graduate, a career changer, or an experienced professional, you should be able to create a polished, ATS-friendly resume in minutes — not hours.
          </p>
          <p className="text-secondary" style={{ lineHeight: 1.75 }}>
            We believe in simplicity: no account required, no credit card needed, no data leaving your browser. Just pick a template, fill in your details, and download.
          </p>
        </div>

        <div className="section-label" style={{ marginBottom: 16 }}>What we value</div>
        <div className="grid-3" style={{ marginBottom: 40 }}>
          <div className="value-card">
            <div className="value-icon">🔒</div>
            <div className="value-title">Privacy First</div>
            <div className="value-desc">Your resume data never leaves your browser. We don't store, sell, or share your information.</div>
          </div>
          <div className="value-card">
            <div className="value-icon">⚡</div>
            <div className="value-title">Speed & Simplicity</div>
            <div className="value-desc">No long forms, no distractions. Get from template to download in under 5 minutes.</div>
          </div>
          <div className="value-card">
            <div className="value-icon">🎯</div>
            <div className="value-title">Quality Design</div>
            <div className="value-desc">Every template is ATS-optimized and recruiter-approved to help you land interviews.</div>
          </div>
          <div className="value-card">
            <div className="value-icon">🌍</div>
            <div className="value-title">Accessibility</div>
            <div className="value-desc">Works on any device, anywhere. No software to install, no signup barriers.</div>
          </div>
          <div className="value-card">
            <div className="value-icon">💡</div>
            <div className="value-title">Continuous Improvement</div>
            <div className="value-desc">We listen to feedback and ship updates regularly. Have an idea? Let us know.</div>
          </div>
          <div className="value-card">
            <div className="value-icon">🆓</div>
            <div className="value-title">Forever Free</div>
            <div className="value-desc">Core resume building is and will remain free. No hidden paywalls or subscriptions.</div>
          </div>
        </div>

        {/* AdSense Banner */}
        <AdSenseBanner slot="4567890123" />

        <div className="card mb-20">
          <h3 style={{ fontSize: 22, marginBottom: 12 }}>How it works</h3>
          <ul style={{ color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.8, marginLeft: 20 }}>
            <li style={{ marginBottom: 8 }}>Choose from 5 professional resume templates</li>
            <li style={{ marginBottom: 8 }}>Fill in your experience, education, skills, and contact info</li>
            <li style={{ marginBottom: 8 }}>Preview your resume in real-time as you edit</li>
            <li style={{ marginBottom: 8 }}>Download as a polished PDF — no watermarks</li>
            <li>Apply to jobs with confidence</li>
          </ul>
        </div>

        <div className="card mb-20">
          <h3 style={{ fontSize: 22, marginBottom: 12 }}>Our Team</h3>
          <div className="grid-3">
            <div className="team-card">
              <div className="team-avatar" style={{ background: '#2D6A4F' }}>A</div>
              <div className="team-name">Arun V.</div>
              <div className="team-role">Founder & Developer</div>
            </div>
            <div className="team-card">
              <div className="team-avatar" style={{ background: '#3B7DD8' }}>R</div>
              <div className="team-name">Rapid Resume</div>
              <div className="team-role">Product & Design</div>
            </div>
            <div className="team-card">
              <div className="team-avatar" style={{ background: '#E9A825' }}>C</div>
              <div className="team-name">Community</div>
              <div className="team-role">Contributors & Users</div>
            </div>
          </div>
        </div>

        <div className="card">
          <h3 style={{ fontSize: 22, marginBottom: 12 }}>Get in touch</h3>
          <p className="text-secondary" style={{ lineHeight: 1.75, marginBottom: 12 }}>
            Have feedback, suggestions, or bug reports? We'd love to hear from you.
          </p>
          <p className="text-secondary" style={{ lineHeight: 1.75, marginBottom: 12 }}>
            <strong>Email:</strong> arunvaidyanadhan@gmail.com
          </p>
          <p className="text-secondary" style={{ lineHeight: 1.75 }}>
            We actively welcome contributions — whether it's new templates, design improvements, or bug fixes.
          </p>
        </div>

        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <Link to="/templates" className="btn-primary btn-lg">Build Your Resume →</Link>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
