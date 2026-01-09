// Template3.jsx
import React from 'react';
import './template3.css';

const Template6 = ({ data }) => {
  const {
    personalDetails = {},
    skills = [],
    languages = [],
    workExperience = [],
    education = [],
  } = data || {};

  const fullName = `${personalDetails.firstName || ''} ${personalDetails.lastName || ''}`.trim() || 'Resume';
  const headline = workExperience[0]?.jobTitle || '';

  return (
    <>
      <header style={{ position: 'relative', width: '100%', height: '200px', backgroundColor: 'rgb(54, 52, 52)' }}>
        <h2 className="text-light text-center p-2">{fullName}</h2>
        {headline ? <h3 className="text-light text-center p-2">{headline}</h3> : null}
        <div>
          <img
            alt="Profile"
            style={{
              borderRadius: '50%',
              width: '175px',
              height: '175px',
              border: '4px solid white',
              position: 'absolute',
              left: '10px',
              top: '90px',
              backgroundColor: 'aliceblue',
              padding: '10px',
              objectFit: 'cover',
            }}
            src={
              personalDetails.image ||
              'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            }
          />
        </div>
      </header>

      <div className="row">
        <div style={{ backgroundColor: 'rgb(206, 195, 195)', fontSize: '1.9vmin' }} className="col-4 mx-2 min-vh-auto">
          <h3 style={{ fontSize: '1.9vmin', textAlign: 'center', marginTop: '75px', borderBottom: '4px solid gray' }}>Contact</h3>
          <ul>
            {personalDetails.phone ? (
              <li className="list-group-item"><i className="fa-solid fa-phone mx-2" />{personalDetails.phone}</li>
            ) : null}
            {personalDetails.email ? (
              <li className="list-group-item"><i className="fa-solid fa-envelope mx-2" />{personalDetails.email}</li>
            ) : null}
            {(personalDetails.address || personalDetails.city || personalDetails.state) ? (
              <li className="list-group-item"><i className="fa-solid fa-location-dot mx-2" />{`${personalDetails.address || ''} ${personalDetails.city || ''} ${personalDetails.state || ''}`.trim()}</li>
            ) : null}
          </ul>

          <h3 style={{ textAlign: 'center', borderBottom: '4px solid gray', fontSize: '1.9vmin' }}>Skills</h3>
          <ul style={{ fontWeight: 'bold' }}>
            {skills.map((s, i) => (
              <li key={i}>{typeof s === 'string' ? s : (s?.name || '')}</li>
            ))}
          </ul>

          <div>
            <h4 style={{ marginTop: '10px', textAlign: 'center', borderBottom: '4px solid gray' }}>Language</h4>
            <ul>
              {languages.map((l, i) => (
                <li key={i}>{typeof l === 'string' ? l : (l?.name || '')}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="col-7">
          {workExperience.length > 0 && (
            <>
              <h5>Experience</h5>
              <div className="border" />
              {workExperience.map((exp, idx) => (
                <div key={idx}>
                  <div className="row">
                    <div className="col">{exp.startDate} - {exp.current ? 'Present' : exp.endDate}</div>
                    <div className="col">{exp.employer}</div>
                  </div>
                  {exp.description ? <p style={{ whiteSpace: 'pre-wrap' }}>{exp.description}</p> : null}
                </div>
              ))}
            </>
          )}

          <div className="border" />
          <div className="container">
            <h5 style={{ fontSize: '1.9vmin' }} className="fs-6 p-2">Education</h5>
            <div className="container fw-bold" />
            {education.map((edu, idx) => (
              <div className="row" key={idx}>
                <div className="col">
                  <p>{edu.startDate} - {edu.current ? 'Present' : edu.endDate}</p>
                  <p>{edu.location || ''}</p>
                </div>
                <div className="col-8">
                  <h6 style={{ fontSize: '1.9vmin' }} className="fs-6">{edu.degree} {edu.fieldOfStudy}</h6>
                  <p>{edu.school}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Template6;
