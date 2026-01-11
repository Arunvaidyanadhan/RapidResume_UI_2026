import React, { useEffect, useMemo, useState } from "react";
import { useResume } from "../context/resumecontext";
import "./PreviewSection.css";
import { canGeneratePDF } from "../config/templates";
import { downloadBlob, generatePDF } from "../utils/api";

function PreviewSection({ hideTitle = false, showDownload = true, compact = false }) {
  const { resumeData = {}, selectedTemplate } = useResume();
  const [isGenerating, setIsGenerating] = useState(false);
  const [previewError, setPreviewError] = useState(null);
  const [pdfUrl, setPdfUrl] = useState(null);

  const canPreview = useMemo(() => {
    return !!resumeData && Object.keys(resumeData).length > 0 && !!selectedTemplate && canGeneratePDF(selectedTemplate);
  }, [resumeData, selectedTemplate]);

  useEffect(() => {
    return () => {
      if (pdfUrl) {
        try {
          window.URL.revokeObjectURL(pdfUrl);
        } catch {
          // ignore
        }
      }
    };
  }, [pdfUrl]);

  const generatePreview = async () => {
    setPreviewError(null);

    if (!canGeneratePDF(selectedTemplate)) {
      setPreviewError("This template doesn't support PDF generation yet. Please select a different template.");
      return;
    }

    try {
      setIsGenerating(true);
      const pdfBlob = await generatePDF(resumeData, selectedTemplate);
      if (pdfUrl) {
        try {
          window.URL.revokeObjectURL(pdfUrl);
        } catch {
          // ignore
        }
      }
      const nextUrl = window.URL.createObjectURL(pdfBlob);
      setPdfUrl(nextUrl);
    } catch (err) {
      setPreviewError(err?.message || "Failed to generate preview. Please try again.");
      setPdfUrl(null);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownloadPDF = async () => {
    setPreviewError(null);

    if (!canGeneratePDF(selectedTemplate)) {
      setPreviewError("This template doesn't support PDF generation yet. Please select a different template.");
      return;
    }

    const firstName = resumeData?.personalDetails?.firstName || "resume";
    const lastName = resumeData?.personalDetails?.lastName || "";
    const fileName = `resume-${firstName}${lastName ? `-${lastName}` : ""}.pdf`;

    try {
      setIsGenerating(true);
      const pdfBlob = await generatePDF(resumeData, selectedTemplate);
      downloadBlob(pdfBlob, fileName);
    } catch (err) {
      setPreviewError(err?.message || "Failed to generate PDF. Please try again.");
    } finally {
      setIsGenerating(false);
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
        ) : !selectedTemplate ? (
          <p>Please select a template to preview.</p>
        ) : !canGeneratePDF(selectedTemplate) ? (
          <p>This template doesn't support PDF preview.</p>
        ) : pdfUrl ? (
          <iframe
            title="Resume preview"
            className="preview-iframe"
            src={pdfUrl}
            style={{ width: "100%", height: 720, border: "none" }}
          />
        ) : (
          <div className="preview-empty">
            <p className="mb-2">Generate a live preview to see exactly what will be downloaded.</p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={generatePreview}
              disabled={isGenerating || !canPreview}
            >
              {isGenerating ? "Generating..." : "Generate Preview"}
            </button>
          </div>
        )}
      </div>

      {showDownload && (
        <div className="d-flex justify-content-center">
          <div className="p-2">
            <button
              type="button"
              className="btn btn-success"
              onClick={handleDownloadPDF}
              disabled={isGenerating}
            >
              {isGenerating ? "Generating..." : "Download PDF"}
            </button>
          </div>
        </div>
      )}

      {previewError && (
        <div className="container mt-2">
          <div className="alert alert-danger" role="alert">
            {previewError}
          </div>
        </div>
      )}
    </div>
  );
}

export default PreviewSection;
