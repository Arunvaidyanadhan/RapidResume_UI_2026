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
          <h2 style={{ marginBottom: 8 }}>Your resume is ready</h2>
          <p className="text-muted" style={{ marginBottom: 20 }}>
            Thanks for using Rapid Resume. Your PDF download should have started automatically.
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
            <button type="button" className="btn btn-outline-secondary" onClick={() => navigate('/', { replace: true })}>
              Go to Home
            </button>
            <button type="button" className="btn btn-primary" onClick={handleCreateAnother}>
              Create Another Resume
            </button>
          </div>

          <hr style={{ margin: '1.5rem 0' }} />

          <p className="text-muted" style={{ margin: 0 }}>
            Tip: If you didn’t get a download prompt, check your browser’s downloads.
          </p>
        </div>
      </div>
    </div>
  );
}
