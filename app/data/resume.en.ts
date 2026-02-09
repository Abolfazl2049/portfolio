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
      "Passionate Frontend Developer with **2+ years** building high-performance Vue.js/Nuxt applications. Open source contributor/maintainer with strong expertise in **TypeScript**, **component architecture**, **DX optimization**, and **performance engineering**. Experienced in **WebRTC**, **real-time systems** (WebSocket), **PWA**, and **SSR**. Specialized in shipping quality code iteratively with clear communication. Currently developing scalable dashboards and real-time applications at Modern Data; maintaining open source packages at Modochats (AI chat/voice SDKs and web components)."
  },

  work: [
    {
      company: "Modern Data",
      position: "Frontend Developer (On-site)",
      location: "Gorgan, Golestan - Iran",
      startDate: "2024-02",
      highlights: [
        "Building and maintaining **large-scale dashboards, PWAs, and web applications** with high performance standards and real-time data updates",
        "Migrated legacy **JavaScript codebase to TypeScript**, improving type safety, developer experience, and code maintainability across projects",
        "Architected applications using **Nuxt.js, Tailwind CSS, REST APIs, WebSocket** for real-time functionality, **WebRTC** for video/audio/data transfer, and **Pinia** for state management",
        "Progressed from **entry-level to mid-level** developer through hands-on experience with modern frontend stack and **mentorship** in professional environment",
        "Delivered responsive, accessible interfaces with focus on **code quality** and **developer experience** across all components"
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
      keywords: ["Vue.js", "Nuxt.js", "React", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Pinia"]
    },
    {
      name: "Real-time & Advanced Features",
      keywords: ["WebRTC (Video/Audio/Data)", "WebSocket", "Socket.io", "Web Audio API", "Real-time Communication", "PWA"]
    },
    {
      name: "Architecture & Performance",
      keywords: [
        "Component Architecture",
        "SSR (Server-Side Rendering)",
        "Code Splitting & Lazy Loading",
        "Performance Optimization",
        "Monorepo Structure",
        "State Management (Pinia)"
      ]
    },
    {
      name: "Development Tools & Build",
      keywords: ["Git/GitHub", "npm/pnpm", "Vite", "Rollup", "Node.js", "Concurrently", "tsx", "ESLint/Prettier", "Web Components"]
    },
    {
      name: "Quality & Accessibility",
      keywords: ["TypeScript Strict Mode", "Responsive Design", "Web Standards", "Git Workflows", "Documentation"]
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
  ],

  projects: [
    {
      name: "Ephem Chat",
      description: "WebRTC-based ephemeral anonymous chat with real-time matching and communication",
      highlights: [
        "Implemented WebRTC peer-to-peer connection for direct video/audio/data transfer between anonymous users",
        "Built real-time matching system with Socket.io for ephemeral session management",
        "Developed both frontend (React/Next.js) and backend (Express.js with Sequelize) for production deployment"
      ],
      keywords: ["React", "Next.js", "TypeScript", "WebRTC", "Socket.io", "Express.js", "Supabase"],
      startDate: "2025-04",
      url: "https://my-ephem-chat.vercel.app",
      roles: ["Full Stack Developer"],
      type: "application"
    },
    {
      name: "Modochats Platform",
      description: "AI agent platform enabling businesses to build custom agents for customer support, sales, and content management",
      highlights: [
        "Contributed to landing page, dashboard, chat widget, and SDK packages",
        "Architected modular component system for multi-package monorepo with shared utilities",
        "Implemented customer support chat, voice channels, and business integration features"
      ],
      keywords: ["Vue.js", "Nuxt.js", "TypeScript", "Node.js", "AI Integration"],
      startDate: "2025-04",
      url: "https://modochats.com",
      roles: ["Frontend Developer", "Open Source Contributor"],
      type: "application"
    },
    {
      name: "Modo Widget - Customer Support",
      description: "Customizable, responsive AI customer support chat widget with text and voice capabilities",
      highlights: [
        "Built as web component for easy integration across different web technologies",
        "DX-focused implementation with comprehensive TypeScript support and minimal configuration",
        "Real-time messaging and voice chat powered by AI backend"
      ],
      keywords: ["TypeScript", "Web Components", "Node.js", "Real-time Communication"],
      startDate: "2025-04",
      url: "https://github.com/mnodochats/webcomponent",
      roles: ["Frontend Developer"],
      type: "library"
    },
    {
      name: "Modo Chat Client SDK",
      description: "TypeScript SDK for integrating Modochats messaging system into applications",
      highlights: [
        "Published on npm for easy dependency management",
        "Comprehensive TypeScript support with strict type safety",
        "Focused on developer experience with clear documentation and examples"
      ],
      keywords: ["TypeScript", "Node.js", "SDK", "npm"],
      startDate: "2025-04",
      url: "https://github.com/mnodochats/chat_client",
      roles: ["Library Developer"],
      type: "library"
    },
    {
      name: "Modo Voice Client SDK",
      description: "Real-time voice chat SDK with AI integration using TypeScript",
      highlights: [
        "Implemented custom Web Audio API processors for audio stream parsing",
        "Real-time voice communication via Socket.io with AI backend",
        "Comprehensive error handling for audio device management"
      ],
      keywords: ["TypeScript", "Web Audio API", "Socket.io", "Node.js"],
      startDate: "2025-04",
      url: "https://github.com/mnodochats/voice_client",
      roles: ["Library Developer"],
      type: "library"
    },
    {
      name: "AR Studio",
      description: "Dynamic AR target registration and element placement system (text/audio/video/image)",
      highlights: [
        "Built with Aframe and Mind-ar for AR capabilities",
        "Dynamic asset management and AR scanning functionality",
        "Support for multiple media types with responsive design"
      ],
      keywords: ["Vue.js", "Nuxt.js", "Tailwind CSS", "AR Technology"],
      startDate: "2024",
      roles: ["Frontend Developer"],
      type: "application"
    },
    {
      name: "Esghat Dashboard",
      description: "Scrapping and recycling management platform for Golestan Province",
      highlights: [
        "Built with Nuxt.js and Pinia for state management",
        "Scalable dashboard architecture for waste management operations",
        "Real-time data updates and reporting"
      ],
      keywords: ["Vue.js", "Nuxt.js", "Pinia", "Dashboard"],
      startDate: "2024",
      url: "https://esghat.ir",
      roles: ["Frontend Developer"],
      type: "application"
    },
    {
      name: "Yoozro Dashboard",
      description: "City-to-city travel service platform for Golestan Province with mapping integration",
      highlights: [
        "User-friendly interface for travel booking and management",
        "Leaflet integration for route mapping and location display",
        "Responsive design optimized for mobile and desktop"
      ],
      keywords: ["Vue.js", "Nuxt.js", "JavaScript", "Leaflet", "Flowbite"],
      startDate: "2024",
      url: "https://yoozro.ir",
      roles: ["Frontend Developer"],
      type: "application"
    }
  ]
};
