import React, { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
import Breadcrumb from "../components/Breadcrumb";
import SaveButton from "../components/SaveButton";
import LoadingSpinner from "../components/LoadingSpinner";
import { useResume } from "../context/resumecontext.jsx";
import { useTheme } from "../context/ThemeContext";
import "./FormPage.css";

// Define section options with metadata
const sectionOptions = [
  {
    label: "Personal Details",
    value: "personal",
    icon: "👤",
    required: true,
    component: <PersonalDetailAccordioner />,
  },
  { 
    label: "Work History", 
    value: "work", 
    icon: "💼",
    required: true,
    component: <WorkHistoryAccordion /> 
  },
  { 
    label: "Education", 
    value: "education", 
    icon: "🎓",
    required: true,
    component: <EducationAccordion /> 
  },
  { 
    label: "Skills", 
    value: "skills", 
    icon: "⚡",
    required: true,
    component: <SkillsAccordion /> 
  },
  { 
    label: "Summary", 
    value: "summary", 
    icon: "📝",
    component: <SummaryAccordion /> 
  },
  {
    label: "Certifications",
    value: "certifications",
    icon: "🏆",
    component: <CertificationsAccordion/>,
  },
  { 
    label: "Projects", 
    value: "projects", 
    icon: "🚀",
    component: <ProjectsAccordion /> 
  },
  { 
    label: "Languages", 
    value: "languages", 
    icon: "🌐",
    component: <LanguagesAccordion /> 
  },
  { 
    label: "Awards & Honors", 
    value: "awards", 
    icon: "⭐",
    component: <AwardsAccordion /> 
  },
  { 
    label: "Volunteer Experience", 
    value: "volunteer", 
    icon: "🤝",
    component: <VolunteerAccordion /> 
  },
  { 
    label: "Hobbies & Interests", 
    value: "hobbies", 
    icon: "🎨",
    component: <HobbiesAccordion/> 
  },
  { 
    label: "Publications", 
    value: "publications", 
    icon: "📚",
    component: <PublicationsAccordion/> 
  },
  { 
    label: "References", 
    value: "references", 
    icon: "📞",
    component: <ReferencesAccordion/> 
  },
];

function FormPageContent() {
  const navigate = useNavigate();
  const { clearSectionData, resumeData } = useResume();
  const { theme } = useTheme();
  const [showPreview, setShowPreview] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  
  // Initialize with required sections
  const [selectedSections, setSelectedSections] = useState(() => {
    const required = sectionOptions.filter(s => s.required).map(s => s.value);
    return required.length > 0 ? required : ["personal", "education"];
  });
  const [activeSection, setActiveSection] = useState(selectedSections[0] || "personal");

  // Simulate initialization
  useEffect(() => {
    const timer = setTimeout(() => setIsInitialized(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleToggleSection = (value) => {
    const isCurrentlySelected = selectedSections.includes(value);
    
    if (isCurrentlySelected) {
      // Deselecting: Remove from selected and clear data
      setSelectedSections((prev) => prev.filter((v) => v !== value));
      clearSectionData(value);
      
      // If this was the active section, switch to first available
      if (activeSection === value) {
        const remaining = selectedSections.filter((v) => v !== value);
        if (remaining.length > 0) {
          setActiveSection(remaining[0]);
          scrollToSection(remaining[0]);
        }
      }
    } else {
      // Selecting: Add to selected
      setSelectedSections((prev) => [...prev, value]);
      setActiveSection(value);
      scrollToSection(value);
    }
  };

  // Calculate progress
  const progress = useMemo(() => {
    return Math.round((selectedSections.length / sectionOptions.length) * 100);
  }, [selectedSections.length]);

  // Check if required fields are filled
  const canSave = useMemo(() => {
    const personal = resumeData.personalDetails || {};
    return !!(
      personal.firstName &&
      personal.lastName &&
      personal.email &&
      personal.phone
    );
  }, [resumeData.personalDetails]);

  // Scroll to section when clicked
  const scrollToSection = (sectionValue) => {
    const element = document.getElementById(`section-${sectionValue}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSave = async () => {
    if (!canSave) return;
    
    setIsSaving(true);
    // Simulate save operation
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSaving(false);
    // Could navigate or show success message here
  };

  if (!isInitialized) {
    return (
      <>
        <Breadcrumb />
        <div className="formpage-bg">
          <div className="formpage-loading">
            <LoadingSpinner size="large" text="Loading form..." />
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Breadcrumb />
      <div className="formpage-bg">
        <div className="formpage-container">
          {/* Header */}
          <div className="formpage-header">
            <div className="header-left">
              <button
                className="btn-back"
                onClick={() => navigate('/')}
                aria-label="Go back to home"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Back
              </button>
              <div className="header-content">
                <h2>Build Your Resume</h2>
                <div className="progress-indicator">
                  <div className="progress-bar-wrapper">
                    <div className="progress-bar" style={{ width: `${progress}%` }}></div>
                  </div>
                  <span className="progress-text">{selectedSections.length} of {sectionOptions.length} sections</span>
                </div>
              </div>
            </div>
            <button
              className="btn-preview"
              onClick={() => setShowPreview(true)}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 1L1 7V15H6V10H10V15H15V7L8 1Z" fill="currentColor"/>
              </svg>
              Preview
            </button>
          </div>

          <div className="formpage-layout">
            {/* Left Sidebar - Section Selector */}
            <aside className="section-selector">
              <div className="section-selector-header">
                <h5>Resume Sections</h5>
                <span className="section-count">{selectedSections.length}</span>
              </div>
              <div className="section-list">
                {sectionOptions.map((section) => {
                  const isSelected = selectedSections.includes(section.value);
                  const isActive = activeSection === section.value;
                  
                  return (
                    <div
                      key={section.value}
                      className={`section-item ${isSelected ? "selected" : ""} ${isActive ? "active" : ""} ${section.required ? "required" : ""}`}
                      onClick={() => {
                        if (isSelected) {
                          setActiveSection(section.value);
                          scrollToSection(section.value);
                        } else {
                          handleToggleSection(section.value);
                        }
                      }}
                    >
                      <div className="section-item-content">
                        <input
                          type="checkbox"
                          id={`section-${section.value}`}
                          checked={isSelected}
                          onChange={(e) => {
                            e.stopPropagation();
                            handleToggleSection(section.value);
                          }}
                          disabled={section.required}
                          className="section-checkbox"
                        />
                        <label htmlFor={`section-${section.value}`} className="section-label">
                          <span className="section-icon">{section.icon}</span>
                          <span className="section-name">{section.label}</span>
                        </label>
                      </div>
                      {section.required && (
                        <span className="required-badge">Required</span>
                      )}
                      {isSelected && (
                        <span className="section-check">✓</span>
                      )}
                    </div>
                  );
                })}
              </div>
            </aside>

            {/* Right Side - Form Content Area */}
            <main className="formpage-accordion">
              {selectedSections.length === 0 ? (
                <div className="empty-state">
                  <div className="empty-state-icon">
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M32 8L8 20V44L32 56L56 44V20L32 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M32 32L20 26V38L32 44L44 38V26L32 32Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3>No sections selected</h3>
                  <p>Select sections from the sidebar to start building your resume</p>
                </div>
              ) : (
                <>
                  {sectionOptions
                    .filter((section) => selectedSections.includes(section.value))
                    .map((section) => (
                      <div 
                        key={section.value} 
                        id={`section-${section.value}`} 
                        className={`form-section-wrapper ${activeSection === section.value ? 'active' : ''}`}
                      >
                        {section.component}
                      </div>
                    ))}
                  
                  {/* Sticky Save Button */}
                  <div className="save-button-container">
                    <SaveButton
                      onClick={handleSave}
                      isLoading={isSaving}
                      disabled={!canSave}
                      fullWidth
                    >
                      Save & Continue
                    </SaveButton>
                  </div>
                </>
              )}
            </main>
          </div>
        </div>

        {/* Preview Panel */}
        <div className={`preview-slide-panel ${showPreview ? "open" : ""}`}>
          <div className="preview-header">
            <h5>Resume Preview</h5>
            <button
              className="close-btn"
              onClick={() => setShowPreview(false)}
              aria-label="Close preview"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
          <div className="preview-body">
            <PrevewSection />
          </div>
        </div>
      </div>
    </>
  );
}

export default FormPageContent;
