import React, { useState, useEffect } from 'react';
import { useResume } from '../context/resumecontext';
import './AccordionForm.css';

function ProjectsAccordion() {
  const { resumeData, updateProjects } = useResume();
  const [projects, setProjects] = useState(resumeData.projects || []);
  const [newProject, setNewProject] = useState({
    name: '',
    role: '',
    description: '',
    technologies: '',
    link: '',
  });

  const [isEditing, setIsEditing] = useState(null); // index

  // Sync with context when resumeData.projects changes
  useEffect(() => {
    setProjects(resumeData.projects || []);
  }, [resumeData.projects]);

  // Push to context whenever local projects change
  useEffect(() => {
    updateProjects(projects);
  }, [projects, updateProjects]);

  const handleChange = (e, index = null) => {
    const { name, value } = e.target;

    if (index === null) {
      setNewProject((prev) => ({
        ...prev,
        [name]: value,
      }));
    } else {
      const updated = [...projects];
      updated[index] = {
        ...updated[index],
        [name]: value,
      };
      setProjects(updated);
    }
  };

  const handleAdd = () => {
    if (newProject.name && newProject.role && newProject.description) {
      setProjects([...projects, newProject]);
      setNewProject({
        name: '',
        role: '',
        description: '',
        technologies: '',
        link: '',
      });
    }
  };

  const handleDelete = (index) => {
    const updated = projects.filter((_, i) => i !== index);
    setProjects(updated);
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
          <h2 className="accordion-header" id="headingProject">
            <button
              className="accordion-button fw-bolder fs-5 collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseProject"
              aria-expanded="false"
              aria-controls="collapseProject"
            >
              Projects
            </button>
          </h2>
          <div
            id="collapseProject"
            className="accordion-collapse border border-secondary collapse"
            aria-labelledby="headingProject"
            data-bs-parent="#accordionSixItems"
          >
            <div className="accordion-body">
              {/* Existing Projects */}
              {projects.length === 0 && (
                <p className="text-muted">No project details added yet.</p>
              )}
              {projects.map((project, index) => (
                <div key={index} className="border rounded p-3 mb-3 shadow-sm">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">Project Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={project.name}
                        onChange={(e) => handleChange(e, index)}
                        disabled={isEditing !== index}
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Role</label>
                      <input
                        type="text"
                        className="form-control"
                        name="role"
                        value={project.role}
                        onChange={(e) => handleChange(e, index)}
                        disabled={isEditing !== index}
                      />
                    </div>

                    <div className="col-md-12">
                      <label className="form-label">Description</label>
                      <textarea
                        className="form-control"
                        name="description"
                        rows="2"
                        value={project.description}
                        onChange={(e) => handleChange(e, index)}
                        disabled={isEditing !== index}
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Technologies Used</label>
                      <input
                        type="text"
                        className="form-control"
                        name="technologies"
                        value={project.technologies}
                        onChange={(e) => handleChange(e, index)}
                        disabled={isEditing !== index}
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Project Link (optional)</label>
                      <input
                        type="text"
                        className="form-control"
                        name="link"
                        value={project.link}
                        onChange={(e) => handleChange(e, index)}
                        disabled={isEditing !== index}
                      />
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

              {/* Add New Project */}
              <div className="border rounded p-3 shadow-sm bg-light">
                <h6 className="fw-bold">Add New Project</h6>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Project Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={newProject.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Role</label>
                    <input
                      type="text"
                      className="form-control"
                      name="role"
                      value={newProject.role}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="form-label">Description</label>
                    <textarea
                      className="form-control"
                      name="description"
                      rows="2"
                      value={newProject.description}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Technologies Used</label>
                    <input
                      type="text"
                      className="form-control"
                      name="technologies"
                      value={newProject.technologies}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Project Link (optional)</label>
                    <input
                      type="text"
                      className="form-control"
                      name="link"
                      value={newProject.link}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-end mt-3">
                  <button type="button" className="btn btn-primary px-4" onClick={handleAdd}>
                    ➕ Add Project
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

export default ProjectsAccordion;
