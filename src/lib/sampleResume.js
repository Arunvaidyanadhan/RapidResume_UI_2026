export const sampleResume = {
  profile: {
    firstName: 'Aarav',
    lastName: 'Mehta',
    headline: 'Senior Product Engineer',
    email: 'aarav.mehta@example.com',
    phone: '+91 98765 43210',
    location: 'Bengaluru, India',
    website: 'aaravmehta.dev',
    linkedin: 'linkedin.com/in/aaravmehta',
    summary:
      'Product-minded engineer with 8+ years building high-conversion web experiences, scalable frontends, and privacy-first user workflows. Known for turning complex form flows into fast, measurable journeys that increase completion and trust.',
  },
  experience: [
    {
      id: 'exp-1',
      role: 'Lead Product Engineer',
      company: 'Northstar Labs',
      location: 'Remote',
      startDate: 'Mar 2022',
      endDate: '',
      current: true,
      highlights: [
        'Redesigned a multi-step onboarding flow and lifted completion from 41% to 67% within one quarter.',
        'Created a shared design system used across 4 product squads, reducing UI drift and front-end delivery time.',
        'Partnered with growth and support to launch ATS-friendly document export used by 120k+ applicants.'
      ]
    }
  ],
  education: [
    {
      id: 'edu-1',
      degree: 'B.Tech in Computer Science',
      institution: 'National Institute of Technology',
      location: 'Surat',
      startDate: '2012',
      endDate: '2016',
      current: false,
      details: 'Graduated with distinction. Focused on systems design and human-computer interaction.'
    }
  ],
  skills: [
    { id: 'skill-1', name: 'React', level: 'Advanced' },
    { id: 'skill-2', name: 'Design Systems', level: 'Advanced' },
    { id: 'skill-3', name: 'TypeScript', level: 'Advanced' },
    { id: 'skill-4', name: 'Product Strategy', level: 'Strong' },
    { id: 'skill-5', name: 'UX Writing', level: 'Strong' }
  ],
  projects: [
    {
      id: 'proj-1',
      name: 'RapidResume Platform Refresh',
      role: 'Product Engineer',
      link: 'https://rapidresume.app/case-study',
      summary: 'Led the architecture and UX rewrite of a resume platform focused on privacy, speed, and ATS-safe exports.',
      highlights: [
        'Introduced a React-based template engine to replace brittle server-side rendering.',
        'Built real template previews that shortened decision time during template selection.'
      ]
    }
  ],
  certifications: [
    { id: 'cert-1', name: 'Google UX Design', issuer: 'Google', year: '2024' }
  ],
  languages: [
    { id: 'lang-1', name: 'English', proficiency: 'Fluent' },
    { id: 'lang-2', name: 'Hindi', proficiency: 'Native' }
  ]
};
