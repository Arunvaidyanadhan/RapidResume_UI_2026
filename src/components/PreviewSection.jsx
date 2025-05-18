import React, { useMemo } from "react";
import { useResume } from "../context/resumecontext";
import "./PreviewSection.css";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

import Template1 from "./templates/template1";
import Template2 from "./templates/template2";
import Template3 from "./templates/template3";

function PreviewSection() {
  const { resumeData = {}, selectedTemplate = "template1" } = useResume();

  const renderedTemplate = useMemo(() => {
    switch (selectedTemplate) {
      case "template1":
        return <Template1 data={resumeData} />;
      case "template2":
        return <Template2 data={resumeData} />;
      case "template3":
        return <Template3 data={resumeData} />;
      default:
        return <Template1 data={resumeData} />;
    }
  }, [selectedTemplate, resumeData]);

  const handleDownloadPDF = () => {
    const input = document.getElementById("resume-preview");
    if (!input) return;

    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("resume.pdf");
    });
  };

  return (
    <div className="sticky">
      <h5 className="mt-5">Preview</h5>
      <div
        className="preview-container container mt-3 overflow-hidden border"
        id="resume-preview" // 👈 ADD this ID for html2canvas to target
      >
        {!resumeData || Object.keys(resumeData).length === 0 ? (
          <p>No resume data to preview.</p>
        ) : (
          renderedTemplate
        )}
      </div>

      <div className="d-flex justify-content-center">
        <div className="p-2">
          <button
            type="button"
            className="btn btn-primary me-2"
            onClick={() => window.print()}
          >
            Print Preview
          </button>

          <button
            type="button"
            className="btn btn-success"
            onClick={handleDownloadPDF}
          >
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
}

export default PreviewSection;
