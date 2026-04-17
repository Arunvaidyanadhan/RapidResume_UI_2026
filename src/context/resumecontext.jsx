import { createContext, useContext, useEffect, useState } from 'react';
import { createArrayItem, createEmptyResume, hydrateResume } from '../lib/resumeSchema';

const ResumeContext = createContext();

const STORAGE_KEY = 'rapid_resume_builder_state_v2';

function readStoredState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function ResumeProvider({ children }) {
  const storedState = readStoredState();

  const [resume, setResume] = useState(() => hydrateResume(storedState?.resume || createEmptyResume()));
  const [selectedTemplate, setSelectedTemplate] = useState(() => storedState?.selectedTemplate || 'classic');
  const [currentStep, setCurrentStep] = useState(() => storedState?.currentStep || 'essentials');

  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          resume,
          selectedTemplate,
          currentStep,
        })
      );
    } catch {
      // Ignore local storage failures to preserve the no-account experience.
    }
  }, [resume, selectedTemplate, currentStep]);

  const updateProfileField = (field, value) => {
    setResume((previous) => ({
      ...previous,
      profile: {
        ...previous.profile,
        [field]: value,
      },
    }));
  };

  const updateListItem = (listName, id, field, value) => {
    setResume((previous) => ({
      ...previous,
      [listName]: previous[listName].map((item) => (item.id === id ? { ...item, [field]: value } : item)),
    }));
  };

  const updateListHighlights = (listName, id, values) => {
    setResume((previous) => ({
      ...previous,
      [listName]: previous[listName].map((item) => (item.id === id ? { ...item, highlights: values } : item)),
    }));
  };

  const addListItem = (listName) => {
    setResume((previous) => ({
      ...previous,
      [listName]: [...previous[listName], createArrayItem(listName)],
    }));
  };

  const removeListItem = (listName, id) => {
    setResume((previous) => {
      const nextItems = previous[listName].filter((item) => item.id !== id);
      return {
        ...previous,
        [listName]: nextItems.length ? nextItems : [createArrayItem(listName)],
      };
    });
  };

  const resetResume = () => {
    setResume(createEmptyResume());
    setSelectedTemplate('classic');
    setCurrentStep('essentials');
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  };

  return (
    <ResumeContext.Provider
      value={{
        resume,
        setResume,
        selectedTemplate,
        setSelectedTemplate,
        currentStep,
        setCurrentStep,
        updateProfileField,
        updateListItem,
        updateListHighlights,
        addListItem,
        removeListItem,
        resetResume,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
}

export const useResume = () => useContext(ResumeContext);
