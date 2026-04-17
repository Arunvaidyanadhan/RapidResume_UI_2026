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
    navigate('/templates', { replace: true });
  };

  return (
    <>
      <div className="thankyou-wrap">
        <div className="thankyou-card">
          <div className="thankyou-icon">✅</div>
          <h2 style={{ fontSize: 28, marginBottom: 12 }}>Success — your resume is ready</h2>
          <p className="text-secondary" style={{ fontSize: 15, lineHeight: 1.65, marginBottom: 24 }}>
            Your PDF download should have started. If it didn't, check your browser's downloads.
          </p>

          {fileName ? (
            <div style={{ 
              background: 'var(--accent-light)', 
              border: '1px solid var(--accent)', 
              borderRadius: 'var(--radius-sm)', 
              padding: 12, 
              marginBottom: 24, 
              fontSize: 13, 
              color: 'var(--accent)' 
            }}>
              Downloaded: <strong>{fileName}</strong>
            </div>
          ) : (
            <div style={{ 
              background: 'var(--accent-light)', 
              border: '1px solid var(--accent)', 
              borderRadius: 'var(--radius-sm)', 
              padding: 12, 
              marginBottom: 24, 
              fontSize: 13, 
              color: 'var(--accent)' 
            }}>
              Download complete.
            </div>
          )}

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center' }}>
            <button className="btn-primary btn-lg" onClick={handleCreateAnother}>
              Create Another Resume
            </button>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
              <button className="btn-outline" onClick={() => navigate('/templates', { replace: true })}>
                View Templates
              </button>
              <a className="btn-outline" href="mailto:arunvaidyanadhan@gmail.com">
                Feedback / Contact
              </a>
            </div>
          </div>

          <hr className="divider" style={{ margin: '24px 0' }} />

          <p className="text-muted text-sm" style={{ margin: 0 }}>
            Tip: Your progress is saved locally in your browser, so you can return anytime to make edits.
          </p>
        </div>
      </div>
    </>
  );
}
