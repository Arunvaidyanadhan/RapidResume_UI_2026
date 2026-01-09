import React, { useEffect, useState } from 'react';
import { useResume } from '../context/resumecontext';
import './AccordionForm.css';

function HobbiesAccordion() {
  const { resumeData, updateHobbies } = useResume();
  const [hobbies, setHobbies] = useState(resumeData.hobbies || []);
  const [newHobby, setNewHobby] = useState('');
  const [isEditing, setIsEditing] = useState(null);

  useEffect(() => {
    setHobbies(resumeData.hobbies || []);
  }, [resumeData.hobbies]);

  useEffect(() => {
    updateHobbies(hobbies);
  }, [hobbies, updateHobbies]);

  const handleAdd = () => {
    if (newHobby.trim() !== '') {
      setHobbies([...hobbies, newHobby.trim()]);
      setNewHobby('');
    }
  };

  const handleEdit = (index) => setIsEditing(index);

  const handleSave = (index, value) => {
    const updated = [...hobbies];
    updated[index] = value;
    setHobbies(updated);
    setIsEditing(null);
  };

  const handleDelete = (index) => setHobbies(hobbies.filter((_, i) => i !== index));

  return (
    <div className="container mt-2">
      <div className="accordion" id="hobbiesAccordion">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingHobbies">
            <button
              className="accordion-button collapsed fw-bold fs-5"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseHobbies"
              aria-expanded="false"
              aria-controls="collapseHobbies"
            >
              Hobbies & Interests
            </button>
          </h2>
          <div
            id="collapseHobbies"
            className="accordion-collapse collapse"
            aria-labelledby="headingHobbies"
            data-bs-parent="#hobbiesAccordion"
          >
            <div className="accordion-body">
              {hobbies.length === 0 && <p className="text-muted">No hobbies or interests added yet.</p>}
              <ul className="list-group mb-3">
                {hobbies.map((hobby, index) => (
                  <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                    {isEditing === index ? (
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={hobby}
                        onBlur={(e) => handleSave(index, e.target.value)}
                        autoFocus
                      />
                    ) : (
                      <>
                        {hobby}
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
                  placeholder="Enter a hobby or interest"
                  value={newHobby}
                  onChange={(e) => setNewHobby(e.target.value)}
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

export default HobbiesAccordion;
