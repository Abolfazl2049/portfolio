import type {PortfolioData} from "@/types/portfolio.types";

export const portfolio: PortfolioData = {
  profile: {
    name: "Abolfazl Shahini",
    title: "Frontend Developer",
    location: "Golestan Province - Iran",
    summary:
      "Programmer .a Frontend Developer with more than two years experience primarily with Nuxt/Vue Framework in creating/maintaining Small to Large Scale Project .interested in Open Source Activities .still eager to learn and experience more languages, frameworks, tools and Deepening My Expertise.",
    avatar: "/img/my-profile.jpg",
    socials: {
      website: "https://abolfazlshahini.vercel.app",
      github: "https://github.com/Abolfazl2049",
      linkedin: "https://www.linkedin.com/in/abolfazl-shahini/",
      telegram: "https://t.me/abolfazl2049",
      devTo: "https://dev.to/abolfazl2049"
    }
  },

  experiences: [
    {
      company: "Modern Data",
      link: "https://moderndata.ir/",
      logo: "/img/modern-data-logo.png",
      location: "Golestan, Gorgan - On site",
      type: "Full-time",
      positions: [
        {
          title: "Frontend Developer",
          start: "February 2024",
          ongoing: true,
          description: [
            "building and maintaining large scale dashboards, pwa(s), websites",
            "migrating from javascript to typescript",
            "implementing projects with Nuxt, Tailwind, Restful api, Websocket - for realtime functionality, WebRTC for Video/audio/data transfer , pinia for state management"
          ],
          icons: ["i-logos-vue", "i-logos-nuxt-icon", "i-logos-javascript", "i-logos-typescript-icon", "i-simple-icons:rekaui", "i-logos-tailwindcss-icon"],
          link: "https://moderndata.ir/",
          linkLabel: "modern data"
        }
      ]
    },
    {
      company: "Modochats",
      link: "https://modochats.com",
      logo: "/img/projects/modochats-logo.svg",
      location: "Golestan, Gorgan - hybrid",
      type: "Part-time",
      positions: [
        {
          title: "Open Source Maintainer/Contributor",
          start: "April 2025",
          ongoing: true,
          description: [
            "Building and maintaining open source repo's",
            "Implementing User-friendly and modern widgets",
            "Working with cdns (js deliver) and npm package management",
            "Implementing complex build processes using concurrently, rollup, node and tsx",
            "Developing DX focused packages with typescript"
          ],
          icons: ["i-logos-vue", "i-logos-nuxt-icon", "i-logos-typescript-icon", "i-devicon-nodejs"],
          link: "https://modochats.com/",
          linkLabel: "modo chats"
        }
      ]
    }
  ],

  education: [
    {
      school: "University of Khaneh Kargar (Gorgan)",
      degree: "Computer science",
      start: "2026",
      end: "ongoing",
      icons: ["i-material-symbols-school"]
    }
  ],

  projects: [
    {
      name: "Ephem Chat",
      description: "WebRTC Based Ephemeral Anonymous Chat with realtime matching and communication  ",
      links: [
        {label: "GitHub Frontend", to: "https://github.com/Abolfazl2049/ephem-chat-fronted", icon: "i-mdi-github"},
        {label: "GitHub Backend", to: "https://github.com/Abolfazl2049/ephem-chat-backend", icon: "i-mdi-github"},
        {
          label: "dev.to Post",
          to: "https://dev.to/abolfazl2049/building-an-ephemeral-anonymous-chat-app-with-nextjs-webrtc-and-socketio-5f78",
          icon: "i-mdi-linkedin"
        },
        {label: "Website", to: "https://my-ephem-chat.vercel.app"}
      ],
      icons: [
        "i-logos-react",
        "i-devicon:nextjs",
        "i-logos-typescript-icon",
        "i-skill-icons:expressjs-light",
        "i-logos-sequelize",
        "i-logos:webrtc",
        "i-devicon-socketio",
        "i-logos-supabase",
        "i-logos-railway",
        "i-logos-shadcn"
      ],
      status: "Active",
      opensource: true,
      category: "public"
    },

    {
      name: "Modochats",
      description:
        "Build Agents for your career !.A platform that everyone can build their own agent with their custom knowledge source and using it in various ways like customer support - sales management - social media management - text chat/voice chat .contributed in landing, dashboard, widget, chat and voice packages.",
      thumbnail: "/img/projects/modochats-logo.svg",
      status: "Active",
      opensource: false,
      links: [
        {label: "Website", to: "https://modochats.com/", icon: "i-mdi-link"},
        {label: "github", to: "https://github.com/modochat", icon: "i-mdi-github"}
      ],
      icons: ["i-logos-nuxt-icon", "i-logos-vue", "i-logos-typescript-icon", "i-logos-node"],
      category: "freelance"
    },
    {
      name: "Modo Widget",
      description: "Ai Customer Support Chat Widget. customizable, responsive, Dx focused .supports text chat and Voice chat - realtime",
      thumbnail: "/img/projects/modochats-logo.svg",
      status: "Active",
      opensource: true,
      links: [
        {label: "Github", to: "https://github.com/mnodochats/webcomponent", icon: "i-mdi-github"},
        {label: "NPM", to: "https://npmjs.com/modochats/webcomponent", icon: "i-mdi-npm"}
      ],
      icons: ["i-logos-typescript-icon", "i-devicon-nodejs"],
      category: "freelance"
    },
    {
      name: "Modo Chat & Voice Clients",
      description:
        "Client SDKs for the Modo platform: a Chat client and a Voice client. Both are written in TypeScript with a focus on developer experience and are published on npm and open-sourced on GitHub. The Voice client supports realtime voice chat (socket-based) and includes custom Web Audio processing for audio parsing.",
      thumbnail: "/img/projects/modochats-logo.svg",
      status: "Active",
      opensource: true,
      links: [
        {label: "Chat Github", to: "https://github.com/mnodochats/chat_client", icon: "i-mdi-github"},
        {label: "Chat NPM", to: "https://npmjs.com/modochats/chat-client", icon: "i-mdi-npm"},
        {label: "Voice Github", to: "https://github.com/mnodochats/voice_client", icon: "i-mdi-github"},
        {label: "Voice NPM", to: "https://npmjs.com/modochats/voice-client", icon: "i-mdi-npm"}
      ],
      icons: ["i-logos-typescript-icon", "i-logos-node"],
      category: "freelance"
    },
    {
      name: "Godfather Meet",
      thumbnail: "/img/projects/godfather-meet-logo.png",
      description:
        "A full-featured online Mafia game platform with room creation, scenario selection, voice/video communication, role-based chats, game master controls, rewards system, and competitive ranking.",
      status: "Active",
      opensource: false,
      links: [
        {
          label: "Web Application",
          to: "https://meet.godfathergame.ir",
          icon: "i-mdi-link"
        },
        {
          label: "Telegram Bot",
          to: "https://t.me/god_father_game_bot",
          icon: "i-mdi-telegram"
        }
      ],
      icons: ["i-logos-vue", "i-logos-nuxt-icon", "i-logos-typescript-icon", "i-logos-webrtc", "i-hugeicons-plug-socket", "i-logos-tailwindcss-icon"],
      category: "freelance"
    },
    {
      name: "AR Studio",
      description:
        "Register dynamic AR target and put elements around them like text/audio/video/image. and scan the target to apply the AR. implemented using Aframe and Mind-ar. cause it was for a private organization, cant provide links",
      status: "Active",
      opensource: true,
      links: [],
      icons: ["i-logos-nuxt-icon", "i-logos-vue", "i-logos-tailwindcss-icon", "i-logos-mindar"],
      category: "freelance"
    },
    {
      name: "Esghat Dashboard",
      description: "Scrapping and Recycling management platform for Golestan province. since it is an admin dashboard, cant provide links",
      thumbnail: "/img/projects/esghat-logo.png",
      status: "Active",
      opensource: false,
      icons: ["i-logos-nuxt-icon", "i-logos-vue", "i-logos-pinia"],
      category: "freelance"
    },
    {
      name: "Yoozro Dashboard",
      description: "easy-to-use city to city traveling-service platform for Golestan province. since it is an admin dashboard, cant provide links",
      thumbnail: "/img/projects/yoozro-logo.png",
      status: "Active",
      opensource: false,
      icons: ["i-logos-nuxt-icon", "i-logos-vue", "i-logos-javascript", "i-logos-flowbite", "i-file-icons:leaflet"],
      category: "freelance"
    },
    {
      name: "Multi Connection WebRTC Starter",
      description:
        "Minimal multi-peer WebRTC starter with Nuxt 3 frontend and Express + Socket.IO backend. Demonstrates room-based signaling, peer connection management, STUN/TURN support, and a media-grid demo for multiple audio/video participants.",
      status: "Active",
      opensource: true,
      links: [
        {label: "GitHub", to: "https://github.com/Abolfazl2049/multi-connection-webrtc-starter", icon: "i-mdi-github"},
        {label: "Demo", to: "https://multi-connection-webrtc-starter.vercel.app/", icon: "i-mdi-link"}
      ],
      icons: [
        "i-logos-nuxt-icon",
        "i-logos-vue",
        "i-logos-typescript-icon",
        "i-logos-node",
        "i-skill-icons:expressjs-light",
        "i-devicon-socketio",
        "i-logos-webrtc"
      ],
      category: "public"
    }
  ]
};

export default portfolio;
