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
    label: "توسعه‌دهنده فرانت‌اند | Vue.js • Nuxt.js • TypeScript",
    image: "/img/my-profile.jpg",
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
        url: "https://www.linkedin.com/in/abolfazl-shahini-6660302b1/",
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
      "توسعه‌دهندهٔ فرانت‌اند پرشور با **۲+ سال** تجربه در ساخت اپلیکیشن‌های عملکرد بالا با Vue.js و Nuxt.js. مشارکت‌کننده و نگهدارنده پروژه‌های متن‌باز با تخصص قوی در **TypeScript**، **معماری کامپوننت‌ها**، **بهینه‌سازی تجربه توسعه‌دهنده**، و **مهندسی عملکرد**. تجربه در **WebRTC**، **سیستم‌های بلادرنگ** (WebSocket)، **PWA**، و **SSR**. تخصص در توسعهٔ کد با کیفیت بالا به‌صورت مرحله‌ای با ارتباط واضح. در حال توسعهٔ داشبوردها و اپلیکیشن‌های بلادرنگ در Modern Data؛ نگهداری بسته‌های متن‌باز در Modochats (SDK‌های چت/صدا و web component‌های هوش‌مصنوعی)."
  },

  work: [
    {
      company: "Modern Data",
      position: "توسعه‌دهندهٔ فرانت‌اند (حضوری)",
      location: "گرگان، گلستان - ایران",
      startDate: "2024-02",
      highlights: [
        "ساخت و نگهداری **داشبورد‌های بزرگ‌مقیاس، PWA و اپلیکیشن‌های وب** با استانداردهای عملکرد بالا و به‌روزرسانی‌های داده بلادرنگ",
        "انتقال کدبیس **JavaScript به TypeScript**، بهبود ایمنی نوع، تجربهٔ توسعه‌دهنده، و نگهداری‌پذیری در کل پروژه‌ها",
        "معماری‌کاری اپلیکیشن‌ها با **Nuxt.js، Tailwind CSS، REST API‌ها، WebSocket** برای عملکرد بلادرنگ، **WebRTC** برای انتقال ویدیو/صدا/داده، و **Pinia** برای مدیریت وضعیت",
        "پیشرفت از سطح **ورودی به سطح میانی** توسعه‌دهنده از طریق تجربهٔ عملی با فناوری‌های مدرن و **منتورینگ** در محیط حرفه‌ای",
        "تحویل رابط‌های واکنش‌گرا و دسترس‌پذیر با تمرکز بر **کیفیت کد** و **تجربهٔ توسعه‌دهنده** در تمام کامپوننت‌ها"
      ]
    },
    {
      company: "Modochats",
      position: "نگهدارندهٔ متن‌باز/مشارکت‌کننده (پاره‌وقت)",
      location: "گرگان، گلستان - ایران",
      startDate: "2025-04",
      highlights: [
        "ساخت و نگهداری **مخازن متن‌باز** با تمرکز بر تجربهٔ توسعه‌دهنده و استانداردهای کیفیت کد",
        "پیاده‌سازی **ویجت‌های دوستانه و مدرن** برای یکپارچه‌سازی پشتیبانی مشتری هوش‌مصنوعی؛ طراحی با رویکرد **TypeScript-first** برای قابل‌اتکایی و نگهداری‌پذیری",
        "مدیریت **فرآیندهای بیلد پیچیده** با استفاده از **concurrently، rollup، node، و tsx** برای ساختار monorepo چندبسته‌ای",
        "انتشار **بسته‌های npm** (SDK چت، SDK صدا، ویجت web component) برای توانمندی توسعه‌دهندگان در یکپارچه‌سازی ارتباط هوش‌مصنوعی با کمترین تلاش",
        "توسعهٔ **بسته‌های متمرکز بر DX** با پشتیبانی‌های فراگیر TypeScript، مستندات جامع، و نمونه‌های عملی برای onboarding توسعه‌دهندگان"
      ]
    }
  ],

  education: [
    {
      institution: "دانشگاه خانه کارگر (گرگان)",
      area: "علوم کامپیوتر",
      studyType: "کارشناسی علوم پایه",
      startDate: "2026-09",
      endDate: "در حال انجام",
      courses: ["معماری نرم‌افزار", "طراحی سیستم", "توسعهٔ وب", "مدیریت پایگاه داده"]
    }
  ],

  skills: [
    {
      name: "هستهٔ فرانت‌اند",
      keywords: ["Vue.js", "Nuxt.js", "React", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Pinia"]
    },
    {
      name: "سیستم‌های بلادرنگ و ویژگی‌های پیشرفته",
      keywords: ["WebRTC (ویدیو/صدا/داده)", "WebSocket", "Socket.io", "Web Audio API", "ارتباط بلادرنگ", "PWA"]
    },
    {
      name: "معماری و عملکرد",
      keywords: ["معماری کامپوننت", "SSR (رندرینگ سمت سرور)", "تقسیم کد و بارگذاری تنبل", "بهینه‌سازی عملکرد", "ساختار Monorepo", "مدیریت وضعیت (Pinia)"]
    },
    {
      name: "ابزارهای توسعه و بیلد",
      keywords: ["Git/GitHub", "npm/pnpm", "Vite", "Rollup", "Node.js", "Concurrently", "tsx", "ESLint/Prettier", "Web Components"]
    },
    {
      name: "کیفیت و دسترس‌پذیری",
      keywords: ["TypeScript Strict Mode", "طراحی واکنش‌گرا", "استانداردهای وب", "جریان‌های Git", "مستندات"]
    },
    {
      name: "بک‌اند (دانش پشتیبانی)",
      keywords: ["Express.js", "REST API‌ها", "Sequelize ORM", "طراحی پایگاه داده", "Node.js"]
    }
  ],

  languages: [
    {
      language: "فارسی",
      fluency: "مادری"
    },
    {
      language: "انگلیسی",
      fluency: "روان"
    }
  ],

  certificates: [
    {
      name: "تکمیل‌کننده‌ٔ دوره علوم کامپیوتر",
      date: "2025",
      issuer: "Duolingo",
      url: "",
      summary: "در حال انجام دوره علوم کامپیوتر با تمرکز بر توسعهٔ وب مدرن"
    }
  ],

  projects: [
    {
      name: "Ephem Chat",
      description: "چت ناشناس بلادرنگ مبتنی بر WebRTC با تطابق و ارتباط بلادرنگ",
      highlights: [
        "پیاده‌سازی اتصال peer-to-peer WebRTC برای انتقال مستقیم ویدیو/صدا/داده بین کاربران ناشناس",
        "ساخت سیستم تطابق بلادرنگ با Socket.io برای مدیریت جلسات یکبار‌مصرف",
        "توسعهٔ فرانت‌اند (React/Next.js) و بک‌اند (Express.js با Sequelize) برای استقرار تولید"
      ],
      keywords: ["React", "Next.js", "TypeScript", "WebRTC", "Socket.io", "Express.js", "Supabase"],
      startDate: "2025-04",
      url: "https://my-ephem-chat.vercel.app",
      roles: ["توسعه‌دهندهٔ Full Stack"],
      type: "application"
    },
    {
      name: "پلتفرم Modochats",
      description: "پلتفرم عوامل هوش‌مصنوعی برای کسب‌وکارها برای ساخت عوامل سفارشی برای پشتیبانی مشتری، فروش، و مدیریت محتوا",
      highlights: [
        "مشارکت در صفحهٔ فرودگاه، داشبورد، ویجت چت، و بسته‌های SDK",
        "معماری‌کاری سیستم کامپوننتی modular برای monorepo چندبسته‌ای با ابزارهای مشترک",
        "پیاده‌سازی ویژگی‌های چت پشتیبانی مشتری، کانال‌های صدا، و یکپارچه‌سازی کسب‌وکار"
      ],
      keywords: ["Vue.js", "Nuxt.js", "TypeScript", "Node.js", "یکپارچه‌سازی هوش‌مصنوعی"],
      startDate: "2025-04",
      url: "https://modochats.com",
      roles: ["توسعه‌دهندهٔ فرانت‌اند", "مشارکت‌کننده متن‌باز"],
      type: "application"
    },
    {
      name: "Modo Widget - پشتیبانی مشتری",
      description: "ویجت چت پشتیبانی مشتری هوش‌مصنوعی قابل‌شخصی‌سازی و واکنش‌گرا با قابلیت‌های متن و صدا",
      highlights: [
        "ساخت به‌عنوان web component برای یکپارچه‌سازی آسان در فناوری‌های وب مختلف",
        "پیاده‌سازی متمرکز بر DX با پشتیبانی TypeScript جامع و پیکربندی حداقل",
        "پیام‌رسانی بلادرنگ و چت صدا با توان بخشی توسط بک‌اند هوش‌مصنوعی"
      ],
      keywords: ["TypeScript", "Web Components", "Node.js", "ارتباط بلادرنگ"],
      startDate: "2025-04",
      url: "https://github.com/mnodochats/webcomponent",
      roles: ["توسعه‌دهندهٔ فرانت‌اند"],
      type: "library"
    },
    {
      name: "Modo Chat Client SDK",
      description: "TypeScript SDK برای یکپارچه‌سازی سیستم پیام‌رسانی Modochats در اپلیکیشن‌ها",
      highlights: [
        "منتشر‌شده در npm برای مدیریت آسان وابستگی",
        "پشتیبانی TypeScript جامع با صرامت نوع",
        "متمرکز بر تجربهٔ توسعه‌دهنده با مستندات و نمونه‌های واضح"
      ],
      keywords: ["TypeScript", "Node.js", "SDK", "npm"],
      startDate: "2025-04",
      url: "https://github.com/mnodochats/chat_client",
      roles: ["توسعه‌دهندهٔ کتابخانه"],
      type: "library"
    },
    {
      name: "Modo Voice Client SDK",
      description: "SDK چت صدا بلادرنگ با یکپارچه‌سازی هوش‌مصنوعی به‌کمک TypeScript",
      highlights: [
        "پیاده‌سازی پردازشگر Web Audio API سفارشی برای تجزیهٔ جریان صدا",
        "ارتباط صدا بلادرنگ از طریق Socket.io با بک‌اند هوش‌مصنوعی",
        "مدیریت جامع خطا برای مدیریت دستگاه صدا"
      ],
      keywords: ["TypeScript", "Web Audio API", "Socket.io", "Node.js"],
      startDate: "2025-04",
      url: "https://github.com/mnodochats/voice_client",
      roles: ["توسعه‌دهندهٔ کتابخانه"],
      type: "library"
    },
    {
      name: "AR Studio",
      description: "سیستم ثبت هدف AR پویا و قرار‌دادن عناصر (متن/صدا/ویدیو/تصویر)",
      highlights: ["ساخت با Aframe و Mind-ar برای قابلیت‌های AR", "مدیریت دارایی پویا و عملکرد اسکن AR", "پشتیبانی برای انواع رسانه متعدد با طراحی واکنش‌گرا"],
      keywords: ["Vue.js", "Nuxt.js", "Tailwind CSS", "فناوری AR"],
      startDate: "2024",
      roles: ["توسعه‌دهندهٔ فرانت‌اند"],
      type: "application"
    },
    {
      name: "Esghat Dashboard",
      description: "پلتفرم مدیریت خرده‌ریزی و بازیافت برای استان گلستان",
      highlights: [
        "ساخت با Nuxt.js و Pinia برای مدیریت وضعیت",
        "معماری داشبورد مقیاس‌پذیر برای عملیات مدیریت زباله",
        "به‌روزرسانی‌های داده بلادرنگ و گزارش‌دهی"
      ],
      keywords: ["Vue.js", "Nuxt.js", "Pinia", "Dashboard"],
      startDate: "2024",
      url: "https://esghat.ir",
      roles: ["توسعه‌دهندهٔ فرانت‌اند"],
      type: "application"
    },
    {
      name: "Yoozro Dashboard",
      description: "پلتفرم خدمات سفر شهر به شهر برای استان گلستان با یکپارچه‌سازی نقشه‌کشی",
      highlights: ["رابط دوستانه برای رزرو و مدیریت سفر", "یکپارچه‌سازی Leaflet برای نمایش مسیر و مکان", "طراحی واکنش‌گرا برای موبایل و دسکتاپ بهینه‌شده"],
      keywords: ["Vue.js", "Nuxt.js", "JavaScript", "Leaflet", "Flowbite"],
      startDate: "2024",
      url: "https://yoozro.ir",
      roles: ["توسعه‌دهندهٔ فرانت‌اند"],
      type: "application"
    }
  ]
};

export default resumeDataFa;
