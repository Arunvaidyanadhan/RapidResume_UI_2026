// Template2.jsx
import React from 'react';
import './template2.css';

const Template7 = ({ data }) => (
  <div class="container ">

    <div class="resume-header  text-center rounded">
      <div className="row">
        <div className="col-4">
          <img style={{width:'180px',height:'180px',border:'10px solid White',padding:'5px',position:'absolute',top:'40px',left:'20px'}} src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
        </div>
        <div className="col-8 text-start">

      <h1  >John Doe</h1>
      <p class="lead">Full Stack Web Developer</p>
      <p>Email: john@example.com | Phone: +123 456 7890 | LinkedIn: linkedin.com/in/johndoe</p>
    </div>
      </div>
</div>
   
    <div style={{marginTop:'35px'}} class="resume-section ">
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
  </div>

    );

export default Template7;
