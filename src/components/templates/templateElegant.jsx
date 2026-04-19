import React from 'react';
import './templateElegant.css';

const TemplateElegant = ({ data }) => {
  const {
    personalDetails = {},
    summary = '',
    skills = [],
    workExperience = [],
    education = [],
  } = data;

  const { firstName, lastName, email, phone, linkedin, location } = personalDetails;

  return (
    <div className="resume-container elegant-template">
      {/* Header */}
      <div className="resume-header elegant-header">
        <h1 className="resume-name elegant-name">{firstName} {lastName}</h1>
        <div className="resume-contact elegant-contact">
          {email && <span>{email}</span>}
          {phone && <span>{phone}</span>}
          {location && <span>{location}</span>}
          {linkedin && <span>{linkedin}</span>}
        </div>
      </div>

      {/* Summary */}
      {summary && (
        <div className="resume-section elegant-section">
          <h2 className="section-title elegant-title">Summary</h2>
          <p className="section-content elegant-content">{summary}</p>
        </div>
      )}

      {/* Experience */}
      {workExperience.length > 0 && (
        <div className="resume-section elegant-section">
          <h2 className="section-title elegant-title">Experience</h2>
          {workExperience.map((exp) => (
            <div key={exp.id} className="experience-item elegant-experience">
              <div className="experience-header elegant-header">
                <h3 className="experience-title elegant-title">{exp.role}</h3>
                <span className="experience-date elegant-date">{exp.startDate} - {exp.endDate || 'Present'}</span>
              </div>
              <div className="experience-company elegant-company">{exp.company}</div>
              {exp.description && <p className="experience-description elegant-description">{exp.description}</p>}
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {education.length > 0 && (
        <div className="resume-section elegant-section">
          <h2 className="section-title elegant-title">Education</h2>
          {education.map((edu) => (
            <div key={edu.id} className="education-item elegant-education">
              <div className="education-header elegant-header">
                <h3 className="education-degree elegant-degree">{edu.degree}</h3>
                <span className="education-year elegant-year">{edu.graduationYear}</span>
              </div>
              <div className="education-school elegant-school">{edu.school}</div>
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <div className="resume-section elegant-section">
          <h2 className="section-title elegant-title">Skills</h2>
          <div className="skills-list elegant-skills">
            {skills.map((skill, index) => (
              <span key={index} className="skill-tag elegant-skill">{skill}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TemplateElegant;
