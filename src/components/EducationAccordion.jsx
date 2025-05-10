import React from 'react';
import './AccordionForm.css';

function EducationAccordion() {


  return (
    <>
    <div class="container mt-2">
    <div class="accordion" id="accordionSixItems">
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingThree">
        <button class="accordion-button fw-bolder fs-3 collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       Education
        </button>
      </h2>
      <div id="collapseThree" class="accordion-collapse border  border-secondary collapse" aria-labelledby="headingThree"
           data-bs-parent="#accordionSixItems">
        <div class="accordion-body">
        <form class="row g-3">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">School Name</label>
    <input type="email" class="form-control" id="inputEmail4"/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">School Location</label>
    <input type="password" class="form-control" id="inputPassword4"/>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Degree</label>
    <input type="text" class="form-control" id="inputAddress" placeholder=""/>
  </div>
  <div class="col-6">
    <label for="inputAddress2" class="form-label">Feild Of Study</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder=""/>
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">Graduation Date or Expected Date</label>
    <input type="date" class="form-control" id="inputCity"/>
  </div>
  <div class="col-md-4">
    <a  className="btn btn-secondary rounded-pill btn-Secondary btn-sm fw-bold "><i className="fa-solid  fa-square-plus fs-4 fw-bold text-light p-2"></i>ADD COURSES</a>
  
  </div>
</form>
<div class="d-flex justify-content-end ">
  <button className="btn btn-success m-2">Save</button>
  <button className="btn btn-danger m-2">Edit</button>
</div>
        </div>
      </div>
    </div>
    </div>
    </div>
    </>
  );
}

export default EducationAccordion;
