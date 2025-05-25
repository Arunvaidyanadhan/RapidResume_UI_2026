import React, { useState } from 'react';
import './AccordionForm.css';

function PublicationsAccordion() {
  const [publications, setPublications] = useState([]);
  const [newPublication, setNewPublication] = useState('');
  const [isEditing, setIsEditing] = useState(null);

  const handleAdd = () => {
    if (newPublication.trim() !== '') {
      setPublications([...publications, newPublication.trim()]);
      setNewPublication('');
    }
  };

  const handleEdit = (index) => setIsEditing(index);

  const handleSave = (index, value) => {
    const updated = [...publications];
    updated[index] = value;
    setPublications(updated);
    setIsEditing(null);
  };

  const handleDelete = (index) => setPublications(publications.filter((_, i) => i !== index));

  return (
    <div className="container mt-2">
      <div className="accordion" id="publicationsAccordion">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingPublications">
            <button
              className="accordion-button collapsed fw-bold fs-5"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsePublications"
              aria-expanded="false"
              aria-controls="collapsePublications"
            >
              Publications
            </button>
          </h2>
          <div
            id="collapsePublications"
            className="accordion-collapse collapse"
            aria-labelledby="headingPublications"
            data-bs-parent="#publicationsAccordion"
          >
            <div className="accordion-body">
              {publications.length === 0 && <p className="text-muted">No publications added yet.</p>}
              <ul className="list-group mb-3">
                {publications.map((pub, index) => (
                  <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                    {isEditing === index ? (
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={pub}
                        onBlur={(e) => handleSave(index, e.target.value)}
                        autoFocus
                      />
                    ) : (
                      <>
                        {pub}
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
                  placeholder="Enter publication title or link"
                  value={newPublication}
                  onChange={(e) => setNewPublication(e.target.value)}
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

export default PublicationsAccordion;
