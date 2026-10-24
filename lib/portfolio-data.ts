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
    'Engineering student at ENSI Tanger specializing in AI — with real-world Full Stack experience building scalable web applications with Laravel, React, Next.js and Supabase.',
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
    skills: ['HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Vue.js', 'shadcn/ui', 'Inertia.js'],
  },
  {
    category: 'Backend',
    skills: ['PHP', 'Laravel', 'Node.js', 'REST APIs', 'WordPress'],
  },
  {
    category: 'Databases',
    skills: ['MySQL', 'PostgreSQL', 'Supabase', 'MongoDB', 'SQL / NoSQL'],
  },
  {
    category: 'Security & Architecture',
    skills: ['Row Level Security (RLS)', 'RBAC', 'PostgreSQL schema design', 'UUIDs', 'bcryptjs / pgcrypto'],
  },
  {
    category: 'Tools',
    skills: ['Git', 'GitHub', 'Docker', 'Vercel', 'Postman', 'Cloud Native'],
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
    category: 'Soft Skills',
    skills: ['Technical project management', 'Problem solving & debugging', 'Teamwork & Git collaboration', 'Agile methodologies', 'UI/UX fundamentals'],
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
    role: 'Full Stack Developer — Internship (PFA)',
    company: 'ENSI Tanger — ensiNetwork Platform',
    location: 'Tanger',
    period: 'August 2026',
    bullets: [
      'Designed and built a full-stack social & educational platform for the ENSI community (students, professors, administrators)',
      'Social feed with posts, likes, comments, dynamic user profiles and search',
      'Real-time instant messaging (floating chat) and dynamic notifications',
      'Exam archive and learning resource management with file upload/download via Supabase Storage',
      'Role management (admin / professor / student) with RBAC and PostgreSQL Row Level Security',
      'Administration dashboard for user and content moderation',
      'PostgreSQL database design: schema, indexes, foreign keys, UUIDs and password hashing (bcryptjs, pgcrypto)',
      'Multi-context architecture (auth, posts, chat, notifications, downloads) with React Context API',
    ],
  },
  {
    role: 'Full Stack Web Developer',
    company: 'Cloud Marketing Hub',
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
  featured?: boolean
}

export const projectCategories = ['All', 'Full Stack', 'Backend', 'Frontend', 'AI'] as const

export const projects: Project[] = [
  {
    title: 'CareerPilot AI — AI-Powered Career Assistant',
    description:
      'A full-stack SaaS application that helps job seekers manage their career journey — from PDF resume uploads and job matching to application tracking and skill gap analysis. Built with Supabase for auth, storage and Row-Level Security.',
    category: 'AI',
    technologies: ['Next.js 16', 'TypeScript', 'Tailwind CSS', 'Supabase', 'shadcn/ui', 'PostgreSQL', 'Vercel'],
    features: [
      'Email/password authentication with route protection',
      'PDF resume upload to private cloud storage',
      'Job match analysis & skill gap workflow',
      'Application tracker with Kanban & list views',
      'Row-Level Security — per-user data isolation',
      'Fully responsive (mobile, tablet, desktop)',
    ],
    github: 'https://github.com/ikraamgh/CareerPilot-AI',
    demo: 'https://ai-careerpilot.vercel.app',
  },
  {
    title: 'Green Energy — AI-Powered Energy Management Platform',
    featured: true,
    description:
      'Full-stack PFE project: a smart energy management platform for solar energy companies. Includes a customer portal, an admin dashboard with AI-generated analytics, real-time insights and project tracking.',
    category: 'AI',
    technologies: ['Vue 3', 'Laravel', 'FastAPI', 'Python', 'PostgreSQL', 'Docker', 'Vite', 'Nginx'],
    features: [
      'AI analytics dashboard (ML predictions)',
      'Customer & project management',
      'Solar energy consumption insights',
      'Admin panel with RBAC',
      'CI/CD with GitHub Actions',
      'Docker containerized architecture',
    ],
    github: 'https://github.com/green-ennergy/Green_ennergy',
    demo: 'https://green-ennergy.vercel.app/',
  },
  {
    title: 'e-Shoply — Full Stack E-Commerce Platform',
    description:
      'A complete e-commerce platform with category navigation, shopping cart, wishlist, authentication, order placement and an admin dashboard. Frontend on Vercel, backend on Render with Docker.',
    category: 'Full Stack',
    technologies: ['React', 'Vite', 'TypeScript', 'Laravel 11', 'PostgreSQL', 'REST API', 'Docker', 'Vercel', 'Render'],
    features: [
      'Category navigation & product listing',
      'Shopping cart & wishlist',
      'Authentication (register / login)',
      'Order placement & tracking',
      'Admin dashboard',
      'Deployed frontend + backend',
    ],
    github: 'https://github.com/ikraamgh',
    demo: 'https://e-shoply.vercel.app/',
  },
  {
    title: 'ensiNetwork — Educational Social Platform',
    description:
      'A full-stack social & educational platform built for the ENSI community. Features a social feed, real-time chat, resource management, RBAC role system and an admin dashboard.',
    category: 'Full Stack',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Supabase', 'PostgreSQL', 'Vercel Analytics'],
    features: [
      'Social feed (posts, likes, comments, search)',
      'Real-time instant messaging',
      'Dynamic notifications',
      'Exam archive & resource management',
      'RBAC + Row Level Security',
      'Admin dashboard',
    ],
    github: 'https://github.com/ikraamgh',
    demo: 'https://ensi-educational-platform.vercel.app/',
  },

  {
    title: 'ResaSportif — Sports Facility Booking Platform',
    description:
      'A sports reservation web app where users can browse facilities (football, basketball, tennis, swimming…), pick a date and time slot, fill in their details and proceed to payment. Custom design system with a forest green & lime palette, fully responsive.',
    category: 'Frontend',
    technologies: ['React 18', 'Redux Toolkit', 'React Router v6', 'Bootstrap 5', 'Custom CSS'],
    features: [
      'Sports facility browsing by category',
      'Interactive date & time slot selection',
      'Booking form with payment flow',
      'Custom design system (green & lime)',
      'Fully responsive layout',
      'Deployed on GitHub Pages',
    ],
    github: 'https://github.com/ikraamgh/ResaSportif',
    demo: 'https://ikraamgh.github.io/ResaSportif/#',
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
