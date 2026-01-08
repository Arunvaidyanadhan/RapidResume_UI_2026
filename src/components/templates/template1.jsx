import React from 'react';

const Template1 = ({ data }) => {
  const {
    personalDetails = {},
    summary = '',
    skills = [],
    workExperience = [],
    education = [],
  } = data;

  const { firstName, lastName, email, phone, linkedin, image } = personalDetails;

  return (
    <>
      {/* Header */}
      <div className="resume-header text-center rounded p-3">
        <div className="row">
          <div className="col-4 p-2">
            <img
              src={
                image ||
                "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              }
              alt="Profile"
              style={{
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                objectFit: 'cover',
                padding: '10px',
                position: 'absolute',
                top: '5px',
                left: '30px',
              }}
            />
          </div>
          <div className="col-8 text-start">
            <h1>{firstName} {lastName}</h1>
            <p className="lead">{summary}</p>
            <p>
              Email: <a href={`mailto:${email}`}>{email}</a> | Phone: {phone} | LinkedIn: <a href={linkedin}>{linkedin}</a>
            </p>
          </div>
        </div>
      </div>

      {/* Experience */}
      <div className="container">
        <h5 className="fs-6 p-2" style={{ fontSize: '1.9vmin' }}>Experience</h5>
        <div className="container border-bottom border-danger fw-bold mb-2"></div>
        {workExperience.length === 0 ? (
          <p className="text-muted fst-italic">No work experience added.</p>
        ) : (
          workExperience.map((exp, idx) => (
            <div className="row" key={idx}>
              <div className="col-4 p-2">
                <p>{exp.startDate} – {exp.current ? "Present" : exp.endDate}</p>
                <p>{exp.location || "N/A"}</p>
              </div>
              <div className="col-8 p-2">
                <h5 className="fs-6" style={{ fontSize: '1.9vmin' }}>{exp.jobTitle} - {exp.employer}</h5>
                <ul style={{ fontSize: '1.6vmin' }}>
                  {exp.description?.split("\n").map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Education */}
      <div className="container mt-3">
        <h5 className="fs-6 p-2" style={{ fontSize: '1.9vmin' }}>Education</h5>
        <div className="container border-bottom border-danger fw-bold mb-2"></div>
        {education.length === 0 ? (
          <p className="text-muted fst-italic">No education added.</p>
        ) : (
          education.map((edu, idx) => (
            <div className="row" key={idx}>
              <div className="col-4 p-2">
                <p>{edu.startDate} – {edu.endDate || "Present"}</p>
                <p>{edu.location || "N/A"}</p>
              </div>
              <div className="col-8 p-2">
                <h5 className="fs-6" style={{ fontSize: '1.9vmin' }}>{edu.degree} {edu.fieldOfStudy}</h5>
                <p style={{ fontSize: '1.6vmin' }}>{edu.school}</p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Skills */}
      <div className="container mt-3">
        <h5 className="fs-6 p-2" style={{ fontSize: '1.9vmin' }}>Skills</h5>
        <div className="container border-bottom border-danger fw-bold mb-2"></div>
        <ul className="list-inline">
          {skills.map((skill, idx) => (
            <li key={idx} className="list-inline-item badge bg-primary text-white mx-1 my-1" style={{ fontSize: '1.5vmin' }}>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Template1;
