import React, { useMemo, useEffect, useState } from "react";
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

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

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

function FormPageContent() {
  const navigate = useNavigate();
  const {
    resumeData,
    selectedTemplate,
    selectedHeadings,
    currentStepIndex,
    setCurrentStepIndex,
    updateCustomSection,
  } = useResume();

  const [showPreview, setShowPreview] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    if (!selectedTemplate) {
      navigate('/template');
      return;
    }
    if (!selectedHeadings || selectedHeadings.length === 0) {
      navigate('/headings');
      return;
    }
  }, [selectedTemplate, selectedHeadings, navigate]);

  const orderedSectionIds = useMemo(() => {
    const ids = (selectedHeadings || []).map((h) => h.id).filter(Boolean);
    // de-dupe while preserving order
    return ids.filter((id, idx) => ids.indexOf(id) === idx);
  }, [selectedHeadings]);

  const safeStepIndex = useMemo(() => {
    if (!orderedSectionIds.length) return 0;
    if (!Number.isFinite(currentStepIndex)) return 0;
    return Math.min(Math.max(currentStepIndex, 0), orderedSectionIds.length - 1);
  }, [currentStepIndex, orderedSectionIds]);

  useEffect(() => {
    if (safeStepIndex !== currentStepIndex) {
      setCurrentStepIndex(safeStepIndex);
    }
  }, [safeStepIndex, currentStepIndex, setCurrentStepIndex]);

  const activeSection = orderedSectionIds[safeStepIndex];

  /* Validation */
  const canSave = useMemo(() => {
    const p = resumeData.personalDetails || {};
    return p.firstName && p.lastName && p.email && p.phone;
  }, [resumeData]);

  const canDownload = useMemo(() => {
    return !!canSave;
  }, [canSave]);

  const progress = useMemo(() => {
    if (!orderedSectionIds.length) return 0;
    // strict per spec: (currentIndex + 1) / total
    const p = ((safeStepIndex + 1) / orderedSectionIds.length) * 100;
    return Math.min(100, Math.max(0, Math.round(p)));
  }, [safeStepIndex, orderedSectionIds]);

  /* Active section config */
  const activeSectionConfig = useMemo(() => {
    if (!activeSection) return null;
    if (activeSection.startsWith('custom_')) return null;
    return sectionOptions.find((s) => s.value === activeSection) || null;
  }, [activeSection]);

  const activeSectionIndex = safeStepIndex;

  const activeSectionLabel = useMemo(() => {
    if (!activeSection) return 'Section';
    if (activeSection.startsWith('custom_')) {
      const heading = (selectedHeadings || []).find((h) => h.id === activeSection);
      return heading?.label || 'Custom Section';
    }
    return activeSectionConfig?.label || 'Section';
  }, [activeSection, activeSectionConfig, selectedHeadings]);

  // Save entire resume to localStorage
  const saveToLocalStorage = () => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(resumeData));
    } catch {
      // ignore
    }
  };

  const isLastSection = activeSectionIndex === orderedSectionIds.length - 1;

  // Scroll helper
  const scrollToTopOfForm = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSaveAndNext = () => {
    saveToLocalStorage();

    const nextIndex = activeSectionIndex + 1;
    if (nextIndex <= orderedSectionIds.length - 1) {
      setCurrentStepIndex(nextIndex);
      scrollToTopOfForm();
    }
  };

  const handleBack = () => {
    if (activeSectionIndex <= 0) {
      navigate('/headings');
      return;
    }
    setCurrentStepIndex(activeSectionIndex - 1);
    scrollToTopOfForm();
  };

  const downloadRequirementsText = useMemo(() => {
    const missing = [];
    if (!canSave) missing.push('Personal details');
    return missing.length > 0 ? `Missing: ${missing.join(' • ')}` : '';
  }, [canSave]);


  const handleFinishAndDownload = async () => {
    const missing = [];
    if (!canSave) missing.push('Personal Details (First name, Last name, Email, Phone)');

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
      setShowPreview(false);
      // Give the browser a moment to start the download before route change.
      await wait(250);
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
  {/* Left: Back Button */}
  <div className="header-left">
    <button
      type="button"
      className="btn btn-outline-secondary btn-sm"
      onClick={handleBack}
    >
      Back
    </button>
  </div>

  {/* Center: Progress */}
  <div className="header-center">
    <div className="progress-indicator text-center">
      <div className="progress-bar-wrapper">
        <div className="progress-bar" style={{ width: `${progress}%` }} />
        <div
          className="progress-marker"
          style={{
            left:
              orderedSectionIds.length > 1
                ? `${Math.round((activeSectionIndex / (orderedSectionIds.length - 1)) * 100)}%`
                : '0%',
          }}
        />
      </div>
      <div className="progress-text">
        {progress}% ({activeSectionIndex + 1}/{orderedSectionIds.length})
      </div>
    </div>
  </div>

  {/* Right: Preview Button */}
  <div className="header-right">
    <button
      className="btn-preview"
      onClick={() => setShowPreview(true)}
      type="button"
    >
      Preview
    </button>
  </div>
</div>



        <div className="formpage-layout">
          {/* Main Content – SINGLE SECTION */}
          <main className="formpage-accordion" style={{ width: '100%' }}>
            {activeSection && activeSection.startsWith('custom_') ? (
              <div className="form-section-wrapper active">
                <div className="card p-3">
                  <label className="form-label fw-semibold">{activeSectionLabel}</label>
                  <textarea
                    className="form-control"
                    rows={10}
                    value={resumeData?.customSections?.[activeSection]?.content || ''}
                    onChange={(e) => updateCustomSection(activeSection, activeSectionLabel, e.target.value)}
                    placeholder="Add content for this custom section"
                  />
                </div>
              </div>
            ) : activeSectionConfig ? (
              <div className="form-section-wrapper active">{activeSectionConfig.component}</div>
            ) : null}

       <div className="form-actions">
  <div className="form-actions-row">
    {!isLastSection ? (
      <SaveButton onClick={handleSaveAndNext} variant="primary">
        Save & Next
      </SaveButton>
    ) : (
      <SaveButton
        onClick={handleFinishAndDownload}
        isLoading={isDownloading}
        variant="primary"
        disabled={isDownloading}
        className={!canDownload ? 'save-button-incomplete' : ''}
      >
        Finish & Download
      </SaveButton>
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
