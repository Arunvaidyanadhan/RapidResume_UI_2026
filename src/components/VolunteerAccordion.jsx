import React, { useState } from 'react';
import './AccordionForm.css';

function VolunteerAccordion() {
  const [volunteerList, setVolunteerList] = useState([]);
  const [newEntry, setNewEntry] = useState({ org: '', role: '', description: '' });
  const [isEditing, setIsEditing] = useState(null);

  const handleAdd = () => {
    if (newEntry.org.trim() && newEntry.role.trim() && newEntry.description.trim()) {
      setVolunteerList([...volunteerList, { ...newEntry }]);
      setNewEntry({ org: '', role: '', description: '' });
    }
  };

  const handleEdit = (index) => {
    setIsEditing(index);
  };

  const handleSave = (index, updatedEntry) => {
    const updatedList = [...volunteerList];
    updatedList[index] = updatedEntry;
    setVolunteerList(updatedList);
    setIsEditing(null);
  };

  const handleDelete = (index) => {
    setVolunteerList(volunteerList.filter((_, i) => i !== index));
  };

  return (
    <div className="container mt-2">
      <div className="accordion" id="volunteerAccordion">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingVolunteer">
            <button
              className="accordion-button collapsed fw-bold fs-5"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseVolunteer"
              aria-expanded="false"
              aria-controls="collapseVolunteer"
            >
              Volunteer Experience
            </button>
          </h2>
          <div
            id="collapseVolunteer"
            className="accordion-collapse collapse"
            aria-labelledby="headingVolunteer"
            data-bs-parent="#volunteerAccordion"
          >
            <div className="accordion-body">
              {volunteerList.length === 0 && <p className="text-muted">No volunteer experience added yet.</p>}
              <ul className="list-group mb-3">
                {volunteerList.map((entry, index) => (
                  <li key={index} className="list-group-item">
                    {isEditing === index ? (
                      <div className="d-flex flex-column gap-2">
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={entry.org}
                          placeholder="Organization"
                          onBlur={(e) => handleSave(index, { ...entry, org: e.target.value })}
                          autoFocus
                        />
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={entry.role}
                          placeholder="Role"
                          onBlur={(e) => handleSave(index, { ...entry, role: e.target.value })}
                        />
                        <textarea
                          className="form-control"
                          defaultValue={entry.description}
                          placeholder="Description"
                          onBlur={(e) => handleSave(index, { ...entry, description: e.target.value })}
                        />
                      </div>
                    ) : (
                      <div className="d-flex justify-content-between align-items-start flex-column flex-md-row">
                        <div>
                          <strong>{entry.org}</strong> <br />
                          <span className="text-muted">{entry.role}</span><br />
                          <small>{entry.description}</small>
                        </div>
                        <div className="mt-2 mt-md-0">
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
                  placeholder="Organization"
                  value={newEntry.org}
                  onChange={(e) => setNewEntry({ ...newEntry, org: e.target.value })}
                />
              </div>
              <div className="input-group mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Role"
                  value={newEntry.role}
                  onChange={(e) => setNewEntry({ ...newEntry, role: e.target.value })}
                />
              </div>
              <div className="input-group mb-3">
                <textarea
                  className="form-control"
                  placeholder="Description"
                  value={newEntry.description}
                  onChange={(e) => setNewEntry({ ...newEntry, description: e.target.value })}
                />
              </div>
              <button className="btn btn-primary" onClick={handleAdd}>➕ Add Volunteer Experience</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VolunteerAccordion;
