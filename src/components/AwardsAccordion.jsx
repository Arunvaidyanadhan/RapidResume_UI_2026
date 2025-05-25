import React, { useState } from 'react';
import './AccordionForm.css';

function AwardsAccordion() {
  const [awards, setAwards] = useState([]);
  const [newAward, setNewAward] = useState('');
  const [isEditing, setIsEditing] = useState(null);

  const handleAdd = () => {
    if (newAward.trim() !== '') {
      setAwards([...awards, newAward.trim()]);
      setNewAward('');
    }
  };

  const handleEdit = (index) => setIsEditing(index);

  const handleSave = (index, value) => {
    const updated = [...awards];
    updated[index] = value;
    setAwards(updated);
    setIsEditing(null);
  };

  const handleDelete = (index) => setAwards(awards.filter((_, i) => i !== index));

  return (
    <div className="container mt-2">
      <div className="accordion" id="awardsAccordion">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingAwards">
            <button
              className="accordion-button collapsed fw-bold fs-5"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseAwards"
              aria-expanded="false"
              aria-controls="collapseAwards"
            >
              Awards & Honours
            </button>
          </h2>
          <div
            id="collapseAwards"
            className="accordion-collapse collapse"
            aria-labelledby="headingAwards"
            data-bs-parent="#awardsAccordion"
          >
            <div className="accordion-body">
              {awards.length === 0 && <p className="text-muted">No awards or honors added yet.</p>}
              <ul className="list-group mb-3">
                {awards.map((award, index) => (
                  <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                    {isEditing === index ? (
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={award}
                        onBlur={(e) => handleSave(index, e.target.value)}
                        autoFocus
                      />
                    ) : (
                      <>
                        {award}
                        <span>
                          <button className="btn btn-sm btn-outline-secondary me-2" onClick={() => handleEdit(index)}>✏️</button>
                          <button className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(index)}>🗑️</button>
                        </span>
                      </>
                    )}
                  </li>
                ))}
              </ul>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter award or honor"
                  value={newAward}
                  onChange={(e) => setNewAward(e.target.value)}
                />
                <button className="btn btn-primary" onClick={handleAdd}>➕ Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AwardsAccordion;
