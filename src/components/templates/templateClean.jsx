import React from 'react';
import './templateClean.css';

const TemplateClean = ({ data }) => {
  const {
    personalDetails = {},
    summary = '',
    skills = [],
    workExperience = [],
    education = [],
  } = data;

  const { firstName, lastName, email, phone, linkedin, location } = personalDetails;

  return (
    <div className="resume-container clean-template">
      {/* Header */}
      <div className="resume-header clean-header">
        <h1 className="resume-name clean-name">{firstName} {lastName}</h1>
        <div className="resume-contact clean-contact">
          {email && <span>{email}</span>}
          {phone && <span>{phone}</span>}
          {location && <span>{location}</span>}
          {linkedin && <span>{linkedin}</span>}
        </div>
      </div>

      {/* Summary */}
      {summary && (
        <div className="resume-section clean-section">
          <h2 className="section-title clean-title">Summary</h2>
          <p className="section-content clean-content">{summary}</p>
        </div>
      )}

      {/* Experience */}
      {workExperience.length > 0 && (
        <div className="resume-section clean-section">
          <h2 className="section-title clean-title">Experience</h2>
          {workExperience.map((exp) => (
            <div key={exp.id} className="experience-item clean-experience">
              <div className="experience-header clean-header">
                <h3 className="experience-title clean-title">{exp.role}</h3>
                <span className="experience-date clean-date">{exp.startDate} - {exp.endDate || 'Present'}</span>
              </div>
              <div className="experience-company clean-company">{exp.company}</div>
              {exp.description && <p className="experience-description clean-description">{exp.description}</p>}
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {education.length > 0 && (
        <div className="resume-section clean-section">
          <h2 className="section-title clean-title">Education</h2>
          {education.map((edu) => (
            <div key={edu.id} className="education-item clean-education">
              <div className="education-header clean-header">
                <h3 className="education-degree clean-degree">{edu.degree}</h3>
                <span className="education-year clean-year">{edu.graduationYear}</span>
              </div>
              <div className="education-school clean-school">{edu.school}</div>
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <div className="resume-section clean-section">
          <h2 className="section-title clean-title">Skills</h2>
          <div className="skills-list clean-skills">
            {skills.map((skill, index) => (
              <span key={index} className="skill-tag clean-skill">{skill}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TemplateClean;
