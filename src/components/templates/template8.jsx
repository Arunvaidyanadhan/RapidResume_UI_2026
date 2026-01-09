import React from 'react';
import './template8.css';

const Template8 = ({ data }) => {
  const {
    personalDetails = {},
    summary = '',
    skills = [],
    workExperience = [],
    education = [],
    projects = [],
  } = data || {};

  const fullName = `${personalDetails.firstName || ''} ${personalDetails.lastName || ''}`.trim();
  const displayName = fullName || 'Resume';

  const addressLine = [personalDetails.address, personalDetails.city, personalDetails.state]
    .filter(Boolean)
    .join(', ');

  const title = personalDetails.title || '';

  const contactParts = [
    personalDetails.email,
    personalDetails.phone,
    addressLine,
    personalDetails.linkedin,
    personalDetails.website,
  ].filter(Boolean);

  const Section = ({ title: sectionTitle, children }) => (
    <section style={{ marginTop: 14 }}>
      <div
        style={{
          margin: '0 0 8px',
          fontSize: 12,
          fontWeight: 800,
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          borderBottom: '1px solid #d9d9d9',
          paddingBottom: 4,
        }}
      >
        {sectionTitle}
      </div>
      {children}
    </section>
  );

  const Tag = ({ children }) => (
    <span
      style={{
        display: 'inline-flex',
        border: '1px solid #d9d9d9',
        borderRadius: 999,
        padding: '3px 7px',
        fontSize: 11,
        marginRight: 6,
        marginBottom: 6,
        background: '#fff',
      }}
    >
      {children}
    </span>
  );

  return (
    <div className="rr-template8-root" style={{ padding: 18, fontFamily: 'Arial, sans-serif', color: '#111', fontSize: 12, lineHeight: 1.45 }}>
      <header style={{ marginBottom: 10 }}>
        <h1 style={{ margin: 0, fontSize: 22, fontWeight: 800, letterSpacing: '-0.01em' }}>{displayName}</h1>
        {title ? <div style={{ marginTop: 4, fontSize: 12, fontWeight: 700, color: '#333' }}>{title}</div> : null}
        {contactParts.length ? (
          <div style={{ marginTop: 6, fontSize: 11, color: '#444' }}>{contactParts.join(' · ')}</div>
        ) : null}
      </header>

      {summary ? (
        <Section title="Summary">
          <div style={{ color: '#555', whiteSpace: 'pre-wrap' }}>{summary}</div>
        </Section>
      ) : null}

      {education.length > 0 ? (
        <Section title="Education">
          {education.map((edu, idx) => (
            <div key={idx} style={{ marginBottom: 10, breakInside: 'avoid' }}>
              <div style={{ fontWeight: 800 }}>
                {edu.degree}
                {edu.fieldOfStudy ? ` — ${edu.fieldOfStudy}` : ''}
              </div>
              <div style={{ marginTop: 2, fontSize: 11, color: '#444' }}>
                {edu.school}
                {edu.startDate ? ` · ${edu.startDate}` : ''}
                {edu.endDate ? ` – ${edu.endDate}` : ''}
              </div>
            </div>
          ))}
        </Section>
      ) : null}

      {projects.length > 0 ? (
        <Section title="Projects">
          {projects.map((p, idx) => (
            <div key={idx} style={{ marginBottom: 10, breakInside: 'avoid' }}>
              <div style={{ fontWeight: 800 }}>{p.name}</div>
              {p.link ? <div style={{ marginTop: 2, fontSize: 11, color: '#444' }}>{p.link}</div> : null}
              {p.description ? <div style={{ marginTop: 4, color: '#555', whiteSpace: 'pre-wrap' }}>{p.description}</div> : null}
            </div>
          ))}
        </Section>
      ) : null}

      {skills.length > 0 ? (
        <Section title="Skills">
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {skills.map((s, i) => (
              <Tag key={i}>{typeof s === 'string' ? s : (s?.name || '')}</Tag>
            ))}
          </div>
        </Section>
      ) : null}

      {workExperience.length > 0 ? (
        <Section title="Experience">
          {workExperience.map((exp, idx) => (
            <div key={idx} style={{ marginBottom: 10, breakInside: 'avoid' }}>
              <div style={{ fontWeight: 800 }}>
                {(exp.jobTitle || '').trim()}
                {exp.employer ? ` — ${exp.employer}` : ''}
              </div>
              <div style={{ marginTop: 2, fontSize: 11, color: '#444' }}>
                {exp.startDate ? exp.startDate : ''}
                {(exp.startDate || exp.endDate || exp.current) ? ' – ' : ''}
                {exp.current ? 'Present' : (exp.endDate || '')}
              </div>
              {exp.description ? (
                <div style={{ marginTop: 4, color: '#555', whiteSpace: 'pre-wrap' }}>{exp.description}</div>
              ) : null}
            </div>
          ))}
        </Section>
      ) : null}
    </div>
  );
};

export default Template8;