import React, { useMemo, useState } from 'react';
import { useResume } from '../context/resumecontext';
import { ResumeTemplatePreview } from '../lib/resumeTemplates';
import {
  TEMPLATE_OPTIONS,
  createPdfPayload,
  getResumeCompletion,
  sanitizeResume,
  validateResume,
} from '../lib/resumeSchema';
import { downloadBlob, generatePDF } from '../utils/api';
import './BuilderPage.css';

const steps = [
  {
    id: 'details',
    title: 'Enter Details',
    description: 'Fill your profile, experience, education, and skills in one guided workspace.',
  },
  {
    id: 'preview',
    title: 'Preview',
    description: 'Review the resume with safe fallbacks before you generate anything.',
  },
  {
    id: 'template',
    title: 'Choose Template',
    description: 'Switch across five polished layouts without losing or breaking data.',
  },
  {
    id: 'download',
    title: 'Download',
    description: 'Export the selected template as PDF with no account or database required.',
  },
];

function SectionCard({ title, description, children }) {
  return (
    <section className="builder-card">
      <h3>{title}</h3>
      <p>{description}</p>
      {children}
    </section>
  );
}

function TextField({ label, value, onChange, error, textarea = false, ...props }) {
  const FieldTag = textarea ? 'textarea' : 'input';

  return (
    <label className="field-label">
      <span>{label}</span>
      <FieldTag value={value} onChange={(event) => onChange(event.target.value)} {...props} />
      {error ? <span className="field-error">{error}</span> : null}
    </label>
  );
}

function SelectField({ label, value, onChange, options }) {
  return (
    <label className="field-label">
      <span>{label}</span>
      <select value={value} onChange={(event) => onChange(event.target.value)}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function BuilderPage() {
  const {
    resume,
    selectedTemplate,
    currentStep,
    setCurrentStep,
    updateProfileField,
    updateListItem,
    updateListHighlights,
    addListItem,
    removeListItem,
    setSelectedTemplate,
  } = useResume();
  const [downloadError, setDownloadError] = useState('');
  const [isDownloading, setIsDownloading] = useState(false);

  const validation = useMemo(() => validateResume(resume), [resume]);
  const safeResume = useMemo(() => sanitizeResume(resume), [resume]);
  const completion = useMemo(() => getResumeCompletion(resume), [resume]);
  const stepIndex = Math.max(0, steps.findIndex((step) => step.id === currentStep));
  const activeStep = steps[stepIndex];

  const goToStep = (stepId) => {
    if (stepId === 'preview' || stepId === 'template' || stepId === 'download') {
      const detailsReady = validateResume(resume).isValid;
      if (!detailsReady && stepId !== 'details') {
        setCurrentStep('details');
        return;
      }
    }
    setCurrentStep(stepId);
  };

  const handleDownload = async () => {
    const checked = validateResume(resume);
    if (!checked.isValid) {
      setDownloadError('Complete the required fields in step 1 before downloading.');
      setCurrentStep('details');
      return;
    }

    try {
      setDownloadError('');
      setIsDownloading(true);
      const blob = await generatePDF(createPdfPayload(checked.sanitized), selectedTemplate);
      const fullName = [checked.sanitized.profile.firstName, checked.sanitized.profile.lastName].filter(Boolean).join('-').toLowerCase() || 'resume';
      downloadBlob(blob, `${fullName}-resume.pdf`);
    } catch (error) {
      setDownloadError(error?.message || 'Unable to generate the PDF right now.');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="builder-shell">
      <div className="builder-grid">
        <aside className="builder-panel builder-sidebar">
          <div className="builder-kicker">Production Builder</div>
          <h1 className="builder-title">RapidResume, rebuilt for a real product flow.</h1>
          <p className="builder-copy">
            The experience now follows a strict four-step journey, validates required data, stores everything locally,
            and keeps template rendering resilient even when sections are sparse.
          </p>

          <div className="builder-progress">
            <div className="builder-progress-track">
              <div className="builder-progress-bar" style={{ width: `${completion}%` }} />
            </div>
            <p className="builder-copy" style={{ marginTop: 10 }}>
              {completion}% of the essential resume completed
            </p>
          </div>

          <div className="builder-step-list">
            {steps.map((step, index) => (
              <button
                key={step.id}
                type="button"
                className={`builder-step ${currentStep === step.id ? 'active' : ''}`}
                onClick={() => goToStep(step.id)}
              >
                <div className="builder-step-num">{index + 1}</div>
                <h2 className="builder-section-title">{step.title}</h2>
                <p className="builder-section-copy">{step.description}</p>
              </button>
            ))}
          </div>

          <div className="builder-note">
            Privacy is preserved by design: no login, no sync, no database. Drafts stay in local storage unless the user
            downloads a PDF.
          </div>
        </aside>

        <main className="builder-panel builder-main">
          <div className="builder-content-head">
            <div>
              <div className="builder-kicker">Step {stepIndex + 1}</div>
              <h2>{activeStep.title}</h2>
              <p>{activeStep.description}</p>
            </div>
            <div className="builder-status-card">
              <strong>{TEMPLATE_OPTIONS.find((item) => item.id === selectedTemplate)?.name || 'Classic'}</strong>
              <span>
                Shared schema, safe defaults, and responsive preview all running from one normalized resume model.
              </span>
            </div>
          </div>

          {currentStep === 'details' ? (
            <DetailsStep
              resume={resume}
              validation={validation}
              updateProfileField={updateProfileField}
              updateListItem={updateListItem}
              updateListHighlights={updateListHighlights}
              addListItem={addListItem}
              removeListItem={removeListItem}
              onNext={() => setCurrentStep('preview')}
            />
          ) : null}

          {currentStep === 'preview' ? (
            <PreviewStep
              resume={safeResume}
              templateId={selectedTemplate}
              onBack={() => setCurrentStep('details')}
              onNext={() => setCurrentStep('template')}
            />
          ) : null}

          {currentStep === 'template' ? (
            <TemplateStep
              resume={safeResume}
              templateId={selectedTemplate}
              setSelectedTemplate={setSelectedTemplate}
              onBack={() => setCurrentStep('preview')}
              onNext={() => setCurrentStep('download')}
            />
          ) : null}

          {currentStep === 'download' ? (
            <DownloadStep
              resume={safeResume}
              templateId={selectedTemplate}
              validation={validation}
              isDownloading={isDownloading}
              downloadError={downloadError}
              onBack={() => setCurrentStep('template')}
              onDownload={handleDownload}
            />
          ) : null}
        </main>
      </div>
    </div>
  );
}

function DetailsStep({
  resume,
  validation,
  updateProfileField,
  updateListItem,
  updateListHighlights,
  addListItem,
  removeListItem,
  onNext,
}) {
  return (
    <div className="builder-form-grid">
      <SectionCard title="Profile" description="Capture the essentials once. Every template reuses this exact profile block.">
        <div className="field-grid">
          <TextField
            label="First Name"
            value={resume.profile.firstName}
            onChange={(value) => updateProfileField('firstName', value)}
            error={validation.errors.firstName}
            placeholder="Aarav"
          />
          <TextField
            label="Last Name"
            value={resume.profile.lastName}
            onChange={(value) => updateProfileField('lastName', value)}
            error={validation.errors.lastName}
            placeholder="Sharma"
          />
          <TextField
            label="Headline"
            value={resume.profile.headline}
            onChange={(value) => updateProfileField('headline', value)}
            placeholder="Senior Product Designer"
          />
          <TextField
            label="Location"
            value={resume.profile.location}
            onChange={(value) => updateProfileField('location', value)}
            placeholder="Bengaluru, India"
          />
          <TextField
            label="Email"
            type="email"
            value={resume.profile.email}
            onChange={(value) => updateProfileField('email', value)}
            error={validation.errors.email}
            placeholder="you@example.com"
          />
          <TextField
            label="Phone"
            value={resume.profile.phone}
            onChange={(value) => updateProfileField('phone', value)}
            error={validation.errors.phone}
            placeholder="+91 98765 43210"
          />
          <TextField
            label="LinkedIn"
            value={resume.profile.linkedin}
            onChange={(value) => updateProfileField('linkedin', value)}
            placeholder="linkedin.com/in/yourname"
          />
          <TextField
            label="Website"
            value={resume.profile.website}
            onChange={(value) => updateProfileField('website', value)}
            placeholder="portfolio.dev"
          />
        </div>
        <div className="field-grid single" style={{ marginTop: 14 }}>
          <TextField
            label="Summary"
            value={resume.profile.summary}
            onChange={(value) => updateProfileField('summary', value)}
            error={validation.errors.summary}
            textarea
            placeholder="Write a crisp 3-4 sentence summary focused on impact, scope, and strengths."
          />
        </div>
      </SectionCard>

      <ArraySection
        title="Experience"
        description="Each experience entry supports zero or many highlights, and empty entries are safely ignored."
        items={resume.experience}
        onAdd={() => addListItem('experience')}
        onRemove={(id) => removeListItem('experience', id)}
        validationMessage={validation.errors.experience}
        renderItem={(item, index) => (
          <>
            <div className="field-grid">
              <TextField label="Role" value={item.role} onChange={(value) => updateListItem('experience', item.id, 'role', value)} placeholder="Frontend Engineer" />
              <TextField label="Company" value={item.company} onChange={(value) => updateListItem('experience', item.id, 'company', value)} placeholder="RapidResume" />
              <TextField label="Location" value={item.location} onChange={(value) => updateListItem('experience', item.id, 'location', value)} placeholder="Remote" />
              <TextField label="Start Date" value={item.startDate} onChange={(value) => updateListItem('experience', item.id, 'startDate', value)} placeholder="Jan 2024" />
              <TextField label="End Date" value={item.endDate} onChange={(value) => updateListItem('experience', item.id, 'endDate', value)} placeholder="Present or Aug 2025" />
              <label className="field-label">
                <span>Current Role</span>
                <select value={item.current ? 'yes' : 'no'} onChange={(event) => updateListItem('experience', item.id, 'current', event.target.value === 'yes')}>
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </label>
            </div>
            <HighlightEditor
              label={`Highlights for role ${index + 1}`}
              values={item.highlights}
              onChange={(values) => updateListHighlights('experience', item.id, values)}
            />
          </>
        )}
      />

      <ArraySection
        title="Education"
        description="Education is normalized to a reusable layout across all templates."
        items={resume.education}
        onAdd={() => addListItem('education')}
        onRemove={(id) => removeListItem('education', id)}
        validationMessage={validation.errors.education}
        renderItem={(item) => (
          <>
            <div className="field-grid">
              <TextField label="Degree" value={item.degree} onChange={(value) => updateListItem('education', item.id, 'degree', value)} placeholder="B.Tech in Computer Science" />
              <TextField label="Institution" value={item.institution} onChange={(value) => updateListItem('education', item.id, 'institution', value)} placeholder="IIT Delhi" />
              <TextField label="Location" value={item.location} onChange={(value) => updateListItem('education', item.id, 'location', value)} placeholder="Delhi" />
              <TextField label="Start Date" value={item.startDate} onChange={(value) => updateListItem('education', item.id, 'startDate', value)} placeholder="2019" />
              <TextField label="End Date" value={item.endDate} onChange={(value) => updateListItem('education', item.id, 'endDate', value)} placeholder="2023" />
              <label className="field-label">
                <span>Currently Studying</span>
                <select value={item.current ? 'yes' : 'no'} onChange={(event) => updateListItem('education', item.id, 'current', event.target.value === 'yes')}>
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </label>
            </div>
            <div className="field-grid single" style={{ marginTop: 14 }}>
              <TextField label="Details" value={item.details} onChange={(value) => updateListItem('education', item.id, 'details', value)} textarea placeholder="GPA, honors, coursework, thesis, or relevant leadership." />
            </div>
          </>
        )}
      />

      <ArraySection
        title="Skills"
        description="Skills are stored as structured entries, not fragile comma-separated text."
        items={resume.skills}
        onAdd={() => addListItem('skills')}
        onRemove={(id) => removeListItem('skills', id)}
        validationMessage={validation.errors.skills}
        renderItem={(item) => (
          <div className="field-grid">
            <TextField label="Skill" value={item.name} onChange={(value) => updateListItem('skills', item.id, 'name', value)} placeholder="React" />
            <SelectField label="Level" value={item.level} onChange={(value) => updateListItem('skills', item.id, 'level', value)} options={['Advanced', 'Strong', 'Intermediate', 'Working knowledge']} />
          </div>
        )}
      />

      <ArraySection
        title="Projects"
        description="Optional projects stay optional. Blank project cards never appear in preview or PDF output."
        items={resume.projects}
        onAdd={() => addListItem('projects')}
        onRemove={(id) => removeListItem('projects', id)}
        renderItem={(item, index) => (
          <>
            <div className="field-grid">
              <TextField label="Project Name" value={item.name} onChange={(value) => updateListItem('projects', item.id, 'name', value)} placeholder="Resume Platform Redesign" />
              <TextField label="Role" value={item.role} onChange={(value) => updateListItem('projects', item.id, 'role', value)} placeholder="Lead Designer" />
              <TextField label="Link" value={item.link} onChange={(value) => updateListItem('projects', item.id, 'link', value)} placeholder="https://project-link.com" />
            </div>
            <div className="field-grid single" style={{ marginTop: 14 }}>
              <TextField label="Summary" value={item.summary} onChange={(value) => updateListItem('projects', item.id, 'summary', value)} textarea placeholder="Explain the problem, what you built, and what changed." />
            </div>
            <HighlightEditor
              label={`Highlights for project ${index + 1}`}
              values={item.highlights}
              onChange={(values) => updateListHighlights('projects', item.id, values)}
            />
          </>
        )}
      />

      <div className="field-grid">
        <ArraySection
          title="Certifications"
          description="Optional credentials with issuer and year."
          items={resume.certifications}
          onAdd={() => addListItem('certifications')}
          onRemove={(id) => removeListItem('certifications', id)}
          renderItem={(item) => (
            <div className="field-grid">
              <TextField label="Name" value={item.name} onChange={(value) => updateListItem('certifications', item.id, 'name', value)} placeholder="AWS Certified Developer" />
              <TextField label="Issuer" value={item.issuer} onChange={(value) => updateListItem('certifications', item.id, 'issuer', value)} placeholder="Amazon Web Services" />
              <TextField label="Year" value={item.year} onChange={(value) => updateListItem('certifications', item.id, 'year', value)} placeholder="2025" />
            </div>
          )}
        />

        <ArraySection
          title="Languages"
          description="Keeps language proficiency structured for flexible layouts."
          items={resume.languages}
          onAdd={() => addListItem('languages')}
          onRemove={(id) => removeListItem('languages', id)}
          renderItem={(item) => (
            <div className="field-grid">
              <TextField label="Language" value={item.name} onChange={(value) => updateListItem('languages', item.id, 'name', value)} placeholder="English" />
              <SelectField label="Proficiency" value={item.proficiency} onChange={(value) => updateListItem('languages', item.id, 'proficiency', value)} options={['Native', 'Fluent', 'Professional', 'Conversational']} />
            </div>
          )}
        />
      </div>

      <div className="builder-button-row">
        <div className="builder-note" style={{ marginTop: 0, flex: 1 }}>
          Missing or extra fields no longer break layout. Empty blocks are removed during normalization, and populated
          sections expand safely.
        </div>
        <button type="button" className="builder-btn" onClick={onNext} disabled={!validation.isValid}>
          Continue to Preview
        </button>
      </div>
    </div>
  );
}

function ArraySection({ title, description, items, onAdd, onRemove, renderItem, validationMessage }) {
  return (
    <SectionCard title={title} description={description}>
      {validationMessage ? <div className="field-error" style={{ marginBottom: 14 }}>{validationMessage}</div> : null}
      <div className="item-stack">
        {items.map((item, index) => (
          <div className="item-card" key={item.id}>
            <div className="item-card-head">
              <h4>
                {title} Entry {index + 1}
              </h4>
              {items.length > 1 ? (
                <button type="button" className="builder-remove" onClick={() => onRemove(item.id)}>
                  Remove
                </button>
              ) : null}
            </div>
            {renderItem(item, index)}
          </div>
        ))}
      </div>
      <button type="button" className="builder-inline-button" onClick={onAdd} style={{ marginTop: 14 }}>
        Add {title} Entry
      </button>
    </SectionCard>
  );
}

function HighlightEditor({ label, values, onChange }) {
  const nextValues = values.length ? values : [''];

  const updateItem = (index, nextValue) => {
    const draft = [...nextValues];
    draft[index] = nextValue;
    onChange(draft);
  };

  const addLine = () => onChange([...nextValues, '']);
  const removeLine = (index) => onChange(nextValues.filter((_, currentIndex) => currentIndex !== index));

  return (
    <div style={{ marginTop: 14 }}>
      <div className="builder-kicker" style={{ marginBottom: 10 }}>
        {label}
      </div>
      <div className="item-stack">
        {nextValues.map((value, index) => (
          <div key={`${label}-${index}`} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
            <TextField
              label={`Bullet ${index + 1}`}
              value={value}
              onChange={(nextValue) => updateItem(index, nextValue)}
              placeholder="Describe measurable impact, ownership, or outcomes."
            />
            {nextValues.length > 1 ? (
              <button type="button" className="builder-remove" onClick={() => removeLine(index)} style={{ marginTop: 28 }}>
                Remove
              </button>
            ) : null}
          </div>
        ))}
      </div>
      <button type="button" className="builder-inline-button" onClick={addLine} style={{ marginTop: 12 }}>
        Add Bullet
      </button>
    </div>
  );
}

function PreviewStep({ resume, templateId, onBack, onNext }) {
  return (
    <div className="preview-stage">
      <div className="builder-note" style={{ marginTop: 0 }}>
        This preview is rendered from the normalized schema used by every template. Empty sections are removed and text
        blocks expand without clipping.
      </div>
      <ResumeTemplatePreview resume={resume} templateId={templateId} />
      <div className="builder-button-row">
        <button type="button" className="builder-btn-tertiary" onClick={onBack}>
          Back to Details
        </button>
        <button type="button" className="builder-btn" onClick={onNext}>
          Continue to Templates
        </button>
      </div>
    </div>
  );
}

function TemplateStep({ resume, templateId, setSelectedTemplate, onBack, onNext }) {
  return (
    <>
      <div className="template-grid-modern">
        {TEMPLATE_OPTIONS.map((template) => (
          <button
            key={template.id}
            type="button"
            className={`template-choice ${templateId === template.id ? 'active' : ''}`}
            onClick={() => setSelectedTemplate(template.id)}
          >
            <div className="template-choice-head">
              <div>
                <h3 style={{ margin: 0 }}>{template.name}</h3>
                <p style={{ margin: '6px 0 0', color: '#64748b', lineHeight: 1.55 }}>{template.description}</p>
              </div>
              <span className="template-tone">{template.tone}</span>
            </div>
            <div className="template-preview-frame">
              <ResumeTemplatePreview resume={resume} templateId={template.id} scale={0.38} />
            </div>
          </button>
        ))}
      </div>
      <div className="builder-button-row">
        <button type="button" className="builder-btn-tertiary" onClick={onBack}>
          Back to Preview
        </button>
        <button type="button" className="builder-btn" onClick={onNext}>
          Continue to Download
        </button>
      </div>
    </>
  );
}

function DownloadStep({ resume, templateId, validation, isDownloading, downloadError, onBack, onDownload }) {
  const selected = TEMPLATE_OPTIONS.find((item) => item.id === templateId) || TEMPLATE_OPTIONS[0];

  return (
    <div className="download-grid">
      <div className="builder-card">
        <h3>Ready to export</h3>
        <p>
          Download uses the Express/Fastify PDF service, but only after the same validated schema has been sanitized on
          the client. That keeps the rendering contract predictable and lightweight.
        </p>
        <ResumeTemplatePreview resume={resume} templateId={templateId} scale={0.62} />
        {downloadError ? <div className="field-error" style={{ marginTop: 14 }}>{downloadError}</div> : null}
        <div className="builder-button-row">
          <button type="button" className="builder-btn-tertiary" onClick={onBack}>
            Back to Templates
          </button>
          <button type="button" className="builder-btn-secondary" onClick={onDownload} disabled={!validation.isValid || isDownloading}>
            {isDownloading ? 'Generating PDF...' : 'Download PDF'}
          </button>
        </div>
      </div>

      <div className="builder-card">
        <h3>Release checklist</h3>
        <p>What this rebuilt flow guarantees before export.</p>
        <div className="download-checklist">
          <div className={`download-check ${validation.isValid ? 'ready' : ''}`}>
            Required fields validated before PDF generation.
          </div>
          <div className="download-check ready">One normalized resume schema shared across preview and download.</div>
          <div className="download-check ready">Five responsive templates with graceful empty-state handling.</div>
          <div className="download-check ready">No authentication, no database, and no server-side user storage.</div>
        </div>
        <div className="builder-note">
          Selected template: <strong>{selected.name}</strong>. The backend only exposes the same five production-ready
          templates so users cannot choose a broken layout.
        </div>
      </div>
    </div>
  );
}

export default BuilderPage;
