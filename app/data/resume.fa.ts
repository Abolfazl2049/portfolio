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
        url: "https://www.linkedin.com/in/abolfazl-shahini/",
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
      "برنامه‌نویس٬ توسعه‌دهنده فرانت‌اند با بیش از دو سال تجربه عمدتا با فریمورک nuxt/vue در پروژه‌هایی در مقیاس کوچک و بزرگ .علاقه‌مند به فعالیت های متن‌باز. همچنان مشتاق یادگیری زبان‌ها/فریم‌ورک/ابزار های جدید و عمیق تر ساختن تخصص ."
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
    },
    {
      company: "Modochats",
      position: "مشارکت‌کننده و نگهدارنده پروژه‌های متن‌باز",
      location: "گلستان، گرگان - هیبرید",
      startDate: "2025-04",
      endDate: "2026-03",
      highlights: [
        "مشارکت در توسعه و نگهداری پروژه‌های متن‌باز با تمرکز بر کیفیت کد و تجربه توسعه‌دهنده",
        "طراحی و پیاده‌سازی ویجت‌ها و ابزارهای کاربردی و سبک برای استفاده در محصولات مختلف",
        "کار با CDNها و مدیریت انتشار پکیج‌ها در npm",
        "طراحی و اجرای فرآیندهای build و توسعه با ابزارهایی مانند Rollup، Node.js و tsx",
        "تمرکز بر بهبود تجربه توسعه‌دهنده (DX) و ساده‌سازی استفاده از کتابخانه‌ها"
      ]
    }
  ],

  education: [
    {
      institution: "دانشگاه علمی کاربردی خانه کارگر (گرگان)",
      area: "",
      studyType: "کاردانی",
      startDate: "2025-09",
      courses: []
    }
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
      name: "بک‌اند (در حد آشنایی)",
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
      name: "کامپیوتر",
      date: "2025",
      issuer: "Duolingo",
      url: "",
      summary: "در حال انجام"
    }
  ]
};

export default resumeDataFa;
