import React from "react";
import { getTemplateById } from "../config/templates";

// Add more templates as needed

const ResumePDF = ({ resumeData, selectedTemplate, pdf = false }) => {
  const template = getTemplateById(selectedTemplate) || getTemplateById("modern");
  if (!template || !template.Component) return null;
  const TemplateComponent = template.Component;
  return <TemplateComponent data={resumeData} pdf={pdf} />;
};

export default ResumePDF;

