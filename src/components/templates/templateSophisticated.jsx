import React from 'react';
import './templateSophisticated.css';

const TemplateSophisticated = ({ data }) => {
  const {
    personalDetails = {},
    summary = '',
    skills = [],
    workExperience = [],
    education = [],
  } = data;

  const { firstName, lastName, email, phone, linkedin, location } = personalDetails;

  return (
    <div className="resume-container sophisticated-template">
      {/* Header */}
      <div className="resume-header sophisticated-header">
        <h1 className="resume-name sophisticated-name">{firstName} {lastName}</h1>
        <div className="resume-contact sophisticated-contact">
          {email && <span>{email}</span>}
          {phone && <span>{phone}</span>}
          {location && <span>{location}</span>}
          {linkedin && <span>{linkedin}</span>}
        </div>
      </div>

      {/* Summary */}
      {summary && (
        <div className="resume-section sophisticated-section">
          <h2 className="section-title sophisticated-title">Executive Summary</h2>
          <p className="section-content sophisticated-content">{summary}</p>
        </div>
      )}

      {/* Experience */}
      {workExperience.length > 0 && (
        <div className="resume-section sophisticated-section">
          <h2 className="section-title sophisticated-title">Professional Experience</h2>
          {workExperience.map((exp) => (
            <div key={exp.id} className="experience-item sophisticated-experience">
              <div className="experience-header sophisticated-header">
                <h3 className="experience-title sophisticated-title">{exp.role}</h3>
                <span className="experience-date sophisticated-date">{exp.startDate} - {exp.endDate || 'Present'}</span>
              </div>
              <div className="experience-company sophisticated-company">{exp.company}</div>
              {exp.description && <p className="experience-description sophisticated-description">{exp.description}</p>}
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {education.length > 0 && (
        <div className="resume-section sophisticated-section">
          <h2 className="section-title sophisticated-title">Education</h2>
          {education.map((edu) => (
            <div key={edu.id} className="education-item sophisticated-education">
              <div className="education-header sophisticated-header">
                <h3 className="education-degree sophisticated-degree">{edu.degree}</h3>
                <span className="education-year sophisticated-year">{edu.graduationYear}</span>
              </div>
              <div className="education-school sophisticated-school">{edu.school}</div>
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <div className="resume-section sophisticated-section">
          <h2 className="section-title sophisticated-title">Core Competencies</h2>
          <div className="skills-list sophisticated-skills">
            {skills.map((skill, index) => (
              <span key={index} className="skill-tag sophisticated-skill">{skill}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TemplateSophisticated;
