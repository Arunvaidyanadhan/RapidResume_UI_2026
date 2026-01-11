// context/ResumeContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';

const ResumeContext = createContext();

const STORAGE_KEY = 'rapid_resume_draft';
const HEADINGS_KEY = 'rapid_resume_selected_headings';
const CUSTOM_HEADINGS_KEY = 'rapid_resume_custom_headings';
const STEP_INDEX_KEY = 'rapid_resume_current_step_index';

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
  customSections: {},
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
    return localStorage.getItem('selectedTemplate') || '';
  });

  const [selectedHeadings, setSelectedHeadings] = useState(() => {
    const stored = safeParseJson(localStorage.getItem(HEADINGS_KEY));
    return Array.isArray(stored) ? stored : [];
  });

  const [customHeadings, setCustomHeadings] = useState(() => {
    const stored = safeParseJson(localStorage.getItem(CUSTOM_HEADINGS_KEY));
    return Array.isArray(stored) ? stored : [];
  });

  const [currentStepIndex, setCurrentStepIndex] = useState(() => {
    const stored = safeParseJson(localStorage.getItem(STEP_INDEX_KEY));
    return Number.isFinite(stored) ? stored : 0;
  });

  useEffect(() => {
    if (selectedTemplate) {
      localStorage.setItem('selectedTemplate', selectedTemplate);
    }
  }, [selectedTemplate]);

  useEffect(() => {
    try {
      localStorage.setItem(HEADINGS_KEY, JSON.stringify(selectedHeadings));
    } catch {
      // ignore
    }
  }, [selectedHeadings]);

  useEffect(() => {
    try {
      localStorage.setItem(CUSTOM_HEADINGS_KEY, JSON.stringify(customHeadings));
    } catch {
      // ignore
    }
  }, [customHeadings]);

  useEffect(() => {
    try {
      localStorage.setItem(STEP_INDEX_KEY, JSON.stringify(currentStepIndex));
    } catch {
      // ignore
    }
  }, [currentStepIndex]);

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

  const updateCustomSection = (sectionId, title, content) => {
    setResumeData((prev) => ({
      ...prev,
      customSections: {
        ...(prev.customSections || {}),
        [sectionId]: {
          title,
          content,
        },
      },
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
        default:
          if (sectionValue && typeof sectionValue === 'string' && sectionValue.startsWith('custom_')) {
            const nextCustom = { ...(newData.customSections || {}) };
            delete nextCustom[sectionValue];
            newData.customSections = nextCustom;
          }
          break;
      }

      return newData;
    });
  };

  const resetResume = () => {
    const defaults = getDefaultResumeData();
    setResumeData(defaults);
    setSelectedTemplate('');
    setSelectedHeadings([]);
    setCustomHeadings([]);
    setCurrentStepIndex(0);
    try {
      localStorage.removeItem('selectedTemplate');
      localStorage.removeItem(HEADINGS_KEY);
      localStorage.removeItem(CUSTOM_HEADINGS_KEY);
      localStorage.removeItem(STEP_INDEX_KEY);
    } catch {
      // ignore
    }
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
        selectedHeadings,
        setSelectedHeadings,
        customHeadings,
        setCustomHeadings,
        currentStepIndex,
        setCurrentStepIndex,
        updateCustomSection,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
}

export const useResume = () => useContext(ResumeContext);
