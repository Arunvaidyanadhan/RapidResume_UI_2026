
import React from 'react';
import './AccordionForm.css';

function FinallizeAccordion() {
 
  return (
    <>
        <div class="container mt-2">
     <div class="accordion" id="accordionSixItems">
     <div class="accordion-item">
      <h2 class="accordion-header" id="headingSix">
        <button class="accordion-button fw-bolder fs-5  collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
         Finallize
        </button>
      </h2>
      <div id="collapseSix" class="accordion-collapse border  border-secondary collapse" aria-labelledby="headingSix"
           data-bs-parent="#accordionSixItems">
            <div class="accordion-body">
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

export default FinallizeAccordion;


