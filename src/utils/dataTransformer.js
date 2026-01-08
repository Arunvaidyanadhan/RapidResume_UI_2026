/**
 * Transforms frontend resume data structure to backend ResumeData schema
 */
export function transformResumeData(frontendData) {
  const { personalDetails, workExperience, skills, education, projects, certifications, summary } = frontendData;

  // Transform personal details
  const personal = {
    firstName: personalDetails?.firstName || '',
    lastName: personalDetails?.lastName || '',
    email: personalDetails?.email || '',
    phone: personalDetails?.phone || '',
    linkedin: personalDetails?.linkedin || undefined,
    title: undefined, // Not in frontend, can be added later
  };

  // Transform work experience
  const experience = (workExperience || []).map(exp => ({
    jobTitle: exp.jobTitle || '',
    employer: exp.employer || '',
    startDate: exp.startDate || '',
    endDate: exp.current ? undefined : (exp.endDate || undefined),
    current: exp.current || false,
    description: exp.description || undefined,
  }));

  // Transform education
  const educationData = (education || []).map(edu => ({
    degree: edu.degree || '',
    fieldOfStudy: edu.fieldOfStudy || '',
    school: edu.school || '',
    startDate: edu.startDate || '',
    endDate: edu.current ? undefined : (edu.endDate || undefined),
  }));

  // Transform projects
  const projectsData = (projects || []).map(proj => ({
    name: proj.name || '',
    description: proj.description || '',
    link: proj.link || undefined,
  }));

  // Transform certifications - frontend stores as strings, backend expects objects
  const certificationsData = (certifications || []).map(cert => {
    // Try to parse if it's a structured string, otherwise create object
    if (typeof cert === 'string') {
      // Simple parsing: "Certification Name - Issuer - Year" or just "Certification Name"
      const parts = cert.split(' - ');
      if (parts.length >= 3) {
        return {
          name: parts[0].trim(),
          issuer: parts[1].trim(),
          year: parts[2].trim(),
        };
      } else {
        return {
          name: cert.trim(),
          issuer: '',
          year: new Date().getFullYear().toString(),
        };
      }
    }
    return cert; // Already an object
  });

  return {
    personal,
    summary: summary || undefined,
    skills: skills || undefined,
    experience: experience.length > 0 ? experience : undefined,
    education: educationData.length > 0 ? educationData : undefined,
    projects: projectsData.length > 0 ? projectsData : undefined,
    certifications: certificationsData.length > 0 ? certificationsData : undefined,
  };
}
