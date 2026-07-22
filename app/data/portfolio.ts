import type {PortfolioData} from "@/types/portfolio.types";

export const portfolio: PortfolioData = {
  profile: {
    name: "Abolfazl Shahini",
    title: "Frontend Developer",
    location: "Golestan Province - Iran",
    summary:
      "Frontend Developer with 2+ years of experience building scalable web applications using Vue, Nuxt, React, Next and TypeScript. Experienced in developing dashboards, PWAs, real-time communication systems, and developer-focused SDKs. Strong background in WebRTC, WebSockets, performance optimization, and maintainable frontend architecture.",
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
          end: "June 2026",
          ongoing: false,
          description: [
            "Develop and maintain large-scale dashboards, Progressive Web Applications (PWAs), and business-critical web applications using Nuxt.js, Vue.js, TypeScript, Pinia, and Tailwind CSS.",

            "Architect scalable frontend applications with modular design principles and maintainable component-based architecture.",

            "Implement real-time functionality using WebSocket technologies and WebRTC-based communication systems for audio, video, and data transfer.",

            "Migrate legacy JavaScript codebases to TypeScript to improve maintainability and type safety.",

            "Build responsive, accessible, and high-performance user interfaces with strong focus on user experience and cross-device compatibility.",

            "Apply SSR, code splitting, lazy loading, and performance optimization techniques to improve application performance."
          ],
          icons: ["i-logos-vue", "i-logos-nuxt-icon", "i-logos-javascript", "i-logos-typescript-icon", "i-simple-icons:rekaui", "i-logos-tailwindcss-icon"],
          link: "https://moderndata.ir/",
          linkLabel: "modern data"
        }
      ]
    }
  ],

  education: [],

  projects: [
    {
      name: "Modochats",
      description:
        "Build Agents for your business !. A platform that everyone can build their own agent with their custom knowledge source and using it in various ways like customer support - sales management - social media management - text chat/voice chat .i was responsible for landing, dashboard, dev SDKs such as chat-client, voice-client and widget.",
      thumbnail: "/img/projects/modochats-logo.svg",
      status: "Active",
      opensource: false,
      links: [
        {label: "Website", to: "https://modochats.com/", icon: "i-mdi-link"},
        {label: "github", to: "https://github.com/modochats", icon: "i-mdi-github"}
      ],
      icons: ["i-logos-nuxt-icon", "i-logos-vue", "i-logos-typescript-icon", "i-logos-node"],
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
      name: "Shenoma",
      thumbnail: "/img/projects/shenoma-logo.png",
      description:
        "A platform that deliver the Mineral products from the mine owner to the user directly. has the responsibility of landing and admin dashboard of this interesting platform",
      status: "Active",
      opensource: false,
      links: [
        {
          label: "Landing",
          to: "https://shenoma.co",
          icon: "i-mdi-link"
        }
      ],
      icons: ["i-logos-vue", "i-logos-nuxt-icon", "i-logos-typescript-icon", "i-logos-tailwindcss-icon"],
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
        "i-devicon-supabase",
        "i-logos-railway",
        "i-logos-shadcn"
      ],
      status: "Active",
      opensource: true,
      category: "public"
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
