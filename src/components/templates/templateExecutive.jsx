import React from 'react';
import './templateExecutive.css';

const TemplateExecutive = ({ data }) => {
  const {
    personalDetails = {},
    summary = '',
    skills = [],
    workExperience = [],
    education = [],
  } = data;

  const { firstName, lastName, email, phone, linkedin, location } = personalDetails;

  return (
    <div className="resume-container executive-template">
      {/* Header */}
      <div className="resume-header executive-header">
        <h1 className="resume-name executive-name">{firstName} {lastName}</h1>
        <div className="resume-contact executive-contact">
          {email && <span>{email}</span>}
          {phone && <span>{phone}</span>}
          {location && <span>{location}</span>}
          {linkedin && <span>{linkedin}</span>}
        </div>
      </div>

      {/* Summary */}
      {summary && (
        <div className="resume-section executive-section">
          <h2 className="section-title executive-title">Executive Summary</h2>
          <p className="section-content executive-content">{summary}</p>
        </div>
      )}

      {/* Experience */}
      {workExperience.length > 0 && (
        <div className="resume-section executive-section">
          <h2 className="section-title executive-title">Professional Experience</h2>
          {workExperience.map((exp) => (
            <div key={exp.id} className="experience-item executive-experience">
              <div className="experience-header executive-header">
                <h3 className="experience-title executive-title">{exp.role}</h3>
                <span className="experience-date executive-date">{exp.startDate} - {exp.endDate || 'Present'}</span>
              </div>
              <div className="experience-company executive-company">{exp.company}</div>
              {exp.description && <p className="experience-description executive-description">{exp.description}</p>}
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {education.length > 0 && (
        <div className="resume-section executive-section">
          <h2 className="section-title executive-title">Education</h2>
          {education.map((edu) => (
            <div key={edu.id} className="education-item executive-education">
              <div className="education-header executive-header">
                <h3 className="education-degree executive-degree">{edu.degree}</h3>
                <span className="education-year executive-year">{edu.graduationYear}</span>
              </div>
              <div className="education-school executive-school">{edu.school}</div>
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <div className="resume-section executive-section">
          <h2 className="section-title executive-title">Core Competencies</h2>
          <div className="skills-list executive-skills">
            {skills.map((skill, index) => (
              <span key={index} className="skill-tag executive-skill">{skill}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TemplateExecutive;
