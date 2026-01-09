// context/ResumeContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';

const ResumeContext = createContext();

const STORAGE_KEY = 'rapid_resume_draft';

const getDefaultResumeData = () => ({
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
  languages: [],
  awards: [],
  hobbies: [],
  publications: [],
  references: [],
  volunteer: [],
  summary: '',
});

const safeParseJson = (value) => {
  if (!value) return null;
  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
};

export function ResumeProvider({ children }) {
  const [resumeData, setResumeData] = useState(() => {
    const defaults = getDefaultResumeData();
    const stored = safeParseJson(localStorage.getItem(STORAGE_KEY));
    if (!stored || typeof stored !== 'object') return defaults;

    return {
      ...defaults,
      ...stored,
      personalDetails: {
        ...defaults.personalDetails,
        ...(stored.personalDetails || {}),
      },
    };
  });

  const [selectedTemplate, setSelectedTemplate] = useState(() => {
    return localStorage.getItem('selectedTemplate') || 'modern';
  });

  useEffect(() => {
    if (selectedTemplate) {
      localStorage.setItem('selectedTemplate', selectedTemplate);
    }
  }, [selectedTemplate]);

  useEffect(() => {
    const t = setTimeout(() => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(resumeData));
      } catch {
        // ignore storage errors (quota / private mode)
      }
    }, 150);

    return () => clearTimeout(t);
  }, [resumeData]);

  const updatePersonalDetails = (data) => {
    setResumeData((prev) => ({
      ...prev,
      personalDetails: { ...prev.personalDetails, ...data },
    }));
  };

  const updateImage = (imageFile) => {
    if (!imageFile) return;

    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = typeof reader.result === 'string' ? reader.result : null;
      setResumeData((prev) => ({
        ...prev,
        personalDetails: {
          ...prev.personalDetails,
          image: dataUrl,
        },
      }));
    };
    reader.readAsDataURL(imageFile);
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

  const updateLanguages = (languages) => {
    setResumeData((prev) => ({
      ...prev,
      languages,
    }));
  };

  const updateAwards = (awards) => {
    setResumeData((prev) => ({
      ...prev,
      awards,
    }));
  };

  const updateHobbies = (hobbies) => {
    setResumeData((prev) => ({
      ...prev,
      hobbies,
    }));
  };

  const updatePublications = (publications) => {
    setResumeData((prev) => ({
      ...prev,
      publications,
    }));
  };

  const updateReferences = (references) => {
    setResumeData((prev) => ({
      ...prev,
      references,
    }));
  };

  const updateVolunteer = (volunteer) => {
    setResumeData((prev) => ({
      ...prev,
      volunteer,
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
        case 'languages':
          newData.languages = [];
          break;
        case 'awards':
          newData.awards = [];
          break;
        case 'hobbies':
          newData.hobbies = [];
          break;
        case 'publications':
          newData.publications = [];
          break;
        case 'references':
          newData.references = [];
          break;
        case 'volunteer':
          newData.volunteer = [];
          break;
        // Note: personal details, languages, awards, etc. are not cleared
        // as they might be used by other sections
        default:
          break;
      }

      return newData;
    });
  };

  const resetResume = () => {
    const defaults = getDefaultResumeData();
    setResumeData(defaults);
    setSelectedTemplate('modern');
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
        updateLanguages,
        updateAwards,
        updateHobbies,
        updatePublications,
        updateReferences,
        updateVolunteer,
        clearSectionData,
        resetResume,
        selectedTemplate,
        setSelectedTemplate,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
}

export const useResume = () => useContext(ResumeContext);
