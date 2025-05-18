
  // Template2.jsx
  import React from 'react';
  import './template8.css';
  
  const Template8 = ({ data }) => (
   
    <>
    <header style={{backgroundColor:'rgba(86, 49, 57, 0.7)',height:'200px',color:'white',padding:'10px',display:'flex'}} className=''>
    <div className='col'>
    <h4 className='mb-1'>S.V Arun Vaidyanadthan</h4>
    <img src='https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className='' style={{width:'200px',height:'200px',borderRadius:'50%',zIndex:'2',position:'absolute',right:'280px',top:'90px',border:'20px solid white',padding:'10px',}}/>
    </div>
    <div className='col'>
    <ul>
      <li class="list-group-item"><i class="fa-solid fa-mobile-screen mx-2"></i>7550003221</li>
      <li class="list-group-item"><i class="fa-solid fa-envelope mx-2"></i>arun@gmail.com</li>
      <li class="list-group-item"><i class="fa-solid fa-house-user mx-2"></i>64/81 Karnan Street Mogappair West Chennai-37</li>
   
    </ul>
    </div>
    </header>
     <div class="resume-section mt-5">
      <div class="section-title">Summary</div>
      <p>Experienced web developer with 5+ years of experience in front-end and back-end development. Passionate about building responsive, user-friendly websites and applications.</p>
    </div>


    <div class="resume-section">
      <div style={{fontSize: '1.9vmin'}}  class="section-title">Skills</div>
      <ul class="list-inline">
        <li class="list-inline-item badge bg-primary">HTML</li>
        <li class="list-inline-item badge bg-primary">CSS</li>
        <li class="list-inline-item badge bg-primary">JavaScript</li>
        <li class="list-inline-item badge bg-primary">React</li>
        <li class="list-inline-item badge bg-primary">Node.js</li>
        <li class="list-inline-item badge bg-primary">MySQL</li>
      </ul>
    </div>


    <div class="resume-section">
      <div style={{fontSize: '1.9vmin'}}  class="section-title">Experience</div>
      <h5 style={{fontSize: '1.9vmin'}} >Senior Developer - ABC Corp</h5>
      <p><small>Jan 2020 – Present</small></p>
      <ul>
        <li>Developed and maintained web applications using React and Node.js.</li>
        <li>Optimized SQL queries for performance.</li>
        <li>Worked with a team of 5 developers in Agile environment.</li>
      </ul>
    </div>


    <div class="resume-section">
      <div style={{fontSize: '1.9vmin'}}  class="section-title">Education</div>
      <h5 style={{fontSize: '1.9vmin'}} >Bachelor of Technology in Computer Science</h5>
      <p><small>XYZ University, 2014 – 2018</small></p>
    </div>


     
    </>
      );
  
  export default Template8;
  