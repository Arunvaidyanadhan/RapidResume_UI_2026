const uid = () => `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;

export const TEMPLATE_OPTIONS = [
  {
    id: 'classic',
    name: 'Classic ATS',
    tone: 'ATS Safe',
    accent: '#133f3a',
    useCase: 'Corporate, operations, finance, and high-volume applications.',
    description: 'Monochrome hierarchy built for scanning, parsing, and trust.',
  },
  {
    id: 'modern',
    name: 'Modern Professional',
    tone: 'Balanced',
    accent: '#1f7a6d',
    useCase: 'Product, engineering, consulting, and generalist professionals.',
    description: 'Clean structure with a refined accent sidebar and strong readability.',
  },
  {
    id: 'executive',
    name: 'Executive',
    tone: 'Leadership',
    accent: '#1e293b',
    useCase: 'Senior ICs, managers, directors, founders, and strategic roles.',
    description: 'Compact leadership framing with premium spacing and authority.',
  },
  {
    id: 'minimal',
    name: 'Minimal Editorial',
    tone: 'Editorial',
    accent: '#334155',
    useCase: 'Research, academia, strategy, writing, and content-led applications.',
    description: 'Typography-led layout with quiet confidence and strong rhythm.',
  },
  {
    id: 'creative',
    name: 'Creative Professional',
    tone: 'Controlled Personality',
    accent: '#c2410c',
    useCase: 'UX, marketing, branding, content, and modern portfolio-adjacent roles.',
    description: 'Expressive, recruiter-friendly layout with restrained personality.',
  },
];

function normalizeString(value) {
  return typeof value === 'string' ? value.trim() : '';
}

function normalizeArray(value) {
  return Array.isArray(value) ? value : [];
}

function compactStrings(items) {
  return normalizeArray(items).map(normalizeString).filter(Boolean);
}

function withId(item) {
  return item?.id ? item.id : uid();
}

function fallbackBulletList(items) {
  const bullets = compactStrings(items);
  return bullets.length ? bullets : [''];
}

export function getResumeSchema() {
  return {
    profile: {
      required: ['firstName', 'lastName', 'headline', 'email', 'phone', 'location', 'summary'],
    },
    collections: ['experience', 'education', 'skills', 'projects', 'certifications', 'languages'],
  };
}

export function createEmptyResume() {
  return {
    profile: {
      firstName: '',
      lastName: '',
      headline: '',
      email: '',
      phone: '',
      location: '',
      website: '',
      linkedin: '',
      summary: '',
    },
    experience: [
      {
        id: uid(),
        role: '',
        company: '',
        location: '',
        startDate: '',
        endDate: '',
        current: false,
        highlights: [''],
      },
    ],
    education: [],
    skills: [],
    projects: [],
    certifications: [],
    languages: [],
  };
}

export function createArrayItem(type) {
  switch (type) {
    case 'experience':
      return { id: uid(), role: '', company: '', location: '', startDate: '', endDate: '', current: false, highlights: [''] };
    case 'education':
      return { id: uid(), degree: '', institution: '', location: '', startDate: '', endDate: '', current: false, details: '' };
    case 'skills':
      return { id: uid(), name: '', level: 'Advanced' };
    case 'projects':
      return { id: uid(), name: '', role: '', link: '', summary: '', highlights: [''] };
    case 'certifications':
      return { id: uid(), name: '', issuer: '', year: '' };
    case 'languages':
      return { id: uid(), name: '', proficiency: 'Professional' };
    default:
      return { id: uid() };
  }
}

export function sanitizeResume(rawResume) {
  const resume = rawResume && typeof rawResume === 'object' ? rawResume : {};
  const profile = resume.profile && typeof resume.profile === 'object' ? resume.profile : {};

  return {
    profile: {
      firstName: normalizeString(profile.firstName),
      lastName: normalizeString(profile.lastName),
      headline: normalizeString(profile.headline),
      email: normalizeString(profile.email),
      phone: normalizeString(profile.phone),
      location: normalizeString(profile.location),
      website: normalizeString(profile.website),
      linkedin: normalizeString(profile.linkedin),
      summary: normalizeString(profile.summary),
    },
    experience: normalizeArray(resume.experience)
      .map((item) => ({
        id: withId(item),
        role: normalizeString(item?.role),
        company: normalizeString(item?.company),
        location: normalizeString(item?.location),
        startDate: normalizeString(item?.startDate),
        endDate: normalizeString(item?.endDate),
        current: Boolean(item?.current),
        highlights: compactStrings(item?.highlights),
      }))
      .filter((item) => item.role || item.company || item.location || item.startDate || item.endDate || item.highlights.length),
    education: normalizeArray(resume.education)
      .map((item) => ({
        id: withId(item),
        degree: normalizeString(item?.degree),
        institution: normalizeString(item?.institution),
        location: normalizeString(item?.location),
        startDate: normalizeString(item?.startDate),
        endDate: normalizeString(item?.endDate),
        current: Boolean(item?.current),
        details: normalizeString(item?.details),
      }))
      .filter((item) => item.degree || item.institution || item.location || item.startDate || item.endDate || item.details),
    skills: normalizeArray(resume.skills)
      .map((item) => ({
        id: withId(item),
        name: normalizeString(item?.name),
        level: normalizeString(item?.level) || 'Advanced',
      }))
      .filter((item) => item.name),
    projects: normalizeArray(resume.projects)
      .map((item) => ({
        id: withId(item),
        name: normalizeString(item?.name),
        role: normalizeString(item?.role),
        link: normalizeString(item?.link),
        summary: normalizeString(item?.summary),
        highlights: compactStrings(item?.highlights),
      }))
      .filter((item) => item.name || item.role || item.link || item.summary || item.highlights.length),
    certifications: normalizeArray(resume.certifications)
      .map((item) => ({
        id: withId(item),
        name: normalizeString(item?.name),
        issuer: normalizeString(item?.issuer),
        year: normalizeString(item?.year),
      }))
      .filter((item) => item.name || item.issuer || item.year),
    languages: normalizeArray(resume.languages)
      .map((item) => ({
        id: withId(item),
        name: normalizeString(item?.name),
        proficiency: normalizeString(item?.proficiency) || 'Professional',
      }))
      .filter((item) => item.name),
  };
}

export function hydrateResume(rawResume) {
  const sanitized = sanitizeResume(rawResume);
  const empty = createEmptyResume();
  return {
    ...sanitized,
    experience: sanitized.experience.length ? sanitized.experience : empty.experience,
    education: sanitized.education,
    skills: sanitized.skills,
    projects: sanitized.projects,
    certifications: sanitized.certifications,
    languages: sanitized.languages,
  };
}

export function getSectionStatus(resume) {
  const safe = sanitizeResume(resume);
  const essentials = {
    profile: safe.profile.firstName && safe.profile.lastName && safe.profile.headline && safe.profile.email && safe.profile.phone && safe.profile.summary,
    experience: safe.experience.length > 0,
    education: safe.education.length > 0,
    skills: safe.skills.length > 0,
    projects: safe.projects.length > 0,
    certifications: safe.certifications.length > 0,
    languages: safe.languages.length > 0,
  };

  return {
    essentials: essentials.profile && essentials.experience ? 'complete' : 'needs-improvement',
    experience: essentials.experience ? 'complete' : 'needs-improvement',
    education: essentials.education ? 'complete' : 'optional',
    skills: essentials.skills ? 'complete' : 'needs-improvement',
    projects: essentials.projects ? 'complete' : 'optional',
    certifications: essentials.certifications ? 'complete' : 'optional',
    languages: essentials.languages ? 'complete' : 'optional',
  };
}

export function getResumeCompletion(resume) {
  const statuses = getSectionStatus(resume);
  const scoreMap = { complete: 1, 'needs-improvement': 0.5, optional: 0.75 };
  const values = Object.values(statuses).map((status) => scoreMap[status] || 0);
  return Math.round((values.reduce((sum, value) => sum + value, 0) / values.length) * 100);
}

export function validateResume(resume) {
  const sanitized = sanitizeResume(resume);
  const errors = {};

  if (!sanitized.profile.firstName) errors.firstName = 'First name is required.';
  if (!sanitized.profile.lastName) errors.lastName = 'Last name is required.';
  if (!sanitized.profile.headline) errors.headline = 'Professional title is required.';
  if (!sanitized.profile.email) {
    errors.email = 'Email is required.';
  } else if (!/\S+@\S+\.\S+/.test(sanitized.profile.email)) {
    errors.email = 'Use a valid email address.';
  }
  if (!sanitized.profile.phone) errors.phone = 'Phone number is required.';
  if (!sanitized.profile.summary) errors.summary = 'Add a concise summary.';
  if (!sanitized.experience.length) errors.experience = 'Add at least one experience entry.';
  if (!sanitized.skills.length) errors.skills = 'Add at least three skills.';

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
    sanitized,
  };
}

export function createPdfPayload(resume) {
  return sanitizeResume(resume);
}

export function ensurePreviewReadyResume(resume, sampleResume) {
  const safe = sanitizeResume(resume);
  const sample = sanitizeResume(sampleResume);
  return {
    profile: {
      ...sample.profile,
      ...safe.profile,
      firstName: safe.profile.firstName || sample.profile.firstName,
      lastName: safe.profile.lastName || sample.profile.lastName,
      headline: safe.profile.headline || sample.profile.headline,
      summary: safe.profile.summary || sample.profile.summary,
      email: safe.profile.email || sample.profile.email,
      phone: safe.profile.phone || sample.profile.phone,
      location: safe.profile.location || sample.profile.location,
      website: safe.profile.website || sample.profile.website,
      linkedin: safe.profile.linkedin || sample.profile.linkedin,
    },
    experience: safe.experience.length ? safe.experience : sample.experience,
    education: safe.education.length ? safe.education : sample.education,
    skills: safe.skills.length ? safe.skills : sample.skills,
    projects: safe.projects.length ? safe.projects : sample.projects,
    certifications: safe.certifications.length ? safe.certifications : sample.certifications,
    languages: safe.languages.length ? safe.languages : sample.languages,
  };
}

export function normalizeHighlightsForEditing(values) {
  return fallbackBulletList(values);
}
