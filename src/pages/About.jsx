// About.jsx
import React from 'react';
export default function About() {
  return (
    <div className="container" style={{ maxWidth: 980, padding: '2.5rem 1rem' }}>
      <div className="mb-4">
        <h2 style={{ marginBottom: 8 }}>About Rapid Resume</h2>
        <p className="text-muted" style={{ marginBottom: 0 }}>
          Rapid Resume helps you create a clean, professional resume quickly — without signup, complicated editors, or distracting templates.
        </p>
      </div>

      <div className="row g-3">
        <div className="col-12 col-md-6">
          <div className="card shadow-sm" style={{ borderRadius: 16 }}>
            <div className="card-body" style={{ padding: '1.5rem' }}>
              <h5 style={{ marginBottom: 10 }}>What this resume builder does</h5>
              <p className="text-muted" style={{ marginBottom: 0 }}>
                You pick a template, fill in your details section-by-section, preview your resume instantly, and download a ready-to-share PDF.
              </p>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="card shadow-sm" style={{ borderRadius: 16 }}>
            <div className="card-body" style={{ padding: '1.5rem' }}>
              <h5 style={{ marginBottom: 10 }}>Key features</h5>
              <ul className="text-muted" style={{ margin: 0, paddingLeft: '1.25rem' }}>
                <li>Modern templates with clean typography</li>
                <li>Live preview while you build</li>
                <li>Auto-save to prevent losing progress</li>
                <li>Optional sections (great for freshers and students)</li>
                <li>One-click PDF download</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-12">
          <div className="card shadow-sm" style={{ borderRadius: 16 }}>
            <div className="card-body" style={{ padding: '1.5rem' }}>
              <h5 style={{ marginBottom: 10 }}>Why it’s different</h5>
              <div className="row g-3">
                <div className="col-12 col-md-6">
                  <div className="text-muted">
                    <strong style={{ color: 'inherit' }}>Focused flow:</strong> Only what you need — template → form → download.
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="text-muted">
                    <strong style={{ color: 'inherit' }}>No dead ends:</strong> Defensive handling for empty sections (like Experience) so your resume still looks complete.
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="text-muted">
                    <strong style={{ color: 'inherit' }}>Predictable output:</strong> Templates are designed to print cleanly and consistently.
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="text-muted">
                    <strong style={{ color: 'inherit' }}>Fast editing:</strong> Your inputs are saved as you type, so you can safely refresh or come back later.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12">
          <div className="card shadow-sm" style={{ borderRadius: 16 }}>
            <div className="card-body" style={{ padding: '1.5rem' }}>
              <h5 style={{ marginBottom: 10 }}>How to use it (step-by-step)</h5>
              <ol className="text-muted" style={{ margin: 0, paddingLeft: '1.25rem' }}>
                <li>Select a resume template.</li>
                <li>Fill your details in each section (add Education and Skills at minimum).</li>
                <li>Use Preview anytime to check layout and spacing.</li>
                <li>Click Finish &amp; Download to generate your PDF.</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

