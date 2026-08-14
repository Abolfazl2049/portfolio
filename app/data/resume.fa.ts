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
      "برنامه‌نویس٬ توسعه‌دهنده فرانت‌اند با بیش از دو سال تجربه حرفه‌ای عمدتا با فریمورک‌‌های Nuxt/Vue و Next/React در \n پروژه‌هایی در مقیاس کوچک و بزرگ .علاقه‌مند به فعالیت های متن‌باز. همچنان مشتاق یادگیری زبان‌ها/فریم‌ورک/ابزار های جدید و \n عمیق تر ساختن تخصص ."
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
        "کار با تکنولوژی های محبوب و مدرن  Nuxt.js، Tailwind CSS، API REST و WebRTC",
        "تمرکز بر بهینه‌سازی عملکرد، تجربه کاربری و ساختار ماژولار در پروژه‌ها",
        "تجربه‌ی کار تیمی در پیاده سازی سیستم های عظیم اطلاعاتی"
      ]
    }
  ],

  projects: [
    {
      name: "Modochats",
      description:
        "ایجاد agent هوش‌مصنوعی برای کسب‌و‌کارهای شما! پلتفرمی که هر کسی می‌تواند agent خود را ساخت با منبع دانش سفارشی \n و استفاده از آن به روش‌های مختلف مانند پشتیبانی مشتری - مدیریت فروش - مدیریت رسانه‌های اجتماعی - چت متنی/صوتی. \n مسئولیت اصلی و وظیفه بنده در این پروژه انجام لندینگ٬ داشبورد و اس دی کی های dev از جمله chat client, voice client \n و widget.",
      links: [
        {label: "وب‌سایت", url: "https://modochats.com/", hint: "modochats.com"},
        {label: "GitHub", url: "https://github.com/modochats", hint: "github.com/modochats"}
      ]
    },
    {
      name: "Godfather Meet",
      description:
        "یک پلتفرم کامل برای اجرای بازی مافیا به‌صورت آنلاین با امکان ساخت اتاق، انتخاب سناریو، ارتباط صوتی و تصویری، چت نقش‌ها، \n مدیریت بازی توسط گرداننده، سیستم پاداش و جدول رتبه‌بندی رقابتی.",
      links: [
        {label: "وب‌اپلیکیشن", url: "https://meet.godfathergame.ir", hint: "meet.godfathergame.ir"},
        {label: "بات تلگرام", url: "https://t.me/god_father_game_bot", hint: "t.me/god_father_game_bot"}
      ]
    },
    {
      name: "Hazarat",
      description:
        "در حضرات شما میتوانید با خرج سکه درون‌برنامه در قرعه کشی هایی که توسط پلتفرم انجام میشود شرکت کنید و شانس خود را \n برای بردن جوایز امتحان کنید٬ سکه هم میتوانید از طریق انجام ماموریت ها/چالش های مختلف برنامه یا دیدن تلیغ به دست آورید  \n٬ کاملا رایگان ! من در این پروژه مسئولیت وبسایت و پنل مدیریت رو داشتم",
      links: [{label: "وب‌سایت", url: "https://hazarat.uk", hint: "hazarat.uk"}]
    },
    {
      name: "Knik",
      description:
        "با کینیک از طریق انجام بازی های مختلف درون برنامه و کامل کردن ماموریت ها و یا چالش های مختلف پلتفرم درآمد واقعی کسب \n کنید !.ایده اصلی برنامه از پروژه نات کوین الهام گرفته شده بود. مسئولیت اصلی بنده در این پروژه انجام لندینگ و پنل ادمین بود",
      links: [{label: "وب‌سایت", url: "https://knik.uk", hint: "knik.uk"}]
    },
    {
      name: "Cheshmak",
      description:
        "اپ جامع دوست‌یابی در سطح جهانی همچنین با جامعه کاربران فارسی زبان بزرگ ٬ با بیش از ۵۰۰ هزار کاربر. اولین و تنها اپ رایگان \n دوستیابی فارسی. وظیفه تیم ما ساخت ورژن دو این برنامه بود و وظیفه اصلی بنده انجام pwa و ادمین پنل بود",
      links: [{label: "وب‌سایت", url: "https://cheshmak.co.uk", hint: "cheshmak.co.uk"}]
    },
    {
      name: "Shenoma",
      description:
        "پلتفرم جامع رساندن محصولات معدنی از معدن دار به کاربر به صورت مستقیم و بدون واسطه. مسئولیت و وظیفه اصلی بنده در \n این پروژه انجام لندینگ و داشبورد ادمین بود.",
      links: [{label: "لندینگ", url: "https://shenoma.co", hint: "shenoma.co"}]
    }
  ],

  education: [],

  skills: [
    {
      name: "مهارت های اصلی فرانت",
      keywords: ["Vue.js", "Nuxt.js", "React", "Next.js", "TypeScript", "JavaScript"]
    },
    {
      name: "معماری ترجیحی من در پروژه ها",
      keywords: ["ساختار ماژولار سرویس ها", "معماری کامپوننت محور", "تقسیم کد", "Abstraction و ساده سازی"]
    },
    {
      name: "کتابخانه هایی که عموما استفاده میکنم",
      keywords: ["Pinia", "Zustand", "Reka UI", "Shadcn", "Radix UI", "Lodash", "Vueuse", "SwiperJs", "Tailwind", "MomentJs", "Nuxt i18n"]
    },
    {
      name: "ابزارهای توسعه و بیلد و دیلوی",
      keywords: ["Vite", "Rollup", "Terser", "tsx", "Node.js", "گیت هاب اکشن"]
    },
    {
      name: "سیستم‌های ریل-تایم",
      keywords: ["WebRTC (ویدئو/صدا/داده)", "WebSocket", "Socket.io", "Web Audio API"]
    },
    {
      name: "مهارت های بکندی که در انجام پروژه های شخصی یاد گرفتم",
      keywords: ["Express.js", "Sequelize ORM", "طراحی پایگاه داده", "Node.js"]
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
