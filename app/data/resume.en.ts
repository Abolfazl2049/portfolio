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
        icon: "i-mdi-linkedin",
        hint: "/in/abolfazl-shahini/"
      },
      {
        network: "GitHub",
        url: "https://github.com/Abolfazl2049",
        icon: "i-mdi-github",
        hint: "/Abolfazl2049"
      },
      {
        network: "Portfolio",
        url: "https://abolfazlshahini.vercel.app",
        icon: "i-mdi-web",
        hint: "abolfazlshahini.vercel.app"
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
    }
    // {
    //   company: "Modochats",
    //   position: "Open Source Maintainer & Contributor (Part-time)",
    //   location: "Remote",
    //   startDate: "2025-04",
    //   endDate: "2026-03",
    //   highlights: [
    //     "Maintain and contribute to open-source repositories with focus on developer experience, maintainability, and code quality.",

    //     "Design and implement modern AI-powered customer support widgets using TypeScript-first development practices.",

    //     "Manage complex build pipelines and monorepo workflows using Rollup, Node.js, tsx, and Concurrently.",

    //     "Publish npm packages including Chat Client SDK, Voice Client SDK, and Web Component Widgets to simplify AI communication integrations.",

    //     "Develop developer-focused tooling with comprehensive TypeScript support, documentation, examples, and streamlined onboarding experience."
    //   ]
    // }
  ],

  projects: [
    {
      name: "Ephem Chat",
      description: "WebRTC Based Ephemeral Anonymous Chat with realtime matching and communication  ",
      links: [
        {label: "GitHub Frontend", url: "https://github.com/Abolfazl2049/ephem-chat-fronted", hint: "github.com/Abolfazl2049/ephem-chat-fronted"},
        {label: "GitHub Backend", url: "https://github.com/Abolfazl2049/ephem-chat-backend", hint: "github.com/Abolfazl2049/ephem-chat-backend"},
        {label: "dev.to Post", url: "https://dev.to/abolfazl2049/building-an-ephemeral-anonymous-chat-app-with-nextjs-webrtc-and-socketio-5f78", hint: "dev.to/abolfazl2049/..."},
        {label: "Website", url: "https://my-ephem-chat.vercel.app", hint: "my-ephem-chat.vercel.app"}
      ]
    },
    {
      name: "Modochats",
      description:
        "Build Agents for your career !.A platform that everyone can build their own agent with their custom knowledge source and using it in various ways like customer support - sales management - social media management - text chat/voice chat .contributed in landing, dashboard, widget, chat and voice packages.",
      links: [
        {label: "Website", url: "https://modochats.com/", hint: "modochats.com"},
        {label: "GitHub", url: "https://github.com/modochat", hint: "github.com/modochat"}
      ]
    },
    // {
    //   name: "Modo Widget",
    //   description: "Ai Customer Support Chat Widget. customizable, responsive, Dx focused .supports text chat and Voice chat - realtime",
    //   links: [
    //     {label: "GitHub", url: "https://github.com/mnodochats/webcomponent"},
    //     {label: "NPM", url: "https://npmjs.com/modochats/webcomponent"}
    //   ]
    // },
    // {
    //   name: "Modo Chat & Voice Clients",
    //   description:
    //     "Client SDKs for the Modo platform: a Chat client and a Voice client. Both are written in TypeScript with a focus on developer experience and are published on npm and open-sourced on GitHub. The Voice client supports realtime voice chat (socket-based) and includes custom Web Audio processing for audio parsing.",
    //   links: [
    //     {label: "Chat GitHub", url: "https://github.com/mnodochats/chat_client"},
    //     {label: "Chat NPM", url: "https://npmjs.com/modochats/chat-client"},
    //     {label: "Voice GitHub", url: "https://github.com/mnodochats/voice_client"},
    //     {label: "Voice NPM", url: "https://npmjs.com/modochats/voice-client"}
    //   ]
    // },
    {
      name: "Godfather Meet",
      description:
        "A full-featured online Mafia game platform with room creation, scenario selection, voice/video communication, role-based chats, game master controls, rewards system, and competitive ranking.",
      links: [
        {label: "Web Application", url: "https://meet.godfathergame.ir", hint: "meet.godfathergame.ir"},
        {label: "Telegram Bot", url: "https://t.me/god_father_game_bot", hint: "t.me/god_father_game_bot"}
      ]
    },
    // {
    //   name: "AR Studio",
    //   description:
    //     "Register dynamic AR target and put elements around them like text/audio/video/image. and scan the target to apply the AR. implemented using Aframe and Mind-ar. cause it was for a private organization, cant provide links"
    // },
    // {
    //   name: "Esghat Dashboard",
    //   description: "Scrapping and Recycling management platform for Golestan province. since it is an admin dashboard, cant provide links"
    // },
    // {
    //   name: "Yoozro Dashboard",
    //   description: "easy-to-use city to city traveling-service platform for Golestan province. since it is an admin dashboard, cant provide links"
    // },
    {
      name: "Multi Connection WebRTC Starter",
      description:
        "Minimal multi-peer WebRTC starter with Nuxt 3 frontend and Express + Socket.IO backend. Demonstrates room-based signaling, peer connection management, STUN/TURN support, and a media-grid demo for multiple audio/video participants.",
      links: [
        {label: "GitHub", url: "https://github.com/Abolfazl2049/multi-connection-webrtc-starter", hint: "github.com/Abolfazl2049/multi-connection-webrtc-starter"},
        {label: "Demo", url: "https://multi-connection-webrtc-starter.vercel.app/", hint: "multi-connection-webrtc-starter.vercel.app"}
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
      name: "Backend & APIs",
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
      fluency: "B1"
    }
  ],

  certificates: [
    {
      name: "Advanced English Proficiency",
      date: "2025",
      issuer: "Duolingo English Test",
      url: "",
      summary: "Score: 130/130 (Advanced Level)"
    },
    {
      name: "JavaScript (Intermediate)",
      date: "2025",
      issuer: "HackerRank",
      url: "https://www.hackerrank.com/certificates/a07d032700d1",
      summary: ""
    }
  ]
};
