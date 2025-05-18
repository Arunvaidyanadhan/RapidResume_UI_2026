import Template1 from "./templates/template1";
import Template2 from "./templates/template2";
import Template3 from "./templates/template3";

// Add more templates as needed

const ResumePDF = ({ resumeData, selectedTemplate, pdf = false }) => {
  
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
  
};

export default ResumePDF;

