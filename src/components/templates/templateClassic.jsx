import React from 'react';
import './templateClassic.css';

const TemplateClassic = ({ data }) => {
  const {
    personalDetails = {},
    summary = '',
    skills = [],
    workExperience = [],
    education = [],
  } = data;

  const { firstName, lastName, email, phone, linkedin, location } = personalDetails;

  return (
    <div className="resume-container classic-template">
      {/* Header */}
      <div className="resume-header classic-header">
        <h1 className="resume-name classic-name">{firstName} {lastName}</h1>
        <div className="resume-contact classic-contact">
          {email && <span>{email}</span>}
          {phone && <span>{phone}</span>}
          {location && <span>{location}</span>}
          {linkedin && <span>{linkedin}</span>}
        </div>
      </div>

      {/* Summary */}
      {summary && (
        <div className="resume-section classic-section">
          <h2 className="section-title classic-title">Summary</h2>
          <p className="section-content classic-content">{summary}</p>
        </div>
      )}

      {/* Experience */}
      {workExperience.length > 0 && (
        <div className="resume-section classic-section">
          <h2 className="section-title classic-title">Experience</h2>
          {workExperience.map((exp) => (
            <div key={exp.id} className="experience-item classic-experience">
              <div className="experience-header classic-header">
                <h3 className="experience-title classic-title">{exp.role}</h3>
                <span className="experience-date classic-date">{exp.startDate} - {exp.endDate || 'Present'}</span>
              </div>
              <div className="experience-company classic-company">{exp.company}</div>
              {exp.description && <p className="experience-description classic-description">{exp.description}</p>}
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {education.length > 0 && (
        <div className="resume-section classic-section">
          <h2 className="section-title classic-title">Education</h2>
          {education.map((edu) => (
            <div key={edu.id} className="education-item classic-education">
              <div className="education-header classic-header">
                <h3 className="education-degree classic-degree">{edu.degree}</h3>
                <span className="education-year classic-year">{edu.graduationYear}</span>
              </div>
              <div className="education-school classic-school">{edu.school}</div>
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <div className="resume-section classic-section">
          <h2 className="section-title classic-title">Skills</h2>
          <div className="skills-list classic-skills">
            {skills.map((skill, index) => (
              <span key={index} className="skill-tag classic-skill">{skill}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TemplateClassic;
