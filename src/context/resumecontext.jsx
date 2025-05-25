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
    //education shuld add

  });

  const [selectedTemplate, setSelectedTemplate] = useState(() => {
    return localStorage.getItem('selectedTemplate') || 'template1';
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

 

  return (
    <ResumeContext.Provider
      value={{
        resumeData,
        setResumeData,
        updatePersonalDetails,
        updateImage,
        updateWorkExperience,
        updateSkills,
        selectedTemplate,
        setSelectedTemplate,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
}

export const useResume = () => useContext(ResumeContext);
