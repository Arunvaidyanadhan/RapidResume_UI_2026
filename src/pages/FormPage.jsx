import React, { useMemo, useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import SaveButton from "../components/SaveButton";
import PrevewSection from "../components/PreviewSection.jsx";
import { useResume } from "../context/resumecontext.jsx";
import "./FormPage.css";
import { downloadBlob, generatePDF } from "../utils/api";

/* Accordions */
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
import ReferencesAccordion from "../components/ReferenceAccordian.jsx";
import VolunteerAccordion from "../components/VolunteerAccordion.jsx";

/* ------------------ SECTION CONFIG ------------------ */

const sectionOptions = [
  { label: "Personal Details", value: "personal", icon: "👤", required: true, component: <PersonalDetailAccordioner /> },
  { label: "Work History", value: "work", icon: "💼", required: false, component: <WorkHistoryAccordion /> },
  { label: "Education", value: "education", icon: "🎓", required: true, component: <EducationAccordion /> },
  { label: "Skills", value: "skills", icon: "⚡", required: true, component: <SkillsAccordion /> },
  { label: "Summary", value: "summary", icon: "📝", component: <SummaryAccordion /> },
  { label: "Certifications", value: "certifications", icon: "🏆", component: <CertificationsAccordion /> },
  { label: "Projects", value: "projects", icon: "🚀", component: <ProjectsAccordion /> },
  { label: "Languages", value: "languages", icon: "🌐", component: <LanguagesAccordion /> },
  { label: "Awards & Honors", value: "awards", icon: "⭐", component: <AwardsAccordion /> },
  { label: "Volunteer Experience", value: "volunteer", icon: "🤝", component: <VolunteerAccordion /> },
  { label: "Hobbies & Interests", value: "hobbies", icon: "🎨", component: <HobbiesAccordion /> },
  { label: "Publications", value: "publications", icon: "📚", component: <PublicationsAccordion /> },
  { label: "References", value: "references", icon: "📞", component: <ReferencesAccordion /> },
];
const STORAGE_KEY = "rapid_resume_draft";
const FORM_PROGRESS_KEY = "rapid_resume_form_progress";

function FormPageContent() {
  const navigate = useNavigate();
  const { resumeData, clearSectionData, selectedTemplate } = useResume();

  const requiredSections = sectionOptions.filter(s => s.required).map(s => s.value);

  const [selectedSections, setSelectedSections] = useState(requiredSections);
  const [activeSection, setActiveSection] = useState(requiredSections[0]);
  const [showPreview, setShowPreview] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(FORM_PROGRESS_KEY);
    if (!stored) return;
    try {
      const parsed = JSON.parse(stored);
      if (parsed && Array.isArray(parsed.selectedSections) && typeof parsed.activeSection === 'string') {
        const nextSelected = parsed.selectedSections.filter((v) => sectionOptions.some((s) => s.value === v));
        const ensuredRequired = Array.from(new Set([...requiredSections, ...nextSelected]));
        setSelectedSections(ensuredRequired);
        setActiveSection(ensuredRequired.includes(parsed.activeSection) ? parsed.activeSection : ensuredRequired[0]);
      }
    } catch {
      // ignore
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(
        FORM_PROGRESS_KEY,
        JSON.stringify({ selectedSections, activeSection })
      );
    } catch {
      // ignore
    }
  }, [selectedSections, activeSection]);

  /* Toggle section */
  const toggleSection = (value) => {
    if (requiredSections.includes(value)) return;

    const isSelected = selectedSections.includes(value);

    if (isSelected) {
      const remaining = selectedSections.filter(v => v !== value);
      setSelectedSections(remaining);
      clearSectionData(value);

      if (activeSection === value) {
        setActiveSection(remaining[0] || requiredSections[0]);
      }
    } else {
      setSelectedSections(prev => [...prev, value]);
      setActiveSection(value);
    }
  };

  /* Validation */
  const canSave = useMemo(() => {
    const p = resumeData.personalDetails || {};
    return p.firstName && p.lastName && p.email && p.phone;
  }, [resumeData]);

  const canDownload = useMemo(() => {
    const hasPersonal = canSave;
    const hasEducation = Array.isArray(resumeData.education) && resumeData.education.length > 0;
    const hasSkills = Array.isArray(resumeData.skills) && resumeData.skills.length > 0;
    return hasPersonal && hasEducation && hasSkills;
  }, [resumeData, canSave]);

  const hasEducation = Array.isArray(resumeData.education) && resumeData.education.length > 0;
  const hasSkills = Array.isArray(resumeData.skills) && resumeData.skills.length > 0;

  const isSectionComplete = useCallback((value) => {
    switch (value) {
      case 'personal':
        return !!canSave;
      case 'education':
        return hasEducation;
      case 'skills':
        return hasSkills;
      case 'summary':
        return !!resumeData.summary;
      case 'work':
        return Array.isArray(resumeData.workExperience) && resumeData.workExperience.length > 0;
      case 'projects':
        return Array.isArray(resumeData.projects) && resumeData.projects.length > 0;
      case 'certifications':
        return Array.isArray(resumeData.certifications) && resumeData.certifications.length > 0;
      case 'languages':
        return Array.isArray(resumeData.languages) && resumeData.languages.length > 0;
      case 'awards':
        return Array.isArray(resumeData.awards) && resumeData.awards.length > 0;
      case 'volunteer':
        return Array.isArray(resumeData.volunteer) && resumeData.volunteer.length > 0;
      case 'hobbies':
        return Array.isArray(resumeData.hobbies) && resumeData.hobbies.length > 0;
      case 'publications':
        return Array.isArray(resumeData.publications) && resumeData.publications.length > 0;
      case 'references':
        return Array.isArray(resumeData.references) && resumeData.references.length > 0;
      default:
        return false;
    }
  }, [canSave, hasEducation, hasSkills, resumeData]);

  /* Progress */
  const completedCount = useMemo(() => {
    return selectedSections.reduce((acc, value) => acc + (isSectionComplete(value) ? 1 : 0), 0);
  }, [selectedSections, isSectionComplete]);

  const progress = useMemo(() => {
    if (!selectedSections.length) return 0;
    return Math.min(100, Math.max(0, Math.round((completedCount / selectedSections.length) * 100)));
  }, [completedCount, selectedSections]);

  /* Active section config */
  const activeSectionConfig = sectionOptions.find(
    s => s.value === activeSection
  );

  const activeSectionIndex = useMemo(() => {
    const idx = selectedSections.indexOf(activeSection);
    return idx >= 0 ? idx : 0;
  }, [selectedSections, activeSection]);

  const activeSectionLabel = activeSectionConfig?.label || 'Section';

  // Save entire resume to localStorage
  const saveToLocalStorage = () => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(resumeData));
    } catch {
      // ignore
    }
  };

  // Get next section
  const getNextSection = () => {
    const currentIndex = selectedSections.indexOf(activeSection);
    return selectedSections[currentIndex + 1];
  };

  // Check if last section
  const isLastSection = selectedSections.indexOf(activeSection) === selectedSections.length - 1;

  // Scroll helper
  const scrollToTopOfForm = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSaveAndNext = () => {
    saveToLocalStorage();

    const nextSection = getNextSection();
    if (nextSection) {
      setActiveSection(nextSection);
      scrollToTopOfForm();
    }
  };

  const downloadRequirementsText = useMemo(() => {
    const missing = [];
    if (!canSave) missing.push('Personal details');
    if (!hasEducation) missing.push('Education (add at least 1)');
    if (!hasSkills) missing.push('Skills (add at least 1)');
    return missing.length > 0 ? `Missing: ${missing.join(' • ')}` : '';
  }, [canSave, hasEducation, hasSkills]);


  const handleFinishAndDownload = async () => {
    const missing = [];
    if (!canSave) missing.push('Personal Details (First name, Last name, Email, Phone)');
    if (!Array.isArray(resumeData.education) || resumeData.education.length === 0) missing.push('Education (add at least one)');
    if (!Array.isArray(resumeData.skills) || resumeData.skills.length === 0) missing.push('Skills (add at least one)');

    if (missing.length > 0) {
      alert(`Please complete the following before downloading:\n\n- ${missing.join('\n- ')}`);
      return;
    }

    if (!selectedTemplate) {
      alert("Please select a template before downloading.");
      navigate("/template");
      return;
    }

    saveToLocalStorage();

    const firstName = resumeData?.personalDetails?.firstName || "resume";
    const lastName = resumeData?.personalDetails?.lastName || "";
    const fileName = `resume-${firstName}${lastName ? `-${lastName}` : ""}.pdf`;

    try {
      setIsDownloading(true);
      const pdfBlob = await generatePDF(resumeData, selectedTemplate);
      downloadBlob(pdfBlob, fileName);
      navigate("/thank-you", { replace: true, state: { fileName } });
    } catch (err) {
      alert(err?.message || "Failed to generate PDF. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <>
      <Breadcrumb />

      <div className="formpage-bg">
      <div className="formpage-container">
        {/* Header */}
        <div className="formpage-header">
          <div className="header-top">
            <h2 className="header-title">Build Your Resume</h2>
            <button className="btn-preview" onClick={() => setShowPreview(true)} type="button">
              Preview
            </button>
          </div>

          <div className="header-subtext">
            Section {activeSectionIndex + 1}/{selectedSections.length}: {activeSectionLabel}
          </div>

          <div className="progress-indicator">
            <div className="progress-bar-wrapper">
              <div className="progress-bar" style={{ width: `${progress}%` }} />
              <div
                className="progress-marker"
                style={{
                  left:
                    selectedSections.length > 1
                      ? `${Math.round((activeSectionIndex / (selectedSections.length - 1)) * 100)}%`
                      : '0%',
                }}
              />
            </div>
            <div className="progress-text">
              {progress}% ({completedCount}/{selectedSections.length})
            </div>
          </div>
        </div>

        <div className="formpage-layout">
          {/* Sidebar */}
          <aside className="section-selector">
            <div className="section-selector-header">
              <h5>Sections</h5>
              <span className="section-count">{selectedSections.length}/{sectionOptions.length}</span>
            </div>

            <div className="section-list">
              {sectionOptions.map((section) => {
                const isSelected = selectedSections.includes(section.value);
                const isActive = activeSection === section.value;
                const completed = isSectionComplete(section.value);

                return (
                  <div
                    key={section.value}
                    className={`section-item ${isSelected ? "selected" : ""} ${isActive ? "active" : ""}`}
                    onClick={() => isSelected && setActiveSection(section.value)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (!isSelected) return;
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setActiveSection(section.value);
                      }
                    }}
                  >
                    <input
                      className="section-checkbox"
                      type="checkbox"
                      checked={isSelected}
                      disabled={section.required}
                      onClick={(e) => e.stopPropagation()}
                      onChange={() => toggleSection(section.value)}
                    />

                    <div className="section-item-content">
                      <div className="section-label">
                        <span className="section-icon">{section.icon}</span>
                        <span className="section-name">{section.label}</span>
                      </div>
                      {section.required ? <span className="required-badge">Required</span> : null}
                    </div>

                    {completed ? <span className="section-check">✓</span> : null}
                  </div>
                );
              })}
            </div>
          </aside>

          {/* Main Content – SINGLE SECTION */}
          <main className="formpage-accordion">
            {activeSectionConfig && (
              <div className="form-section-wrapper active">
                {activeSectionConfig.component}

                
              </div>
            )}

            <div className="form-actions">
              <div className="form-actions-row">
                {!isLastSection ? (
                  <>
                    <SaveButton
                      onClick={handleFinishAndDownload}
                      isLoading={isDownloading}
                      variant="secondary"
                      disabled={isDownloading}
                      className={!canDownload ? 'save-button-incomplete' : ''}
                    >
                      Finish & Download
                    </SaveButton>
                    <SaveButton onClick={handleSaveAndNext} variant="primary">
                      Save & Next
                    </SaveButton>
                  </>
                ) : (
                  <>
                    <SaveButton onClick={handleSaveAndNext} variant="secondary">
                      Save
                    </SaveButton>
                    <SaveButton
                      onClick={handleFinishAndDownload}
                      isLoading={isDownloading}
                      variant="primary"
                      disabled={isDownloading}
                      className={!canDownload ? 'save-button-incomplete' : ''}
                    >
                      Finish & Download
                    </SaveButton>
                  </>
                )}
              </div>

              {!canDownload && (
                <div className="form-actions-hint">
                  {downloadRequirementsText}
                </div>
              )}
            </div>


          </main>
        </div>
      </div>

      {/* Preview Drawer */}
      <div className={`preview-slide-panel ${showPreview ? "open" : ""}`}>
        <div className="preview-header">
          <h5>Resume Preview</h5>
          <button className="close-btn" onClick={() => setShowPreview(false)} type="button">✕</button>
        </div>
        <div className="preview-body">
          <PrevewSection hideTitle showDownload={false} compact />
        </div>
      </div>

      </div>
    </>
  );
}

export default FormPageContent;
