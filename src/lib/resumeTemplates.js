import React from 'react';

const sectionOrder = [
  'summary',
  'experience',
  'projects',
  'education',
  'skills',
  'certifications',
  'languages',
];

const templateThemes = {
  classic: {
    surface: '#ffffff',
    canvas: '#f4f7fb',
    text: '#122033',
    muted: '#58677d',
    accent: '#2457c5',
    headingFont: 'Georgia, "Times New Roman", serif',
    bodyFont: '"Segoe UI", Arial, sans-serif',
    layout: 'single',
  },
  modern: {
    surface: '#ffffff',
    canvas: '#f0f7f6',
    text: '#102a2a',
    muted: '#537170',
    accent: '#0f766e',
    headingFont: '"Trebuchet MS", "Segoe UI", sans-serif',
    bodyFont: '"Segoe UI", Arial, sans-serif',
    layout: 'split',
  },
  executive: {
    surface: '#ffffff',
    canvas: '#eef2f7',
    text: '#111827',
    muted: '#4b5563',
    accent: '#1f2937',
    headingFont: 'Georgia, "Times New Roman", serif',
    bodyFont: '"Segoe UI", Arial, sans-serif',
    layout: 'single',
  },
  minimal: {
    surface: '#ffffff',
    canvas: '#faf7ff',
    text: '#1f1330',
    muted: '#645973',
    accent: '#7c3aed',
    headingFont: '"Palatino Linotype", Georgia, serif',
    bodyFont: '"Segoe UI", Arial, sans-serif',
    layout: 'single',
  },
  creative: {
    surface: '#fffaf4',
    canvas: '#fff1e6',
    text: '#3a2415',
    muted: '#7a5d47',
    accent: '#c2410c',
    headingFont: '"Trebuchet MS", "Segoe UI", sans-serif',
    bodyFont: '"Segoe UI", Arial, sans-serif',
    layout: 'split',
  },
};

function formatName(profile) {
  return [profile.firstName, profile.lastName].filter(Boolean).join(' ') || 'Your Name';
}

function formatContact(profile) {
  return [profile.email, profile.phone, profile.location].filter(Boolean);
}

function Section({ title, children, theme }) {
  if (!children) return null;

  return (
    <section style={{ marginBottom: 22 }}>
      <div
        style={{
          color: theme.accent,
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          marginBottom: 10,
        }}
      >
        {title}
      </div>
      {children}
    </section>
  );
}

function renderSummary(resume, theme) {
  if (!resume.profile.summary) return null;
  return (
    <Section title="Profile" theme={theme}>
      <p style={{ margin: 0, color: theme.muted, lineHeight: 1.65 }}>{resume.profile.summary}</p>
    </Section>
  );
}

function renderExperience(resume, theme) {
  if (!resume.experience.length) return null;

  return (
    <Section title="Experience" theme={theme}>
      <div style={{ display: 'grid', gap: 16 }}>
        {resume.experience.map((item) => (
          <article key={item.id}>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontWeight: 700 }}>{item.role || 'Role title'}</div>
                <div style={{ color: theme.muted }}>{[item.company, item.location].filter(Boolean).join(' · ')}</div>
              </div>
              <div style={{ color: theme.muted, fontSize: 13 }}>
                {[item.startDate, item.current ? 'Present' : item.endDate].filter(Boolean).join(' - ')}
              </div>
            </div>
            {item.highlights.length > 0 && (
              <ul style={{ margin: '10px 0 0', paddingLeft: 18, color: theme.muted, lineHeight: 1.55 }}>
                {item.highlights.map((highlight, index) => (
                  <li key={`${item.id}-${index}`}>{highlight}</li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}

function renderProjects(resume, theme) {
  if (!resume.projects.length) return null;

  return (
    <Section title="Projects" theme={theme}>
      <div style={{ display: 'grid', gap: 14 }}>
        {resume.projects.map((item) => (
          <article key={item.id}>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
              <div style={{ fontWeight: 700 }}>{item.name || 'Project name'}</div>
              {item.link ? (
                <a href={item.link} style={{ color: theme.accent, textDecoration: 'none', fontSize: 13 }}>
                  {item.link}
                </a>
              ) : null}
            </div>
            {item.role ? <div style={{ color: theme.muted, marginTop: 4 }}>{item.role}</div> : null}
            {item.summary ? <p style={{ margin: '8px 0 0', color: theme.muted }}>{item.summary}</p> : null}
            {item.highlights.length > 0 && (
              <ul style={{ margin: '8px 0 0', paddingLeft: 18, color: theme.muted }}>
                {item.highlights.map((highlight, index) => (
                  <li key={`${item.id}-project-${index}`}>{highlight}</li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}

function renderEducation(resume, theme) {
  if (!resume.education.length) return null;

  return (
    <Section title="Education" theme={theme}>
      <div style={{ display: 'grid', gap: 14 }}>
        {resume.education.map((item) => (
          <article key={item.id}>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontWeight: 700 }}>{item.degree || 'Degree'}</div>
                <div style={{ color: theme.muted }}>{[item.institution, item.location].filter(Boolean).join(' · ')}</div>
              </div>
              <div style={{ color: theme.muted, fontSize: 13 }}>
                {[item.startDate, item.current ? 'Present' : item.endDate].filter(Boolean).join(' - ')}
              </div>
            </div>
            {item.details ? <p style={{ margin: '8px 0 0', color: theme.muted }}>{item.details}</p> : null}
          </article>
        ))}
      </div>
    </Section>
  );
}

function renderSkills(resume, theme) {
  if (!resume.skills.length) return null;

  return (
    <Section title="Core Skills" theme={theme}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {resume.skills.map((skill) => (
          <span
            key={skill.id}
            style={{
              border: `1px solid ${theme.accent}22`,
              background: `${theme.accent}12`,
              color: theme.text,
              padding: '6px 10px',
              borderRadius: 999,
              fontSize: 13,
            }}
          >
            {skill.name}
            {skill.level ? ` · ${skill.level}` : ''}
          </span>
        ))}
      </div>
    </Section>
  );
}

function renderCertifications(resume, theme) {
  if (!resume.certifications.length) return null;

  return (
    <Section title="Certifications" theme={theme}>
      <div style={{ display: 'grid', gap: 8, color: theme.muted }}>
        {resume.certifications.map((item) => (
          <div key={item.id}>
            <strong style={{ color: theme.text }}>{item.name || 'Certification'}</strong>
            <span>{[item.issuer, item.year].filter(Boolean).join(' · ') ? ` · ${[item.issuer, item.year].filter(Boolean).join(' · ')}` : ''}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}

function renderLanguages(resume, theme) {
  if (!resume.languages.length) return null;

  return (
    <Section title="Languages" theme={theme}>
      <div style={{ display: 'grid', gap: 8, color: theme.muted }}>
        {resume.languages.map((item) => (
          <div key={item.id}>
            <strong style={{ color: theme.text }}>{item.name}</strong>
            {item.proficiency ? ` · ${item.proficiency}` : ''}
          </div>
        ))}
      </div>
    </Section>
  );
}

const sectionRenderers = {
  summary: renderSummary,
  experience: renderExperience,
  projects: renderProjects,
  education: renderEducation,
  skills: renderSkills,
  certifications: renderCertifications,
  languages: renderLanguages,
};

export function ResumeTemplatePreview({ resume, templateId = 'classic', scale = 1 }) {
  const theme = templateThemes[templateId] || templateThemes.classic;
  const sections = sectionOrder
    .map((key) => sectionRenderers[key](resume, theme))
    .filter(Boolean);

  const sidebarSections = [renderSkills(resume, theme), renderCertifications(resume, theme), renderLanguages(resume, theme)].filter(Boolean);
  const mainSections = [renderSummary(resume, theme), renderExperience(resume, theme), renderProjects(resume, theme), renderEducation(resume, theme)].filter(Boolean);

  return (
    <div
      style={{
        background: theme.canvas,
        padding: 24 * scale,
        borderRadius: 24,
        boxShadow: '0 20px 50px rgba(15, 23, 42, 0.12)',
      }}
    >
      <div
        style={{
          background: theme.surface,
          borderRadius: 20,
          padding: 28 * scale,
          color: theme.text,
          fontFamily: theme.bodyFont,
          minHeight: 880 * scale,
        }}
      >
        <header style={{ marginBottom: 24 }}>
          <h1
            style={{
              margin: 0,
              fontFamily: theme.headingFont,
              fontSize: 32 * scale,
              lineHeight: 1.05,
            }}
          >
            {formatName(resume.profile)}
          </h1>
          {resume.profile.headline ? (
            <div style={{ color: theme.accent, fontWeight: 600, marginTop: 8 }}>{resume.profile.headline}</div>
          ) : null}
          <div style={{ color: theme.muted, marginTop: 10, lineHeight: 1.5 }}>
            {formatContact(resume.profile).join(' · ')}
            {resume.profile.linkedin ? ` · ${resume.profile.linkedin}` : ''}
            {resume.profile.website ? ` · ${resume.profile.website}` : ''}
          </div>
        </header>

        {theme.layout === 'split' ? (
          <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 0.9fr', gap: 24 }}>
            <div>{mainSections}</div>
            <aside
              style={{
                background: `${theme.accent}10`,
                borderRadius: 16,
                padding: 18,
                alignSelf: 'start',
              }}
            >
              {sidebarSections}
            </aside>
          </div>
        ) : (
          <div>{sections}</div>
        )}
      </div>
    </div>
  );
}
