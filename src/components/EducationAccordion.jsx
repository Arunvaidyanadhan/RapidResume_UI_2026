import React, { useState } from 'react';
import './AccordionForm.css';

function EducationAccordion() {
  const [educations, setEducations] = useState([]);
  const [newEdu, setNewEdu] = useState({
    school: '',
    degree: '',
    fieldOfStudy: '',
    startDate: '',
    endDate: '',
    current: false,
  });

  const [isEditing, setIsEditing] = useState(null); // index or null

  const handleChange = (e, index = null) => {
    const { name, value, type, checked } = e.target;

    if (index === null) {
      setNewEdu((prev) => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value,
      }));
    } else {
      const updated = [...educations];
      updated[index] = {
        ...updated[index],
        [name]: type === 'checkbox' ? checked : value,
      };
      setEducations(updated);
    }
  };

  const handleAdd = () => {
    if (newEdu.school && newEdu.degree) {
      setEducations([...educations, newEdu]);
      setNewEdu({
        school: '',
        degree: '',
        fieldOfStudy: '',
        startDate: '',
        endDate: '',
        current: false,
      });
    }
  };

  const handleDelete = (index) => {
    const updated = educations.filter((_, i) => i !== index);
    setEducations(updated);
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
          <h2 className="accordion-header" id="headingEdu">
            <button
              className="accordion-button fw-bolder fs-5 collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseEdu"
              aria-expanded="false"
              aria-controls="collapseEdu"
            >
              Education
            </button>
          </h2>
          <div
            id="collapseEdu"
            className="accordion-collapse border border-secondary collapse"
            aria-labelledby="headingEdu"
            data-bs-parent="#accordionSixItems"
          >
            <div className="accordion-body">
              {/* Existing Educations */}
              {educations.length === 0 && (
                <p className="text-muted">No education details added yet.</p>
              )}
              {educations.map((edu, index) => (
                <div key={index} className="border rounded p-3 mb-3 shadow-sm">
                  <div className="row g-3">
                    {[
                      { label: 'School/College', name: 'school' },
                      { label: 'Degree', name: 'degree' },
                      { label: 'Field of Study', name: 'fieldOfStudy' },
                    ].map(({ label, name }) => (
                      <div key={name} className="col-md-4">
                        <label className="form-label">{label}</label>
                        <input
                          type="text"
                          className="form-control"
                          name={name}
                          value={edu[name]}
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
                        value={edu.startDate}
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
                        value={edu.endDate}
                        onChange={(e) => handleChange(e, index)}
                        disabled={isEditing !== index || edu.current}
                      />
                    </div>

                    <div className="col-md-3 form-check pt-4">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        name="current"
                        id={`currentEdu-${index}`}
                        checked={edu.current}
                        onChange={(e) => handleChange(e, index)}
                        disabled={isEditing !== index}
                      />
                      <label className="form-check-label ms-2" htmlFor={`currentEdu-${index}`}>
                        I am currently studying here
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

              {/* Add New Education */}
              <div className="border rounded p-3 shadow-sm bg-light">
                <h6 className="fw-bold">Add New Education</h6>
                <div className="row g-3">
                  <div className="col-md-4">
                    <label className="form-label">School/College</label>
                    <input
                      type="text"
                      className="form-control"
                      name="school"
                      value={newEdu.school}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Degree</label>
                    <input
                      type="text"
                      className="form-control"
                      name="degree"
                      value={newEdu.degree}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Field of Study</label>
                    <input
                      type="text"
                      className="form-control"
                      name="fieldOfStudy"
                      value={newEdu.fieldOfStudy}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-2">
                    <label className="form-label">Start Date</label>
                    <input
                      type="date"
                      className="form-control"
                      name="startDate"
                      value={newEdu.startDate}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-2">
                    <label className="form-label">End Date</label>
                    <input
                      type="date"
                      className="form-control"
                      name="endDate"
                      value={newEdu.endDate}
                      onChange={handleChange}
                      disabled={newEdu.current}
                    />
                  </div>
                  <div className="col-md-3 form-check pt-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="current"
                      id="newEduCurrent"
                      checked={newEdu.current}
                      onChange={handleChange}
                    />
                    <label className="form-check-label ms-2" htmlFor="newEduCurrent">
                      I am currently studying here
                    </label>
                  </div>
                </div>
                <div className="d-flex justify-content-end mt-3">
                  <button type="button" className="btn btn-primary px-4" onClick={handleAdd}>
                    ➕ Add Education
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
}

export default EducationAccordion;
