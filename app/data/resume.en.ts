/**
 * Resume Data - Abolfazl Shahini
 * Based on RESUME-STANDARDS.md (docs/RESUME-STANDARDS.md)
 * Optimized for ATS and 2025 best practices
 * Version: 2.0 - 2-Page Resume (International Remote Positions)
 *
 * ⚠️ BEFORE EDITING: Give docs/RESUME-UPDATE-RULES.md to any AI agent
 *
 * Quick command for AI:
 * "Read docs/RESUME-UPDATE-RULES.md and update my resume"
 */

import type {Resume} from "~/types/resume";

export const resumeData: Resume = {
  basics: {
    name: "Abolfazl Shahini",
    label: "Frontend Developer | Vue.js • Nuxt.js • TypeScript",
    image: "/img/my-profile.jpg",
    email: "abolfazlshahini37@gmail.com",
    phone: "+98 938 578 0203",
    url: "https://abolfazlshahini.vercel.app",
    location: {
      city: "Gorgan",
      country: "Iran"
    },
    profiles: [
      {
        network: "LinkedIn",
        url: "https://www.linkedin.com/in/abolfazl-shahini/",
        icon: "i-mdi-linkedin"
      },
      {
        network: "GitHub",
        url: "https://github.com/Abolfazl2049",
        icon: "i-mdi-github"
      },
      {
        network: "Portfolio",
        url: "https://abolfazlshahini.vercel.app",
        icon: "i-mdi-web"
      }
    ],
    summary:
      "Frontend Developer with 2+ years of experience building scalable web applications using Vue.js, Nuxt.js, and TypeScript. Experienced in developing high-performance dashboards, PWAs, and real-time communication applications. Strong focus on maintainable architecture, developer experience, accessibility, and performance optimization. Active open-source maintainer with experience publishing npm packages and building developer-focused tools."
  },

  work: [
    {
      company: "Modern Data",
      position: "Frontend Developer (On-site)",
      location: "Gorgan, Golestan - Iran",
      startDate: "2024-02",
      endDate: "2026-06",
      highlights: [
        "Develop and maintain large-scale dashboards, Progressive Web Applications (PWAs), and business-critical web applications using Nuxt.js, Vue.js, and TypeScript.",

        "Architect scalable frontend applications with modular design principles, leveraging Pinia for state management and Tailwind CSS for maintainable styling.",

        "Integrate modern UI frameworks and component libraries including Reka UI, Nuxt UI, and Maz UI to accelerate development and improve consistency.",

        "Build responsive, accessible, and high-performance user interfaces with strong focus on user experience and cross-device compatibility.",

        "Implement modern frontend best practices including SSR, code splitting, lazy loading, and performance optimization."
      ]
    },
    {
      company: "Modochats",
      position: "Open Source Maintainer & Contributor (Part-time)",
      location: "Remote",
      startDate: "2025-04",
      highlights: [
        "Maintain and contribute to open-source repositories with focus on developer experience, maintainability, and code quality.",

        "Design and implement modern AI-powered customer support widgets using TypeScript-first development practices.",

        "Manage complex build pipelines and monorepo workflows using Rollup, Node.js, tsx, and Concurrently.",

        "Publish npm packages including Chat Client SDK, Voice Client SDK, and Web Component Widgets to simplify AI communication integrations.",

        "Develop developer-focused tooling with comprehensive TypeScript support, documentation, examples, and streamlined onboarding experience."
      ]
    }
  ],

  education: [
    {
      institution: "University of Khaneh Kargar (Gorgan)",
      area: "Computer Science",
      studyType: "Bachelor of Science",
      startDate: "2025-09",
      courses: ["Software Architecture", "Systems Design", "Web Development", "Database Management"]
    }
  ],

  skills: [
    {
      name: "Frontend",
      keywords: ["Vue.js", "Nuxt.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Pinia"]
    },
    {
      name: "Realtime Communication",
      keywords: ["WebRTC", "WebSocket", "Socket.io", "Web Audio API"]
    },
    {
      name: "Architecture & Performance",
      keywords: ["SSR", "Component Architecture", "Code Splitting", "Lazy Loading", "Performance Optimization", "Scalable Frontend Design"]
    },
    {
      name: "Backend & APIs (Entry-Level)",
      keywords: ["Node.js", "Express.js", "REST APIs", "Sequelize ORM", "Database Design"]
    },
    {
      name: "Development Tools",
      keywords: ["Git", "GitHub", "Vite", "Rollup", "npm", "Yarn", "Concurrently", "tsx"]
    },
    {
      name: "Code Quality",
      keywords: ["ESLint", "JSDoc", "Type Safety", "Maintainable Code"]
    },
    {
      name: "AI & Developer Productivity",
      keywords: ["Claude", "Cursor", "OpenCode", "Hermes", "Hugging Face", "Prompt Engineering", "AI-Assisted Development", "Developer Tooling"]
    }
  ],

  languages: [
    {
      language: "Persian",
      fluency: "Native"
    },
    {
      language: "English",
      fluency: "Fluent"
    }
  ],

  certificates: [
    {
      name: "Advanced English Proficiency",
      date: "2025",
      issuer: "Duolingo English Test",
      url: "",
      summary: "Score: 130/130 (Advanced Level)"
    }
  ]
};
