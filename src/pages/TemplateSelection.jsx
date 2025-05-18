import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useResume } from '../context/resumecontext';

import Template1 from '../components/templates/template1';
import Template2 from '../components/templates/template2';
// import PDFTemplate2 from '../components/pdfTemplates/pdfTemplate2';

import Template3 from '../components/templates/template3';
import Template4 from '../components/templates/template4';
import Template5 from '../components/templates/template5';
import Template6 from '../components/templates/template6';
import Template7 from '../components/templates/template7';
import Template8 from '../components/templates/template8';
import Template9 from '../components/templates/template9';
import Template10 from '../components/templates/template10';
import Template11 from '../components/templates/template11';
import Template12 from '../components/templates/template12';
import Template13 from '../components/templates/template13';

import dummyData from '../components/templates/dummyData';
import './TemplateSelection.css';

const templates = [
  { name: 'template1', Component: Template1 },
  { name: 'template2', Component: Template2},
  { name: 'template3', Component: Template3 },
  { name: 'template4', Component: Template4 },
  { name: 'template5', Component: Template5 },
  { name: 'template6', Component: Template6 },
  { name: 'template7', Component: Template7 },
  { name: 'template8', Component: Template8 },
  { name: 'template9', Component: Template9 },
  { name: 'template10', Component: Template10 },
  { name: 'template11', Component: Template11 },
  { name: 'template12', Component: Template12 },
  { name: 'template13', Component: Template13 },
];

const TemplateSelection = () => {
  const { setSelectedTemplate } = useResume(); // correctly using context
  const navigate = useNavigate();

  const handleSelect = (templateName) => {
        console.log(templateName,'template name template name')

    setSelectedTemplate(templateName);

    navigate('/form');
  };

  return (
    <div className="template-selection">
      <h2>Select a Resume Template</h2>
      <div className="template-thumbnails row">
        {templates.map(({ name, Component }) => (
          <div
            key={name}
            className="thumbnail-card col-md-4 h-auto"
            onClick={() => handleSelect(name)}
          >
            <div className="thumbnail-preview">
              <Component data={dummyData} />
            </div>
            <p>{name.replace('template', 'Template ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplateSelection;
