import React from 'react';
import './templateBold.css';

const TemplateBold = ({ data }) => {
  const {
    personalDetails = {},
    summary = '',
    skills = [],
    workExperience = [],
    education = [],
  } = data;

  const { firstName, lastName, email, phone, linkedin, location } = personalDetails;

  return (
    <div className="resume-container bold-template">
      {/* Header */}
      <div className="resume-header bold-header">
        <h1 className="resume-name bold-name">{firstName} {lastName}</h1>
        <div className="resume-contact bold-contact">
          {email && <span>{email}</span>}
          {phone && <span>{phone}</span>}
          {location && <span>{location}</span>}
          {linkedin && <span>{linkedin}</span>}
        </div>
      </div>

      {/* Summary */}
      {summary && (
        <div className="resume-section bold-section">
          <h2 className="section-title bold-title">Summary</h2>
          <p className="section-content bold-content">{summary}</p>
        </div>
      )}

      {/* Experience */}
      {workExperience.length > 0 && (
        <div className="resume-section bold-section">
          <h2 className="section-title bold-title">Experience</h2>
          {workExperience.map((exp) => (
            <div key={exp.id} className="experience-item bold-experience">
              <div className="experience-header bold-header">
                <h3 className="experience-title bold-title">{exp.role}</h3>
                <span className="experience-date bold-date">{exp.startDate} - {exp.endDate || 'Present'}</span>
              </div>
              <div className="experience-company bold-company">{exp.company}</div>
              {exp.description && <p className="experience-description bold-description">{exp.description}</p>}
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {education.length > 0 && (
        <div className="resume-section bold-section">
          <h2 className="section-title bold-title">Education</h2>
          {education.map((edu) => (
            <div key={edu.id} className="education-item bold-education">
              <div className="education-header bold-header">
                <h3 className="education-degree bold-degree">{edu.degree}</h3>
                <span className="education-year bold-year">{edu.graduationYear}</span>
              </div>
              <div className="education-school bold-school">{edu.school}</div>
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <div className="resume-section bold-section">
          <h2 className="section-title bold-title">Skills</h2>
          <div className="skills-list bold-skills">
            {skills.map((skill, index) => (
              <span key={index} className="skill-tag bold-skill">{skill}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TemplateBold;
