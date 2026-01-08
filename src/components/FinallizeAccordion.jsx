import React, { useState, useEffect } from 'react';
import { useResume } from '../context/resumecontext';
import { generatePDF, downloadBlob, fetchTemplates } from '../utils/api';
import './AccordionForm.css';

function FinallizeAccordion() {
  const { resumeData, selectedTemplate } = useResume();
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState(null);
  const [templateName, setTemplateName] = useState(null);

  // Fetch template name for display
  useEffect(() => {
    if (selectedTemplate) {
      fetchTemplates()
        .then(templates => {
          const template = templates.find(t => t.id === selectedTemplate);
          if (template) {
            setTemplateName(template.name);
          }
        })
        .catch(() => {
          // If fetch fails, just use the template ID
          setTemplateName(selectedTemplate);
        });
    }
  }, [selectedTemplate]);

  const handleGeneratePDF = async () => {
    setIsGenerating(true);
    setError(null);

    try {
      // Validate required fields
      if (!resumeData.personalDetails?.firstName || !resumeData.personalDetails?.lastName) {
        throw new Error('Please fill in your personal details (First Name and Last Name)');
      }

      if (!resumeData.personalDetails?.email || !resumeData.personalDetails?.phone) {
        throw new Error('Please fill in your email and phone number');
      }

      if (!selectedTemplate) {
        throw new Error('Please select a template');
      }

      // Backend will validate template ID - no need to check here
      const pdfBlob = await generatePDF(resumeData, selectedTemplate);
      downloadBlob(pdfBlob, `resume-${resumeData.personalDetails.firstName}-${resumeData.personalDetails.lastName}.pdf`);
    } catch (err) {
      console.error('PDF generation error:', err);
      setError(err.message || 'Failed to generate PDF. Please check your connection and try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <>
        <div className="container mt-2">
     <div className="accordion" id="accordionSixItems">
     <div className="accordion-item">
      <h2 className="accordion-header" id="headingSix">
        <button className="accordion-button fw-bolder fs-5  collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
         Finalize & Generate PDF
        </button>
      </h2>
      <div id="collapseSix" className="accordion-collapse border  border-secondary collapse" aria-labelledby="headingSix"
           data-bs-parent="#accordionSixItems">
            <div className="accordion-body">
              {error && (
                <div className="alert alert-danger" role="alert">
                  <strong>Error:</strong> {error}
                </div>
              )}
              <div className="mb-3">
                <p className="text-muted">
                  Review your resume information and click the button below to generate your PDF resume.
                </p>
                <ul className="list-unstyled">
                  <li>✓ Template: <strong>{templateName || selectedTemplate || 'Not selected'}</strong></li>
                  <li>✓ Personal Details: {resumeData.personalDetails?.firstName ? '✓' : '✗'}</li>
                  <li>✓ Work Experience: {resumeData.workExperience?.length > 0 ? `✓ (${resumeData.workExperience.length})` : '✗'}</li>
                  <li>✓ Education: {resumeData.education?.length > 0 ? `✓ (${resumeData.education.length})` : '✗'}</li>
                  <li>✓ Skills: {resumeData.skills?.length > 0 ? `✓ (${resumeData.skills.length})` : '✗'}</li>
                </ul>
              </div>
              <div className="d-flex justify-content-end ">
                <button 
                  className="btn btn-success m-2" 
                  onClick={handleGeneratePDF}
                  disabled={isGenerating}
                >
                  {isGenerating ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Generating PDF...
                    </>
                  ) : (
                    <>
                      📄 Generate & Download PDF
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default FinallizeAccordion;


