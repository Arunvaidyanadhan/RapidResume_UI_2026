import React from 'react';

const Template1 = ({ data }) => (
  <>
    <div className="resume-header text-center rounded">
      <div className="row">
        <div className="col-4 p-2">
          <img
            style={{
              width: '150px',
              borderRadius: '50%',
              height: '150px',
              padding: '10px',
              position: 'absolute',
              top: '5px',
              left: '30px'
            }}
            src={data.photo || "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}
            alt="profile"
          />
        </div>
        <div className="col-8 text-start">
          <h1>{data.name}</h1>
          <p className="lead">{data.title}</p>
          <p>Email: {data.email} | Phone: {data.phone} | LinkedIn: {data.linkedin}</p>
        </div>
      </div>
    </div>

    {/* Experience */}
    <div className="container">
      <h5 className="fs-6 p-2" style={{ fontSize: '1.9vmin' }}>Experience</h5>
      <div className="container border-bottom border-danger fw-bold "></div>
      {data.experience?.map((exp, i) => (
        <div className="row" key={i}>
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

    {/* Education */}
    <div className="container">
      <h5 className="fs-6 p-2" style={{ fontSize: '1.9vmin' }}>Education</h5>
      <div className="container border-bottom border-danger fw-bold "></div>
      {data.education?.map((edu, i) => (
        <div className="row" key={i}>
          <div className="col p-2">
            <p>{edu.year}</p>
            <p>{edu.location}</p>
          </div>
          <div className="col-8 p-2">
            <h5 style={{ fontSize: '1.9vmin' }} className="fs-6">{edu.institution}</h5>
            <p>{edu.degree}</p>
          </div>
        </div>
      ))}
    </div>
  </>
);

export default Template1;
