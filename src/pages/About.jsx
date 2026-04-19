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
          Rapid Resume was built out of frustration. Like many job seekers, I've been in situations where I urgently needed to create or update a resume. I would go to popular resume builder websites, pick a good template, and spend nearly 1–2 hours carefully filling in all my details.
        </p>
        <p style={{ fontSize: 16, color: 'rgba(255,255,255,.6)', maxWidth: 560, margin: '20px auto 0' }}>
          And then — at the final step — I'd be asked to pay. Despite being labeled "free," most platforms lock downloads behind a paywall. At that point, I had two choices: pay unexpectedly or abandon the resume I had just spent hours creating.
        </p>
        <p style={{ fontSize: 16, color: 'rgba(255,255,255,.6)', maxWidth: 560, margin: '20px auto 0' }}>
          That didn't feel right. So I decided to build something better.
        </p>
      </div>

      <div className="page-sm" style={{ paddingTop: 48, paddingBottom: 60 }}>
        <div className="card mb-20">
          <h3 style={{ fontSize: 22, marginBottom: 12 }}>Our Mission</h3>
          <p className="text-secondary" style={{ lineHeight: 1.75, marginBottom: 14 }}>
            Rapid Resume exists to make professional resume creation <strong>truly free, fast, and accessible</strong>. Whether you're a fresher, a career switcher, or an experienced professional, you should be able to create a clean, ATS-friendly resume in minutes — without surprises, barriers, or hidden costs.
          </p>
        </div>

        <div className="card mb-20">
          <h3 style={{ fontSize: 22, marginBottom: 12 }}>What Makes Rapid Resume Different</h3>
          <p className="text-secondary" style={{ lineHeight: 1.75, marginBottom: 14 }}>
            We believe resume building should be simple and respectful of users.
          </p>
          <ul style={{ color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.8, marginLeft: 20 }}>
            <li style={{ marginBottom: 8 }}>
              <strong>No signups</strong> - Your data stays in your browser
            </li>
            <li style={{ marginBottom: 8 }}>
              <strong>No paywalls after effort</strong> - What you build, you can download
            </li>
            <li style={{ marginBottom: 8 }}>
              <strong>No storing personal data unnecessarily</strong> - We respect your privacy
            </li>
          </ul>
          <p className="text-secondary" style={{ lineHeight: 1.75, marginTop: 12 }}>
            Most resume tools ask you to create an account. But realistically, resume builders are not daily-use products. People forget credentials, and forcing login only adds friction. We chose a different path.
          </p>
          <div style={{ background: 'var(--accent-light)', padding: 16, borderRadius: 8, marginTop: 16 }}>
            <p style={{ margin: 0, fontSize: 16, fontWeight: 600, color: 'var(--accent)' }}>
              👉 Your data stays in your browser<br/>
              👉 You stay in control
            </p>
          </div>
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
          <h3 style={{ fontSize: 22, marginBottom: 12 }}>How It Works</h3>
          <ol style={{ color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.8, marginLeft: 20 }}>
            <li style={{ marginBottom: 8 }}>
              <strong>Choose from professionally designed resume templates</strong>
            </li>
            <li style={{ marginBottom: 8 }}>
              <strong>Fill in your details</strong> (experience, education, skills, etc.)
            </li>
            <li style={{ marginBottom: 8 }}>
              <strong>See your resume update in real-time</strong> as you edit
            </li>
            <li style={{ marginBottom: 8 }}>
              <strong>Download instantly as a clean PDF</strong> — no watermark
            </li>
            <li style={{ marginBottom: 8 }}>
              <strong>Apply with confidence</strong>
            </li>
          </ol>
        </div>

        <div className="card mb-20">
          <h3 style={{ fontSize: 22, marginBottom: 12 }}>Our Team</h3>
          <div className="team-section">
            <div className="team-member">
              <div className="team-avatar" style={{ background: '#2D6A4F' }}>A</div>
              <div className="team-info">
                <div className="team-name">Arun Vaidyanathan</div>
                <div className="team-role">Founder & Developer</div>
              </div>
            </div>
            <div className="team-member">
              <div className="team-avatar" style={{ background: '#3B7DD8' }}>R</div>
              <div className="team-info">
                <div className="team-name">Rapid Resume</div>
                <div className="team-role">Product & Design</div>
              </div>
            </div>
            <div className="team-member">
              <div className="team-avatar" style={{ background: '#E9A825' }}>C</div>
              <div className="team-info">
                <div className="team-name">Community</div>
                <div className="team-role">Contributors & Users</div>
              </div>
            </div>
          </div>
        </div>

        <div className="card mb-20">
          <h3 style={{ fontSize: 22, marginBottom: 12 }}>Get in Touch</h3>
          <p className="text-secondary" style={{ lineHeight: 1.75, marginBottom: 12 }}>
            Have feedback, suggestions, or found a bug? We'd love to hear from you.
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
