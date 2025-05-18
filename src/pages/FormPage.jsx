import React from 'react';
import AccordionForm from '../components/AccordionForm';
import FooterComponent from '../components/FooterComponent';
import PersonalDetailAccordioner from '../components/PersonalDetailAccordion';
import WorkHistoryAccordion from '../components/WorkHistoryAccordion.jsx';
import EducationAccordion from '../components/EducationAccordion.jsx';
import SkillsAccordion from '../components/SkillsAccordion.jsx';
import SummaryAccordion from '../components/SummaryAccordion.jsx';
import FinallizeAccordion from '../components/FinallizeAccordion.jsx';
import PrevewSection from '../components/PreviewSection.jsx';
import { ResumeProvider } from '../context/resumecontext.jsx'; // Import ResumeProvider

function FormPage() {
  return (
    <ResumeProvider> {/* Wrap your entire page with ResumeProvider */}
      <div style={{ 
        width: '100%',
        backgroundImage: 'linear-gradient(145deg, #ffffff, #e0e0e2)',
        boxShadow: '6px 6px 12px #737373, -6px -6px 12px #ffffff',
        height: '50%',
      }}
      className="container-fluid m-4 overflow-hidden border">
        <div className='row'>
          <div className='col-7'>
            <PersonalDetailAccordioner/>    
            <WorkHistoryAccordion/>
            <EducationAccordion/>
            <SkillsAccordion/>
            <SummaryAccordion/>
            <FinallizeAccordion/>
          </div>
          
          <div className='col-5 p-2'>
            <PrevewSection/>
          </div>
        </div>
      </div>
      <FooterComponent/>
    </ResumeProvider>
  );
}

export default FormPage;