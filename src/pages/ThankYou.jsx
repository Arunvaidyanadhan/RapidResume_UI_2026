import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useResume } from '../context/resumecontext.jsx';

const STORAGE_KEY = 'rapid_resume_draft';
const FORM_PROGRESS_KEY = 'rapid_resume_form_progress';

export default function ThankYou() {
  const navigate = useNavigate();
  const location = useLocation();
  const { resetResume } = useResume();

  const fileName = location?.state?.fileName;

  const handleCreateAnother = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem(FORM_PROGRESS_KEY);
    } catch {
      // ignore
    }

    resetResume();
    navigate('/template', { replace: true });
  };

  return (
    <div className="container" style={{ maxWidth: 840, padding: '3rem 1rem' }}>
      <div className="card shadow-sm" style={{ borderRadius: 16 }}>
        <div className="card-body" style={{ padding: '2rem' }}>
          <div
            style={{
              height: 6,
              borderRadius: 999,
              background: 'linear-gradient(90deg, rgba(79,70,229,1), rgba(99,102,241,1))',
              marginBottom: 18,
            }}
          />
          <h2 style={{ marginBottom: 8 }}>Success — your resume is ready</h2>
          <p className="text-muted" style={{ marginBottom: 20 }}>
            Your PDF download should have started. If it didn’t, check your browser’s downloads.
          </p>

          {fileName ? (
            <div className="alert alert-success" role="alert" style={{ marginBottom: 20 }}>
              Downloaded: <strong>{fileName}</strong>
            </div>
          ) : (
            <div className="alert alert-success" role="alert" style={{ marginBottom: 20 }}>
              Download complete.
            </div>
          )}

          <div className="d-flex flex-wrap gap-2" style={{ justifyContent: 'flex-end' }}>
            <button type="button" className="btn btn-outline-secondary" onClick={() => navigate('/template', { replace: true })}>
              View Templates
            </button>
            <a className="btn btn-outline-secondary" href="mailto:arunvaidyanadhan@gmail.com">
              Feedback / Contact
            </a>
            <button type="button" className="btn btn-primary" onClick={handleCreateAnother}>
              Create Another Resume
            </button>
          </div>

          <hr style={{ margin: '1.5rem 0' }} />

          <p className="text-muted" style={{ margin: 0 }}>
            Tip: You can return anytime — your progress is saved locally in your browser.
          </p>
        </div>
      </div>
    </div>
  );
}
