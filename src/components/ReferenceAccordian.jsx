import React, { useEffect, useState } from 'react';
import { useResume } from '../context/resumecontext';
import './AccordionForm.css';

function ReferencesAccordion() {
  const { resumeData, updateReferences } = useResume();
  const [references, setReferences] = useState(resumeData.references || []);
  const [newName, setNewName] = useState('');
  const [newContact, setNewContact] = useState('');
  const [isEditing, setIsEditing] = useState(null);

  useEffect(() => {
    setReferences(resumeData.references || []);
  }, [resumeData.references]);

  useEffect(() => {
    updateReferences(references);
  }, [references, updateReferences]);

  const handleAdd = () => {
    if (newName.trim() !== '' && newContact.trim() !== '') {
      setReferences([...references, { name: newName.trim(), contact: newContact.trim() }]);
      setNewName('');
      setNewContact('');
    }
  };

  const handleEdit = (index) => {
    setIsEditing(index);
  };

  const handleSave = (index, name, contact) => {
    const updated = [...references];
    updated[index] = { name, contact };
    setReferences(updated);
    setIsEditing(null);
  };

  const handleDelete = (index) => {
    setReferences(references.filter((_, i) => i !== index));
  };

  return (
    <div className="container mt-2">
      <div className="accordion" id="referencesAccordion">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingReferences">
            <button
              className="accordion-button collapsed fw-bold fs-5"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseReferences"
              aria-expanded="false"
              aria-controls="collapseReferences"
            >
              References
            </button>
          </h2>
          <div
            id="collapseReferences"
            className="accordion-collapse collapse"
            aria-labelledby="headingReferences"
            data-bs-parent="#referencesAccordion"
          >
            <div className="accordion-body">
              {references.length === 0 && <p className="text-muted">No references added yet.</p>}
              <ul className="list-group mb-3">
                {references.map((ref, index) => (
                  <li key={index} className="list-group-item">
                    {isEditing === index ? (
                      <div className="d-flex flex-column gap-2">
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={ref.name}
                          placeholder="Name"
                          onBlur={(e) => handleSave(index, e.target.value, ref.contact)}
                          autoFocus
                        />
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={ref.contact}
                          placeholder="Contact Info"
                          onBlur={(e) => handleSave(index, ref.name, e.target.value)}
                        />
                      </div>
                    ) : (
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <strong>{ref.name}</strong> <br />
                          <small className="text-muted">{ref.contact}</small>
                        </div>
                        <div>
                          <button className="btn btn-sm btn-outline-secondary me-2" onClick={() => handleEdit(index)}>✏️</button>
                          <button className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(index)}>🗑️</button>
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
              <div className="input-group mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Reference Name"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                />
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Contact Info"
                  value={newContact}
                  onChange={(e) => setNewContact(e.target.value)}
                />
              </div>
              <button className="btn btn-primary" onClick={handleAdd}>➕ Add Reference</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReferencesAccordion;
