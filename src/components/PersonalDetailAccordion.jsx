import React from 'react';
import './AccordionForm.css';
import './ImageUpload.css';

function PersonalDetailAccordion() {
  
  return (
    <>
    <div class="container mt-2">
  <h2 className="pb-4">Fill Your Resume</h2>
  <div class="accordion" id="accordionSixItems">
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingOne">
        <button class="accordion-button fw-bolder fs-3" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Personal Details
        </button>
      </h2>
      <div id="collapseOne" class="accordion-collapse collapse show border  border-secondary" aria-labelledby="headingOne"
           data-bs-parent="#accordionSixItems">
        <div class="accordion-body">
        <form class="row g-3">
          <div className="col-md-3">
            <h6 className="text-center">Image View</h6>
            <img style={{width:'200px',height:'200px',border:'1px solid green'}} src="" />
          </div>
          <div className='col-md-9 mx-2'>
          <label for="fileUpload" class="upload-label">Choose an image</label>
      <input type="file" id="fileUpload" accept="image/*" />
      <div class="image-preview" id="imagePreview">
        <img src="" alt="Image Preview" class="preview-image" />
      </div>
          </div>
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">First Name</label>
    <input type="text" class="form-control" id="inputEmail4"/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Surname</label>
    <input type="text" class="form-control" id="inputPassword4"/>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  
  <div class="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity"/>
  </div>
   
  <div class="col-md-6">
    <label for="inputCity" class="form-label">Contry</label>
    <input type="text" class="form-control" id="inputCity"/>
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div class="col-md-2">
    <label for="inputZip" class="form-label">Pin Code</label>
    <input type="text" class="form-control" id="inputZip"/>
  </div>
  <div class="col-md-3">
    <label for="inputZip" class="form-label">Phone Number</label>
    <input type="text" class="form-control" id="inputZip"/>
  </div>
  <div class="col-md-3">
    <label for="inputZip" class="form-label">Email</label>
    <input type="Email" className="form-control" id="inputZip"/>
  </div>
  <div class="col-12">
    <h6>Add additional information to your resume</h6>
  </div>
  <div class="col-12">
    <button className="btn btn-sm btn-secondary m-2 fw-bolder rounded-pill ">Linkedin</button>
    <button className="btn btn-sm btn-secondary m-2 fw-bolder rounded-pill ">Web site</button>
    <button className="btn btn-sm btn-secondary m-2 fw-bolder rounded-pill ">Driving Licence</button>
    <div class="d-flex justify-content-end ">
  <button className="btn btn-success m-2">Save</button>
  <button className="btn btn-danger m-2">Edit</button>
</div>
  </div>
</form>


        </div>
      </div>
    </div>
    </div>
    </div>

  


    </>
  );
}

export default PersonalDetailAccordion;