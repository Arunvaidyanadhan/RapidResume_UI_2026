import React from 'react';
import './AccordionForm.css';

function SummaryAccordion() {
  
  return (
    <>
    <div class="container mt-2">
     <div class="accordion" id="accordionSixItems">
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingFive">
        <button class="accordion-button fw-bolder fs-5 collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
       Summary
        </button>
      </h2>
      <div id="collapseFive" class="accordion-collapse  border  border-secondary collapse" aria-labelledby="headingFive"
           data-bs-parent="#accordionSixItems">
        <div class="accordion-body">
        <div class="mb-3">
          <h5>Custom Section </h5>
  <label for="exampleFormControlInput1" class="form-label fs-6">Section Name</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
        <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label fs-6">Brief Decription</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>

          <div class="d-flex justify-content-end ">
              <button className="btn btn-success m-2">Add</button>
              <button className="btn btn-danger m-2">Save</button>
              <button className="btn btn-warning m-2">Edit</button>
          </div>
        </div>
      </div>
    </div>
    
    </div>
   
    </div>

    </>
  );
}

export default SummaryAccordion;
