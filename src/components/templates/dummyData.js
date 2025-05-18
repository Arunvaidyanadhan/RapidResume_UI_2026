const dummyData = {
  personalDetails: {
    firstName: 'Lakshan Sai',
    lastName: 'Arunkumar',
    address: '123 Main Street',
    city: 'San Francisco',
    state: 'CA',
    country: 'USA',
    pinCode: '94101',
    phone: '+1 (123) 456-7890',
    email: 'john.doe@example.com',
    linkedin: 'linkedin.com/in/johndoe',
    website: 'www.johndoe.dev',
    drivingLicense: 'CA1234567',
    image: null // Optional: You can set a base64 placeholder image here
  },

  summary: `Experienced Full Stack Developer with over 6 years in web application development. Proficient in both front-end and back-end technologies, passionate about creating scalable and efficient applications.`,

  skills: [
    'HTML', 'CSS', 'JavaScript', 'React', 'Node.js',
    'TypeScript', 'Express.js', 'MongoDB', 'MySQL',
    'Git', 'Docker', 'AWS', 'REST API', 'GraphQL'
  ],

  workExperience: [
    {
      jobTitle: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      location: 'San Francisco, CA',
      startDate: 'March 2020',
      endDate: 'Present',
      description: `- Led a team of 5 developers to build and maintain a SaaS product.\n- Integrated third-party APIs and improved system performance by 30%.\n- Migrated legacy systems to React and Node.js stack.`
    },
    {
      jobTitle: 'Frontend Developer',
      company: 'Creative Agency',
      location: 'Los Angeles, CA',
      startDate: 'Jan 2018',
      endDate: 'Feb 2020',
      description: `- Designed responsive UI with HTML, CSS, and JavaScript.\n- Collaborated with designers to implement modern UX workflows.\n- Reduced page load time by 40%.`
    }
  ],

  education: [
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'XYZ University',
      location: 'New York, NY',
      startDate: '2014',
      endDate: '2018',
      grade: '8.7 CGPA'
    }
  ],

  certifications: [
    {
      name: 'AWS Certified Developer – Associate',
      issuingOrganization: 'Amazon Web Services',
      issueDate: 'Dec 2023',
      expirationDate: 'Dec 2026',
      credentialID: 'ABC123456'
    },
    {
      name: 'Certified JavaScript Developer',
      issuingOrganization: 'Code Institute',
      issueDate: 'Jan 2022',
      expirationDate: ''
    }
  ],

  projects: [
    {
      name: 'Portfolio Website',
      description: 'Personal website to showcase my projects and blog posts.',
      technologies: ['React', 'Gatsby', 'GraphQL'],
      link: 'https://www.johndoe.dev'
    },
    {
      name: 'E-commerce Platform',
      description: 'Full-stack web app for online shopping with admin panel and payment gateway.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      link: 'https://ecommerce.johndoe.dev'
    }
  ],

  languages: [
    { name: 'English', level: 'Native' },
    { name: 'Spanish', level: 'Professional Proficiency' }
  ],

  interests: ['Open Source', 'Tech Blogging', 'Traveling', 'Photography'],

  references: [
    {
      name: 'Jane Smith',
      position: 'Engineering Manager',
      company: 'Tech Solutions Inc.',
      contact: 'jane.smith@example.com'
    }
  ]
};

export default dummyData;
