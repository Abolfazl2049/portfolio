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
      "Programmer .a Frontend Developer with more than two years experience primarily with Nuxt/Vue Framework in creating/maintaining Small to Large Scale Project .interested in Open Source Activities .still eager to learn and experience more languages, frameworks, tools and Deepening My Expertise.Note: visit my website to check out projects ."
  },

  work: [
    {
      company: "Modern Data",
      position: "Frontend Developer (On-site)",
      location: "Gorgan, Golestan - Iran",
      startDate: "2024-02",
      highlights: [
        "Building and maintaining **large-scale dashboards, PWAs, and Websites** with high performance standards",
        "Architected applications using **Nuxt.js/Vue.js**, **TypeScript** for consistency, **Pinia** for state management, Tailwind for Styling and using modern UI libraries Such as Reka-UI, Nuxt-UI, Maz UI and many other tools for a better codebase",
        "Delivered responsive, accessible interfaces with focus on **User Experience**",
        "Implemented Apps the way it would live up to the customer standards"
      ]
    },
    {
      company: "Modochats",
      position: "Open Source Maintainer/Contributor (Part-time)",
      location: "Gorgan, Golestan - Iran",
      startDate: "2025-04",
      highlights: [
        "Building and maintaining **open source repositories** with focus on developer experience and code quality standards",
        "Implemented **user-friendly and modern widgets** for AI customer support integration; designed with **TypeScript-first** approach for reliability and maintainability",
        "Managed **complex build processes** using **concurrently, rollup, node, and tsx** for multi-package monorepo structure",
        "Published **npm packages** (chat client SDK, voice client SDK, web component widget) enabling developers to integrate AI-powered communication with minimal effort",
        "Developed **DX-focused packages** with comprehensive TypeScript support, documentation, and examples for seamless developer onboarding"
      ]
    }
  ],

  education: [
    {
      institution: "University of Khaneh Kargar (Gorgan)",
      area: "Computer Science",
      studyType: "Bachelor of Science",
      startDate: "2026-09",
      courses: ["Software Architecture", "Systems Design", "Web Development", "Database Management"]
    }
  ],

  skills: [
    {
      name: "Frontend Core",
      keywords: ["Vue.js", "Nuxt.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Pinia", "React (Entry)", "Next.js (Entry)"]
    },
    {
      name: "Realtime Focused Skills",
      keywords: ["WebRTC (Video/Audio/Data)", "WebSocket", "Socket.io", "Web Audio API"]
    },
    {
      name: "High Standards",
      keywords: [
        "Component/Page/Service Architecture (module-based)",
        "SSR (Server-Side Rendering)",
        "Code Splitting & Lazy Loading",
        "Performance Optimization"
      ]
    },
    {
      name: "Development Tools & Build",
      keywords: ["Git/GitHub", "npm/yarn", "Vite", "Rollup", "Node.js", "Concurrently", "tsx"]
    },
    {
      name: "Quality & Accessibility",
      keywords: ["JS Doc", "ESLint"]
    },
    {
      name: "Backend (Supporting Knowledge)",
      keywords: ["Express.js", "REST APIs", "Sequelize ORM", "Database Design", "Node.js"]
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
