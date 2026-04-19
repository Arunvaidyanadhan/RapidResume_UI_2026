import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useResume } from '../context/resumecontext';
import { exportResumePdf } from '../lib/exportResumePdf';
import { ResumeTemplatePreview } from '../lib/resumeTemplateEngine';
import { sampleResume } from '../lib/sampleResume';
import { analyzeResumeQuality } from '../lib/resumeValidation';
import {
  TEMPLATE_OPTIONS,
  ensurePreviewReadyResume,
  getResumeCompletion,
  getSectionStatus,
  normalizeHighlightsForEditing,
  validateResume
} from '../lib/resumeSchema';
import BuilderHeader from '../components/builder/BuilderHeader';
import SectionCard from '../components/builder/SectionCard';
import FormSection from '../components/builder/FormSection';
import './BuilderStudio.css';

const steps = [
  { id: 'essentials', title: 'Essentials', description: 'Get to first value in under 90 seconds with only the required core fields.' },
  { id: 'details', title: 'Expand Details', description: 'Add optional depth to your resume with education, skills, projects, and more.' },
  { id: 'templates', title: 'Choose Template', description: 'Compare five real rendered templates with distinct use cases.' },
  { id: 'preview', title: 'Preview', description: 'See your polished resume with the selected template before downloading.' },
  { id: 'download', title: 'Download PDF', description: 'Export locally with privacy-first, ATS-friendly output.' }
];

function StudioField({ label, value, onChange, error, textarea = false, ...props }) {
  const Tag = textarea ? 'textarea' : 'input';
  return (
    <label className="studio-label">
      <span>{label}</span>
      <Tag value={value} onChange={(event) => onChange(event.target.value)} {...props} />
      {error ? <span className="studio-error">{error}</span> : null}
    </label>
  );
}

function statusLabel(value) {
  if (value === 'needs-improvement') return 'Needs improvement';
  if (value === 'complete') return 'Complete';
  return 'Optional';
}

function BuilderStudio() {
  const {
    resume,
    currentStep,
    setCurrentStep,
    selectedTemplate,
    setSelectedTemplate,
    updateProfileField,
    updateListItem,
    updateListHighlights,
    addListItem,
    removeListItem
  } = useResume();

  const [openPanels, setOpenPanels] = useState({
    experience: true,
    education: false,
    skills: false,
    projects: false,
    certifications: false,
    languages: false
  });
  const [downloadState, setDownloadState] = useState({ loading: false, error: '' });

  const validation = useMemo(() => validateResume(resume), [resume]);
  const previewResume = useMemo(() => ensurePreviewReadyResume(resume, sampleResume), [resume]);
  const completion = useMemo(() => getResumeCompletion(resume), [resume]);
  const sectionStatus = useMemo(() => getSectionStatus(resume), [resume]);
  const quality = useMemo(() => analyzeResumeQuality(resume), [resume]);
  const activeIndex = Math.max(0, steps.findIndex((step) => step.id === currentStep));
  const activeStep = steps[activeIndex] || steps[0];

  const jumpToStep = (stepId) => {
    // Allow preview and details at any time for instant feedback
    // Only download requires validation
    if (stepId === 'download' && !validation.isValid) return;
    setCurrentStep(stepId);
  };

  const nextStep = () => {
    const next = steps[activeIndex + 1];
    if (next) jumpToStep(next.id);
  };

  const previousStep = () => {
    const prev = steps[activeIndex - 1];
    if (prev) setCurrentStep(prev.id);
  };

  const togglePanel = (panel) => {
    setOpenPanels((current) => ({ ...current, [panel]: !current[panel] }));
  };

  const handleDownload = async () => {
    if (!validation.isValid) {
      setDownloadState({ loading: false, error: 'Complete the essentials before downloading the PDF.' });
      setCurrentStep('essentials');
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
      {/* Premium Header */}
      <BuilderHeader
        templateName={selectedTemplate ? TEMPLATE_OPTIONS.find(t => t.id === selectedTemplate)?.name : 'Select Template'}
        autoSaveStatus={downloadState.loading ? 'saving' : downloadState.error ? 'error' : 'saved'}
        onPreview={() => setCurrentStep('preview')}
      />

      {/* Main Content Area */}
      <div className="builder-studio-content">
        {/* Left Column: Form */}
        <div className="builder-form-column">
          <div className="builder-form-wrapper">
            <FormSection
              resume={resume}
              expandedSections={openPanels}
              onToggleSection={togglePanel}
              updateProfileField={updateProfileField}
              updateListItem={updateListItem}
              addListItem={addListItem}
              removeListItem={removeListItem}
            />

            {/* Additional Sections */}
            <SectionCard
              id="summary"
              title="Professional Summary"
              icon="📝"
              required={false}
              isExpanded={openPanels.summary !== false}
              onToggle={() => togglePanel('summary')}
            >
              <div className="form-field">
                <textarea
                  className="form-input form-textarea"
                  value={resume.profile?.summary || ''}
                  onChange={(e) => updateProfileField('summary', e.target.value)}
                  placeholder="Describe your professional background, key achievements, and career goals..."
                />
              </div>
            </SectionCard>

            <SectionCard
              id="education"
              title="Education"
              icon="🎓"
              required={false}
              isExpanded={openPanels.education !== false}
              onToggle={() => togglePanel('education')}
            >
              <div className="form-fields-container">
                {resume.education && resume.education.length > 0 ? (
                  <>
                    {resume.education.map((edu, idx) => (
                      <div key={edu.id} className="form-item">
                        <div className="form-item-header">
                          <h4 className="form-item-title">{edu.school || `School ${idx + 1}`}</h4>
                          <button
                            className="form-item-delete"
                            onClick={() => removeListItem('education', edu.id)}
                          >
                            ✕
                          </button>
                        </div>
                        <div className="form-row">
                          <input
                            type="text"
                            className="form-input"
                            placeholder="School"
                            value={edu.school || ''}
                            onChange={(e) => updateListItem('education', edu.id, 'school', e.target.value)}
                          />
                          <input
                            type="text"
                            className="form-input"
                            placeholder="Degree"
                            value={edu.degree || ''}
                            onChange={(e) => updateListItem('education', edu.id, 'degree', e.target.value)}
                          />
                        </div>
                      </div>
                    ))}
                  </>
                ) : null}
                <button className="form-add-button" onClick={() => addListItem('education')}>
                  + Add education
                </button>
              </div>
            </SectionCard>

            <SectionCard
              id="skills"
              title="Skills"
              icon="⚡"
              required={false}
              isExpanded={openPanels.skills !== false}
              onToggle={() => togglePanel('skills')}
            >
              <div className="form-field">
                <label className="form-label">Enter skills (comma-separated)</label>
                <textarea
                  className="form-input form-textarea"
                  placeholder="React, TypeScript, Product Design, Leadership..."
                  value={resume.skills?.map(s => s.name).join(', ') || ''}
                  onChange={(e) => {
                    const skillsArray = e.target.value.split(',').map(s => ({ name: s.trim() })).filter(s => s.name);
                    // Update skills in resume context
                  }}
                />
              </div>
            </SectionCard>
          </div>
        </div>

        {/* Right Column: Sticky Preview */}
        <div className="builder-preview-column">
          <div className="builder-preview-sticky">
            <div className="preview-header">
              <h3>Live Preview</h3>
              <span className="preview-completion">{completion}% complete</span>
            </div>
            <div className="preview-container">
              <ResumeTemplatePreview
                resume={previewResume}
                templateId={selectedTemplate}
              />
            </div>
            <div className="preview-actions">
              <button
                className="preview-action-btn primary"
                onClick={handleDownload}
                disabled={!validation.isValid}
              >
                📥 Download PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function EssentialsStep({ resume, validation, updateProfileField, updateListItem, updateListHighlights, onNext }) {
  const primaryExperience = resume.experience[0];
  const highlights = normalizeHighlightsForEditing(primaryExperience?.highlights || []);

  return (
    <div className="studio-grid">
      <section className="studio-card">
        <h3>Essential details</h3>
        <p>Only the fields needed to reach a credible first preview. We intentionally delay optional detail until later.</p>
        <div className="studio-fields">
          <StudioField label="First name" value={resume.profile.firstName} onChange={(value) => updateProfileField('firstName', value)} error={validation.errors.firstName} placeholder="Aarav" />
          <StudioField label="Last name" value={resume.profile.lastName} onChange={(value) => updateProfileField('lastName', value)} error={validation.errors.lastName} placeholder="Mehta" />
          <StudioField label="Professional title" value={resume.profile.headline} onChange={(value) => updateProfileField('headline', value)} error={validation.errors.headline} placeholder="Senior Product Engineer" />
          <StudioField label="Location" value={resume.profile.location} onChange={(value) => updateProfileField('location', value)} placeholder="Bengaluru, India" />
          <StudioField label="Email" type="email" value={resume.profile.email} onChange={(value) => updateProfileField('email', value)} error={validation.errors.email} placeholder="you@example.com" />
          <StudioField label="Phone" value={resume.profile.phone} onChange={(value) => updateProfileField('phone', value)} error={validation.errors.phone} placeholder="+91 98765 43210" />
        </div>
        <div className="studio-fields single" style={{ marginTop: 14 }}>
          <StudioField label="Professional summary" value={resume.profile.summary} onChange={(value) => updateProfileField('summary', value)} error={validation.errors.summary} textarea placeholder="3 to 4 concise sentences focused on positioning, scope, and outcomes." />
        </div>
      </section>

      <section className="studio-card">
        <h3>First experience entry</h3>
        <p>This is the fastest reward moment. One strong role is enough to produce a meaningful preview.</p>
        <div className="studio-fields">
          <StudioField label="Role" value={primaryExperience?.role || ''} onChange={(value) => updateListItem('experience', primaryExperience.id, 'role', value)} placeholder="Lead Product Engineer" />
          <StudioField label="Company" value={primaryExperience?.company || ''} onChange={(value) => updateListItem('experience', primaryExperience.id, 'company', value)} placeholder="Northstar Labs" />
          <StudioField label="Location" value={primaryExperience?.location || ''} onChange={(value) => updateListItem('experience', primaryExperience.id, 'location', value)} placeholder="Remote" />
          <StudioField label="Start date" value={primaryExperience?.startDate || ''} onChange={(value) => updateListItem('experience', primaryExperience.id, 'startDate', value)} placeholder="Mar 2022" />
        </div>
        <div className="studio-fields single" style={{ marginTop: 14 }}>
          {highlights.map((bullet, index) => (
            <StudioField
              key={`essential-bullet-${index}`}
              label={`Impact bullet ${index + 1}`}
              value={bullet}
              onChange={(value) => {
                const next = [...highlights];
                next[index] = value;
                updateListHighlights('experience', primaryExperience.id, next);
              }}
              placeholder="Start with action, scope, and measurable result."
            />
          ))}
        </div>
        <div className="studio-button-row">
          <button type="button" className="studio-chip-button" onClick={() => updateListHighlights('experience', primaryExperience.id, [...highlights, ''])}>Add impact bullet</button>
          <button type="button" className="studio-btn" onClick={onNext}>See instant preview</button>
        </div>
      </section>
    </div>
  );
}

function PreviewStep({ previewResume, selectedTemplate, quality, onBack, onNext }) {
  return (
    <div className="studio-grid">
      <section className="studio-card">
        <h3>Your live preview</h3>
        <p>Rendered from the same React template engine used for final export. Missing sections fall back safely instead of breaking layout.</p>
        <div className="studio-preview-card">
          <ResumeTemplatePreview resume={previewResume} templateId={selectedTemplate} />
        </div>
      </section>

      <section className="studio-card">
        <h3>Resume quality check</h3>
        <p>Validation goes beyond required fields and looks for clarity, proof, and credibility.</p>
        <div className="studio-note" style={{ marginBottom: 16 }}>
          Quality score: <strong>{quality.score}/100</strong>
        </div>
        {quality.warnings.length ? quality.warnings.map((warning, index) => (
          <div key={`warning-${index}`} className="studio-completion-item">
            <span>{warning.message}</span>
            <span className={`studio-state ${warning.level === 'warning' ? 'needs-improvement' : 'optional'}`}>{warning.level}</span>
          </div>
        )) : (
          <div className="studio-completion-item">
            <span>No critical quality issues detected.</span>
            <span className="studio-state complete">strong</span>
          </div>
        )}
        {quality.improvementTips.length ? (
          <div className="studio-note" style={{ marginTop: 16 }}>
            {quality.improvementTips[0]}
          </div>
        ) : null}
        <div className="studio-button-row">
          <button type="button" className="studio-btn-ghost" onClick={onBack}>Back to essentials</button>
          <button type="button" className="studio-btn" onClick={onNext}>Expand details</button>
        </div>
      </section>
    </div>
  );
}

function DetailsStep({ resume, openPanels, togglePanel, updateListItem, updateListHighlights, addListItem, removeListItem, onBack, onNext }) {
  const sections = [
    { key: 'experience', title: 'Additional experience', items: resume.experience, type: 'experience' },
    { key: 'education', title: 'Education', items: resume.education, type: 'education' },
    { key: 'skills', title: 'Skills', items: resume.skills, type: 'skills' },
    { key: 'projects', title: 'Projects', items: resume.projects, type: 'projects' },
    { key: 'certifications', title: 'Certifications', items: resume.certifications, type: 'certifications' },
    { key: 'languages', title: 'Languages', items: resume.languages, type: 'languages' }
  ];

  return (
    <div className="studio-grid">
      <section className="studio-card">
        <h3>Progressive details</h3>
        <p>Add optional depth only where it helps. Each section stays collapsed by default to reduce scanning fatigue on mobile and desktop.</p>
        <div className="studio-details-group">
          {sections.map((section) => (
            <div key={section.key} className="studio-disclosure">
              <button type="button" onClick={() => togglePanel(section.key)}>
                <span>{section.title}</span>
                <span>{openPanels[section.key] ? '-' : '+'}</span>
              </button>
              {openPanels[section.key] ? (
                <div className="studio-disclosure-body">
                  <CollectionEditor type={section.type} items={section.items} updateListItem={updateListItem} updateListHighlights={updateListHighlights} addListItem={addListItem} removeListItem={removeListItem} />
                </div>
              ) : null}
            </div>
          ))}
        </div>
        <div className="studio-button-row">
          <button type="button" className="studio-btn-ghost" onClick={onBack}>Back to preview</button>
          <button type="button" className="studio-btn" onClick={onNext}>Choose template</button>
        </div>
      </section>
    </div>
  );
}

function CollectionEditor({ type, items, updateListItem, updateListHighlights, addListItem, removeListItem }) {
  return (
    <div className="studio-grid">
      {items.map((item, index) => (
        <div className="studio-item" key={item.id}>
          <div className="studio-item-head">
            <strong>{type} {index + 1}</strong>
            {items.length > 1 ? <button type="button" className="studio-remove" onClick={() => removeListItem(type, item.id)}>Remove</button> : null}
          </div>
          {type === 'experience' ? (
            <>
              <div className="studio-fields">
                <StudioField label="Role" value={item.role} onChange={(value) => updateListItem(type, item.id, 'role', value)} />
                <StudioField label="Company" value={item.company} onChange={(value) => updateListItem(type, item.id, 'company', value)} />
                <StudioField label="Location" value={item.location} onChange={(value) => updateListItem(type, item.id, 'location', value)} />
                <StudioField label="Start date" value={item.startDate} onChange={(value) => updateListItem(type, item.id, 'startDate', value)} />
                <StudioField label="End date" value={item.endDate} onChange={(value) => updateListItem(type, item.id, 'endDate', value)} />
              </div>
              <div className="studio-fields single" style={{ marginTop: 12 }}>
                {normalizeHighlightsForEditing(item.highlights).map((bullet, bulletIndex) => (
                  <StudioField
                    key={`${item.id}-bullet-${bulletIndex}`}
                    label={`Bullet ${bulletIndex + 1}`}
                    value={bullet}
                    onChange={(value) => {
                      const next = normalizeHighlightsForEditing(item.highlights);
                      next[bulletIndex] = value;
                      updateListHighlights(type, item.id, next);
                    }}
                  />
                ))}
              </div>
            </>
          ) : null}
          {type === 'education' ? (
            <div className="studio-fields">
              <StudioField label="Degree" value={item.degree} onChange={(value) => updateListItem(type, item.id, 'degree', value)} />
              <StudioField label="Institution" value={item.institution} onChange={(value) => updateListItem(type, item.id, 'institution', value)} />
              <StudioField label="Location" value={item.location} onChange={(value) => updateListItem(type, item.id, 'location', value)} />
              <StudioField label="Start date" value={item.startDate} onChange={(value) => updateListItem(type, item.id, 'startDate', value)} />
              <StudioField label="End date" value={item.endDate} onChange={(value) => updateListItem(type, item.id, 'endDate', value)} />
              <StudioField label="Details" value={item.details} onChange={(value) => updateListItem(type, item.id, 'details', value)} />
            </div>
          ) : null}
          {type === 'skills' ? (
            <div className="studio-fields">
              <StudioField label="Skill" value={item.name} onChange={(value) => updateListItem(type, item.id, 'name', value)} />
              <StudioField label="Level" value={item.level} onChange={(value) => updateListItem(type, item.id, 'level', value)} />
            </div>
          ) : null}
          {type === 'projects' ? (
            <div className="studio-fields">
              <StudioField label="Project name" value={item.name} onChange={(value) => updateListItem(type, item.id, 'name', value)} />
              <StudioField label="Role" value={item.role} onChange={(value) => updateListItem(type, item.id, 'role', value)} />
              <StudioField label="Link" value={item.link} onChange={(value) => updateListItem(type, item.id, 'link', value)} />
              <StudioField label="Summary" value={item.summary} onChange={(value) => updateListItem(type, item.id, 'summary', value)} />
            </div>
          ) : null}
          {type === 'certifications' ? (
            <div className="studio-fields">
              <StudioField label="Name" value={item.name} onChange={(value) => updateListItem(type, item.id, 'name', value)} />
              <StudioField label="Issuer" value={item.issuer} onChange={(value) => updateListItem(type, item.id, 'issuer', value)} />
              <StudioField label="Year" value={item.year} onChange={(value) => updateListItem(type, item.id, 'year', value)} />
            </div>
          ) : null}
          {type === 'languages' ? (
            <div className="studio-fields">
              <StudioField label="Language" value={item.name} onChange={(value) => updateListItem(type, item.id, 'name', value)} />
              <StudioField label="Proficiency" value={item.proficiency} onChange={(value) => updateListItem(type, item.id, 'proficiency', value)} />
            </div>
          ) : null}
        </div>
      ))}
      <button type="button" className="studio-chip-button" onClick={() => addListItem(type)}>Add {type}</button>
    </div>
  );
}

function TemplatesStep({ previewResume, selectedTemplate, setSelectedTemplate, onBack, onNext }) {
  return (
    <div className="studio-grid">
      <section className="studio-card">
        <h3>Five premium templates, five real use cases</h3>
        <p>These are scaled-down real renders using actual resume components, not placeholder stripes. That makes selection more trustworthy and more useful.</p>
        <div className="studio-template-grid">
          {TEMPLATE_OPTIONS.map((template) => (
            <button key={template.id} type="button" className={`studio-template-card ${selectedTemplate === template.id ? 'active' : ''}`} onClick={() => setSelectedTemplate(template.id)}>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, alignItems: 'flex-start', marginBottom: 12 }}>
                <div>
                  <strong style={{ display: 'block', fontSize: 18, color: '#0f172a' }}>{template.name}</strong>
                  <span style={{ color: '#64748b', fontSize: 13 }}>{template.useCase}</span>
                </div>
                <span className="studio-badge">{template.tone}</span>
              </div>
              <div className="studio-preview-card">
                <ResumeTemplatePreview resume={previewResume} templateId={template.id} scale={0.36} />
              </div>
            </button>
          ))}
        </div>
        <div className="studio-button-row">
          <button type="button" className="studio-btn-ghost" onClick={onBack}>Back to details</button>
          <button type="button" className="studio-btn" onClick={onNext}>Review export</button>
        </div>
      </section>
    </div>
  );
}

function DownloadStep({ previewResume, selectedTemplate, validation, quality, downloadState, onBack, onDownload }) {
  return (
    <div className="studio-grid">
      <section className="studio-card">
        <h3>Export-ready resume</h3>
        <p>PDF export runs from the same React schema and template engine, so missing data does not break layout and template behavior stays consistent across preview and download.</p>
        <div className="studio-preview-card">
          <ResumeTemplatePreview resume={previewResume} templateId={selectedTemplate} scale={0.72} />
        </div>
        {downloadState.error ? <div className="studio-error" style={{ marginTop: 14 }}>{downloadState.error}</div> : null}
      </section>

      <section className="studio-card">
        <h3>Trust and quality checks</h3>
        <p>The platform should feel safe before the user clicks export.</p>
        <div className="studio-completion-list">
          <div className="studio-completion-item"><span>Your data never leaves this device.</span><span className="studio-state complete">privacy</span></div>
          <div className="studio-completion-item"><span>No account required.</span><span className="studio-state complete">frictionless</span></div>
          <div className="studio-completion-item"><span>ATS-friendly templates with safe conditional rendering.</span><span className="studio-state complete">trusted</span></div>
          <div className="studio-completion-item"><span>Resume quality score: {quality.score}/100</span><span className={`studio-state ${quality.score >= 78 ? 'complete' : 'needs-improvement'}`}>{quality.score >= 78 ? 'strong' : 'review'}</span></div>
        </div>
        <div className="studio-note" style={{ marginTop: 16 }}>
          Export status: {downloadState.loading ? 'Generating PDF locally...' : validation.isValid ? 'Ready to export.' : 'Finish the essentials first.'}
        </div>
        <div className="studio-button-row">
          <button type="button" className="studio-btn-ghost" onClick={onBack}>Back to templates</button>
          <button type="button" className="studio-btn-secondary" onClick={onDownload} disabled={downloadState.loading || !validation.isValid}>
            {downloadState.loading ? 'Generating PDF...' : 'Download PDF'}
          </button>
        </div>
      </section>
    </div>
  );
}

export default BuilderStudio;

