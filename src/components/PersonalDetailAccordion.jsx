import React, { useState } from 'react';
import { useResume } from '../context/resumecontext'
import './AccordionForm.css';
import './ImageUpload.css';

function PersonalDetailAccordion() {
  const { resumeData, updatePersonalDetails, updateImage } = useResume();
  const [formData, setFormData] = useState(resumeData.personalDetails);
  const [isEditing, setIsEditing] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      updateImage(file);
      setFormData(prev => ({ ...prev, image: URL.createObjectURL(file) }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePersonalDetails(formData);
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className="container mt-2">
      <h2 className="pb-4">Fill Your Resume</h2>
      <div className="accordion" id="accordionSixItems">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button fw-bolder fs-3" type="button" 
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne" 
                    aria-expanded="true" 
                    aria-controls="collapseOne">
              Personal Details
            </button>
          </h2>
          <div id="collapseOne" 
               className="accordion-collapse collapse show border border-secondary" 
               aria-labelledby="headingOne"
               data-bs-parent="#accordionSixItems">
            <div className="accordion-body">
              <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-md-3">
                  <h6 className="text-center">Image View</h6>
                  <img 
                    style={{width: '200px', height: '200px', border: '1px solid green'}} 
                    src={resumeData.personalDetails.image || ''} 
                    alt="Profile"
                  />
                </div>
                <div className='col-md-9 mx-2'>
                  <label htmlFor="fileUpload" className="upload-label">
                    Choose an image
                  </label>
                  <input 
                    type="file" 
                    id="fileUpload" 
                    accept="image/*" 
                    onChange={handleImageChange}
                    disabled={!isEditing}
                  />
                </div>
                
                <div className="col-md-6">
                  <label htmlFor="firstName" className="form-label">First Name</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    disabled={!isEditing}
                    required
                  />
                </div>
                
                <div className="col-md-6">
                  <label htmlFor="lastName" className="form-label">Surname</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    disabled={!isEditing}
                    required
                  />
                </div>
                
                {/* Continue with other fields in the same pattern */}
                <div className="col-12">
                  <label htmlFor="address" className="form-label">Address</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    disabled={!isEditing}
                    placeholder="1234 Main St"
                  />
                </div>
                
                {/* Add all other fields similarly */}
                
                <div className="col-12">
                  <h6>Add additional information to your resume</h6>
                </div>
                
                <div className="col-12">
                  <div className="d-flex justify-content-end">
                    {isEditing ? (
                      <button type="submit" className="btn btn-success m-2">
                        Save
                      </button>
                    ) : (
                      <button 
                        type="button" 
                        className="btn btn-danger m-2"
                        onClick={handleEdit}
                      >
                        Edit
                      </button>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalDetailAccordion;