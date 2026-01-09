import React from 'react';
import './template1.css';

const Template5 = ({ data }) => {
  const {
    personalDetails = {},
    summary = '',
    skills = [],
    workExperience = [],
    education = [],
  } = data || {};

  const { firstName = '', lastName = '', email = '', phone = '', linkedin = '', image = null } = personalDetails;

  return (
    <>
      <div className="resume-header text-center rounded">
        <div className="row">
          <div className="col-4 p-2">
            <img
              style={{ width: '150px', height: '150px', padding: '10px', position: 'absolute', top: '5px', left: '20px' }}
              src={
                image ||
                "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
              }
              alt="profile"
            />
          </div>
          <div className="col-8 text-start">
            <h1>{firstName} {lastName}</h1>
            <p className="lead">{summary}</p>
            <p>
              Email: {email} | Phone: {phone} | LinkedIn: {linkedin}
            </p>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      {workExperience.length > 0 && (
        <div className="container">
          <h5 style={{ fontSize: '1.9vmin' }} className="fs-6 p-2">Experience</h5>
          <div className="container border-bottom border-danger fw-bold"></div>
          {workExperience.map((exp, idx) => (
            <div className="row" key={idx}>
              <div className="col p-2">
                <p>{exp.startDate} – {exp.current ? 'Present' : exp.endDate}</p>
                <p>{exp.location || ''}</p>
              </div>
              <div className="col-8 p-2">
                <h5 style={{ fontSize: '1.9vmin' }} className="fs-6">{exp.jobTitle} - {exp.employer}</h5>
                {exp.description ? <p>{exp.description}</p> : null}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Education Section */}
      <div className="container">
        <h5 style={{ fontSize: '1.9vmin' }} className="fs-6 p-2">Education</h5>
        <div className="container border-bottom border-danger fw-bold"></div>
        {education.map((edu, idx) => (
          <div className="row" key={idx}>
            <div className="col p-2">
              <p>{edu.startDate} – {edu.current ? 'Present' : edu.endDate}</p>
              <p>{edu.location || ''}</p>
            </div>
            <div className="col-8 p-2">
              <h5 style={{ fontSize: '1.9vmin' }} className="fs-6">{edu.degree} {edu.fieldOfStudy}</h5>
              <p>{edu.school}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Template5;
