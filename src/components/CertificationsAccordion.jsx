import React, { useState, useEffect } from 'react';
import { useResume } from '../context/resumecontext';
import './AccordionForm.css';

function CertificationsAccordion() {
  const { resumeData, updateCertifications } = useResume();
  const [certifications, setCertifications] = useState(resumeData.certifications || []);
  const [newCert, setNewCert] = useState('');
  const [isEditing, setIsEditing] = useState(null);

  // Sync with context when resumeData.certifications changes
  useEffect(() => {
    setCertifications(resumeData.certifications || []);
  }, [resumeData.certifications]);

  // Push to context whenever local certifications change
  useEffect(() => {
    updateCertifications(certifications);
  }, [certifications, updateCertifications]);

  const handleAdd = () => {
    if (newCert.trim() !== '') {
      setCertifications([...certifications, newCert.trim()]);
      setNewCert('');
    }
  };

  const handleEdit = (index) => {
    setIsEditing(index);
  };

  const handleSave = (index, value) => {
    const updated = [...certifications];
    updated[index] = value;
    setCertifications(updated);
    setIsEditing(null);
  };

  const handleDelete = (index) => {
    setCertifications(certifications.filter((_, i) => i !== index));
  };

  return (
    <div className="container mt-2">
      <div className="accordion" id="certificationsAccordion">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingCertifications">
            <button
              className="accordion-button collapsed fw-bold fs-5"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseCertifications"
              aria-expanded="false"
              aria-controls="collapseCertifications"
            >
              Certifications
            </button>
          </h2>
          <div
            id="collapseCertifications"
            className="accordion-collapse collapse"
            aria-labelledby="headingCertifications"
            data-bs-parent="#certificationsAccordion"
          >
            <div className="accordion-body">
              {certifications.length === 0 && <p className="text-muted">No certifications added yet.</p>}
              <ul className="list-group mb-3">
                {certifications.map((cert, index) => (
                  <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                    {isEditing === index ? (
                      <input
                        type="text"
                        className="form-control me-2"
                        defaultValue={cert}
                        onBlur={(e) => handleSave(index, e.target.value)}
                        autoFocus
                      />
                    ) : (
                      <>
                        {cert}
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
                  placeholder="Enter certification title"
                  value={newCert}
                  onChange={(e) => setNewCert(e.target.value)}
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

export default CertificationsAccordion;
