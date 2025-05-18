// Template2.jsx
import React from 'react';
import './template2.css';

const Template2 = ({ data }) => {
  const {
    personalDetails = {},
    summary = '',
    skills = [],
    workExperience = [],
    education = [],
  } = data;

  const {
    firstName,
    lastName,
    email,
    phone,
    linkedin,
  } = personalDetails;

  return (
    <div className="container">
      <div className="resume-header text-center rounded">
        <div className="row">
          <div className="col text-start">
            <h1 className='text-center'>{firstName} {lastName}</h1>
            <p className="text-center lead">{summary}</p>
            <p className="text-center lead">
              Email: {email} | Phone: {phone} | LinkedIn: {linkedin}
            </p>
          </div>
        </div>
      </div>

      <div className="resume-section">
        <div style={{ fontSize: '1.9vmin' }} className="section-title">Skills</div>
        <ul className="list-inline">
          {skills.map((skill, index) => (
            <li key={index} className="list-inline-item badge bg-primary">
              {skill}
            </li>
          ))}
        </ul>
      </div>

      <div className="resume-section">
        <div style={{ fontSize: '1.9vmin' }} className="section-title">Experience</div>
        {workExperience.map((exp, index) => (
          <div key={index}>
            <h5 style={{ fontSize: '1.9vmin' }}>{exp.jobTitle} - {exp.company}</h5>
            <p><small>{exp.startDate} – {exp.endDate}</small></p>
            <ul>
              {exp.description && exp.description.split('\n').map((line, idx) => (
                <li key={idx}>{line}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="resume-section">
        <div style={{ fontSize: '1.9vmin' }} className="section-title">Education</div>
        {education.map((edu, index) => (
          <div key={index}>
            <h5 style={{ fontSize: '1.9vmin' }}>{edu.degree}</h5>
            <p><small>{edu.institution}, {edu.startDate} – {edu.endDate}</small></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Template2;
