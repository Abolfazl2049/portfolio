/**
 * Resume Data - Ali Arghyani
 * Based on Resume Content Tech-Spec (docs/resume-content-tech-spec.md)
 * Optimized for ATS and 2025 best practices
 * Version: 2.0 - 2-Page Resume (International Remote Positions)
 */

import type { Resume } from '~/types/resume'

export const resumeData: Resume = {
  basics: {
    name: 'Ali Arghyani',
    label: 'Frontend Developer | Vue.js • Nuxt.js • TypeScript',
    email: 'aliarghyani@gmail.com',
    phone: '+98 912 322 0694',
    url: 'https://aliarghyani.vercel.app',
    location: {
      city: 'Tehran',
      country: 'Iran',
    },
    profiles: [
      {
        network: 'LinkedIn',
        url: 'https://linkedin.com/in/aliarghyani',
        icon: 'i-mdi-linkedin',
      },
      {
        network: 'GitHub',
        url: 'https://github.com/aliarghyani',
        icon: 'i-mdi-github',
      },
      {
        network: 'Portfolio',
        url: 'https://aliarghyani.vercel.app',
        icon: 'i-mdi-web',
      },
    ],
    summary:
      'Frontend Developer with 3+ years building high-performance Vue.js/Nuxt applications for international clients, with background in operations leadership at Huawei. Specialized in performance optimization, scalable architecture (SSR, PWA, RBAC), and accessibility (WCAG 2.1). Delivered 6+ production applications with focus on code quality, maintainability, and distributed team collaboration. Advanced English proficiency (Duolingo 85/100).',
  },

  work: [
    {
      company: 'NexaPortal',
      position: 'Frontend Developer (Remote)',
      location: 'Izmir, Turkey',
      startDate: '2024-12',
      highlights: [
        'Architected medical tourism platform (Elara Medical) serving international patients across 10+ languages with real-time scheduling via WebSocket, multi-language support (3 languages), and PWA capabilities for offline access',
        'Optimized application performance through code splitting, lazy loading, and Pinia state management restructuring, significantly reducing bundle size and improving initial load time',
        'Engineered RBAC (Role-Based Access Control) system with role-based permissions, multi-tenant architecture supporting 3 languages (English, Persian, Turkish), and PWA features enabling offline functionality across mobile and desktop devices',
        'Implemented comprehensive E2E testing suite using Cypress, establishing quality gates with ESLint strict mode and CI/CD automation with GitHub Actions to ensure stable releases',
        'Led frontend architecture decisions for cross-functional team of 8; conducted code reviews and mentored 2 junior developers on accessibility standards (WCAG 2.1) and performance best practices',
      ],
    },
    {
      company: 'Freelance',
      position: 'Frontend Developer (Remote)',
      location: 'Tehran, Iran',
      startDate: '2023-09',
      endDate: '2024-12',
      highlights: [
        'Delivered 6+ production-grade web applications for international clients using Vue 3/Nuxt 3, consistently achieving strong performance metrics and high client satisfaction',
        'Elara Medical - Medical tourism platform with RBAC system, i18n for 3 languages, PWA features, and optimized performance through code splitting and lazy loading',
        'Ideh - Idea evaluation platform with reusable component library reducing development time by 30% and scalable Vue 3 architecture',
        'Insho - Advertising marketplace with responsive UI, matching engine for campaign collaboration, and comprehensive listing/proposal flows',
        'BaMashin - Mobility rental platform with payment integration, responsive UI optimized for mobile/desktop, and WCAG 2.1 compliant interface',
        'Additional Projects: 2 custom B2B SaaS applications with real-time collaboration, analytics dashboards, and third-party API integrations',
        'Led client communications, translated business requirements into technical specifications, delivered iteratively with clear documentation and transparent progress updates',
      ],
    },
    {
      company: 'Huawei Technologies',
      position: 'Senior Performance Team Lead',
      location: 'Tehran, Iran',
      startDate: '2022-04',
      endDate: '2023-08',
      highlights: [
        'Led team managing performance and availability for 14,500+ network sites nationwide, ensuring 99.5%+ uptime and rapid incident response across distributed infrastructure',
        'Established operational standards and best practices; mentored 5 team members improving team efficiency by 30% through process optimization and knowledge sharing',
        'Conducted comprehensive data analysis and KPI monitoring using advanced analytics; identified performance trends and improvement opportunities, reducing network downtime by 22% year-over-year',
        'Owned stakeholder communication interface; delivered weekly performance reports and monthly strategic updates to C-level executives, translating technical metrics into business impact',
        'Developed rigorous operations mindset: documentation discipline, quality gates, monitoring systems, incident response protocols—foundational skills applied to frontend development with strong architecture and quality focus',
      ],
    },
    {
      company: 'Huawei Technologies',
      position: 'Various Technical & Leadership Roles',
      location: 'Tehran, Iran',
      startDate: '2016-06',
      endDate: '2022-04',
      highlights: [
        'Progressed through multiple technical and leadership positions in telecom operations (details available upon request)',
      ],
    },
  ],

  education: [
    {
      institution: 'Qom University of Technology',
      area: 'Telecommunications Engineering',
      studyType: 'Bachelor of Science',
      startDate: '2010-09',
      endDate: '2015-06',
      courses: [
        'Software Architecture',
        'Systems Design',
        'Network Management',
        'Digital Signal Processing',
      ],
    },
  ],

  skills: [
    {
      name: 'Frontend Frameworks & Languages',
      keywords: [
        'Vue 3',
        'Nuxt 3',
        'TypeScript',
        'JavaScript (ES6+)',
        'HTML5',
        'CSS3',
      ],
    },
    {
      name: 'Architecture & Advanced',
      keywords: [
        'SSR (Server-Side Rendering)',
        'SSG (Static Site Generation)',
        'PWA (Progressive Web Apps)',
        'Component Libraries',
        'RBAC Systems',
        'i18n Internationalization',
        'WebSocket Real-Time Features',
      ],
    },
    {
      name: 'Styling & UI',
      keywords: [
        'Tailwind CSS',
        'Vuetify',
        'Responsive Design',
        'CSS Modules',
        'BEM Methodology',
      ],
    },
    {
      name: 'State Management & APIs',
      keywords: [
        'Pinia',
        'REST APIs',
        'Async/Await Patterns',
        'API Integration',
      ],
    },
    {
      name: 'Development Tools & Workflow',
      keywords: [
        'Vite',
        'Git/GitHub',
        'GitHub Actions',
        'ESLint',
        'Prettier',
        'Jira',
        'Agile/Scrum',
        'CI/CD Pipelines',
        'Code Review',
      ],
    },
    {
      name: 'Testing & Quality',
      keywords: [
        'Cypress E2E Testing',
        'ESLint Strict Mode',
        'Performance Optimization',
        'Accessibility (a11y/WCAG)',
        'Lighthouse Audits',
      ],
    },
    {
      name: 'Collaboration & Remote',
      keywords: [
        'Cross-Functional Leadership',
        'Mentorship',
        'Asynchronous Communication',
        'Distributed Team Collaboration',
        'Stakeholder Management',
      ],
    },
  ],

  languages: [
    {
      language: 'Persian',
      fluency: 'Native',
    },
    {
      language: 'English',
      fluency: 'Fluent (Duolingo 85/100)',
    },
  ],

  certificates: [
    {
      name: 'Advanced English Proficiency',
      date: '2025',
      issuer: 'Duolingo English Test',
      url: '',
      summary: 'Score: 85/100 (Advanced Level)',
    },
  ],

  projects: [
    {
      name: 'Ideh',
      description:
        'Idea evaluation & market insights platform with scalable architecture and reusable component library',
      highlights: [
        'Component library reduced development time by 30%',
        'Scalable Vue 3 architecture',
        'Dynamic form generation system',
      ],
      keywords: ['Vue 3', 'Nuxt 3', 'Component Library'],
      startDate: '2023-09',
      endDate: '2024-12',
      url: 'https://ideh.app',
      roles: ['Frontend Developer'],
      type: 'application',
    },
    {
      name: 'Insho',
      description:
        'Media & advertising marketplace connecting agencies and creators for campaign collaboration',
      highlights: [
        'Responsive UI optimized for creator-brand matching',
        'Comprehensive listing and proposal management system',
        'Modern Vue 3 architecture with clean, maintainable code',
      ],
      keywords: ['Vue 3', 'Nuxt 3', 'Responsive Design', 'Marketplace'],
      startDate: '2023-09',
      endDate: '2024-12',
      url: 'https://insho.app',
      roles: ['Frontend Developer'],
      type: 'application',
    },
    {
      name: 'BaMashin',
      description:
        'Mobility rental platform (cars, boats, helicopters) with comprehensive booking system and accessible UI',
      highlights: [
        'Multi-category rental system',
        'WCAG 2.1 compliant interface',
        'Payment integration',
      ],
      keywords: ['Vue 3', 'TypeScript', 'Responsive Design', 'Accessibility'],
      startDate: '2023-09',
      endDate: '2024-12',
      url: 'https://bamashin.net',
      roles: ['Frontend Developer'],
      type: 'application',
    },
  ],
}
