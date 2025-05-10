import React from 'react';
import './AccordionForm.css';
import AddExprince from './AddExprince.jsx';


function WorkHistoryAccordion() {
 

  return (
    <>
    


<div class="container mt-2">
  <div class="accordion" id="accordionSixItems">
    <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
          <button class="accordion-button fw-bolder fs-3 collapsed" type="button" data-bs-toggle="collapse"
           data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
           Work History</button>
      </h2>
      <div id="collapseTwo" class="accordion-collapse border border-secondary collapse" aria-labelledby="headingTwo"
           data-bs-parent="#accordionSixItems">
        <div class="accordion-body">

        <form class="row g-3">
<div class="col-md-6">
  <label for="inputEmail4" class="form-label">Job Title</label>
  <input type="text" class="form-control" id="inputEmail4"/>
</div>
<div class="col-md-6">
  <label for="inputPassword4" class="form-label">Employer</label>
  <input type="password" class="form-control" id="inputPassword4"/>
</div>
<div class="col-12">
  <label for="inputAddress" class="form-label">Location</label>
  <input type="text" class="form-control" id="inputAddress" placeholder=""/>
</div>
<div class="col-12">
  <div class="form-check">
    <input class="form-check-input" type="checkbox" id="gridCheck"/>
    <label class="form-check-label" for="gridCheck">
     Remote
    </label>
  </div>
</div>
<div class="col-12">
  <div class="form-check">
    <input class="form-check-input" type="checkbox" id="gridCheck"/>
    <label class="form-check-label" for="gridCheck">
    I Currently Work Here
    </label>
  </div>
</div>


<div class="col-md-2">
<label for="inputCity" class="form-label">Start Date</label>
<input type="date" class="form-control" id="inputCity"/>
</div>
<div class="col-md-2">
  <label for="inputZip" class="form-label">Exp Date</label>
  <input type="date" class="form-control" id="inputZip"/>
</div>
</form>
<div className='mt-3'>
<AddExprince/>
</div>

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

export default WorkHistoryAccordion;