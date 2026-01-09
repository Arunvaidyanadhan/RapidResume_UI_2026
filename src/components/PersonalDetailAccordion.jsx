import React, { useEffect, useState } from 'react';
import { useResume } from '../context/resumecontext';
import './AccordionForm.css';
import './ImageUpload.css';

function PersonalDetailAccordion() {
  const { resumeData, updatePersonalDetails, updateImage } = useResume();
  const [formData, setFormData] = useState(resumeData.personalDetails);

  useEffect(() => {
    setFormData(resumeData.personalDetails);
  }, [resumeData.personalDetails]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => {
      const next = { ...prev, [name]: value };
      updatePersonalDetails(next);
      return next;
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      updateImage(file);
    }
  };

  const profileImage = formData.image || 'https://via.placeholder.com/200?text=Upload+Photo';

  return (
    <div className="container my-3">
      <div className="accordion" id="accordionSixItems">
        <div className="accordion-item border-0 shadow-sm rounded">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button fs-5 fw-semibold"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              👤 Personal Details
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionSixItems"
          >
            <div className="accordion-body bg-light-subtle py-4 px-3">
              <form className="row g-4">

                {/* Image Section */}
                <div className="col-md-4 text-center">
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="img-thumbnail shadow-sm mb-3"
                    style={{ width: '200px', height: '200px', objectFit: 'cover', borderRadius: '10px' }}
                  />
                  <div>
                    <label htmlFor="fileUpload" className="btn btn-outline-primary btn-sm">
                      📷 Upload Image
                    </label>
                    <input
                      type="file"
                      id="fileUpload"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="d-none"
                    />
                  </div>
                </div>

                {/* Form Inputs */}
                <div className="col-md-8">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label htmlFor="firstName" className="form-label">First Name</label>
                      <input
                        type="text"
                        className="form-control shadow-sm"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="lastName" className="form-label">Last Name</label>
                      <input
                        type="text"
                        className="form-control shadow-sm"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="email" className="form-label">Email ID</label>
                      <input
                        type="email"
                        className="form-control shadow-sm"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="phone" className="form-label">Phone Number</label>
                      <input
                        type="tel"
                        className="form-control shadow-sm"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="address" className="form-label">Address</label>
                      <textarea
                        className="form-control shadow-sm"
                        id="address"
                        name="address"
                        rows="2"
                        value={formData.address}
                        onChange={handleChange}
                      />
                    </div>
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
