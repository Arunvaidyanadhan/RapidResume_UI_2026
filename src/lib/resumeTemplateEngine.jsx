import React from 'react';

const templateThemes = {
  professional: { canvas: '#f8fafc', surface: '#ffffff', text: '#0f172a', muted: '#475569', accent: '#1f7a6d', hairline: '#d1e4e1', headingFont: '"IBM Plex Sans", "Segoe UI", Arial, sans-serif', bodyFont: '"IBM Plex Sans", "Segoe UI", Arial, sans-serif', type: 'split' },
  elegant: { canvas: '#fafafa', surface: '#ffffff', text: '#1f2937', muted: '#6b7280', accent: '#6b7280', hairline: '#e5e7eb', headingFont: '"Playfair Display", Georgia, serif', bodyFont: '"Lato", "Segoe UI", Arial, sans-serif', type: 'classic' },
  modern: { canvas: '#eff6ff', surface: '#ffffff', text: '#0f172a', muted: '#475569', accent: '#2563eb', hairline: '#dbeafe', headingFont: '"Inter", "Segoe UI", Arial, sans-serif', bodyFont: '"Inter", "Segoe UI", Arial, sans-serif', type: 'split' },
  minimalist: { canvas: '#ffffff', surface: '#ffffff', text: '#111827', muted: '#4b5563', accent: '#374151', hairline: '#f3f4f6', headingFont: '"IBM Plex Sans", "Segoe UI", Arial, sans-serif', bodyFont: '"IBM Plex Sans", "Segoe UI", Arial, sans-serif', type: 'minimal' },
  creative: { canvas: '#fff7ed', surface: '#ffffff', text: '#1c1917', muted: '#78716c', accent: '#c2410c', hairline: '#fed7aa', headingFont: '"Poppins", "Segoe UI", Arial, sans-serif', bodyFont: '"Poppins", "Segoe UI", Arial, sans-serif', type: 'creative' },
  executive: { canvas: '#f8fafc', surface: '#ffffff', text: '#0f172a', muted: '#475569', accent: '#1e293b', hairline: '#e2e8f0', headingFont: '"IBM Plex Sans", "Segoe UI", Arial, sans-serif', bodyFont: '"IBM Plex Sans", "Segoe UI", Arial, sans-serif', type: 'executive' },
  bold: { canvas: '#fef2f2', surface: '#ffffff', text: '#1f2937', muted: '#6b7280', accent: '#dc2626', hairline: '#fecaca', headingFont: '"Montserrat", "Segoe UI", Arial, sans-serif', bodyFont: '"Open Sans", "Segoe UI", Arial, sans-serif', type: 'creative' },
  classic: { canvas: '#f7fafc', surface: '#ffffff', text: '#0f172a', muted: '#475569', accent: '#133f3a', hairline: '#cbd5e1', headingFont: '"IBM Plex Sans", "Segoe UI", Arial, sans-serif', bodyFont: '"IBM Plex Sans", "Segoe UI", Arial, sans-serif', type: 'classic' },
  clean: { canvas: '#f0f9ff', surface: '#ffffff', text: '#0f172a', muted: '#475569', accent: '#0891b2', hairline: '#cffafe', headingFont: '"Segoe UI", Arial, sans-serif', bodyFont: '"Segoe UI", Arial, sans-serif', type: 'classic' },
  sophisticated: { canvas: '#faf5ff', surface: '#ffffff', text: '#1f2937', muted: '#6b7280', accent: '#7c3aed', hairline: '#e9d5ff', headingFont: '"Merriweather", Georgia, serif', bodyFont: '"Source Sans Pro", "Segoe UI", Arial, sans-serif', type: 'executive' }
};

function divider(theme) {
  return `1px solid ${theme.hairline}`;
}

function formatName(profile) {
  return [profile.firstName, profile.lastName].filter(Boolean).join(' ') || 'Your Name';
}

function formatDateRange(item) {
  return [item.startDate, item.current ? 'Present' : item.endDate].filter(Boolean).join(' - ');
}

function ContactRow({ resume, theme }) {
  const contacts = [resume.profile.email, resume.profile.phone, resume.profile.location, resume.profile.linkedin, resume.profile.website].filter(Boolean);
  return <div style={{ color: theme.muted, fontSize: 13, lineHeight: 1.5 }}>{contacts.join(' | ')}</div>;
}

function ResumeSection({ title, theme, children, compact = false }) {
  if (!children) return null;
  return (
    <section style={{ marginBottom: compact ? 14 : 22 }}>
      <div style={{ color: theme.accent, fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', paddingBottom: 8, borderBottom: divider(theme), marginBottom: 10 }}>
        {title}
      </div>
      {children}
    </section>
  );
}

function ExperienceItems({ items, theme, compact = false }) {
  if (!items.length) return null;
  return (
    <div style={{ display: 'grid', gap: compact ? 10 : 16 }}>
      {items.map((item) => (
        <article key={item.id}>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10, flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontWeight: 700 }}>{item.role || 'Role'}</div>
              <div style={{ color: theme.muted, fontSize: 13 }}>{[item.company, item.location].filter(Boolean).join(' | ')}</div>
            </div>
            <div style={{ color: theme.muted, fontSize: 12 }}>{formatDateRange(item)}</div>
          </div>
          {item.highlights.length > 0 ? <ul style={{ margin: '8px 0 0', paddingLeft: 18, color: theme.muted, lineHeight: 1.55 }}>{item.highlights.map((highlight, index) => <li key={`${item.id}-${index}`}>{highlight}</li>)}</ul> : null}
        </article>
      ))}
    </div>
  );
}

function EducationItems({ items, theme }) {
  if (!items.length) return null;
  return (
    <div style={{ display: 'grid', gap: 14 }}>
      {items.map((item) => (
        <article key={item.id}>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10, flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontWeight: 700 }}>{item.degree}</div>
              <div style={{ color: theme.muted, fontSize: 13 }}>{[item.institution, item.location].filter(Boolean).join(' | ')}</div>
            </div>
            <div style={{ color: theme.muted, fontSize: 12 }}>{formatDateRange(item)}</div>
          </div>
          {item.details ? <div style={{ marginTop: 6, color: theme.muted }}>{item.details}</div> : null}
        </article>
      ))}
    </div>
  );
}

function ProjectItems({ items, theme }) {
  if (!items.length) return null;
  return <div style={{ display: 'grid', gap: 14 }}>{items.map((item) => <article key={item.id}><div style={{ display: 'flex', justifyContent: 'space-between', gap: 10, flexWrap: 'wrap' }}><div style={{ fontWeight: 700 }}>{item.name}</div>{item.link ? <span style={{ color: theme.accent, fontSize: 12 }}>{item.link}</span> : null}</div>{item.role ? <div style={{ color: theme.muted, marginTop: 4 }}>{item.role}</div> : null}{item.summary ? <div style={{ color: theme.muted, marginTop: 6 }}>{item.summary}</div> : null}</article>)}</div>;
}

function TagList({ items, theme, field = 'name' }) {
  if (!items.length) return null;
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
      {items.map((item) => (
        <span key={item.id} style={{ borderRadius: 999, border: `1px solid ${theme.hairline}`, background: `${theme.accent}12`, color: theme.text, fontSize: 12, fontWeight: 600, padding: '6px 10px' }}>
          {item[field]}{item.level ? ` | ${item.level}` : ''}{item.proficiency ? ` | ${item.proficiency}` : ''}
        </span>
      ))}
    </div>
  );
}

function SummaryBlock({ resume, theme, boxed = false }) {
  if (!resume.profile.summary) return null;
  return <div style={boxed ? { background: `${theme.accent}10`, border: divider(theme), borderRadius: 18, padding: 16, color: theme.muted, lineHeight: 1.65 } : { color: theme.muted, lineHeight: 1.65 }}>{resume.profile.summary}</div>;
}

function ClassicLayout({ resume, theme }) {
  return <div><ResumeSection title="Professional Summary" theme={theme}><SummaryBlock resume={resume} theme={theme} /></ResumeSection><ResumeSection title="Experience" theme={theme}><ExperienceItems items={resume.experience} theme={theme} /></ResumeSection><ResumeSection title="Education" theme={theme}><EducationItems items={resume.education} theme={theme} /></ResumeSection><ResumeSection title="Projects" theme={theme}><ProjectItems items={resume.projects} theme={theme} /></ResumeSection><ResumeSection title="Skills" theme={theme}><TagList items={resume.skills} theme={theme} /></ResumeSection></div>;
}

function SplitLayout({ resume, theme, asideTint }) {
  return <div style={{ display: 'grid', gridTemplateColumns: '1.55fr 0.95fr', gap: 22 }}><div><ResumeSection title="Summary" theme={theme}><SummaryBlock resume={resume} theme={theme} /></ResumeSection><ResumeSection title="Experience" theme={theme}><ExperienceItems items={resume.experience} theme={theme} /></ResumeSection><ResumeSection title="Projects" theme={theme}><ProjectItems items={resume.projects} theme={theme} /></ResumeSection></div><aside style={{ background: asideTint || `${theme.accent}10`, borderRadius: 20, padding: 18 }}><ResumeSection title="Skills" theme={theme} compact><TagList items={resume.skills} theme={theme} /></ResumeSection><ResumeSection title="Education" theme={theme} compact><EducationItems items={resume.education} theme={theme} /></ResumeSection><ResumeSection title="Credentials" theme={theme} compact><TagList items={resume.certifications} theme={theme} /></ResumeSection><ResumeSection title="Languages" theme={theme} compact><TagList items={resume.languages} theme={theme} /></ResumeSection></aside></div>;
}

function ExecutiveLayout({ resume, theme }) {
  return <div><ResumeSection title="Executive Summary" theme={theme}><SummaryBlock resume={resume} theme={theme} boxed /></ResumeSection><ResumeSection title="Leadership Experience" theme={theme}><ExperienceItems items={resume.experience} theme={theme} compact /></ResumeSection><div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}><ResumeSection title="Core Skills" theme={theme}><TagList items={resume.skills} theme={theme} /></ResumeSection><ResumeSection title="Education" theme={theme}><EducationItems items={resume.education} theme={theme} /></ResumeSection></div><ResumeSection title="Projects" theme={theme}><ProjectItems items={resume.projects} theme={theme} /></ResumeSection></div>;
}

function MinimalLayout({ resume, theme }) {
  return <div style={{ display: 'grid', gridTemplateColumns: '1.25fr 0.85fr', gap: 24 }}><div><ResumeSection title="Summary" theme={theme}><SummaryBlock resume={resume} theme={theme} /></ResumeSection><ResumeSection title="Experience" theme={theme}><ExperienceItems items={resume.experience} theme={theme} compact /></ResumeSection><ResumeSection title="Projects" theme={theme}><ProjectItems items={resume.projects} theme={theme} /></ResumeSection></div><aside><ResumeSection title="Education" theme={theme}><EducationItems items={resume.education} theme={theme} /></ResumeSection><ResumeSection title="Skills" theme={theme}><TagList items={resume.skills} theme={theme} /></ResumeSection></aside></div>;
}

function CreativeLayout({ resume, theme }) {
  return <div style={{ display: 'grid', gap: 16 }}><ResumeSection title="Profile" theme={theme}><SummaryBlock resume={resume} theme={theme} boxed /></ResumeSection><div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 18 }}><div><div style={{ background: '#ffffff', border: divider(theme), borderRadius: 18, padding: 16, marginBottom: 14 }}><ResumeSection title="Experience" theme={theme} compact><ExperienceItems items={resume.experience} theme={theme} compact /></ResumeSection></div><div style={{ background: '#ffffff', border: divider(theme), borderRadius: 18, padding: 16 }}><ResumeSection title="Projects" theme={theme} compact><ProjectItems items={resume.projects} theme={theme} /></ResumeSection></div></div><div><div style={{ background: '#ffffff', border: divider(theme), borderRadius: 18, padding: 16, marginBottom: 14 }}><ResumeSection title="Skills" theme={theme} compact><TagList items={resume.skills} theme={theme} /></ResumeSection></div><div style={{ background: '#ffffff', border: divider(theme), borderRadius: 18, padding: 16 }}><ResumeSection title="Education" theme={theme} compact><EducationItems items={resume.education} theme={theme} /></ResumeSection></div></div></div></div>;
}

export function ResumeTemplatePreview({ resume, templateId = 'classic', scale = 1 }) {
  const theme = templateThemes[templateId] || templateThemes.classic;
  const shellStyle = { background: theme.canvas, padding: 24 * scale, borderRadius: 24, boxShadow: '0 18px 48px rgba(15, 23, 42, 0.1)' };
  const innerStyle = { background: theme.surface, borderRadius: 22, color: theme.text, padding: 28 * scale, minHeight: 860 * scale, fontFamily: theme.bodyFont };
  const header = <header style={{ marginBottom: 24 }}><h1 style={{ margin: 0, fontFamily: theme.headingFont, fontSize: 32 * scale, lineHeight: 1.02, fontWeight: 700 }}>{formatName(resume.profile)}</h1>{resume.profile.headline ? <div style={{ color: theme.accent, fontWeight: 700, marginTop: 8 }}>{resume.profile.headline}</div> : null}<div style={{ marginTop: 10 }}><ContactRow resume={resume} theme={theme} /></div></header>;
  let content = null;
  if (theme.type === 'split') content = <SplitLayout resume={resume} theme={theme} asideTint={`${theme.accent}10`} />;
  if (theme.type === 'executive') content = <ExecutiveLayout resume={resume} theme={theme} />;
  if (theme.type === 'minimal') content = <MinimalLayout resume={resume} theme={theme} />;
  if (theme.type === 'creative') content = <CreativeLayout resume={resume} theme={theme} />;
  if (theme.type === 'classic') content = <ClassicLayout resume={resume} theme={theme} />;
  return <div style={shellStyle}><div style={innerStyle}>{header}{content}</div></div>;
}

