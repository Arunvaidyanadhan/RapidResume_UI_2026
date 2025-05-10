import React from 'react';

function AddExprince () {
 
  return (
    <>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
 Add Exprince
</button>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
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
  <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
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


<div class="col-md-6">
<label for="inputCity" class="form-label">Start Date</label>
<input type="date" class="form-control" id="inputCity"/>
</div>
<div class="col-md-6">
  <label for="inputZip" class="form-label">End Date</label>
  <input type="date" class="form-control" id="inputZip"/>
</div>
</form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Add</button>
        <button type="button" class="btn btn-danger">Save changes</button>
      </div>
    </div>
  </div>
</div>

    </>
  );
}

export default AddExprince;
