import React from 'react';
import './templateCreative.css';

const TemplateCreative = ({ data }) => {
  const {
    personalDetails = {},
    summary = '',
    skills = [],
    workExperience = [],
    education = [],
  } = data;

  const { firstName, lastName, email, phone, linkedin, location } = personalDetails;

  return (
    <div className="resume-container creative-template">
      {/* Header */}
      <div className="resume-header creative-header">
        <h1 className="resume-name creative-name">{firstName} {lastName}</h1>
        <div className="resume-contact creative-contact">
          {email && <span>{email}</span>}
          {phone && <span>{phone}</span>}
          {location && <span>{location}</span>}
          {linkedin && <span>{linkedin}</span>}
        </div>
      </div>

      {/* Summary */}
      {summary && (
        <div className="resume-section creative-section">
          <h2 className="section-title creative-title">Summary</h2>
          <p className="section-content creative-content">{summary}</p>
        </div>
      )}

      {/* Experience */}
      {workExperience.length > 0 && (
        <div className="resume-section creative-section">
          <h2 className="section-title creative-title">Experience</h2>
          {workExperience.map((exp) => (
            <div key={exp.id} className="experience-item creative-experience">
              <div className="experience-header creative-header">
                <h3 className="experience-title creative-title">{exp.role}</h3>
                <span className="experience-date creative-date">{exp.startDate} - {exp.endDate || 'Present'}</span>
              </div>
              <div className="experience-company creative-company">{exp.company}</div>
              {exp.description && <p className="experience-description creative-description">{exp.description}</p>}
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {education.length > 0 && (
        <div className="resume-section creative-section">
          <h2 className="section-title creative-title">Education</h2>
          {education.map((edu) => (
            <div key={edu.id} className="education-item creative-education">
              <div className="education-header creative-header">
                <h3 className="education-degree creative-degree">{edu.degree}</h3>
                <span className="education-year creative-year">{edu.graduationYear}</span>
              </div>
              <div className="education-school creative-school">{edu.school}</div>
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <div className="resume-section creative-section">
          <h2 className="section-title creative-title">Skills</h2>
          <div className="skills-list creative-skills">
            {skills.map((skill, index) => (
              <span key={index} className="skill-tag creative-skill">{skill}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TemplateCreative;
