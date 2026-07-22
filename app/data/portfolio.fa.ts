import type {PortfolioData} from "@/types/portfolio.types";

const portfolioFa: PortfolioData = {
  profile: {
    name: "ابوالفضل شاهینی",
    title: "توسعه‌دهنده فرانت‌اند",
    location: "استان گلستان - ایران",
    summary:
      "برنامه‌نویس٬ توسعه‌دهنده فرانت‌اند با بیش از دو سال تجربه حرفه‌ای عمدتا با فریمورک Nuxt/Vue و Next/React در پروژه‌هایی در مقیاس کوچک و بزرگ .علاقه‌مند به فعالیت های متن‌باز. همچنان مشتاق یادگیری زبان‌ها/فریم‌ورک/ابزار های جدید و عمیق تر ساختن تخصص .",
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
      location: "گلستان، گرگان - حضوری",
      type: "تمام‌وقت",
      positions: [
        {
          title: "توسعه‌دهندهٔ فرانت‌اند",
          start: "بهمن ۱۴۰۲",
          end: "خرداد ۱۴۰۵",
          description: [
            "توسعه و نگهداری داشبوردهای مدیریتی، وب‌اپلیکیشن‌های PWA و وب‌سایت‌های مقیاس‌پذیر",

            "به‌روز نگه داشتن پروژه- منتقل بخش‌هایی از پروژه از JavaScript به TypeScript برای افزایش پایداری و خوانایی کد",

            "کار با تکنولوژی های محبوب و مدرن  Nuxt.js، Tailwind CSS، API REST و WebRTC",

            "تمرکز بر بهینه‌سازی عملکرد، تجربه کاربری و ساختار ماژولار در پروژه‌ها"
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
        "i-devicon-supabase",
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
        "ایجاد agent هوش‌مصنوعی برای کسب‌و‌کارهای شما! پلتفرمی که هر کسی می‌تواند agent خود را ساخت با منبع دانش سفارشی و استفاده از آن به روش‌های مختلف مانند پشتیبانی مشتری - مدیریت فروش - مدیریت رسانه‌های اجتماعی - چت متنی/صوتی. مسئولیت اصلی و وظیفه بنده در این پروژه انجام لندینگ٬ داشبورد و اس دی کی های dev از جمله chat client, voice client و widget.",
      thumbnail: "/img/projects/modochats-logo.svg",
      status: "فعال",
      opensource: false,
      links: [
        {label: "وب‌سایت", to: "https://modochats.com/", icon: "i-mdi-link"},
        {label: "GitHub", to: "https://github.com/modochats", icon: "i-mdi-github"}
      ],
      icons: ["i-logos-nuxt-icon", "i-logos-vue", "i-logos-typescript-icon", "i-devicon-nodejs"],
      category: "freelance"
    },
    {
      name: "Godfather Meet",
      thumbnail: "/img/projects/godfather-meet-logo.png",
      description:
        "یک پلتفرم کامل برای اجرای بازی مافیا به‌صورت آنلاین با امکان ساخت اتاق، انتخاب سناریو، ارتباط صوتی و تصویری، چت نقش‌ها، مدیریت بازی توسط گرداننده، سیستم پاداش و جدول رتبه‌بندی رقابتی.",
      status: "فعال",
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
      name: "Shenoma",
      thumbnail: "/img/projects/shenoma-logo.png",
      description:
        "پلتفرم جامع رساندن محصولات معدنی از معدن دار به کاربر به صورت مستقیم و بدون     واسطه. مسئولیت و وظیفه اصلی بنده در این پروژه انجام لندینگ و داشبورد ادمین بود.",
      status: "فعال",
      opensource: false,
      links: [
        {
          label: "لندینگ",
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
        "ثبت تارگت AR پویا و قرار دادن عناصری در اطراف آن‌ها مانند متن/صدا/ویدیو/تصویر. و اسکن تارگت برای اعمال AR. پیاده‌سازی‌شده با استفاده از Aframe و Mind-ar. به دلیل خصوصی بودن پروژه برای یک ارگان٬ امکان ارائه لینک ندارم .",
      status: "فعال",
      opensource: true,
      links: [],
      icons: ["i-logos-nuxt-icon", "i-logos-vue", "i-logos-tailwindcss-icon", "i-logos-mindar"],
      category: "freelance"
    },
    {
      name: "Esghat Dashboard",
      description: "پلتفرم مدیریت خودروهای اسقاط و بازیافت آنان. برای استان گلستان . از اونجایی که ادمین پنل هست متاسفانه امکان ارائه لینک وجود ندارد.",
      thumbnail: "/img/projects/esghat-logo.png",
      status: "فعال",
      opensource: false,
      icons: ["i-logos-nuxt-icon", "i-logos-vue", "i-logos-pinia"],
      category: "freelance"
    },
    {
      name: "Yoozro Dashboard",
      description: "پلتفرم خدمات سفر شهر به شهر آسان‌. برای استان گلستان.  از اونجایی که ادمین پنل هست متاسفانه امکان ارائه لینک وجود ندارد.",
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

export default portfolioFa;
