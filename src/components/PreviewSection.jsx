import React from 'react';
import './PreviewSection.css';

function PrevewSection() {
 
  return (
    <>
    <div className='sticky'>
    <h5 className='mt-5'>Priview</h5>
      <div
    style={{ width:'80%',
      backgroundImage: 'linear-gradient(145deg, #ffffff, #e0e0e2)',
      boxShadow: '6px 6px 12px #737373, -6px -6px 12px #ffffff',padding:'40px',height:'500px'
    }}
    className="container mt-3 overflow-hidden border" >    
  </div>
  <div class=" d-flex justify-content-center  ">
  <div class="p-2">
    <button type="button" class="btn btn-primary me-2 ">Perview</button>
    <button type="button" class="btn btn-primary ">Download</button>
    </div>
      </div>
      </div>
 
  
    </>
  );
}

export default  PrevewSection;
