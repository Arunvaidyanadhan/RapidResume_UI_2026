import React from 'react';
import './templateProfessional.css';

const TemplateProfessional = ({ data }) => {
  const {
    personalDetails = {},
    summary = '',
    skills = [],
    workExperience = [],
    education = [],
  } = data;

  const { firstName, lastName, email, phone, linkedin, location } = personalDetails;

  return (
    <div className="resume-container professional-template">
      {/* Header */}
      <div className="resume-header">
        <h1 className="resume-name">{firstName} {lastName}</h1>
        <div className="resume-contact">
          {email && <span>{email}</span>}
          {phone && <span>{phone}</span>}
          {location && <span>{location}</span>}
          {linkedin && <span>{linkedin}</span>}
        </div>
      </div>

      {/* Summary */}
      {summary && (
        <div className="resume-section">
          <h2 className="section-title">Professional Summary</h2>
          <p className="section-content">{summary}</p>
        </div>
      )}

      {/* Experience */}
      {workExperience.length > 0 && (
        <div className="resume-section">
          <h2 className="section-title">Work Experience</h2>
          {workExperience.map((exp) => (
            <div key={exp.id} className="experience-item">
              <div className="experience-header">
                <h3 className="experience-title">{exp.role}</h3>
                <span className="experience-date">{exp.startDate} - {exp.endDate || 'Present'}</span>
              </div>
              <div className="experience-company">{exp.company}</div>
              {exp.description && <p className="experience-description">{exp.description}</p>}
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {education.length > 0 && (
        <div className="resume-section">
          <h2 className="section-title">Education</h2>
          {education.map((edu) => (
            <div key={edu.id} className="education-item">
              <div className="education-header">
                <h3 className="education-degree">{edu.degree}</h3>
                <span className="education-year">{edu.graduationYear}</span>
              </div>
              <div className="education-school">{edu.school}</div>
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <div className="resume-section">
          <h2 className="section-title">Skills</h2>
          <div className="skills-list">
            {skills.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TemplateProfessional;
