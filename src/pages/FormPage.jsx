import React, { useState } from "react";
import PersonalDetailAccordioner from "../components/PersonalDetailAccordion";
import WorkHistoryAccordion from "../components/WorkHistoryAccordion.jsx";
import EducationAccordion from "../components/EducationAccordion.jsx";
import ProjectsAccordion from "../components/ProjectsAccordion.jsx";
import SkillsAccordion from "../components/SkillsAccordion.jsx";
import LanguagesAccordion from "../components/LanguagesAccordion.jsx";
import CertificationsAccordion from "../components/CertificationsAccordion.jsx";
import SummaryAccordion from "../components/SummaryAccordion.jsx";
import AwardsAccordion from "../components/AwardsAccordion.jsx";
import HobbiesAccordion from "../components/HobbiesAccordion.jsx";
import PublicationsAccordion from "../components/PublicationsAccordion.jsx";
import FinallizeAccordion from "../components/FinallizeAccordion.jsx";
import ReferencesAccordion from "../components/ReferenceAccordian.jsx";
import VolunteerAccordion from "../components/VolunteerAccordion.jsx";
import PrevewSection from "../components/PreviewSection.jsx";
import { ResumeProvider } from "../context/resumecontext.jsx";
import "./FormPage.css";

const sectionOptions = [
  {
    label: "Personal Details",
    value: "personal",
    component: <PersonalDetailAccordioner />,
  },
  { label: "Work History", value: "work", component: <WorkHistoryAccordion /> },
  { label: "Education", value: "education", component: <EducationAccordion /> },
  { label: "Skills", value: "skills", component: <SkillsAccordion /> },
  { label: "Summary", value: "summary", component: <SummaryAccordion /> },
  {
    label: "Certifications",
    value: "certifications",
    component: <CertificationsAccordion/>,
  },
  { label: "Projects", value: "projects", component: <ProjectsAccordion /> },
  { label: "Languages", value: "languages", component: <LanguagesAccordion /> },
  { label: "Awards & Honors", value: "awards", component: <AwardsAccordion /> },

  { label: "Volunteer Experience", value: "volunteer", component: <VolunteerAccordion /> },

  { label: "Hobbies & Interests", value: "hobbies", component: <HobbiesAccordion/> },

  { label: "Publications", value: "publications", component: <PublicationsAccordion/> },

    { label: "References", value: "references", component: <ReferencesAccordion/> },



];

function FormPage() {
  const [showPreview, setShowPreview] = useState(false);
  const [selectedSections, setSelectedSections] = useState([
    "personal",
    "education",
  ]);

  const handleToggleSection = (value) => {
    setSelectedSections((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  return (
    <ResumeProvider>
      <div className="formpage-bg">
        <div className="formpage-container">
          <div className="formpage-header d-flex justify-content-between align-items-center py-3 px-4 border-bottom">
            <h2 className="m-0">Build Your Resume</h2>
            <button
              className="btn btn-primary"
              onClick={() => setShowPreview(true)}
            >
              Preview
            </button>
          </div>

          <div className="section-selector px-4 py-3 border-bottom bg-light">
            <h5 className="mb-3">Select Sections:</h5>
            <div className="btn-group flex-wrap" role="group">
              {sectionOptions.map((section) => (
                <input
                  key={section.value}
                  type="checkbox"
                  className={`btn-check`}
                  id={`btncheck-${section.value}`}
                  autoComplete="off"
                  checked={selectedSections.includes(section.value)}
                  onChange={() => handleToggleSection(section.value)}
                />
              ))}
              {sectionOptions.map((section) => (
                <label
                  key={`${section.value}-label`}
                  className={`btn btn-outline-primary m-1 ${
                    selectedSections.includes(section.value) ? "active" : ""
                  }`}
                  htmlFor={`btncheck-${section.value}`}
                >
                  {section.label}
                </label>
              ))}
            </div>
          </div>

          {/* Accordion Section */}
          <div className="formpage-accordion p-4">
            {sectionOptions
              .filter((section) => selectedSections.includes(section.value))
              .map((section) => (
                <div key={section.value}>{section.component}</div>
              ))}
          </div>
        </div>

        {/* Preview Panel */}
        <div className={`preview-slide-panel ${showPreview ? "open" : ""}`}>
          <div className="preview-header d-flex justify-content-between align-items-center p-3 border-bottom bg-light">
            <h5 className="mb-0">Resume Preview</h5>
            <button
              className="btn btn-sm btn-danger"
              onClick={() => setShowPreview(false)}
            >
              &times;
            </button>
          </div>
          <div className="preview-body p-3">
            <PrevewSection />
          </div>
        </div>
      </div>
    </ResumeProvider>
  );
}

export default FormPage;
