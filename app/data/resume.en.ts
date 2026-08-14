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
      "Frontend Developer with 2+ years of experience building scalable web applications using Vue, Nuxt, React, Next and TypeScript. Experienced in developing dashboards, PWAs, real-time communication systems, and developer-focused SDKs. Strong background in WebRTC, WebSockets, performance optimization, and maintainable frontend architecture."
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
  ],

  projects: [
    {
      name: "Modochats",
      description:
        "Build Agents for your business !. A platform that everyone can build their own agent with their custom knowledge source and using it in various ways like customer support - sales management - social media management - text chat/voice chat .i was responsible for landing, dashboard, dev SDKs such as chat-client, voice-client and widget.",
      links: [
        {label: "Website", url: "https://modochats.com/", hint: "modochats.com"},
        {label: "GitHub", url: "https://github.com/modochats", hint: "github.com/modochats"}
      ]
    },
    {
      name: "Godfather Meet",
      description:
        "A full-featured online Mafia game platform with room creation, scenario selection, voice/video communication, role-based chats, game master controls, rewards system, and competitive ranking.",
      links: [
        {label: "Web Application", url: "https://meet.godfathergame.ir", hint: "meet.godfathergame.ir"},
        {label: "Telegram Bot", url: "https://t.me/god_father_game_bot", hint: "t.me/god_father_game_bot"}
      ]
    },
    {
      name: "Shenoma",
      description:
        "A platform that deliver the Mineral products from the mine owner to the user directly. has the responsibility of landing and admin dashboard of this interesting platform",
      links: [{label: "Landing", url: "https://shenoma.co", hint: "shenoma.co"}]
    }
  ],

  education: [],

  skills: [
    {
      name: "Core Frontend Skills",
      keywords: ["Vue.js", "Nuxt.js", "React", "Next.js", "TypeScript", "JavaScript"]
    },
    {
      name: "Preferred Project Architecture",
      keywords: ["Modular Service Structure", "Component-Based Architecture", "Code Splitting", "Abstraction & Simplification"]
    },
    {
      name: "Libraries I Commonly Use",
      keywords: ["Pinia", "Zustand", "Reka UI", "Shadcn", "Radix UI", "Lodash", "Vueuse", "SwiperJs", "Tailwind", "MomentJs", "Nuxt i18n"]
    },
    {
      name: "Development, Build & Delivery Tools",
      keywords: ["Vite", "Rollup", "Terser", "tsx", "Node.js", "GitHub Actions"]
    },
    {
      name: "Realtime Systems",
      keywords: ["WebRTC (Video/Audio/Data)", "WebSocket", "Socket.io", "Web Audio API"]
    },
    {
      name: "Backend Skills from Personal Projects",
      keywords: ["Express.js", "Sequelize ORM", "Database Design", "Node.js"]
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
