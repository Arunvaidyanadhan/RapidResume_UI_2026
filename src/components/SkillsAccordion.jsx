import React from 'react';
import './AccordionForm.css';
import './CheckBox.css'

function SkillsAccordion() {
 

  return (
    <>
    <div class="container mt-2">
     <div class="accordion" id="accordionSixItems">
     <div class="accordion-item">
      <h2 class="accordion-header" id="headingFour">
        <button class="accordion-button fw-bolder fs-3 collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
        SKills
        </button>
      </h2>
      <div id="collapseFour" class="accordion-collapse  border  border-secondary collapse" aria-labelledby="headingFour"
           data-bs-parent="#accordionSixItems">
        <div class="accordion-body">
          <div className="row">
            <div className="col">
            <nav class="navbar border border-secondary " style={{backgroundColor:'#e3f2fd', }} data-bs-theme="light">
  <div class="container-fluid row  h-100">
    <h3>Job title search</h3>
  <form class="d-flex " role="search">  
      <input class="form-control  " type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
   
  </div>
</nav>
<div style={{height:'300px'}} className=" border border-warning overflow-y-auto">
<div className="new">




  <div class="form-check p-3 custom-checkbox">
    <input type="checkbox" id="myCheck2" />
    <label for="myCheck2">Accept Terms & Conditions</label>
  </div>

  <div class="form-check p-3 custom-checkbox">
    <input type="checkbox" id="myCheck3" />
    <label for="myCheck3">Accept Terms & Conditions</label>
  </div>

  <div class="form-check p-3 custom-checkbox">
    <input type="checkbox" id="myCheck4" />
    <label for="myCheck4">Accept Terms & Conditions</label>
  </div>

  <div class="form-check p-3 custom-checkbox">
    <input type="checkbox" id="myCheck5" />
    <label for="myCheck5">Accept Terms & Conditions</label>
  </div>

  <div class="form-check p-3 custom-checkbox">
    <input type="checkbox" id="myCheck6" />
    <label for="myCheck6">Accept Terms & Conditions</label>
  </div>

  <div class="form-check p-3 custom-checkbox">
    <input type="checkbox" id="myCheck7" />
    <label for="myCheck7">Accept Terms & Conditions</label>
  </div>


  <div class="form-check p-3 custom-checkbox">
    <input type="checkbox" id="myCheck8" />
    <label for="myCheck8">Accept Terms & Conditions</label>
  </div>

  <div class="form-check p-3 custom-checkbox">
    <input type="checkbox" id="myCheck9" />
    <label for="myCheck9">Accept Terms & Conditions</label>
  </div>

  <div class="form-check p-3 custom-checkbox">
    <input type="checkbox" id="myCheck10" />
    <label for="myCheck10">Accept Terms & Conditions</label>
  </div>

  <div className="form-check p-3  custom-checkbox">
    <input type="checkbox" id="myCheck11" />
    <label for="myCheck11">Accept Terms & Conditions</label>
  </div>

  <div class="form-check p-3 custom-checkbox">
    <input type="checkbox" id="myCheck12" />
    <label for="myCheck12">Accept Terms & Conditions</label>
  </div>


</div>
</div>
  </div>
            <div style={{height:'400px'}} className=" col-6 border border-warning overflow-y-auto" >
              <h5>Enhace with Ai</h5>
              </div>
            </div>
         
        </div>
        <div class="d-flex justify-content-end ">
  <button className="btn btn-success m-2">Save</button>
  <button className="btn btn-danger m-2">Edit</button>
</div>
      </div>
    </div>
    
     </div>
     
     </div>


    </>
  );
}

export default SkillsAccordion;
