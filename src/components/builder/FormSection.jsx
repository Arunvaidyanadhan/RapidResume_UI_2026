/**
 * ============================================
 * FormSection.jsx
 * ============================================
 * Main form container component
 * Wraps all form sections (Personal, Experience, Education, etc.)
 * using SectionCard components for consistent expand/collapse behavior
 */

import React from 'react';
import SectionCard from './SectionCard';
import './FormSection.css';

export default function FormSection({
  resume = {},
  expandedSections = {},
  onToggleSection = () => {},
  updateProfileField = () => {},
  updateListItem = () => {},
  addListItem = () => {},
  removeListItem = () => {},
}) {
  const renderPersonalSection = () => {
    const profile = resume.profile || {};

    return (
      <div className="form-fields-container">
        <div className="form-row">
          <div className="form-field">
            <label className="form-label">First name</label>
            <input
              type="text"
              className="form-input"
              value={profile.firstName || ''}
              onChange={(e) => updateProfileField('firstName', e.target.value)}
              placeholder="John"
              aria-label="First name"
            />
          </div>
          <div className="form-field">
            <label className="form-label">Last name</label>
            <input
              type="text"
              className="form-input"
              value={profile.lastName || ''}
              onChange={(e) => updateProfileField('lastName', e.target.value)}
              placeholder="Doe"
              aria-label="Last name"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-field">
            <label className="form-label">Professional title</label>
            <input
              type="text"
              className="form-input"
              value={profile.headline || ''}
              onChange={(e) => updateProfileField('headline', e.target.value)}
              placeholder="Senior Product Engineer"
              aria-label="Professional title"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-field">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-input"
              value={profile.email || ''}
              onChange={(e) => updateProfileField('email', e.target.value)}
              placeholder="john@example.com"
              aria-label="Email"
            />
          </div>
          <div className="form-field">
            <label className="form-label">Phone</label>
            <input
              type="tel"
              className="form-input"
              value={profile.phone || ''}
              onChange={(e) => updateProfileField('phone', e.target.value)}
              placeholder="+1 (555) 123-4567"
              aria-label="Phone"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-field">
            <label className="form-label">Location</label>
            <input
              type="text"
              className="form-input"
              value={profile.location || ''}
              onChange={(e) => updateProfileField('location', e.target.value)}
              placeholder="San Francisco, CA"
              aria-label="Location"
            />
          </div>
        </div>

        <div className="form-field">
          <label className="form-label">Professional summary</label>
          <textarea
            className="form-input form-textarea"
            value={profile.summary || ''}
            onChange={(e) => updateProfileField('summary', e.target.value)}
            placeholder="Brief description of your professional background and key achievements..."
            aria-label="Professional summary"
          />
        </div>
      </div>
    );
  };

  const renderExperienceSection = () => {
    const experience = resume.experience || [];

    return (
      <div className="form-fields-container">
        {experience.length > 0 ? (
          <>
            {experience.map((exp, idx) => (
              <div key={exp.id} className="form-item">
                <div className="form-item-header">
                  <h4 className="form-item-title">{exp.company || `Position ${idx + 1}`}</h4>
                  <button
                    type="button"
                    className="form-item-delete"
                    onClick={() => removeListItem('experience', exp.id)}
                    aria-label={`Remove ${exp.company} experience`}
                  >
                    ✕
                  </button>
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label className="form-label">Role</label>
                    <input
                      type="text"
                      className="form-input"
                      value={exp.role || ''}
                      onChange={(e) => updateListItem('experience', exp.id, 'role', e.target.value)}
                      placeholder="Senior Product Engineer"
                    />
                  </div>
                  <div className="form-field">
                    <label className="form-label">Company</label>
                    <input
                      type="text"
                      className="form-input"
                      value={exp.company || ''}
                      onChange={(e) => updateListItem('experience', exp.id, 'company', e.target.value)}
                      placeholder="Company Name"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label className="form-label">Start date</label>
                    <input
                      type="text"
                      className="form-input"
                      value={exp.startDate || ''}
                      onChange={(e) => updateListItem('experience', exp.id, 'startDate', e.target.value)}
                      placeholder="Jan 2020"
                    />
                  </div>
                  <div className="form-field">
                    <label className="form-label">End date</label>
                    <input
                      type="text"
                      className="form-input"
                      value={exp.endDate || ''}
                      onChange={(e) => updateListItem('experience', exp.id, 'endDate', e.target.value)}
                      placeholder="Present"
                    />
                  </div>
                </div>
              </div>
            ))}
            <button type="button" className="form-add-button" onClick={() => addListItem('experience')}>
              + Add experience
            </button>
          </>
        ) : (
          <button type="button" className="form-add-button" onClick={() => addListItem('experience')}>
            + Add experience
          </button>
        )}
      </div>
    );
  };

  return (
    <div className="form-section">
      <SectionCard
        id="personal"
        title="Personal Details"
        icon="👤"
        required={true}
        isExpanded={expandedSections.personal !== false}
        onToggle={() => onToggleSection('personal')}
      >
        {renderPersonalSection()}
      </SectionCard>

      <SectionCard
        id="experience"
        title="Work Experience"
        icon="💼"
        required={true}
        isExpanded={expandedSections.experience !== false}
        onToggle={() => onToggleSection('experience')}
      >
        {renderExperienceSection()}
      </SectionCard>

      <SectionCard
        id="education"
        title="Education"
        icon="🎓"
        isExpanded={expandedSections.education === true}
        onToggle={() => onToggleSection('education')}
      >
        <div className="form-fields-container">
          {(resume.education || []).map((edu) => (
            <div key={edu.id} className="form-item">
              <div className="form-item-header">
                <h4 className="form-item-title">{edu.school || `Education`}</h4>
                <button
                  className="form-item-delete"
                  onClick={() => removeListItem('education', edu.id)}
                  aria-label="Remove education"
                  type="button"
                >
                  ✕
                </button>
              </div>
              <div className="form-row">
                <div className="form-field">
                  <label className="form-label">School/University</label>
                  <input
                    type="text"
                    className="form-input"
                    value={edu.school || ''}
                    onChange={(e) => updateListItem('education', edu.id, 'school', e.target.value)}
                    placeholder="Stanford University"
                  />
                </div>
                <div className="form-field">
                  <label className="form-label">Degree</label>
                  <input
                    type="text"
                    className="form-input"
                    value={edu.degree || ''}
                    onChange={(e) => updateListItem('education', edu.id, 'degree', e.target.value)}
                    placeholder="Bachelor of Science"
                  />
                </div>
              </div>
            </div>
          ))}
          <button 
            type="button"
            className="form-add-button" 
            onClick={() => addListItem('education')}
          >
            + Add Education
          </button>
        </div>
      </SectionCard>

      <SectionCard
        id="skills"
        title="Skills"
        icon="⭐"
        isExpanded={expandedSections.skills === true}
        onToggle={() => onToggleSection('skills')}
      >
        <div className="form-fields-container">
          {(resume.skills || []).map((skill) => (
            <div key={skill.id} className="form-item">
              <div className="form-item-header">
                <h4 className="form-item-title">{skill.name || `Skill`}</h4>
                <button
                  type="button"
                  className="form-item-delete"
                  onClick={() => removeListItem('skills', skill.id)}
                  aria-label="Remove skill"
                >
                  ✕
                </button>
              </div>
              <div className="form-field">
                <input
                  type="text"
                  className="form-input"
                  value={skill.name || ''}
                  onChange={(e) => updateListItem('skills', skill.id, 'name', e.target.value)}
                  placeholder="e.g., JavaScript, React, etc."
                />
              </div>
            </div>
          ))}
          <button type="button" className="form-add-button" onClick={() => addListItem('skills')}>
            + Add Skill
          </button>
        </div>
      </SectionCard>

      <SectionCard
        id="certifications"
        title="Certifications"
        icon="📜"
        isExpanded={expandedSections.certifications === true}
        onToggle={() => onToggleSection('certifications')}
      >
        <div className="form-fields-container">
          {(resume.certifications || []).map((cert) => (
            <div key={cert.id} className="form-item">
              <div className="form-item-header">
                <h4 className="form-item-title">{cert.name || `Certification`}</h4>
                <button
                  type="button"
                  className="form-item-delete"
                  onClick={() => removeListItem('certifications', cert.id)}
                  aria-label="Remove certification"
                >
                  ✕
                </button>
              </div>
              <div className="form-field">
                <label className="form-label">Certification Name</label>
                <input
                  type="text"
                  className="form-input"
                  value={cert.name || ''}
                  onChange={(e) => updateListItem('certifications', cert.id, 'name', e.target.value)}
                  placeholder="AWS Certified Solutions Architect"
                />
              </div>
            </div>
          ))}
          <button type="button" className="form-add-button" onClick={() => addListItem('certifications')}>
            + Add Certification
          </button>
        </div>
      </SectionCard>

      <SectionCard
        id="languages"
        title="Languages"
        icon="🌐"
        isExpanded={expandedSections.languages === true}
        onToggle={() => onToggleSection('languages')}
      >
        <div className="form-fields-container">
          {(resume.languages || []).map((lang) => (
            <div key={lang.id} className="form-item">
              <div className="form-item-header">
                <h4 className="form-item-title">{lang.name || `Language`}</h4>
                <button
                  type="button"
                  className="form-item-delete"
                  onClick={() => removeListItem('languages', lang.id)}
                  aria-label="Remove language"
                >
                  ✕
                </button>
              </div>
              <div className="form-field">
                <input
                  type="text"
                  className="form-input"
                  value={lang.name || ''}
                  onChange={(e) => updateListItem('languages', lang.id, 'name', e.target.value)}
                  placeholder="e.g., English, Spanish, etc."
                />
              </div>
            </div>
          ))}
          <button type="button" className="form-add-button" onClick={() => addListItem('languages')}>
            + Add Language
          </button>
        </div>
      </SectionCard>

      <SectionCard
        id="projects"
        title="Projects"
        icon="🚀"
        isExpanded={expandedSections.projects === true}
        onToggle={() => onToggleSection('projects')}
      >
        <div className="form-fields-container">
          {(resume.projects || []).map((proj) => (
            <div key={proj.id} className="form-item">
              <div className="form-item-header">
                <h4 className="form-item-title">{proj.title || `Project`}</h4>
                <button
                  type="button"
                  className="form-item-delete"
                  onClick={() => removeListItem('projects', proj.id)}
                  aria-label="Remove project"
                >
                  ✕
                </button>
              </div>
              <div className="form-field">
                <label className="form-label">Project Title</label>
                <input
                  type="text"
                  className="form-input"
                  value={proj.title || ''}
                  onChange={(e) => updateListItem('projects', proj.id, 'title', e.target.value)}
                  placeholder="Project name"
                />
              </div>
              <div className="form-field">
                <label className="form-label">Description</label>
                <textarea
                  className="form-input form-textarea"
                  value={proj.description || ''}
                  onChange={(e) => updateListItem('projects', proj.id, 'description', e.target.value)}
                  placeholder="Describe your project"
                />
              </div>
            </div>
          ))}
          <button type="button" className="form-add-button" onClick={() => addListItem('projects')}>
            + Add Project
          </button>
        </div>
      </SectionCard>

      <SectionCard
        id="awards"
        title="Awards & Recognition"
        icon="🏆"
        isExpanded={expandedSections.awards === true}
        onToggle={() => onToggleSection('awards')}
      >
        <div className="form-fields-container">
          {(resume.awards || []).map((award) => (
            <div key={award.id} className="form-item">
              <div className="form-item-header">
                <h4 className="form-item-title">{award.title || `Award`}</h4>
                <button
                  type="button"
                  className="form-item-delete"
                  onClick={() => removeListItem('awards', award.id)}
                  aria-label="Remove award"
                >
                  ✕
                </button>
              </div>
              <div className="form-field">
                <label className="form-label">Award Title</label>
                <input
                  type="text"
                  className="form-input"
                  value={award.title || ''}
                  onChange={(e) => updateListItem('awards', award.id, 'title', e.target.value)}
                  placeholder="Employee of the Month"
                />
              </div>
            </div>
          ))}
          <button type="button" className="form-add-button" onClick={() => addListItem('awards')}>
            + Add Award
          </button>
        </div>
      </SectionCard>

      <SectionCard
        id="hobbies"
        title="Interests & Hobbies"
        icon="🎨"
        isExpanded={expandedSections.hobbies === true}
        onToggle={() => onToggleSection('hobbies')}
      >
        <div className="form-fields-container">
          {(resume.hobbies || []).map((hobby) => (
            <div key={hobby.id} className="form-item">
              <div className="form-item-header">
                <h4 className="form-item-title">{hobby.name || `Hobby`}</h4>
                <button
                  type="button"
                  className="form-item-delete"
                  onClick={() => removeListItem('hobbies', hobby.id)}
                  aria-label="Remove hobby"
                >
                  ✕
                </button>
              </div>
              <div className="form-field">
                <input
                  type="text"
                  className="form-input"
                  value={hobby.name || ''}
                  onChange={(e) => updateListItem('hobbies', hobby.id, 'name', e.target.value)}
                  placeholder="e.g., Photography, Hiking, etc."
                />
              </div>
            </div>
          ))}
          <button type="button" className="form-add-button" onClick={() => addListItem('hobbies')}>
            + Add Interest
          </button>
        </div>
      </SectionCard>

      <SectionCard
        id="volunteer"
        title="Volunteer Work"
        icon="🤝"
        isExpanded={expandedSections.volunteer === true}
        onToggle={() => onToggleSection('volunteer')}
      >
        <div className="form-fields-container">
          {(resume.volunteer || []).map((vol) => (
            <div key={vol.id} className="form-item">
              <div className="form-item-header">
                <h4 className="form-item-title">{vol.organization || `Volunteer`}</h4>
                <button
                  type="button"
                  className="form-item-delete"
                  onClick={() => removeListItem('volunteer', vol.id)}
                  aria-label="Remove volunteer work"
                >
                  ✕
                </button>
              </div>
              <div className="form-row">
                <div className="form-field">
                  <label className="form-label">Organization</label>
                  <input
                    type="text"
                    className="form-input"
                    value={vol.organization || ''}
                    onChange={(e) => updateListItem('volunteer', vol.id, 'organization', e.target.value)}
                    placeholder="Organization name"
                  />
                </div>
                <div className="form-field">
                  <label className="form-label">Role</label>
                  <input
                    type="text"
                    className="form-input"
                    value={vol.role || ''}
                    onChange={(e) => updateListItem('volunteer', vol.id, 'role', e.target.value)}
                    placeholder="Your role"
                  />
                </div>
              </div>
            </div>
          ))}
          <button type="button" className="form-add-button" onClick={() => addListItem('volunteer')}>
            + Add Volunteer Work
          </button>
        </div>
      </SectionCard>
    </div>
  );
}
