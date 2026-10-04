/**
 * Central data source for the portfolio.
 * Update this file to change any personal info, skills, experience, or projects.
 * No component changes required.
 */

export const profile = {
  name: 'Ikram Ghiouan Soussi',
  title: 'Full Stack Developer & AI Enthusiast',
  location: 'Tangier, Morocco',
  email: 'ghiouanikram@gmail.com',
  linkedin: 'https://www.linkedin.com/in/ikram-ghiouan-dev',
  github: 'https://github.com/ikraamgh',
  portfolioRepo: 'https://github.com/ikraamgh/portfolio',
  cv: '/ikram-ghiouan-soussi-cv.pdf',
  heroTagline:
    'Engineering student in Computer Science with hands-on experience in Full Stack Web Development and a growing specialization in Artificial Intelligence. I build practical, scalable and user-focused digital solutions.',
  about: [
    'I am an engineering student in Computer Science at ENSI Tanger, specializing in Artificial Intelligence, with a solid foundation in Full Stack Web Development earned through professional experience and a dedicated Full-Stack development diploma.',
    'My work spans building and maintaining web applications with PHP/Laravel, creating responsive interfaces with modern JavaScript frameworks, and developing internal tools that automate business processes. I am now channeling that engineering mindset into Machine Learning and AI-powered backend services.',
    'I care about clean architecture, maintainable code, and solutions that genuinely serve their users. I am actively preparing for Full Stack Developer and AI opportunities in Morocco and internationally.',
  ],
} as const

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
] as const

export type SkillGroup = {
  category: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend',
    skills: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'TypeScript', 'React', 'Vue.js'],
  },
  {
    category: 'Backend',
    skills: ['PHP', 'Laravel', 'Node.js', 'REST APIs'],
  },
  {
    category: 'Databases',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQL / NoSQL'],
  },
  {
    category: 'Tools',
    skills: ['Git', 'GitHub', 'Docker', 'Postman'],
  },
  {
    category: 'AI / Data',
    skills: [
      'Python',
      'Machine Learning fundamentals',
      'Regression models',
      'AI API integration',
      'FastAPI',
      'AI-powered backend services',
    ],
  },
  {
    category: 'Other',
    skills: ['UML', 'Agile methodologies', 'Software architecture', 'UI/UX fundamentals'],
  },
]

export type Experience = {
  role: string
  company: string
  location?: string
  period: string
  bullets: string[]
}

export const experiences: Experience[] = [
  {
    role: 'Full Stack Web Developer',
    company: 'Quick Marketing Hub',
    location: 'Tanger',
    period: 'August 2024 – June 2026',
    bullets: [
      'Development and maintenance of web applications using PHP and Laravel',
      'Backend development and REST API design',
      'Creation of responsive web pages using HTML, CSS and JavaScript',
      'Development of internal tools to automate business processes',
      'Integration of technical marketing campaigns',
      'Bug fixing and validation of functionalities',
      'Collaboration with marketing and design teams',
    ],
  },
  {
    role: 'Web Development Intern',
    company: 'Tech Service Computer — IT Department',
    period: 'April 2024',
    bullets: ['Development of a web booking application'],
  },
  {
    role: 'Web Development Intern',
    company: 'PC Halle — IT Department',
    period: 'July 2023',
    bullets: ['Development of a collaborative project management web application'],
  },
]

export type Project = {
  title: string
  description: string
  category: 'Full Stack' | 'Backend' | 'Frontend' | 'AI'
  technologies: string[]
  features: string[]
  github: string
  demo: string
}

export const projectCategories = ['All', 'Full Stack', 'Backend', 'Frontend', 'AI'] as const

export const projects: Project[] = [
  {
    title: 'Personal Portfolio Website',
    description:
      'This very portfolio — a modern, responsive single-page application built with Next.js, TypeScript and Tailwind CSS, showcasing my work and skills.',
    category: 'Frontend',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React'],
    features: ['Responsive design', 'Dark mode', 'Smooth animations', 'Downloadable CV'],
    github: 'https://github.com/ikraamgh/portfolio',
    demo: 'Coming soon',
  },
  {
    title: 'Full Stack Business Management Platform',
    description:
      'A complete management platform with authentication, an interactive dashboard, and full CRUD operations for day-to-day business operations.',
    category: 'Full Stack',
    technologies: ['Laravel', 'React', 'MySQL', 'REST API'],
    features: ['Authentication', 'Dashboard', 'CRUD', 'User management', 'Statistics'],
    github: 'https://github.com/ikraamgh',
    demo: 'Coming soon',
  },
  {
    title: 'AI Assistant',
    description:
      'A conversational AI assistant with a clean chat interface, powered by a Python backend that integrates language model APIs.',
    category: 'AI',
    technologies: ['Python', 'FastAPI', 'AI API'],
    features: ['Conversational interface', 'Context-aware responses', 'API integration'],
    github: 'https://github.com/ikraamgh',
    demo: 'Coming soon',
  },
  {
    title: 'Collaborative Project Management App',
    description:
      'A team collaboration tool to organize projects and tasks, assign members, and track progress in real time.',
    category: 'Full Stack',
    technologies: ['JavaScript', 'Node.js', 'MongoDB'],
    features: ['Projects', 'Tasks', 'Users', 'Collaboration'],
    github: 'https://github.com/ikraamgh',
    demo: 'Coming soon',
  },
  {
    title: 'Booking Web Application',
    description:
      'A reservation system with availability management and an administration panel for handling bookings efficiently.',
    category: 'Backend',
    technologies: ['PHP', 'JavaScript', 'MySQL'],
    features: ['Reservations', 'Availability management', 'Administration'],
    github: 'https://github.com/ikraamgh',
    demo: 'Coming soon',
  },
]

export type Education = {
  degree: string
  school: string
  detail?: string
  period: string
  current?: boolean
}

export const education: Education[] = [
  {
    degree: "Engineering Degree — Computer Science (Part-time)",
    school: 'ENSI Tanger',
    detail: 'Specialization: Artificial Intelligence',
    period: '2025 – Present',
    current: true,
  },
  {
    degree: 'Digital Development Diploma — Full-Stack Option',
    school: 'ISTA NTIC Tanger',
    period: '2023 – 2024',
  },
  {
    degree: 'Baccalaureate — Life and Earth Sciences',
    school: 'Lycée Al Fassi — Tanger',
    period: '2021 – 2022',
  },
]
