// Template3.jsx
import React from 'react';
import './template3.css';

const Template4 = ({ data }) => (
  <>
    <header class="bg-primary bg-gradient text-white">
  <div class="container">
    <div class="row">
      <div class="col text-left text-md-center">
        <img class="rounded-circle img-fluid mt-2" src="https://i.pravatar.cc/175?img=32" alt="Profile Photo" />
      </div>
      <div class="col">
        <h1>Laura Collins</h1>
        <h5>Freelance Web Developer</h5>
        <p class="border-top pt-3">volutpat faucibus. Suspendisse ac nisl purus suspendisse eleifend interdum orci non pharetra. </p>
      </div>       
    </div>        
  </div>
</header>
<nav class="bg-dark text-white-50 p-2">
  <div class="container">
   <div class="row ">
     <div class="col  pb-md-0">
        
        <a href="#" class="text-white ml-2"><i class="fa-solid fa-envelope  "></i>lcollins@email.com</a>
     </div>
     <div class="col text-md-center  pb-md-0">
        <a href="#" class="text-white ml-2"><i class="fa-solid fa-globe "></i>www.lauracollins.com</a>
      </div>       
      <div class="col text-md-right">
        
        <a href="#" class="text-white ml-2"><i className="fa-solid fa-mobile-screen "></i>+12 3456 7890</a>
      </div>       
    </div>
  </div>
</nav>
     

      <div className="container">
        
        <h5 style={{ marginTop: '5px',fontSize: '1.9vmin', backgroundColor: 'rgb(120, 117, 117)', color: 'white' }} className="p-1">
          Professional Summary
        </h5>
        <p>
         fuga minus nesciunt excepturi voluptatibus optio, esse, a assumenda architecto inventore! Fuga, quasi?
        </p>
      </div>

      <div className="container">
        <h5 style={{ backgroundColor: 'rgb(120, 117, 117)',fontSize: '1.9vmin', color: 'white' }} className="p-1">
          ACADEMIC BACKGROUND
        </h5>
        <div className="row">
          <div className="col-6">
            <div className="d-flex justify-content-between">
              <h6>University Of Madras</h6>
              <h6>2014-2018</h6>
            </div>
            <div className="d-flex justify-content-between">
              <h6 style={{fontSize: '1.9vmin'}}>MA Sales Management</h6>
              <h6 style={{fontSize: '1.9vmin'}}>3.9/4 GPA</h6>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
          </div>

          <div className="col-6">
            <div className="d-flex justify-content-between">
              <h6 style={{fontSize: '1.9vmin'}}>Annamalai University</h6>
              <h6 style={{fontSize: '1.9vmin'}}>2018-2023</h6>
            </div>
            <div className="d-flex justify-content-between">
              <h6 style={{fontSize: '1.9vmin'}}>BA Economics</h6>
              <h6 style={{fontSize: '1.9vmin'}}>3.9/4 GPA</h6>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
          </div>
        </div>
      </div>

      <div className="container">
        <h5 style={{fontSize: '1.9vmin', backgroundColor: 'rgb(120, 117, 117)', color: 'white' }} className="p-1">
          CAREER HISTORY
        </h5>
        <div className="row">
          <div className="col-6">
            <div className="d-flex justify-content-between">
              <h6 style={{fontSize: '1.9vmin'}}>University Of Madras</h6>
              <h6 style={{fontSize: '1.9vmin'}}>2014-2018</h6>
            </div>
            <div className="d-flex justify-content-between">
              <h6 style={{fontSize: '1.9vmin'}}>MA Sales Management</h6>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
          </div>

          <div className="col-6">
            <div className="d-flex justify-content-between">
              <h6>Annamalai University</h6>
              <h6>2018-2023</h6>
            </div>
            <div className="d-flex justify-content-between">
              <h6>BA Economics</h6>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-6">
            <h6 style={{fontSize: '1.9vmin', backgroundColor: 'rgb(120, 117, 117)', color: 'white', padding: '2px' }}>Core Skills</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
          </div>
          <div className="col-6">
            <h6 style={{ fontSize: '1.9vmin',backgroundColor: 'rgb(120, 117, 117)', color: 'white', padding: '2px' }}>Work Reference</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
          </div>
        </div>
      </div>
    </>
);

export default Template4;
