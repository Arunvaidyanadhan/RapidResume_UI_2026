import React, { Suspense, useMemo, useState } from "react";
import { useResume } from "../context/resumecontext";
import "./PreviewSection.css";
import { getTemplateById, canGeneratePDF } from "../config/templates";
import { downloadBlob, generatePDF } from "../utils/api";

function PreviewSection({ hideTitle = false, showDownload = true, compact = false }) {
  const { resumeData = {}, selectedTemplate = "modern" } = useResume();
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadError, setDownloadError] = useState(null);

  const renderedTemplate = useMemo(() => {
    const template = getTemplateById(selectedTemplate) || getTemplateById("modern");
    if (!template || !template.Component) return null;
    const TemplateComponent = template.Component;
    return <TemplateComponent data={resumeData} />;
  }, [selectedTemplate, resumeData]);

  const handleDownloadPDF = async () => {
    setDownloadError(null);

    if (!canGeneratePDF(selectedTemplate)) {
      setDownloadError("This template doesn't support PDF generation yet. Please select a different template.");
      return;
    }

    const firstName = resumeData?.personalDetails?.firstName || "resume";
    const lastName = resumeData?.personalDetails?.lastName || "";
    const fileName = `resume-${firstName}${lastName ? `-${lastName}` : ""}.pdf`;

    try {
      setIsDownloading(true);
      const pdfBlob = await generatePDF(resumeData, selectedTemplate);
      downloadBlob(pdfBlob, fileName);
    } catch (err) {
      setDownloadError(err?.message || "Failed to generate PDF. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className={compact ? "preview-root compact" : "preview-root"}>
      {!hideTitle && <h5 className="mt-3">Preview</h5>}
      <div
        className="preview-container container mt-3 overflow-hidden border"
        id="resume-preview"
      >
        {!resumeData || Object.keys(resumeData).length === 0 ? (
          <p>No resume data to preview.</p>
        ) : (
          <Suspense fallback={<p>Loading template...</p>}>
            {renderedTemplate}
          </Suspense>
        )}
      </div>

      {showDownload && (
        <div className="d-flex justify-content-center">
          <div className="p-2">
            <button
              type="button"
              className="btn btn-success"
              onClick={handleDownloadPDF}
              disabled={isDownloading}
            >
              {isDownloading ? "Generating..." : "Download PDF"}
            </button>
          </div>
        </div>
      )}

      {downloadError && (
        <div className="container mt-2">
          <div className="alert alert-danger" role="alert">
            {downloadError}
          </div>
        </div>
      )}
    </div>
  );
}

export default PreviewSection;
