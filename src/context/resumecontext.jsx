// context/ResumeContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';

const ResumeContext = createContext();

export function ResumeProvider({ children }) {
  const [resumeData, setResumeData] = useState({
    personalDetails: {
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      country: '',
      state: '',
      pinCode: '',
      phone: '',
      email: '',
      linkedin: '',
      website: '',
      drivingLicense: '',
      image: null,
    },
    workExperience: [], 
    skills: [],
    education: [],
    projects: [],
    certifications: [],
    summary: '',
  });

  const [selectedTemplate, setSelectedTemplate] = useState(() => {
    return localStorage.getItem('selectedTemplate') || 'modern';
  });

  useEffect(() => {
    if (selectedTemplate) {
      localStorage.setItem('selectedTemplate', selectedTemplate);
    }
  }, [selectedTemplate]);

  const updatePersonalDetails = (data) => {
    setResumeData((prev) => ({
      ...prev,
      personalDetails: { ...prev.personalDetails, ...data },
    }));
  };

  const updateImage = (imageFile) => {
    setResumeData((prev) => ({
      ...prev,
      personalDetails: {
        ...prev.personalDetails,
        image: URL.createObjectURL(imageFile),
      },
    }));
  };

  const updateSkills = (skills) => {
  setResumeData((prevData) => ({
    ...prevData,
    skills,
  }));
};


  const updateWorkExperience = (experienceList) => {
    setResumeData((prev) => ({
      ...prev,
      workExperience: experienceList,
    }));
  };
  const updateEducation = (educationList) => {
    setResumeData((prev) => ({
      ...prev,
      education: educationList,
    }));
  };

  const updateProjects = (projectsList) => {
    setResumeData((prev) => ({
      ...prev,
      projects: projectsList,
    }));
  };

  const updateCertifications = (certificationsList) => {
    setResumeData((prev) => ({
      ...prev,
      certifications: certificationsList,
    }));
  };

  const updateSummary = (summary) => {
    setResumeData((prev) => ({
      ...prev,
      summary: summary,
    }));
  };

  // Clear section data when section is removed
  const clearSectionData = (sectionValue) => {
    setResumeData((prev) => {
      const newData = { ...prev };
      
      switch (sectionValue) {
        case 'projects':
          newData.projects = [];
          break;
        case 'certifications':
          newData.certifications = [];
          break;
        case 'summary':
          newData.summary = '';
          break;
        case 'work':
          newData.workExperience = [];
          break;
        case 'education':
          newData.education = [];
          break;
        case 'skills':
          newData.skills = [];
          break;
        // Note: personal details, languages, awards, etc. are not cleared
        // as they might be used by other sections
        default:
          break;
      }
      
      return newData;
    });
  };

  return (
    <ResumeContext.Provider
      value={{
        resumeData,
        setResumeData,
        updatePersonalDetails,
        updateImage,
        updateWorkExperience,
        updateEducation,
        updateSkills,
        updateProjects,
        updateCertifications,
        updateSummary,
        clearSectionData,
        selectedTemplate,
        setSelectedTemplate,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
}

export const useResume = () => useContext(ResumeContext);
