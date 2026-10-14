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
      city: "Tehran",
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
      "Frontend developer with 2+ years of professional experience building web applications, admin dashboards, and product websites. \n Experienced with Vue and Nuxt, React and Next, PWAs and WebView-compatible applications, and customizable SDKs and widgets. \n Also experienced in leading web development and collaborating closely with mobile and backend teams."
  },

  work: [
    {
      company: "Modern Data",
      position: "Frontend Developer",
      location: "On-site",
      startDate: "2024-02",
      endDate: "2026-06",
      highlights: [
        "This was my first experience working on a team, where I better understood the importance of soft skills.",
        "Implemented native-like web applications in coordination with the mobile team.",
        "Led frontend development for the web application, admin panel, and landing page, coordinating web work with the mobile team.",
        "Developed and adapted the web application for WebView, Windows, and TV.",
        "Implemented landing pages and websites with a focus on SEO in coordination with the SEO specialist.",
        "Implemented scalable admin panels for managing large information systems."
      ]
    },
    {
      company: "Modochats",
      position: "Frontend Developer",
      location: "Hybrid",
      startDate: "2025-05",
      endDate: "2026-04",
      highlights: [
        "Worked with different AI SDKs and APIs, including OpenAI, Google, and ElevenLabs.",
        "Implemented complex speech-to-text and text-to-speech workflows in collaboration with the backend team.",
        "Worked with JavaScript ecosystem packages such as Rollup, Terser, and others.",
        "Published developer-focused packages to npm and jsDelivr.",
        "Used various GitHub Actions.",
        "Worked with a professional versioning system and followed semantic versioning principles.",
        "Built a customizable widget compatible with different environments and frameworks.",
        "Contributed to bringing the startup idea to revenue."
      ]
    },
    {
      company: "Knik Ltd",
      position: "Frontend Developer",
      location: "Hybrid",
      startDate: "2025-03",
      endDate: "2026-01",
      highlights: [
        "Revived platforms through redesign and alignment with modern standards.",
        "Implemented modern, user-friendly interfaces to improve the platforms.",
        "Delivered refactors, rewrites, and new features in an agile manner.",
        "Modernized legacy projects and implemented faster, more user-friendly systems."
      ]
    }
  ],

  projects: [
    {
      name: "Modochats",
      description:
        "Create AI agents for your business! A platform where anyone can build an agent with a custom knowledge source and use it in various ways, such as customer support, sales management, social media management, and text/voice chat. \n My main responsibility on this project was the landing page, dashboard, and developer SDKs, including the chat client, voice client, \n and widget.",
      links: [
        {label: "Website", url: "https://modochats.com/", hint: "modochats.com"},
        {label: "GitHub", url: "https://github.com/modochats", hint: "github.com/modochats"}
      ]
    },
    {
      name: "Godfather Meet",
      description:
        "A complete online Mafia game platform with room creation, scenario selection, voice and video communication, role chats, \n game master controls, a rewards system, and competitive rankings.",
      links: [
        {label: "Web Application", url: "https://meet.godfathergame.ir", hint: "meet.godfathergame.ir"},
        {label: "Telegram Bot", url: "https://t.me/god_father_game_bot", hint: "t.me/god_father_game_bot"}
      ]
    },
    {
      name: "Hazarat",
      description:
        "On Hazarat, users spend in-app coins to enter platform-run lotteries and try to win prizes. Coins can be earned through \n missions/challenges or by watching ads, at no cost. I was responsible for the website and admin panel.",
      links: [{label: "Website", url: "https://hazarat.uk", hint: "hazarat.uk"}]
    },
    {
      name: "Knik",
      description:
        "With Knik, users can earn real income by playing in-app games and completing missions or challenges. The idea was inspired \n by NutCoin. My main responsibility on this project was the landing page and admin panel.",
      links: [{label: "Website", url: "https://knik.uk", hint: "knik.uk"}]
    },
    {
      name: "Cheshmak",
      description:
        "A global dating app with a large Persian-speaking user base of more than 500,000 users. It is the first and only free Persian \n dating app. Our team built the second version; my main responsibility was the PWA and admin panel.",
      links: [{label: "Website", url: "https://cheshmak.co.uk", hint: "cheshmak.co.uk"}]
    },
    {
      name: "Shenoma",
      description:
        "A platform for delivering mineral products directly from mine owners to users without intermediaries. My main responsibility \n on this project was the landing page and admin dashboard.",
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
