import React, { useState, useEffect } from 'react';
import { useResume } from '../context/resumecontext';
import './AccordionForm.css';

function LanguagesAccordion() {
  const { resumeData, updateLanguages } = useResume();
  const [languages, setLanguages] = useState(resumeData.languages || []);
  const [newLang, setNewLang] = useState('');
  const [isEditing, setIsEditing] = useState(null);

  useEffect(() => {
    setLanguages(resumeData.languages || []);
  }, [resumeData.languages]);

  useEffect(() => {
    updateLanguages(languages);
  }, [languages, updateLanguages]);

  const handleAdd = () => {
    if (newLang.trim() !== '') {
      setLanguages([...languages, newLang.trim()]);
      setNewLang('');
    }
  };

  const handleEdit = (index) => {
    setIsEditing(index);
  };

  const handleSave = (index, value) => {
    const updated = [...languages];
    updated[index] = value;
    setLanguages(updated);
    setIsEditing(null);
  };

  const handleDelete = (index) => {
    setLanguages(languages.filter((_, i) => i !== index));
  };

  return (
    <div className="container mt-2">
      <div className="accordion" id="languagesAccordion">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingLanguages">
            <button
              className="accordion-button collapsed fw-bold fs-5"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseLanguages"
              aria-expanded="false"
              aria-controls="collapseLanguages"
            >
              Languages Known
            </button>
          </h2>
          <div
            id="collapseLanguages"
            className="accordion-collapse collapse"
            aria-labelledby="headingLanguages"
            data-bs-parent="#languagesAccordion"
          >
            <div className="accordion-body">
              {languages.length === 0 && <p className="text-muted">No languages added yet.</p>}
              <ul className="list-group mb-3">
                {languages.map((lang, index) => (
                  <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                    {isEditing === index ? (
                      <input
                        type="text"
                        className="form-control me-2"
                        defaultValue={lang}
                        onBlur={(e) => handleSave(index, e.target.value)}
                        autoFocus
                      />
                    ) : (
                      <>
                        {lang}
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
                  placeholder="Enter new language"
                  value={newLang}
                  onChange={(e) => setNewLang(e.target.value)}
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

export default LanguagesAccordion;
