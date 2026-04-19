import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useResume } from '../context/resumecontext';
import { exportResumePdf } from '../lib/exportResumePdf';
import { TEMPLATE_OPTIONS, validateResume, getResumeCompletion, ensurePreviewReadyResume } from '../lib/resumeSchema';
import { sampleResume } from '../lib/sampleResume';
import SectionCard from '../components/builder/SectionCard';
import FormSection from '../components/builder/FormSection';
import './BuilderStudio.css';

function BuilderStudio() {
  const navigate = useNavigate();
  const {
    resume,
    selectedTemplate,
    setSelectedTemplate,
    updateProfileField,
    updateListItem,
    updateListHighlights,
    addListItem,
    removeListItem
  } = useResume();

  const [openPanels, setOpenPanels] = useState({
    personal: true,
    experience: false,
    education: false,
    skills: false,
    certifications: false,
    languages: false,
    projects: false,
    awards: false,
    hobbies: false,
    volunteer: false,
  });

  const [downloadState, setDownloadState] = useState({ loading: false, error: '' });

  const validation = useMemo(() => validateResume(resume), [resume]);
  const previewResume = useMemo(() => ensurePreviewReadyResume(resume, sampleResume), [resume]);
  const completion = useMemo(() => getResumeCompletion(resume), [resume]);

  const sections = [
    { id: 'personal', label: 'Personal', icon: '👤', required: true },
    { id: 'experience', label: 'Experience', icon: '💼' },
    { id: 'education', label: 'Education', icon: '🎓' },
    { id: 'skills', label: 'Skills', icon: '⭐' },
    { id: 'certifications', label: 'Certifications', icon: '📜' },
    { id: 'languages', label: 'Languages', icon: '🌐' },
    { id: 'projects', label: 'Projects', icon: '🚀' },
    { id: 'awards', label: 'Awards', icon: '🏆' },
    { id: 'hobbies', label: 'Hobbies', icon: '🎨' },
    { id: 'volunteer', label: 'Volunteer', icon: '🤝' },
  ];

  const togglePanel = (id) => {
    setOpenPanels(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleDownload = async () => {
    if (!validation.isValid) {
      setDownloadState({ loading: false, error: 'Please fill in required fields' });
      return;
    }

    try {
      setDownloadState({ loading: true, error: '' });
      const blob = await exportResumePdf(validation.sanitized, selectedTemplate);
      const link = document.createElement('a');
      const url = URL.createObjectURL(blob);
      const fileName = `${[validation.sanitized.profile.firstName, validation.sanitized.profile.lastName].filter(Boolean).join('-').toLowerCase() || 'resume'}-rapidresume.pdf`;
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      setDownloadState({ loading: false, error: '' });
    } catch (error) {
      setDownloadState({ loading: false, error: error?.message || 'Unable to generate the PDF right now.' });
    }
  };

  return (
    <div className="builder-studio">
      {/* LEFT SIDEBAR - Progress & Navigation */}
      <aside className="builder-sidebar">
        <div className="sidebar-header">
          <h3>Build Your Resume</h3>
          <p className="sidebar-subtitle">Step by step guide</p>
        </div>

        <div className="progress-section">
          <div className="progress-label">
            <span>Progress</span>
            <span className="progress-percent">{completion}%</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${completion}%` }}></div>
          </div>
        </div>

        <nav className="sections-nav">
          {sections.map((section, index) => (
            <button
              key={section.id}
              className={`section-button ${openPanels[section.id] ? 'active' : ''}`}
              onClick={() => togglePanel(section.id)}
              aria-expanded={openPanels[section.id]}
            >
              <div className="section-step">
                <div className="step-number">{index + 1}</div>
              </div>
              <div className="section-info">
                <div className="section-name">{section.label}</div>
                <div className="section-status">
                  {openPanels[section.id] ? '✓ Active' : 'Pending'}
                </div>
              </div>
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <p>💾 Auto-saved locally</p>
          <button 
            className="back-link"
            onClick={() => navigate('/templates')}
          >
            ← Back to Templates
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="builder-main">
        <div className="form-container">
          <FormSection
            resume={resume}
            expandedSections={openPanels}
            onToggleSection={togglePanel}
            updateProfileField={updateProfileField}
            updateListItem={updateListItem}
            addListItem={addListItem}
            removeListItem={removeListItem}
          />
        </div>

        {/* BOTTOM ACTION BAR */}
        <div className="builder-actions">
          {downloadState.error && (
            <div className="action-error">{downloadState.error}</div>
          )}
          <div className="action-buttons">
            <button
              className="action-btn secondary"
              onClick={() => navigate('/templates')}
              disabled={downloadState.loading}
            >
              ← Change Template
            </button>
            <button
              className="action-btn primary"
              onClick={handleDownload}
              disabled={downloadState.loading}
            >
              {downloadState.loading ? '⏳ Generating PDF...' : '📥 Download Resume'}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default BuilderStudio;
