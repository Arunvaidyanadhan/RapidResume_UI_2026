import React from 'react';
import './template3.css'; // You can rename the CSS if needed

const Template4 = ({ data }) => {
  const {
    personalDetails,
    workExperience = [],
    education = [],
    skills = [],
  } = data;

  const fullName = personalDetails
    ? `${personalDetails.firstName} ${personalDetails.lastName}`
    : 'Laura Collins';

  const jobTitle = workExperience[0]?.jobTitle || 'Freelance Web Developer';

  const summary = data?.summary || 'Suspendisse eleifend interdum orci non pharetra.';

  const phone = personalDetails?.phone || '';
  const email = personalDetails?.email || '';
  const website = personalDetails?.website || '';
  const image =
    personalDetails?.image || 'https://i.pravatar.cc/175?img=32';

  return (
    <>
      {/* Header */}
      <header className="bg-primary bg-gradient text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col text-left text-md-center">
              <img
                className="rounded-circle img-fluid mt-2"
                src={image}
                alt="Profile"
              />
            </div>
            <div className="col">
              <h1>{fullName}</h1>
              <h5>{jobTitle}</h5>
              <p className="border-top pt-3">{summary}</p>
            </div>
          </div>
        </div>
      </header>

      {/* Contact Info */}
      <nav className="bg-dark text-white-50 p-2">
        <div className="container">
          <div className="row">
            <div className="col pb-md-0">
              <i className="fa-solid fa-envelope mx-2" />
              {email ? <a href={`mailto:${email}`} className="text-white">{email}</a> : <span className="text-white">&nbsp;</span>}
            </div>
            <div className="col text-md-center pb-md-0">
              <i className="fa-solid fa-globe mx-2" />
              {website ? <a href={website} className="text-white">{website}</a> : <span className="text-white">&nbsp;</span>}
            </div>
            <div className="col text-md-right">
              <i className="fa-solid fa-mobile-screen mx-2" />
              {phone ? <a href={`tel:${phone}`} className="text-white">{phone}</a> : <span className="text-white">&nbsp;</span>}
            </div>
          </div>
        </div>
      </nav>

      {/* Summary */}
      <div className="container">
        <h5 className="p-1 mt-2" style={{ fontSize: '1.9vmin', backgroundColor: 'rgb(120, 117, 117)', color: 'white' }}>
          Professional Summary
        </h5>
        <p>{summary}</p>
      </div>

      {/* Education */}
      <div className="container">
        <h5 className="p-1" style={{ fontSize: '1.9vmin', backgroundColor: 'rgb(120, 117, 117)', color: 'white' }}>
          Academic Background
        </h5>
        <div className="row">
          {education.map((edu, index) => (
            <div className="col-6" key={index}>
              <div className="d-flex justify-content-between">
                <h6>{edu.school || ''}</h6>
                <h6>{edu.startDate || ''} - {edu.current ? 'Present' : (edu.endDate || '')}</h6>
              </div>
              <div className="d-flex justify-content-between">
                <h6 style={{ fontSize: '1.9vmin' }}>{edu.degree || edu.fieldOfStudy}</h6>
                <h6 style={{ fontSize: '1.9vmin' }}>{edu.grade || 'N/A'}</h6>
              </div>
              {edu.description ? <p>{edu.description}</p> : null}
            </div>
          ))}
        </div>
      </div>

      {/* Work Experience */}
      {workExperience.length > 0 && (
        <div className="container">
          <h5 className="p-1" style={{ fontSize: '1.9vmin', backgroundColor: 'rgb(120, 117, 117)', color: 'white' }}>
            Career History
          </h5>
          <div className="row">
            {workExperience.map((exp, index) => (
              <div className="col-6" key={index}>
                <div className="d-flex justify-content-between">
                  <h6>{exp.employer || ''}</h6>
                  <h6>{exp.startDate || ''} - {exp.current ? 'Present' : (exp.endDate || '')}</h6>
                </div>
                <div className="d-flex justify-content-between">
                  <h6>{exp.jobTitle || ''}</h6>
                </div>
                {exp.description ? <p>{exp.description}</p> : null}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills & Reference */}
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h6
              style={{
                fontSize: '1.9vmin',
                backgroundColor: 'rgb(120, 117, 117)',
                color: 'white',
                padding: '2px',
              }}
            >
              Core Skills
            </h6>
            <ul>
              {skills.map((skill, idx) => (
                <li key={idx}>{typeof skill === 'string' ? skill : skill.name}</li>
              ))}
            </ul>
          </div>
          <div className="col-6">
            <h6
              style={{
                fontSize: '1.9vmin',
                backgroundColor: 'rgb(120, 117, 117)',
                color: 'white',
                padding: '2px',
              }}
            >
              Work Reference
            </h6>
            <p>{personalDetails?.reference || 'Available upon request.'}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Template4;
