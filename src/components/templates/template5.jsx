import React from 'react';
import './template1.css';

const Template5 = ({ data }) => {
  return (
    <>
      <div className="resume-header text-center rounded">
        <div className="row">
          <div className="col-4 p-2">
            <img
              style={{ width: '150px', height: '150px', padding: '10px', position: 'absolute', top: '5px', left: '20px' }}
              src={data.photo || "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"}
              alt="profile"
            />
          </div>
          <div className="col-8 text-start">
            <h1>{data.name || "John Doe"}</h1>
            <p className="lead">{data.jobTitle || "Full Stack Web Developer"}</p>
            <p>
              Email: {data.email} | Phone: {data.phone} | LinkedIn: {data.linkedin}
            </p>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="container">
        <h5 style={{ fontSize: '1.9vmin' }} className="fs-6 p-2">Experience</h5>
        <div className="container border-bottom border-danger fw-bold"></div>
        {data.experience?.map((exp, idx) => (
          <div className="row" key={idx}>
            <div className="col p-2">
              <p>{exp.duration}</p>
              <p>{exp.location}</p>
            </div>
            <div className="col-8 p-2">
              <h5 style={{ fontSize: '1.9vmin' }} className="fs-6">{exp.company}</h5>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Education Section */}
      <div className="container">
        <h5 style={{ fontSize: '1.9vmin' }} className="fs-6 p-2">Education</h5>
        <div className="container border-bottom border-danger fw-bold"></div>
        {data.education?.map((edu, idx) => (
          <div className="row" key={idx}>
            <div className="col p-2">
              <p>{edu.duration}</p>
              <p>{edu.location}</p>
            </div>
            <div className="col-8 p-2">
              <h5 style={{ fontSize: '1.9vmin' }} className="fs-6">{edu.institution}</h5>
              <p>{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Template5;
