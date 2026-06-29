/**
 * Resume Data - ابولفضل شاهینی
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

export const resumeDataFa: Resume = {
  basics: {
    name: "ابولفضل شاهینی",
    label: "توسعه‌دهنده فرانت‌اند",
    email: "abolfazlshahini37@gmail.com",
    phone: "+98 938 578 0203",
    url: "https://abolfazlshahini.vercel.app",
    location: {
      city: "گرگان",
      country: "ایران"
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
      "برنامه‌نویس٬ توسعه‌دهنده فرانت‌اند با بیش از دو سال تجربه عمدتا با فریمورک nuxt/vue در پروژه‌هایی در مقیاس کوچک و بزرگ .\n علاقه‌مند  به فعالیت های متن‌باز. همچنان مشتاق یادگیری زبان‌ها/فریم‌ورک/ابزار های جدید و عمیق تر ساختن تخصص ."
  },

  work: [
    {
      company: "Modern Data",
      position: "توسعه‌دهندهٔ فرانت‌اند",
      location: "گلستان، گرگان - حضوری",
      startDate: "2024-02",
      endDate: "2026-6",
      highlights: [
        "توسعه و نگهداری داشبوردهای مدیریتی، وب‌اپلیکیشن‌های PWA و وب‌سایت‌های مقیاس‌پذیر",
        "به‌روز نگه داشتن پروژه- منتقل بخش‌هایی از پروژه از JavaScript به TypeScript برای افزایش پایداری و خوانایی کد",
        "کار با تکنولوژی های محبوب و مدرن  Nuxt.js، Tailwind CSS، API REST و WebRTC",
        "تمرکز بر بهینه‌سازی عملکرد، تجربه کاربری و ساختار ماژولار در پروژه‌ها"
      ]
    }
    // {
    //   company: "Modochats",
    //   position: "توسعه‌دهندهٔ فرانت‌اند",
    //   location: "گلستان، گرگان - هیبرید",
    //   startDate: "2025-04",
    //   endDate: "2026-03",
    //   highlights: [
    //     "مشارکت در توسعه و نگهداری پروژه‌های متن‌باز با تمرکز بر کیفیت کد و تجربه توسعه‌دهنده",
    //     "طراحی و پیاده‌سازی ویجت‌ها و ابزارهای کاربردی و سبک برای استفاده در محصولات مختلف",
    //     "کار با CDNها و مدیریت انتشار پکیج‌ها در npm",
    //     "طراحی و اجرای فرآیندهای build و توسعه با ابزارهایی مانند Rollup، Node.js و tsx",
    //     "تمرکز بر بهبود تجربه توسعه‌دهنده (DX) و ساده‌سازی استفاده از کتابخانه‌ها"
    //   ]
    // }
  ],

  projects: [
    {
      name: "Ephem Chat",
      description: "چت ناشناس Realtime مبتنی بر WebRTC با ارتباط Realtime",
      links: [
        {label: "GitHub فرانت‌اند", url: "https://github.com/Abolfazl2049/ephem-chat-fronted", hint: "github.com/Abolfazl2049/ephem-chat-fronted"},
        {label: "GitHub بک‌اند", url: "https://github.com/Abolfazl2049/ephem-chat-backend", hint: "github.com/Abolfazl2049/ephem-chat-backend"},
        {
          label: "پست dev.to",
          url: "https://dev.to/abolfazl2049/building-an-ephemeral-anonymous-chat-app-with-nextjs-webrtc-and-socketio-5f78",
          hint: "dev.to/abolfazl2049/..."
        },
        {label: "وب‌سایت", url: "https://my-ephem-chat.vercel.app", hint: "my-ephem-chat.vercel.app"}
      ]
    },
    {
      name: "Modochats",
      description:
        "ایجاد agent هوش‌مصنوعی برای کسب‌و‌کارهای شما! پلتفرمی که هر کسی می‌تواند agent خود را ساخت با منبع دانش سفارشی و استفاده از آن به روش‌های مختلف مانند پشتیبانی مشتری - مدیریت فروش - مدیریت رسانه‌های اجتماعی - چت متنی/صوتی. مشارکت در لندینگ داشبورد، ویجت، پکیج های کلاینت چت متنی و صوتی.",
      links: [
        {label: "وب‌سایت", url: "https://modochats.com/", hint: "modochats.com"},
        {label: "GitHub", url: "https://github.com/modochat", hint: "github.com/modochat"}
      ]
    },
    // {
    //   name: "Modo Widget",
    //   description: "ویجت پشتیبانی مشتری هوش‌مصنوعی. قابل‌شخصی‌سازی، واکنش‌گرا، متمرکز بر DX. از چت متنی و صدا پشتیبانی می‌کند - Realtime",
    //   links: [
    //     {label: "GitHub", url: "https://github.com/mnodochats/webcomponent"},
    //     {label: "NPM", url: "https://npmjs.com/modochats/webcomponent"}
    //   ]
    // },
    // {
    //   name: "Modo Chat & Voice Clients",
    //   description:
    //     "SDK های کلاینت برای پلتفرم Modo: شامل یک sdk چت و یک sdk صوت. هر دو با TypeScript نوشته شده و متمرکز بر تجربهٔ توسعه‌دهنده هستند. کلاینت صوتی از چت صوتی realtime (بر پایهٔ socket) پشتیبانی می‌کند.",
    //   links: [
    //     {label: "GitHub (Chat)", url: "https://github.com/mnodochats/chat_client"},
    //     {label: "NPM (Chat)", url: "https://npmjs.com/modochats/chat-client"},
    //     {label: "GitHub (Voice)", url: "https://github.com/mnodochats/voice_client"},
    //     {label: "NPM (Voice)", url: "https://npmjs.com/modochats/voice-client"}
    //   ]
    // },
    {
      name: "Godfather Meet",
      description:
        "یک پلتفرم کامل برای اجرای بازی مافیا به‌صورت آنلاین با امکان ساخت اتاق، انتخاب سناریو، ارتباط صوتی و تصویری، چت نقش‌ها، مدیریت بازی توسط گرداننده، سیستم پاداش و جدول رتبه‌بندی رقابتی.",
      links: [
        {label: "وب‌اپلیکیشن", url: "https://meet.godfathergame.ir", hint: "meet.godfathergame.ir"},
        {label: "بات تلگرام", url: "https://t.me/god_father_game_bot", hint: "t.me/god_father_game_bot"}
      ]
    },
    // {
    //   name: "AR Studio",
    //   description:
    //     "ثبت تارگت AR پویا و قرار دادن عناصری در اطراف آن‌ها مانند متن/صدا/ویدیو/تصویر. و اسکن تارگت برای اعمال AR. پیاده‌سازی‌شده با استفاده از Aframe و Mind-ar. به دلیل خصوصی بودن پروژه برای یک ارگان٬ امکان ارائه لینک ندارم ."
    // },
    // {
    //   name: "Esghat Dashboard",
    //   description: "پلتفرم مدیریت خودروهای اسقاط و بازیافت آنان. برای استان گلستان . از اونجایی که ادمین پنل هست متاسفانه امکان ارائه لینک وجود ندارد."
    // },
    // {
    //   name: "Yoozro Dashboard",
    //   description: "پلتفرم خدمات سفر شهر به شهر آسان‌. برای استان گلستان.  از اونجایی که ادمین پنل هست متاسفانه امکان ارائه لینک وجود ندارد."
    // },
    {
      name: "Multi Connection WebRTC Starter",
      description: "استارتر مینیمال برای برقراری ارتباط هم‌زمان چند peer با WebRTC؛ شامل فرانت‌اند با Nuxt 3 و بک‌اند Express + Socket.IO برای سیگنالینگ.",
      links: [
        {
          label: "GitHub",
          url: "https://github.com/Abolfazl2049/multi-connection-webrtc-starter",
          hint: "github.com/Abolfazl2049/multi-connection-webrtc-starter"
        },
        {label: "دمو", url: "https://multi-connection-webrtc-starter.vercel.app/", hint: "multi-connection-webrtc-starter.vercel.app"}
      ]
    }
  ],

  education: [
    // {
    //   institution: "دانشگاه علمی کاربردی خانه کارگر (گرگان)",
    //   area: "",
    //   studyType: "کاردانی",
    //   startDate: "2025-09",
    //   courses: []
    // }
  ],

  skills: [
    {
      name: "فرانت‌اند",
      keywords: ["Vue.js", "Nuxt.js", "React", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Pinia"]
    },
    {
      name: "سیستم‌های ریل-تایم",
      keywords: ["WebRTC (ویدیو/صدا/داده)", "WebSocket", "Socket.io", "Web Audio API", "ارتباط بلادرنگ", "PWA"]
    },
    {
      name: "معماری ",
      keywords: ["معماری کامپوننت محور", "SSR (رندرینگ سمت سرور)", "تقسیم کد", "بهینه‌سازی عملکرد", "ساختار Monorepo"]
    },
    {
      name: "ابزارهای توسعه و بیلد",
      keywords: ["Git/GitHub", "npm/pnpm", "Vite", "Rollup", "Node.js", "Concurrently", "tsx", "Web Components"]
    },
    {
      name: "کیفیت و دسترس‌پذیری",
      keywords: ["TypeScript Strict Mode", "طراحی واکنش‌گرا", "استانداردهای وب"]
    },
    {
      name: "بک‌اند",
      keywords: ["Express.js", "REST API‌", "Sequelize ORM", "طراحی پایگاه داده", "Node.js"]
    }
  ],

  languages: [
    {
      language: "فارسی",
      fluency: ""
    },
    {
      language: "انگلیسی",
      fluency: "B1"
    }
  ],

  certificates: [
    {
      name: "Duolingo english ",
      date: "2026",
      issuer: "Duolingo",
      url: "",
      summary: "130 Score (Maximum Score)"
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

export default resumeDataFa;
