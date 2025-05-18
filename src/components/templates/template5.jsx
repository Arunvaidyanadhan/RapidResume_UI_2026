// Template1.jsx
import React from 'react';
import './template1.css';

const Template5 = ({ data }) => (
  <>
     <div class="resume-header  text-center rounded">
      <div className="row">
        <div className="col-4 p-2">
          <img style={{width:'150px',height:'150px',padding:'10px',position:'absolute',top:'5px',left:'20px'}} src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
        </div>
        <div className="col-8 text-start">

      <h1  >John Doe</h1>
      <p class="lead">Full Stack Web Developer</p>
      <p>Email: john@example.com | Phone: +123 456 7890 | LinkedIn: linkedin.com/in/johndoe</p>
    </div>
      </div>
</div>
    <div className='container'>
       <h5  style={{fontSize: '1.9vmin'}} className='fs-6 p-2'>Experiance</h5>
       <div className="container border-bottom border-danger fw-bold "></div>
      <div className='row'>
        <div className='col p-2'>
          <p>2022-2024</p>
          <p>Chennai-India</p>          
        </div>
         <div className='col-8 p-2'>
          <h5 style={{fontSize: '1.9vmin'}} className='fs-6'>Studio Showde</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, </p>
         </div>
      </div>
    </div>
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <p>2022-2024</p>
          <p>Chennai-India</p>          
        </div>
         <div className='col-8'>
          <h5 style={{fontSize: '1.9vmin'}} className='fs-6'>Studio Showde</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, </p>
         </div>
      </div>
    </div>
     <div className='container'>
       <h5  style={{fontSize: '1.9vmin'}} className='fs-6 p-2'>Education</h5>
       <div className="container border-bottom border-danger fw-bold "></div>
      <div className='row'>
        <div className='col p-2'>
          <p>2022-2024</p>
          <p>Chennai-India</p>          
        </div>
         <div className='col-8 p-2'>
          <h5 style={{fontSize: '1.9vmin'}} className='fs-6'>Studio Showde</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, </p>
         </div>
      </div>
    </div>
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <p>2022-2024</p>
          <p>Chennai-India</p>          
        </div>
         <div className='col-8'>
          <h5 style={{fontSize: '1.9vmin'}} className='fs-6'>Studio Showde</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, </p>
         </div>
      </div>
    </div>
   
   
       
    
    
    
      

  </>
);

export default Template5;
