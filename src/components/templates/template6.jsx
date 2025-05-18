// Template3.jsx
import React from 'react';
import './template3.css';

const Template6 = ({ data }) => (
  <>
  <header style={{position:'relative',width:'100%',height:'200px',backgroundColor: 'rgb(54, 52, 52)',}}>
          
          <h2   class="text-light text-center p-2 ">S.V.Arun Kumar Vaidyanadhan</h2>
          <h3  class="text-light text-center   p-2">Marketing Manager</h3>
          <div >
 <img class="" style={{borderRadius:'50%', width: '175px', height: '175px', border: '4px solid white', position: 'absolute',left:'10px',top: '90px',backgroundColor: 'aliceblue', padding: '10px'}}src='https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/>
    </div>
  </header>
  <div class="row">
  <div style={{backgroundColor: 'rgb(206, 195, 195)',fontSize: '1.9vmin',}} class="col-4 mx-2  min-vh-auto">
    <h3 style={{marginTop:'10px',fontSize: '1.9vmin',textAlign:'center',marginTop:'75px', borderBottom:'4px solid gray'}} >Contact</h3>
    <ul >
      <li class="list-group-item"><i class="fa-solid fa-phone mx-2 "></i><span class="">7550003221</span></li>
      <li class="list-group-item"><i class="fa-solid fa-envelope mx-2 "></i><span class="">arun@gmail.com</span></li>
      <li class="list-group-item"><i class="fa-solid fa-location-dot mx-2 "></i><span class="  text-align-start">64/81, karnan street,mogappair, </span></li>
         </ul>
          <h3  style={{fontSize:'12px', textAlign:'center', borderBottom:'4px solid gray',fontSize: '1.9vmin'}} >Skills</h3>
          <ul style={{fontSize:'12',fontWeight:'bold'}}>
            <li>Project Manager</li>
            <li>Public Realation</li>
            <li>Team Work</li>
            <li>Time Management</li>
            <li>LeaderShip</li>
            <li>Effective Communication</li>
            <li>Critical Thinking</li>
            <li>Digtal Marketing</li>
          </ul>
          <div class="">
            <h4 style={{marginTop:'10px',fontSize:'12px', textAlign:'center', borderBottom:'4px solid gray'}}>Language</h4>
            <ul>
              <li>English</li>              
              <li>Hindi</li>
            </ul>
          </div>
         
  </div>
  <div class="col-7">
    <h5>Experince</h5>
    <div className='border '></div>
    <div className='row'>
      <div className='col'>2023-2025</div>
       <div className='col'>Infosy,chennai</div>
    </div>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, </p>
   
    <div className='row'>
      <div className='col'>2020-2023</div>
       <div className='col'>IBM Chennai</div>
    </div>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, </p>
  <div>
      <div className='border '></div>
    <h6>Skills</h6>
   
    <ul>
      <li>java</li>
      <li>C</li>
      <li>C+</li>
      <li>css</li>
      <li>React js</li>
    </ul>
      <div className='border '></div>
      <div className='container'>
       <h5  style={{fontSize: '1.9vmin'}} className='fs-6 p-2'>Education</h5>
       <div className="container  fw-bold "></div>
      <div className='row'>
        <div className='col '>
          <p>2022-2024</p>
          <p>Chennai-India</p>          
        </div>
         <div className='col-8 '>
          <h6 style={{fontSize: '1.9vmin'}} className='fs-6'>Studio Showde</h6>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, </p>
         </div>
      </div>
    </div>
   
   
  </div>
</div>
  </div>

 
  
  
   

  </>
 
);

export default Template6;
