// Template2.jsx
import React from 'react';
import './template8.css';

const Template8 = ({ data }) => {
  const {
    personalDetails = {},
    summary = '',
    skills = [],
    workExperience = [],
    education = [],
  } = data || {};

  const fullName = `${personalDetails.firstName || ''} ${personalDetails.lastName || ''}`.trim();
  const displayName = fullName || 'Resume';

  const addressLine = [personalDetails.address, personalDetails.city, personalDetails.state]
    .filter(Boolean)
    .join(', ');

  return (
    <>
      <header
        style={{ backgroundColor: 'rgba(86, 49, 57, 0.7)', height: '200px', color: 'white', padding: '10px', display: 'flex' }}
        className=""
      >
        <div className="col">
          <h4 className="mb-1">{displayName}</h4>
          <img
            alt="Profile"
            src={
              personalDetails.image ||
              'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            }
            className=""
            style={{ width: '200px', height: '200px', borderRadius: '50%', zIndex: '2', position: 'absolute', right: '280px', top: '90px', border: '20px solid white', padding: '10px', objectFit: 'cover' }}
          />
        </div>
        <div className="col">
          <ul>
            {personalDetails.phone ? (
              <li className="list-group-item"><i className="fa-solid fa-mobile-screen mx-2"></i>{personalDetails.phone}</li>
            ) : null}
            {personalDetails.email ? (
              <li className="list-group-item"><i className="fa-solid fa-envelope mx-2"></i>{personalDetails.email}</li>
            ) : null}
            {addressLine ? (
              <li className="list-group-item"><i className="fa-solid fa-house-user mx-2"></i>{addressLine}</li>
            ) : null}
          </ul>
        </div>
      </header>

      {summary ? (
        <div className="resume-section mt-5">
          <div className="section-title">Summary</div>
          <p style={{ whiteSpace: 'pre-wrap' }}>{summary}</p>
        </div>
      ) : null}

      {skills.length > 0 ? (
        <div className="resume-section">
          <div style={{ fontSize: '1.9vmin' }} className="section-title">Skills</div>
          <ul className="list-inline">
            {skills.map((s, i) => (
              <li key={i} className="list-inline-item badge bg-primary">{typeof s === 'string' ? s : (s?.name || '')}</li>
            ))}
          </ul>
        </div>
      ) : null}

      {workExperience.length > 0 ? (
        <div className="resume-section">
          <div style={{ fontSize: '1.9vmin' }} className="section-title">Experience</div>
          {workExperience.map((exp, idx) => (
            <div key={idx}>
              <h5 style={{ fontSize: '1.9vmin' }}>{exp.jobTitle} - {exp.employer}</h5>
              <p><small>{exp.startDate} – {exp.current ? 'Present' : exp.endDate}</small></p>
              {exp.description ? (
                <p style={{ whiteSpace: 'pre-wrap' }}>{exp.description}</p>
              ) : null}
            </div>
          ))}
        </div>
      ) : null}

      {education.length > 0 ? (
        <div className="resume-section">
          <div style={{ fontSize: '1.9vmin' }} className="section-title">Education</div>
          {education.map((edu, idx) => (
            <div key={idx}>
              <h5 style={{ fontSize: '1.9vmin' }}>{edu.degree} {edu.fieldOfStudy}</h5>
              <p><small>{edu.school}, {edu.startDate} – {edu.current ? 'Present' : edu.endDate}</small></p>
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default Template8;