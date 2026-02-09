import type {PortfolioData} from "@/types/portfolio.types";

const portfolioFa: PortfolioData = {
  profile: {
    name: "ابوالفضل شاهینی",
    title: "توسعه‌دهنده فرانت‌اند",
    location: "استان گلستان - ایران",
    summary:
      "توسعه‌دهنده فرانت‌اند٬ با بیش از دو سال تجربه در ساخت وبسایت٬ دشبورد٬ pwa با ابزارها/زبان‌های مدرن و کاربردی از جمله Vue.js, Nuxt.js و TypeScript و ...",
    avatar: "/img/my-profile.jpg",
    socials: {
      website: "https://abolfazlshahini.vercel.app",
      github: "https://github.com/Abolfazl2049",
      linkedin: "https://www.linkedin.com/in/abolfazl-shahini/",
      telegram: "https://t.me/abolfazl2049",
      devTo: "https://dev.to/abolfazl2049"
    }
  },

  mainTools: {
    title: "ابزارهای اصلی",
    items: [
      {label: "TypeScript", icon: "i-logos-typescript-icon"},
      {label: "Vue.js", icon: "i-logos-vue"},
      {label: "Nuxt.js", icon: "i-logos-nuxt-icon"},
      {label: "Tailwind CSS", icon: "i-logos-tailwindcss-icon"},
      {label: "Reka ui", icon: "i-logos-reka-ui"},
      {label: "Pinia", icon: "i-logos-pinia"},
      {label: "Node", icon: "i-devicon-nodejs"},
      {label: "Git/GitHub", icon: "i-mdi-github"}
    ]
  },

  roles: {
    title: "نقش‌ها",
    items: [
      {label: "توسعه‌دهندهٔ فرانت‌اند", icon: "i-twemoji-laptop"},
      {label: "مشارکت‌کننده/نگهدارنده متن‌باز"},
      {label: "SSR با Nuxt", icon: "i-twemoji-rocket"},
      {label: "DX و عملکرد", icon: "i-twemoji-high-voltage"},
      {label: "طراحی سیستم و معماری"}
    ]
  },

  values: {
    title: "ارزش‌ها",
    items: [
      {label: "استانداردهای بالا", icon: "i-twemoji-sparkles", description: "تمرکز بر کمال‌گرایی."},
      {label: "تحویل متمرکز بر مشتری", icon: "i-twemoji-handshake", description: "اهداف را درک کن، مرحله‌ای توسعه دهید، نتایج را هماهنگ نگه‌دارید."},
      {label: "کار تیمی", icon: "i-twemoji-people-holding-hands", description: "دانش را به‌اشتراک بگذار، همکاران را توسعه دهید، قابل اتکا باشید."},
      {label: "ارتباط واضح", icon: "i-twemoji-speech-balloon", description: "چرایی/چی/چطور را توضیح دهید."}
    ]
  },

  experiences: [
    {
      company: "Modern Data",
      link: "https://moderndata.ir/",
      logo: "/img/modern-data-logo.png",
      location: "گلستان، گرگان - حضوری",
      type: "تمام‌وقت",
      positions: [
        {
          title: "توسعه‌دهندهٔ فرانت‌اند",
          start: "بهمن ۱۴۰۲",
          ongoing: true,
          description: [
            "ساخت و نگهداری داشبورد، PWA و وب‌سایت‌های در مقیاس بزرگ",
            "انتقال از JavaScript به TypeScript",
            "پیاده‌سازی پروژه‌ها با Nuxt، Tailwind، Restful API، WebRTC برای انتقال ویدیو/صدا/داده",
            "از جونیور تا میدلول"
          ],
          icons: ["i-logos-vue", "i-logos-nuxt-icon", "i-logos-typescript-icon", "i-simple-icons:rekaui"],
          link: "https://moderndata.ir/",
          linkLabel: "Modern Data"
        }
      ]
    },
    {
      company: "Modochats",
      link: "https://modochats.com",
      logo: "/img/projects/modochats-logo.svg",
      location: "گلستان، گرگان - هیبرید",
      type: "پاره‌وقت",
      positions: [
        {
          title: "نگهدارنده/مشارکت‌کننده متن‌باز",
          start: "فروردین ۱۴۰۴",
          ongoing: true,
          description: [
            "ساخت و نگهداری پروژه‌های متن‌باز",
            "پیاده‌سازی ویجت‌های کاربردی و مدرن",
            "کار با CDN‌ها (JS Deliver) و مدیریت بسته‌های npm",
            "پیاده‌سازی فرآیندهای بیلد پیچیده با استفاده از concurrently، rollup، node و tsx",
            "توسعه متمرکز بر DX با TypeScript"
          ],
          icons: ["i-logos-vue", "i-logos-nuxt-icon", "i-logos-typescript-icon", "i-devicon-nodejs"],
          link: "https://modochats.com/",
          linkLabel: "Modochats"
        }
      ]
    }
  ],

  education: [
    {
      school: "دانشگاه علمی کاربردی خانه کارگر (گرگان)",
      degree: "کامپیوتر",
      start: "۱۴۰۴",
      end: "در حال تحصیل",
      icons: ["i-material-symbols-school"]
    }
  ],

  projects: [
    {
      name: "Ephem Chat",
      description: "چت ناشناس Realtime مبتنی بر WebRTC با ارتباط Realtime",
      links: [
        {label: "GitHub فرانت‌اند", to: "https://github.com/Abolfazl2049/ephem-chat-fronted", icon: "i-mdi-github"},
        {label: "GitHub بک‌اند", to: "https://github.com/Abolfazl2049/ephem-chat-backend", icon: "i-mdi-github"},
        {
          label: "پست dev.to",
          to: "https://dev.to/abolfazl2049/building-an-ephemeral-anonymous-chat-app-with-nextjs-webrtc-and-socketio-5f78",
          icon: "i-mdi-linkedin"
        },
        {label: "وب‌سایت", to: "https://my-ephem-chat.vercel.app"}
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
      status: "فعال",
      opensource: true,
      category: "public"
    },

    {
      name: "Modochats",
      description:
        "ایجاد agent هوش‌مصنوعی برای کسب‌و‌کارهای شما! پلتفرمی که هر کسی می‌تواند agent خود را ساخت با منبع دانش سفارشی و استفاده از آن به روش‌های مختلف مانند پشتیبانی مشتری - مدیریت فروش - مدیریت رسانه‌های اجتماعی - چت متنی/صوتی. مشارکت در لندینگ داشبورد، ویجت، پکیج های کلاینت چت متنی و صوتی.",
      thumbnail: "/img/projects/modochats-logo.svg",
      status: "فعال",
      opensource: false,
      links: [
        {label: "وب‌سایت", to: "https://modochats.com/", icon: "i-mdi-link"},
        {label: "GitHub", to: "https://github.com/modochat", icon: "i-mdi-github"}
      ],
      icons: ["i-logos-nuxt-icon", "i-logos-vue", "i-logos-typescript-icon", "i-devicon-nodejs"],
      category: "freelance"
    },
    {
      name: "Modo Widget",
      description: "ویجت پشتیبانی مشتری هوش‌مصنوعی. قابل‌شخصی‌سازی، واکنش‌گرا، متمرکز بر DX. از چت متنی و صدا پشتیبانی می‌کند - Realtime",
      thumbnail: "/img/projects/modochats-logo.svg",
      status: "فعال",
      opensource: true,
      links: [
        {label: "Github", to: "https://github.com/mnodochats/webcomponent", icon: "i-mdi-github"},
        {label: "NPM", to: "https://npmjs.com/modochats/webcomponent", icon: "i-mdi-npm"}
      ],
      icons: ["i-logos-typescript-icon", "i-devicon-nodejs"],
      category: "freelance"
    },
    {
      name: "Modo Chat Client",
      description: "Client SDK برای سیستم Modo Chat. نوشته‌شده با TypeScript و متمرکز بر DX. منتشر‌شده در npm و متن‌باز در github",
      thumbnail: "/img/projects/modochats-logo.svg",
      status: "فعال",
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
        "Modo Voice client SDK نوشته‌شده با TypeScript. چت صوتی Realtime با هوش‌مصنوعی از طریق socket. کار با API‌های صدا در وب، مانند پردازشگر (processor) صدای custom برای تجزیه/پردازش صدا - خیلی سخت بود!",
      thumbnail: "/img/projects/modochats-logo.svg",
      status: "فعال",
      opensource: true,
      links: [
        {label: "Github", to: "https://github.com/mnodochats/voice_client", icon: "i-mdi-github"},
        {label: "NPM", to: "https://npmjs.com/modochats/voice-client", icon: "i-mdi-npm"}
      ],
      icons: ["i-logos-typescript-icon", "i-logos-node"],
      category: "freelance"
    },
    {
      name: "Godfather Meet",
      thumbnail: "/img/projects/godfather-meet-logo.png",
      description:
        "یک پلتفرم کامل برای اجرای بازی مافیا به‌صورت آنلاین با امکان ساخت اتاق، انتخاب سناریو، ارتباط صوتی و تصویری، چت نقش‌ها، مدیریت بازی توسط گرداننده، سیستم پاداش و جدول رتبه‌بندی رقابتی.",
      status: "Active",
      opensource: false,
      links: [
        {
          label: "وب‌اپلیکیشن",
          to: "https://meet.godfathergame.ir",
          icon: "i-mdi-link"
        },
        {
          label: "بات تلگرام",
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
        "ثبت تارگت AR پویا و قرار دادن عناصری در اطراف آن‌ها مانند متن/صدا/ویدیو/تصویر. و اسکن تارگت برای اعمال AR. پیاده‌سازی‌شده با استفاده از Aframe و Mind-ar",
      status: "فعال",
      opensource: true,
      links: [],
      icons: ["i-logos-nuxt-icon", "i-logos-vue", "i-logos-tailwindcss-icon", "i-logos-mindar"],
      category: "freelance"
    },
    {
      name: "Esghat Dashboard",
      description: "پلتفرم مدیریت خودروهای اسقاط و بازیافت آنان. برای استان گلستان",
      thumbnail: "/img/projects/esghat-logo.png",
      status: "فعال",
      opensource: false,
      icons: ["i-logos-nuxt-icon", "i-logos-vue", "i-logos-pinia"],
      category: "freelance"
    },
    {
      name: "Yoozro Dashboard",
      description: "پلتفرم خدمات سفر شهر به شهر آسان‌. برای استان گلستان",
      thumbnail: "/img/projects/yoozro-logo.png",
      status: "فعال",
      opensource: false,
      icons: ["i-logos-nuxt-icon", "i-logos-vue", "i-logos-javascript-icon", "i-logos-flowbite", "i-file-icons:leaflet"],
      category: "freelance"
    },
    {
      name: "Multi Connection WebRTC Starter",
      description: "استارتر مینیمال برای برقراری ارتباط هم‌زمان چند peer با WebRTC؛ شامل فرانت‌اند با Nuxt 3 و بک‌اند Express + Socket.IO برای سیگنالینگ.",
      status: "فعال",
      opensource: true,
      links: [
        {label: "GitHub", to: "https://github.com/Abolfazl2049/multi-connection-webrtc-starter", icon: "i-mdi-github"},
        {label: "دمو", to: "https://multi-connection-webrtc-starter.vercel.app/", icon: "i-mdi-link"},
        {label: "README", to: "https://github.com/Abolfazl2049/multi-connection-webrtc-starter#readme", icon: "i-mdi-file-document"}
      ],
      icons: ["i-logos-nuxt-icon", "i-logos-vue", "i-logos-typescript-icon", "i-devicon-nodejs", "i-logos-express", "i-devicon-socketio", "i-logos-webrtc"],
      category: "public"
    }
  ]
};

export default portfolioFa;
