import React from "react";
import "./template2.css";

const Template2 = ({ data }) => {
  const {
    personalDetails = {},
    summary = "",
    skills = [],
    workExperience = [],
    education = [],
  } = data;

  const { firstName, lastName, email, phone, linkedin } = personalDetails;

  return (
    <div className="container p-4" style={{ fontFamily: "Arial, sans-serif" }}>
      {/* Header */}
      <div className="resume-header text-center rounded mb-4">
        <h1 style={{ fontSize: "3.5vmin", fontWeight: "700", color: "#111" }}>
          {firstName} {lastName}
        </h1>
        <p
          className="lead"
          style={{ fontSize: "1.9vmin", fontWeight: "500", color: "#444" }}
        >
          {summary}
        </p>
        <p className="lead" style={{ fontSize: "1.5vmin", color: "#555" }}>
          Email:{" "}
          <a href={`mailto:${email}`} style={{ color: "#007bff" }}>
            {email}
          </a>{" "}
          | Phone: {phone} | LinkedIn:{" "}
          <a
            href={linkedin}
            target="_blank"
            rel="noreferrer"
            style={{ color: "#007bff" }}
          >
            {linkedin}
          </a>
        </p>
      </div>

      {/* Skills */}
      <div className="resume-section mb-4">
        <div
          className="section-title"
          style={{
            fontSize: "1.9vmin",
            fontWeight: "700",
            marginBottom: "0.8rem",
          }}
        >
          Skills
        </div>
        <ul className="list-inline">
          {skills.map((skill, index) => (
            <li
              key={index}
              className="list-inline-item badge bg-primary text-white"
              style={{
                fontSize: "1.5vmin",
                marginRight: "0.4rem",
                marginBottom: "0.3rem",
                padding: "0.3rem 0.8rem",
              }}
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>

      {/* Experience */}
      {workExperience.length > 0 && (
        <div className="resume-section mb-4">
          <div
            className="section-title"
            style={{
              fontSize: "1.9vmin",
              fontWeight: "700",
              marginBottom: "0.8rem",
            }}
          >
            Experience
          </div>

          {workExperience.map((exp, index) => (
            <div key={index} style={{ marginBottom: "1.5vmin" }}>
              <h5 style={{ fontSize: "1.9vmin", fontWeight: "600" }}>
                {exp.jobTitle} - {exp.employer}{" "}
                {exp.remote && (
                  <span
                    style={{
                      fontWeight: "normal",
                      fontSize: "1.3vmin",
                      color: "#007bff",
                    }}
                  >
                    (Remote)
                  </span>
                )}
              </h5>
              <p
                style={{
                  marginBottom: "0.4vmin",
                  fontSize: "1.6vmin",
                  color: "#555",
                }}
              >
                <small>
                  {exp.startDate} –{" "}
                  {exp.current ? "Present" : exp.endDate || "N/A"}
                </small>
              </p>
              {exp.description && (
                <ul
                  style={{
                    fontSize: "1.5vmin",
                    paddingLeft: "1.2em",
                    color: "#444",
                  }}
                >
                  {exp.description.split("\n").map((line, idx) => (
                    <li key={idx}>{line}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      <div className="resume-section">
        <div
          className="section-title"
          style={{
            fontSize: "1.9vmin",
            fontWeight: "700",
            marginBottom: "0.8rem",
          }}
        >
          Education
        </div>

        {education.length === 0 ? (
          <p
            style={{ fontSize: "1.6vmin", fontStyle: "italic", color: "#666" }}
          >
            No education details added yet.
          </p>
        ) : (
          education.map((edu, index) => (
            <div key={index} style={{ marginBottom: "1.2vmin" }}>
              <h5 style={{ fontSize: "1.9vmin", fontWeight: "600" }}>
                {edu.degree} {edu.fieldOfStudy}
              </h5>
              <p style={{ fontSize: "1.6vmin", color: "#555" }}>
                <small>
                  {edu.school}, {edu.startDate} –{" "}
                  {edu.endDate || "Present"}
                </small>
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Template2;
