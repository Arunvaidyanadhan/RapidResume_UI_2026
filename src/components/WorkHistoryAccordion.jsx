import React, { useState, useEffect } from 'react';
import { useResume } from '../context/resumecontext';
import './AccordionForm.css';

function WorkHistoryAccordion() {
  const { resumeData, updateWorkExperience } = useResume();
  const [experiences, setExperiences] = useState(resumeData.workHistory || []);
  const [newExp, setNewExp] = useState({
    jobTitle: '',
    employer: '',
    location: '',
    remote: false,
    current: false,
    startDate: '',
    endDate: '',
  });

  const [isEditing, setIsEditing] = useState(null); // index or null

  // Sync experiences with context when resumeData.workHistory changes
  useEffect(() => {
    setExperiences(resumeData.workHistory || []);
  }, [resumeData.workHistory]);

  // Whenever experiences change locally, update context
  useEffect(() => {
    updateWorkExperience(experiences);
  }, [experiences, updateWorkExperience]);

  const handleChange = (e, index = null) => {
    const { name, value, type, checked } = e.target;

    if (index === null) {
      setNewExp((prev) => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value,
      }));
    } else {
      const updated = [...experiences];
      updated[index] = {
        ...updated[index],
        [name]: type === 'checkbox' ? checked : value,
      };
      setExperiences(updated);
    }
  };

  const handleAdd = () => {
    if (newExp.jobTitle && newExp.employer) {
      setExperiences([...experiences, newExp]);
      setNewExp({
        jobTitle: '',
        employer: '',
        location: '',
        remote: false,
        current: false,
        startDate: '',
        endDate: '',
      });
    }
  };

  const handleDelete = (index) => {
    const updated = experiences.filter((_, i) => i !== index);
    setExperiences(updated);
  };

  const handleEdit = (index) => {
    setIsEditing(index);
  };

  const handleSave = () => {
    setIsEditing(null);
  };

  return (
    <div className="container mt-2">
      <div className="accordion" id="accordionSixItems">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button fw-bolder fs-5 collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Work History
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse border border-secondary collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionSixItems"
          >
            <div className="accordion-body">
              {/* Existing Experiences */}
              {experiences.length === 0 && (
                <p className="text-muted">No experience added yet.</p>
              )}
              {experiences.map((exp, index) => (
                <div key={index} className="border rounded p-3 mb-3 shadow-sm">
                  <div className="row g-3">
                    {[
                      { label: 'Job Title', name: 'jobTitle' },
                      { label: 'Employer', name: 'employer' },
                      { label: 'Location', name: 'location' },
                    ].map(({ label, name }) => (
                      <div key={name} className="col-md-4">
                        <label className="form-label">{label}</label>
                        <input
                          type="text"
                          className="form-control"
                          name={name}
                          value={exp[name]}
                          onChange={(e) => handleChange(e, index)}
                          disabled={isEditing !== index}
                        />
                      </div>
                    ))}

                    <div className="col-md-2">
                      <label className="form-label">Start Date</label>
                      <input
                        type="date"
                        className="form-control"
                        name="startDate"
                        value={exp.startDate}
                        onChange={(e) => handleChange(e, index)}
                        disabled={isEditing !== index}
                      />
                    </div>

                    <div className="col-md-2">
                      <label className="form-label">End Date</label>
                      <input
                        type="date"
                        className="form-control"
                        name="endDate"
                        value={exp.endDate}
                        onChange={(e) => handleChange(e, index)}
                        disabled={isEditing !== index || exp.current}
                      />
                    </div>

                    <div className="col-md-2 form-check pt-4">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        name="remote"
                        id={`remote-${index}`}
                        checked={exp.remote}
                        onChange={(e) => handleChange(e, index)}
                        disabled={isEditing !== index}
                      />
                      <label className="form-check-label ms-2" htmlFor={`remote-${index}`}>
                        Remote
                      </label>
                    </div>

                    <div className="col-md-3 form-check pt-4">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        name="current"
                        id={`current-${index}`}
                        checked={exp.current}
                        onChange={(e) => handleChange(e, index)}
                        disabled={isEditing !== index}
                      />
                      <label className="form-check-label ms-2" htmlFor={`current-${index}`}>
                        I Currently Work Here
                      </label>
                    </div>
                  </div>

                  <div className="d-flex justify-content-end mt-3">
                    {isEditing === index ? (
                      <button
                        type="button"
                        className="btn btn-success me-2"
                        onClick={handleSave}
                      >
                        💾 Save
                      </button>
                    ) : (
                      <>
                        <button
                          className="btn btn-outline-secondary me-2"
                          onClick={() => handleEdit(index)}
                        >
                          ✏️ Edit
                        </button>
                        <button
                          className="btn btn-outline-danger"
                          onClick={() => handleDelete(index)}
                        >
                          🗑️ Delete
                        </button>
                      </>
                    )}
                  </div>
                </div>
              ))}

              {/* Add New Experience */}
              <div className="border rounded p-3 shadow-sm bg-light">
                <h6 className="fw-bold">Add New Experience</h6>
                <div className="row g-3">
                  <div className="col-md-4">
                    <label className="form-label">Job Title</label>
                    <input
                      type="text"
                      className="form-control"
                      name="jobTitle"
                      value={newExp.jobTitle}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Employer</label>
                    <input
                      type="text"
                      className="form-control"
                      name="employer"
                      value={newExp.employer}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Location</label>
                    <input
                      type="text"
                      className="form-control"
                      name="location"
                      value={newExp.location}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-2">
                    <label className="form-label">Start Date</label>
                    <input
                      type="date"
                      className="form-control"
                      name="startDate"
                      value={newExp.startDate}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-2">
                    <label className="form-label">End Date</label>
                    <input
                      type="date"
                      className="form-control"
                      name="endDate"
                      value={newExp.endDate}
                      onChange={handleChange}
                      disabled={newExp.current}
                    />
                  </div>
                  <div className="col-md-2 form-check pt-4">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name="remote"
                      id="remote-new"
                      checked={newExp.remote}
                      onChange={handleChange}
                    />
                    <label className="form-check-label ms-2" htmlFor="remote-new">
                      Remote
                    </label>
                  </div>
                  <div className="col-md-3 form-check pt-4">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name="current"
                      id="current-new"
                      checked={newExp.current}
                      onChange={handleChange}
                    />
                    <label className="form-check-label ms-2" htmlFor="current-new">
                      I Currently Work Here
                    </label>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn btn-primary mt-3"
                  onClick={handleAdd}
                  disabled={!newExp.jobTitle || !newExp.employer}
                >
                  + Add Experience
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkHistoryAccordion;
