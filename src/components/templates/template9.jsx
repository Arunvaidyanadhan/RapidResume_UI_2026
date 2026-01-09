import React from 'react';

const Template9 = ({ data }) => {
  const {
    personalDetails = {},
    summary = '',
    skills = [],
    workExperience = [],
    education = [],
    projects = [],
    certifications = [],
  } = data || {};

  const fullName = `${personalDetails.firstName || ''} ${personalDetails.lastName || ''}`.trim() || 'Resume';
  const title = personalDetails.title || '';

  const contactParts = [
    personalDetails.email,
    personalDetails.phone,
    [personalDetails.address, personalDetails.city, personalDetails.state].filter(Boolean).join(', '),
    personalDetails.linkedin,
    personalDetails.website,
  ].filter(Boolean);

  const renderBullets = (text) => {
    if (!text) return null;
    const lines = String(text)
      .split('\n')
      .map((l) => l.replace(/^\s*[•\-]\s?/, '').trim())
      .filter(Boolean);
    if (!lines.length) return null;
    return (
      <ul style={{ margin: '6px 0 0', paddingLeft: 16 }}>
        {lines.map((line, idx) => (
          <li key={idx} style={{ marginBottom: 3 }}>{line}</li>
        ))}
      </ul>
    );
  };

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
    <div style={{ padding: 18, fontFamily: 'Arial, sans-serif', color: '#111', fontSize: 12, lineHeight: 1.45 }}>
      <header
        style={{
          marginBottom: 10,
          border: '1px solid #d9d9d9',
          borderRadius: 12,
          padding: '12px 14px',
          background: 'linear-gradient(135deg, rgba(79,70,229,0.10) 0%, rgba(255,255,255,1) 55%)',
        }}
      >
        <h1 style={{ margin: 0, fontSize: 22, fontWeight: 800, letterSpacing: '-0.01em' }}>{fullName}</h1>
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

      {projects.length ? (
        <Section title="Projects">
          {projects.map((p, idx) => (
            <div
              key={idx}
              style={{
                marginBottom: 10,
                border: '1px solid #d9d9d9',
                borderRadius: 10,
                padding: '10px 12px',
                breakInside: 'avoid',
              }}
            >
              <div style={{ fontWeight: 800 }}>{p.name}</div>
              {p.link ? <div style={{ marginTop: 2, fontSize: 11, color: '#444' }}>{p.link}</div> : null}
              {p.description ? <div style={{ marginTop: 6, color: '#555', whiteSpace: 'pre-wrap' }}>{p.description}</div> : null}
            </div>
          ))}
        </Section>
      ) : null}

      {skills.length ? (
        <Section title="Skills">
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {skills.map((s, i) => (
              <Tag key={i}>{typeof s === 'string' ? s : (s?.name || '')}</Tag>
            ))}
          </div>
        </Section>
      ) : null}

      {workExperience.length ? (
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
              {renderBullets(exp.description)}
            </div>
          ))}
        </Section>
      ) : null}

      {education.length ? (
        <Section title="Education">
          {education.map((e, idx) => (
            <div key={idx} style={{ marginBottom: 10, breakInside: 'avoid' }}>
              <div style={{ fontWeight: 800 }}>
                {e.degree}
                {e.fieldOfStudy ? ` — ${e.fieldOfStudy}` : ''}
              </div>
              <div style={{ marginTop: 2, fontSize: 11, color: '#444' }}>
                {e.school}
                {e.startDate ? ` · ${e.startDate}` : ''}
                {e.endDate ? ` – ${e.endDate}` : ''}
              </div>
            </div>
          ))}
        </Section>
      ) : null}

      {certifications.length ? (
        <Section title="Certifications">
          {certifications.map((c, idx) => (
            <div key={idx} style={{ marginBottom: 10, breakInside: 'avoid' }}>
              <div style={{ fontWeight: 800 }}>{c.name}</div>
              <div style={{ marginTop: 2, fontSize: 11, color: '#444' }}>
                {c.issuer}
                {c.year ? ` · ${c.year}` : ''}
              </div>
            </div>
          ))}
        </Section>
      ) : null}
    </div>
  );
};

export default Template9;