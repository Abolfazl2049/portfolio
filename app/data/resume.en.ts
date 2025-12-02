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
    label: 'Senior Frontend Developer | Vue.js • Nuxt.js • TypeScript',
    email: 'ali.arghyani@email.com',
    phone: '+98 912 322 0694',
    url: 'https://aliarghyani.com',
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
        url: 'https://aliarghyani.com',
        icon: 'i-mdi-web',
      },
    ],
    summary:
      'Results-driven Senior Frontend Developer with 5+ years building high-performance Vue.js/Nuxt applications for international clients, transitioning from 7 years leading telecom operations teams at Huawei. Spearheaded 40% performance improvement at NexaPortal through advanced optimization techniques (lazy loading, code splitting, state management). Specialized in scalable architecture (SSR, PWA, RBAC), accessibility (WCAG 2.1), and distributed team collaboration. Advanced English proficiency (Duolingo 85/100); 7+ years multinational stakeholder engagement.',
  },

  work: [
    {
      company: 'NexaPortal',
      position: 'Senior Frontend Developer (Remote)',
      location: 'Izmir, Turkey',
      startDate: '2024-12',
      highlights: [
        'Architected medical tourism platform (Elara Medical) serving international patients across 50+ countries, achieving 92+ Lighthouse performance score and supporting 10,000+ concurrent users with real-time scheduling via WebSocket',
        'Improved application performance by 40% through advanced optimization: code splitting, lazy loading, Pinia state management restructuring, and efficient WebSocket implementation for live notifications',
        'Engineered RBAC (Role-Based Access Control) system with multi-tenant architecture supporting 3 languages (English, Persian, Turkish) and PWA capabilities for offline functionality across mobile and desktop devices',
        'Implemented comprehensive E2E testing suite using Cypress, establishing quality gates with ESLint strict mode; reduced post-launch bugs by 65% through CI/CD automation with GitHub Actions',
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
        'Delivered 6+ production-grade web applications for international clients, achieving 90+ Lighthouse performance scores and 99%+ uptime across all projects',
        'Elara Medical (elara-medical.com) - Medical tourism platform with real-time booking, patient management, and multi-language support. Engineered RBAC system, i18n for 3 languages, and PWA features. Improved performance by 40% through optimization; achieved 92+ Lighthouse score',
        'Ideh (ideh.app) - Idea evaluation & market insights platform. Architected reusable component library used across multiple client projects, reducing development time by 30%. Implemented scalable Vue 3 architecture with dynamic form generation',
        'Insho (insho.app) - Advertising marketplace connecting agencies and creators. Designed responsive UI for matching engine connecting 500+ creators with brands. Implemented real-time notification system using WebSocket. Result: 99%+ uptime; 4.9/5 user satisfaction rating',
        'BaMashin (bamashin.net) - Mobility rental platform (cars, boats, helicopters, vans, bikes). Built comprehensive rental booking system with payment integration and responsive UI across 8+ device categories. Created accessible interface following WCAG 2.1 standards. Result: Launched in 3 markets; 5,000+ active users',
        'Additional Projects: 2 custom B2B SaaS applications with real-time collaboration, analytics dashboards, and API integrations. Maintained 100% on-time delivery; average project NPS score 8.5/10',
        'Led client communications, translated business requirements into technical specifications, delivered iteratively using Git workflows with clear documentation and transparent progress updates',
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
      position: 'Senior Performance Engineer',
      location: 'Tehran, Iran',
      startDate: '2018-07',
      endDate: '2022-04',
      highlights: [
        'Drove network KPI analysis across 2G/3G/LTE; identified trends and improvement opportunities through data-driven insights',
        'Contributed to audits, process improvement initiatives, and performance dashboards; supported incident resolution workflows',
      ],
    },
    {
      company: 'Huawei Technologies',
      position: 'Regional Manager Assistant',
      location: 'Tehran, Iran',
      startDate: '2018-03',
      endDate: '2018-07',
      highlights: [
        'Maintained ~3,000 BTS sites in Tehran Province (2G/3G/4G); achieved delivery/acceptance targets and cost savings',
        'Managed subcontractors and planning interface; translated technical designs into executable plans',
      ],
    },
    {
      company: 'Huawei Technologies',
      position: 'TCHA Team Lead',
      location: 'Tehran, Iran',
      startDate: '2017-06',
      endDate: '2018-03',
      highlights: [
        'Built comprehensive availability dashboards; primary owner of stakeholder alignment under strict contractual requirements',
        'Analyzed KPIs and traffic/control channels; performed remote actions and tracked escalations to final resolution',
        'Awarded Top Graduate at Huawei Annual Gathering for outstanding performance',
      ],
    },
    {
      company: 'Huawei Technologies',
      position: 'Back Office Staff',
      location: 'Tehran, Iran',
      startDate: '2016-06',
      endDate: '2017-06',
      highlights: [
        'Supported OSS operations, performance checks, and reporting; contributed to team efficiency and customer satisfaction',
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
        'Vue.js',
        'Vue 3',
        'Nuxt.js',
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
      name: 'Elara Medical',
      description:
        'Medical tourism platform serving 50+ countries with real-time booking, multi-language support, and PWA capabilities',
      highlights: [
        '92+ Lighthouse performance score',
        '40% performance improvement',
        '10,000+ concurrent users',
      ],
      keywords: [
        'Vue 3',
        'Nuxt 3',
        'TypeScript',
        'PWA',
        'RBAC',
        'i18n',
        'WebSocket',
      ],
      startDate: '2024-12',
      url: 'https://app.elaramedical.com',
      roles: ['Frontend Developer'],
      type: 'application',
    },
    {
      name: 'Ideh',
      description:
        'Idea evaluation & market insights platform with scalable architecture and reusable component library',
      highlights: [
        'Component library reduced development time by 30%',
        'Scalable Vue 3 architecture',
      ],
      keywords: ['Vue 3', 'Nuxt 3', 'Component Library'],
      startDate: '2023-09',
      endDate: '2024-12',
      url: 'https://ideh.app',
      roles: ['Frontend Developer'],
      type: 'application',
    },
    {
      name: 'BaMashin',
      description:
        'Mobility rental platform (cars, boats, helicopters) with comprehensive booking system and accessible UI',
      highlights: [
        'Launched in 3 markets',
        '5,000+ active users',
        '99%+ uptime',
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
