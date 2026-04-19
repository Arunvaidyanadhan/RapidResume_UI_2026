import React from 'react';
import './templateModern.css';

const TemplateModern = ({ data }) => {
  const {
    personalDetails = {},
    summary = '',
    skills = [],
    workExperience = [],
    education = [],
  } = data;

  const { firstName, lastName, email, phone, linkedin, location } = personalDetails;

  return (
    <div className="resume-container modern-template">
      {/* Header */}
      <div className="resume-header modern-header">
        <h1 className="resume-name modern-name">{firstName} {lastName}</h1>
        <div className="resume-contact modern-contact">
          {email && <span>{email}</span>}
          {phone && <span>{phone}</span>}
          {location && <span>{location}</span>}
          {linkedin && <span>{linkedin}</span>}
        </div>
      </div>

      {/* Summary */}
      {summary && (
        <div className="resume-section modern-section">
          <h2 className="section-title modern-title">Summary</h2>
          <p className="section-content modern-content">{summary}</p>
        </div>
      )}

      {/* Experience */}
      {workExperience.length > 0 && (
        <div className="resume-section modern-section">
          <h2 className="section-title modern-title">Experience</h2>
          {workExperience.map((exp) => (
            <div key={exp.id} className="experience-item modern-experience">
              <div className="experience-header modern-header">
                <h3 className="experience-title modern-title">{exp.role}</h3>
                <span className="experience-date modern-date">{exp.startDate} - {exp.endDate || 'Present'}</span>
              </div>
              <div className="experience-company modern-company">{exp.company}</div>
              {exp.description && <p className="experience-description modern-description">{exp.description}</p>}
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {education.length > 0 && (
        <div className="resume-section modern-section">
          <h2 className="section-title modern-title">Education</h2>
          {education.map((edu) => (
            <div key={edu.id} className="education-item modern-education">
              <div className="education-header modern-header">
                <h3 className="education-degree modern-degree">{edu.degree}</h3>
                <span className="education-year modern-year">{edu.graduationYear}</span>
              </div>
              <div className="education-school modern-school">{edu.school}</div>
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <div className="resume-section modern-section">
          <h2 className="section-title modern-title">Skills</h2>
          <div className="skills-list modern-skills">
            {skills.map((skill, index) => (
              <span key={index} className="skill-tag modern-skill">{skill}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TemplateModern;
