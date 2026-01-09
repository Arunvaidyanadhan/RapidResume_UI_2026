import React from 'react';
import './template3.css';

const Template3 = ({ data }) => {
  const {
    personalDetails,
    skills = [],
    languages = [],
    workExperience = [],
    education = [],
  } = data;

  // Compose full name
  const fullName = personalDetails
    ? `${personalDetails.firstName} ${personalDetails.lastName}`
    : 'S.V.ARUNKUMAR';

  // Contact info
  const phone = personalDetails?.phone;
  const email = personalDetails?.email;
  const address = personalDetails
    ? `${personalDetails.address}, ${personalDetails.city}, ${personalDetails.state}`
    : '';

  // Transform skills (strings => objects with default level)
  const skillsWithLevel = skills.map((skill) => ({
    name: skill,
    level: 80, // default level %
  }));

  // Transform languages (objects => display string)
  const languagesList = languages.map(
    (lang) => `${lang.name} (${lang.level})`
  );

  // Transform workExperience => experience shape your template expects
  const experience = workExperience.map((exp) => ({
    period: `${exp.startDate || ''} - ${exp.current ? 'Present' : (exp.endDate || '')}`,
    company: exp.employer || '',
    description: exp.description,
  }));

  // Transform education to your expected shape
  const educationList = education.map((edu) => ({
    period: `${edu.startDate} - ${edu.endDate}`,
    location: edu.location,
    institution: edu.institution,
    description: edu.grade,
  }));

  return (
    <div className="">
      {/* Header Section */}
      <div className="row">
        <div className="col-12">
          <h1 className="text-end px-5" style={{ color: 'rgb(137, 19, 19)' }}>
            {fullName}
          </h1>
        </div>
      </div>

      <header
        style={{
          border: '10px solid white',
          backgroundColor: 'rgb(137, 19, 19)',
          color: 'white',
        }}
      >
        <div className="row">
          <h5 className="col-12 text-center p-2">
            {workExperience[0]?.jobTitle || 'Sales Marketing'}
          </h5>
        </div>
      </header>

      {/* Main Layout */}
      <div className="row">
        {/* Sidebar */}
        <div
          className="col-4 mx-2 min-vh-auto"
          style={{ backgroundColor: 'rgb(137, 19, 19)', fontSize: '1.9vmin' }}
        >
          <img
            src={
              personalDetails?.image ||
              'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            }
            alt="Profile"
            className="mt-4"
            style={{
              width: '200px',
              height: '200px',
              padding: '5px',
              position: 'absolute',
              left: '-1px',
              top: '-20px',
              borderRadius: '50%',
              border: '2px solid white',
              backgroundColor: 'white',
            }}
          />

          {/* Contact */}
          <h5 className="text-center mt-5 pt-5 text-white border-bottom border-white pb-2">
            Contact
          </h5>
          <ul className="list-group list-group-flush">
            {phone && (
              <li className="list-group-item bg-transparent text-white">
                <i className="fa-solid fa-phone mx-2" /> {phone}
              </li>
            )}
            {email && (
              <li className="list-group-item bg-transparent text-white">
                <i className="fa-solid fa-envelope mx-2" /> {email}
              </li>
            )}
            {address && (
              <li className="list-group-item bg-transparent text-white">
                <i className="fa-solid fa-location-dot mx-2" /> {address}
              </li>
            )}
          </ul>

          {/* Skills */}
          <h6 className="text-center text-white mt-3 fw-bold">Skills</h6>
          {skillsWithLevel.map((skill, index) => (
            <div className="progress mb-2" key={index} style={{ height: '10px' }}>
              <div
                className="progress-bar"
                role="progressbar"
                style={{
                  width: `${skill.level}%`,
                  backgroundColor: 'rgb(235, 129, 150)',
                }}
                aria-valuenow={skill.level}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {skill.name}
              </div>
            </div>
          ))}

          {/* Languages */}
          <h5 className="text-center text-white border-bottom border-white mt-4 pb-2">
            Languages
          </h5>
          <ul className="text-white ps-4">
            {languagesList.map((lang, index) => (
              <li key={index}>{lang}</li>
            ))}
          </ul>
        </div>

        {/* Right Content Area */}
        <div className="col-7">
          {/* Experience Section */}
          {workExperience.length > 0 && (
            <>
              <h5 className="mt-3">Experience</h5>
              <hr />
              {experience.map((exp, index) => (
                <div key={index}>
                  <div className="row">
                    <div className="col">{exp.period}</div>
                    <div className="col">{exp.company}</div>
                  </div>
                  {exp.description && (
                    <p style={{ whiteSpace: 'pre-wrap' }}>{exp.description}</p>
                  )}
                </div>
              ))}
            </>
          )}

          {/* Education Section */}
          <h5 className="mt-4">Education</h5>
          <hr />
          {educationList.map((edu, index) => (
            <div className="row" key={index}>
              <div className="col">
                <p>{edu.period}</p>
                <p>{edu.location}</p>
              </div>
              <div className="col-8">
                <h6>{edu.institution}</h6>
                <p>{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Template3;
