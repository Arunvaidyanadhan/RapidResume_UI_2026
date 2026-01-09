import React, { useState, useEffect } from 'react';
import { useResume } from '../context/resumecontext';
import './AccordionForm.css';

function SummaryAccordion() {
  const { resumeData, updateSummary } = useResume();
  const [summary, setSummary] = useState(resumeData.summary || '');

  // Sync with context when resumeData.summary changes
  useEffect(() => {
    setSummary(resumeData.summary || '');
  }, [resumeData.summary]);

  const handleChange = (e) => {
    const next = e.target.value;
    setSummary(next);
    updateSummary(next);
  };

  return (
    <>
    <div className="container mt-2">
     <div className="accordion" id="accordionSixItems">
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingFive">
        <button className="accordion-button fw-bolder fs-5 collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
       Summary
        </button>
      </h2>
      <div id="collapseFive" className="accordion-collapse  border  border-secondary collapse" aria-labelledby="headingFive"
           data-bs-parent="#accordionSixItems">
        <div className="accordion-body">
        <div className="mb-3">
          <label htmlFor="summaryTextarea" className="form-label fs-6">Professional Summary</label>
          <textarea 
            className="form-control" 
            id="summaryTextarea" 
            rows="5"
            value={summary}
            onChange={handleChange}
            placeholder="Write a brief professional summary highlighting your key skills, experience, and career objectives..."
          ></textarea>
        </div>
        </div>
      </div>
    </div>
    
    </div>
   
    </div>

    </>
  );
}

export default SummaryAccordion;
