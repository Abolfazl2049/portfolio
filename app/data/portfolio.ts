import type {PortfolioData} from "@/types/portfolio.types";

export const portfolio: PortfolioData = {
  profile: {
    name: "Abolfazl Shahini",
    title: "Frontend Developer",
    location: "Golestan Province - Iran",
    summary:
      "Frontend developer with over two years of professional experience, primarily working with Nuxt/Vue and Next/React on projects of varying scale. I build and maintain dashboards, PWAs, and scalable websites, enjoy contributing to open-source, and am eager to learn new languages, frameworks and tools to deepen my expertise.",
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
      logo: "/img/projects/moderndata.png",
      location: "Golestan, Gorgan - On site",
      type: "Full-time",
      positions: [
        {
          title: "Frontend Developer",
          start: "February 2024",
          end: "June 2026",
          ongoing: false,
          description: [
            "Develop and maintain admin dashboards, PWAs and scalable websites.",

            "Migrate parts of projects from JavaScript to TypeScript to improve stability and code readability.",

            "Work with modern technologies such as Nuxt.js, Tailwind CSS, REST APIs and WebRTC.",

            "Focus on performance optimization, UX improvements and modular project structure."
          ],
          icons: ["i-logos-vue", "i-logos-nuxt-icon", "i-logos-javascript", "i-logos-typescript-icon", "i-simple-icons:rekaui", "i-logos-tailwindcss-icon"],
          link: "https://moderndata.ir/",
          linkLabel: "Modern Data"
        }
      ]
    }
  ],

  education: [],

  projects: [
    {
      name: "Ephem Chat",
      description: "WebRTC based ephemeral anonymous chat with realtime matching and communication",
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
      name: "Knik",
      description:
        "Earn real income by playing in-app games and completing missions or challenges. The idea was inspired by NutCoin; I worked on the landing and admin panel.",
      thumbnail: "/img/projects/knik.png",
      status: "Active",
      opensource: false,
      links: [{label: "Website", to: "https://knik.uk", icon: "i-mdi-link"}],
      icons: [
        "i-logos-nuxt-icon",
        "i-logos-vue",
        "i-logos-typescript-icon",
        "i-simple-icons:rekaui",
        "i-logos-tailwindcss-icon",
        "i-devicon:chartjs",
        "i-logos:pinia",
        "i-material-icon-theme:i18n"
      ],
      category: "freelance"
    },
    {
      name: "Cheshmak",
      description:
        "A comprehensive global dating app with a large Persian-speaking user base (500k+ users). Our team built version two; I worked on the PWA and admin panel.",
      thumbnail: "/img/projects/cheshmak.png",
      status: "Active",
      opensource: false,
      links: [{label: "Website", to: "https://cheshmak.co.uk", icon: "i-mdi-link"}],
      icons: [
        "i-logos-nuxt-icon",
        "i-logos-vue",
        "i-logos-typescript-icon",
        "i-simple-icons:mediapipe",
        "i-logos-tailwindcss-icon",
        "i-devicon:motion",
        "i-logos:pinia",
        "i-logos:momentjs",
        "i-logos:vueuse",
        "i-vscode-icons:file-type-firebase",
        "i-material-icon-theme:i18n"
      ],
      category: "freelance"
    },
    {
      name: "Hazarat",
      description:
        "A platform for in-app lotteries where users spend coins to join draws and win prizes. Coins are earned via missions/challenges or watching ads. I was responsible for the website and admin panel.",
      thumbnail: "/img/projects/hazarat.png",
      status: "Active",
      opensource: false,
      links: [{label: "Website", to: "https://hazarat.uk", icon: "i-mdi-link"}],
      icons: [
        "i-logos-nuxt-icon",
        "i-logos-vue",
        "i-logos-typescript-icon",
        "i-logos-tailwindcss-icon",
        "i-logos:pinia",
        "i-logos:momentjs",
        "i-skill-icons:nuxtjs-light",
        "i-vscode-icons:file-type-firebase",
        "i-material-icon-theme:i18n"
      ],
      category: "freelance"
    },
    {
      name: "ModernData",
      description: "Company landing site for Modern Data with sections for company, projects, services and contact.",
      thumbnail: "/img/projects/moderndata.png",
      status: "Active",
      opensource: false,
      links: [{label: "Website", to: "https://moderndata.ir/", icon: "i-mdi-link"}],
      icons: ["i-logos-nuxt-icon", "i-logos-vue", "i-logos-tailwindcss-icon"],
      category: "freelance"
    },
    {
      name: "Modochats",
      description:
        "Create AI agents for businesses. A platform where anyone can build an agent with a custom knowledge source and use it for customer support, sales, social media management, text/voice chat. I led the landing, dashboard and developer SDKs (chat client, voice client, widget).",
      thumbnail: "/img/projects/modochats-logo.svg",
      status: "Active",
      opensource: false,
      links: [
        {label: "Website", to: "https://modochats.com/", icon: "i-mdi-link"},
        {label: "GitHub", to: "https://github.com/modochats", icon: "i-mdi-github"}
      ],
      icons: [
        "i-logos-nuxt-icon",
        "i-logos-vue",
        "i-logos-typescript-icon",
        "i-devicon-nodejs",
        "i-logos:pinia",
        "i-material-icon-theme:i18n",
        "i-logos-tailwindcss-icon",
        "i-devicon:rollup"
      ],
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
        {label: "Web Application", to: "https://meet.godfathergame.ir", icon: "i-mdi-link"},
        {label: "Telegram Bot", to: "https://t.me/god_father_game_bot", icon: "i-mdi-telegram"}
      ],
      icons: [
        "i-logos-vue",
        "i-logos-nuxt-icon",
        "i-logos-typescript-icon",
        "i-logos-webrtc",
        "i-hugeicons-plug-socket",
        "i-logos-tailwindcss-icon",
        "i-logos:pinia"
      ],
      category: "freelance"
    },
    {
      name: "Shenoma",
      thumbnail: "/img/projects/shenoma-logo.png",
      description: "A platform that delivers mineral products from mine owners directly to users. I worked on the landing and admin dashboard.",
      status: "Active",
      opensource: false,
      links: [{label: "Landing", to: "https://shenoma.co", icon: "i-mdi-link"}],
      icons: ["i-logos-vue", "i-logos-nuxt-icon", "i-logos-typescript-icon", "i-logos-tailwindcss-icon", "i-logos:pinia", "i-devicon:chartjs"],
      category: "freelance"
    },
    {
      name: "Esghat Dashboard",
      description: "Vehicle scrapping and recycling management platform for Golestan province.",
      thumbnail: "/img/projects/esghat-logo.png",
      status: "Active",
      opensource: false,
      icons: ["i-logos-nuxt-icon", "i-logos-vue", "i-logos-pinia"],
      category: "freelance",
      links: [{label: "Landing", to: "https://e-rahgosha.ir"}]
    },
    {
      name: "Yoozro Dashboard",
      description: "Easy-to-use city-to-city travel service platform for Golestan province (admin dashboard).",
      thumbnail: "/img/projects/yoozro-logo.png",
      status: "Active",
      opensource: false,
      icons: ["i-logos-nuxt-icon", "i-logos-vue", "i-logos-javascript", "i-logos-flowbite", "i-file-icons:leaflet"],
      category: "freelance",
      links: [{label: "Landing", to: "https://yoozro.ir"}]
    },
    {
      name: "AR Studio",
      description:
        "Register dynamic AR targets and attach elements like text, audio, video or images. Implemented with A-Frame and MindAR. Private project so links cannot be shared.",
      status: "Active",
      opensource: true,
      links: [],
      icons: ["i-logos-nuxt-icon", "i-logos-vue", "i-logos-tailwindcss-icon", "i-logos-mindar"],
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
