import type {PortfolioData} from "@/types/portfolio.types";

export const portfolio: PortfolioData = {
  profile: {
    name: "Abolfazl Shahini",
    title: "Frontend Developer",
    location: "Golestan Province - Iran",
    summary:
      "Passionate Frontend Developer Primary with Vue.js, Nuxt.js, open source contributor and maintainer, always learning and adapting to new tools and environments.",
    avatar: "/img/my-profile.jpg",
    socials: {
      website: "https://abolfazlshahini.vercel.app",
      github: "https://github.com/Abolfazl2049",
      linkedin: "https://www.linkedin.com/in/abolfazl-shahini-6660302b1/",
      telegram: "https://t.me/abolfazl2049",
      devTo: "https://dev.to/abolfazl2049"
    }
  },

  mainTools: {
    title: "Main tools",
    items: [
      {label: "TypeScript", icon: "i-logos-typescript-icon"},
      {label: "Vue.js", icon: "i-logos-vue"},
      {label: "Nuxt.js", icon: "i-logos-nuxt-icon"},
      {label: "Tailwind CSS", icon: "i-logos-tailwindcss-icon"},
      {label: "Reka ui", icon: "i-logos-reka-ui"},
      {label: "Pinia", icon: "i-logos-pinia"},
      {label: "Node", icon: "i-logos-nodejs"},
      {label: "Git/GitHub", icon: "i-mdi-github"}
    ]
  },

  roles: {
    title: "Roles",
    items: [
      {label: "Frontend Developer", icon: "i-twemoji-laptop"},
      {label: "Open source contributor/maintainer"},
      {label: "SSR with Nuxt", icon: "i-twemoji-rocket"},
      {label: "DX & Performance", icon: "i-twemoji-high-voltage"},
      {label: "System and architecture design"}
    ]
  },

  values: {
    title: "Values",
    items: [
      {label: "High standards", icon: "i-twemoji-sparkles", description: "Aim for quality over shortcuts. perfectionist"},
      {label: "Client-focused delivery", icon: "i-twemoji-handshake", description: "Understand goals, ship iteratively, and align outcomes."},
      {label: "Teamwork", icon: "i-twemoji-people-holding-hands", description: "Share knowledge, elevate teammates, be reliable."},
      {label: "Clear communication", icon: "i-twemoji-speech-balloon", description: "Explain the why/what/how."}
    ]
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
            "building and maintaining large scale dashboard,pwa,website",
            "migrating from javascript to typescript",
            "implementing projects with Nuxt, Tailwind, Restful api, Websocket - for realtime functionality, WebRTC for Video/audio/data transfer , pinia for state management",
            "From Entry to mid level"
          ],
          icons: ["i-logos-vue", "i-logos-nuxt-icon", "i-logos-typescript-icon", "i-simple-icons:rekaui"],
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
          icons: ["i-logos-vue", "i-logos-nuxt-icon", "i-logos-typescript-icon", "i-devicon:nodejs"],
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
        {label: "Linkedin Post", to: "https://linkedin.com/1111", icon: "i-mdi-linkedin"},
        {label: "Website", to: "https://my-ephem-chat.vercel.app"}
      ],
      icons: [
        "i-logos-react",
        "i-devicon:nextjs",
        "i-logos-typescript-icon",
        "i-skill-icons:expressjs-light",
        "i-logos-sequelize",
        "i-logos:webrtc",
        "i-logos-socketio",
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
        {label: "Website", to: "https://github.com/modochat", icon: "i-mdi-github"}
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
      icons: ["i-logos-typescript-icon", "i-devicon:nodejs"],
      category: "freelance"
    },
    {
      name: "Modo Chat Client",
      description: "Client Sdk for Modo Chat system. written in typescript and focused on DX.Published on npm and open source on github",
      thumbnail: "/img/projects/modochats-logo.svg",
      status: "Active",
      opensource: true,
      links: [
        {label: "Github", to: "https://github.com/mnodochats/chat_client", icon: "i-mdi-github"},
        {label: "NPM", to: "https://npmjs.com/modochats/chat-client", icon: "i-mdi-npm"}
      ],
      icons: ["i-logos-typescript-icon", "i-logos-node"],
      category: "freelance"
    },
    {
      name: "Modo Voice Client",
      description:
        "Modo Voice client sdk written in typescript.Realtime Voice-Chat with Ai though socket. Worked heavily with Web audio related Api's, like custom audio processor for parsing audio - quite the pain !",
      thumbnail: "/img/projects/modochats-logo.svg",
      status: "Active",
      opensource: true,
      links: [
        {label: "Github", to: "https://github.com/mnodochats/voice_client", icon: "i-mdi-github"},
        {label: "NPM", to: "https://npmjs.com/modochats/voice-client", icon: "i-mdi-npm"}
      ],
      icons: ["i-logos-typescript-icon", "i-logos-node"],
      category: "freelance"
    },
    {
      name: "AR Studio",
      description:
        "Register dynamic AR target and put elements around them like text/audio/video/image. and scan the target to apply the AR. implemented using Aframe and Mind-ar",
      status: "Active",
      opensource: true,
      links: [],
      icons: ["i-logos-nuxt-icon", "i-logos-vue", "i-logos-tailwindcss-icon", "i-logos-mindar"],
      category: "freelance"
    },
    {
      name: "Esghat Dashboard",
      description: "Scrapping and Recycling management platform for Golestan province",
      thumbnail: "/img/projects/esghat-logo.png",
      status: "Active",
      opensource: false,
      icons: ["i-logos-nuxt-icon", "i-logos-vue", "i-logos-pinia"],
      category: "freelance"
    },
    {
      name: "Yoozro Dashboard",
      description: "easy-to-use city to city traveling-service platform for Golestan province",
      thumbnail: "/img/projects/yoozro-logo.png",
      status: "Active",
      opensource: false,
      links: [{label: "Website", to: "https://yoozro.ir/", icon: "i-mdi-link"}],
      icons: ["i-logos-nuxt-icon", "i-logos-vue", "i-logos-javascript-icon", "i-logos-flowbite", "i-file-icons:leaflet"],
      category: "freelance"
    }
  ]
};

export default portfolio;
