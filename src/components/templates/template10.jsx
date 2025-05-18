// Template1.jsx
import React from 'react';


const Template10 = ({ data }) => (
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
<main class="container">
  <div class="row">
    <div class="col ">
    <p class="">Work Experience</p>
<ul>
  <li>
    <p style={{fontSize:'10px'}} class="text-primary ">Senior Web Developer / Digital Agency 2016-2020</p>
    <p style={{fontSize:'8px'}}>Phasellus et tellus iaculis, interdum augue vel, </p>
  </li>
  <li>
    <h6 style={{fontSize:'10px'}} class="text-primary">Web Developer / Big Firm 2010-2015</h6>
    <p  style={{fontSize:'8px'}}>Mauris volutpat, ex condimentum fringilla imperdiet,</p>
  </li>
  <li>
    <p  style={{fontSize:'10px'}} class="text-primary">Junior Web Developer / Websites 'R' Us 2004-2009</p>
    <p style={{fontSize:'8px'}}>Sed eu turpis placerat, posuere odio a, viverra velit.  </p>
  </li>
</ul>
     
    </div>
    <div class="col ">
 <p style={{fontSize:'15px'}} class="">Education</p> 
<ul>
  <li>
    <p style={{fontSize:'10px'}} class="text-primary">Computer Science / University Name 2001-2004</p>
    <p style={{fontSize:'10px'}}>Sed et ornare quam. Cras scelerisque ex ultricies neque sodales tristique. </p>
  </li>
  <li>
    <p  style={{fontSize:'15px'}} class="text-primary">Testville High School 1994-2000</p>
    <p  style={{fontSize:'10px'}} >Aenean nisl enim, dictum in odio ut, suscipit efficitur diam.</p>
  </li>
</ul>
    </div>     
  </div>    
  <div class="row">
    <div class="col ">
      <h6 class="mb-2">Skills</h6>      
<div class="progress mb-2" style={{height:'20px'}}>
  <div class="progress-bar bg-primary text-left pl-2" role="progressbar" style={{width: '95%'}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">HTML</div>
</div>       
<div class="progress mb-2" style={{height:'20px'}}>
  <div class="progress-bar bg-primary text-left pl-2" role="progressbar" style={{width: '89%'}} aria-valuenow="89" aria-valuemin="0" aria-valuemax="100">CSS</div>
</div> 
<div class="progress mb-2" style={{height:'20px'}}>
  <div class="progress-bar bg-primary text-left pl-2" role="progressbar" style={{width: '87%'}} aria-valuenow="87" aria-valuemin="0" aria-valuemax="100">JavaScript</div>
</div>       
<div class="progress mb-2" style={{height:'20px'}}>
  <div class="progress-bar bg-primary text-left pl-2" role="progressbar" style={{width: '80%'}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">WordPress</div>
</div>  
<div class="progress mb-2" style={{height:'20px'}}>
  <div class="progress-bar bg-primary text-left pl-2" role="progressbar" style={{width: '78%'}} aria-valuenow="78" aria-valuemin="0" aria-valuemax="100">Photoshop</div>
</div>       
<div class="progress mb-2" style={{height:'20px'}}>
  <div class="progress-bar bg-primary text-left pl-2" role="progressbar" style={{width: '77%'}} aria-valuenow="77" aria-valuemin="0" aria-valuemax="100">PHP</div>
</div>
<div class="progress mb-2" style={{height:'20px'}}>
  <div class="progress-bar bg-primary text-left pl-2" role="progressbar" style={{width:'75'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">Linux</div>
</div> 
<div class="progress mb-2" style={{height:'20px'}}>
  <div class="progress-bar bg-primary text-left pl-2" role="progressbar" style={{width: '65%'}} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">SEO</div>
</div>
    </div>
    <div class="col">    
      <p style={{fontSize:'15px'}} class="mb-5">Recent Work</p> 
<div class="row">
  <div class="col mb-3">
    <a href="#">
      <img class="img-fluid img-thumbnail" src="screenshot.png"/>
    </a>
  </div> 
  <div class="col mb-3">
    <a href="#">
      <img class="img-fluid img-thumbnail" src="screenshot.png"/>
    </a>
  </div> 
</div>
<div class="row">
  <div class="col mb-3">
    <a href="#">
      <img class="img-fluid img-thumbnail" src="screenshot.png"/>
    </a>
  </div> 
  <div class="col mb-3">
    <a href="#">
      <img class="img-fluid img-thumbnail" src="screenshot.png"/>
    </a>
  </div> 
</div> 
    </div>     
  </div>
</main>

    
  </>

);

export default Template10;

 