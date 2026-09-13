export interface Project {
  id: string;
  name: string;
  description: { en: string; fa: string };
  tech: string[];
  github: string;
  live?: string;
  image?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "jobino",
    name: "Jobino",
    description: {
      en: "A full-stack job board with separate candidate and employer roles, covering job posting, search, applications, and resume uploads — with session-based auth and 62 unit tests.",
      fa: "یک جاب‌بورد full-stack با نقش‌های جدا برای کارجو و کارفرما، شامل ثبت آگهی، جست‌وجو، درخواست شغلی و آپلود رزومه — با احراز هویت session-based و ۶۲ تست واحد.",
    },
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Better Auth", "Zod", "Vitest", "Playwright"],
    github: "https://github.com/mina-gharzi/jobboard",
    live: "https://jobboard-6p9y.vercel.app/",
    image: "/projects/jobino.jpg",
    featured: true,
  },
  {
    id: "stayly",
    name: "Stayly",
    description: {
      en: "A multi-hotel booking platform with a complete multi-step flow — search, room selection, guest info, payment, and confirmation — backed by a centralized pricing service layer.",
      fa: "یک پلتفرم رزرو چند-هتلی با فلوی کامل چندمرحله‌ای — جست‌وجو، انتخاب اتاق، اطلاعات مهمان، پرداخت و تایید — با یک لایه‌ی سرویس متمرکز برای قیمت‌گذاری.",
    },
    tech: ["React", "TypeScript", "Zustand", "TanStack Query", "React Hook Form", "Zod", "Playwright"],
    github: "https://github.com/mina-gharzi",
    live: "https://staylybooking.netlify.app/",
    image: "/projects/stayly.png",
    featured: true,
  },
  {
    id: "shopino-admin",
    name: "Shopino Admin Dashboard",
    description: {
      en: "An e-commerce admin dashboard with a centralized five-level RBAC system, shared across route protection, navigation, and sensitive actions.",
      fa: "یک داشبورد مدیریت فروشگاهی با سیستم RBAC پنج‌سطحی متمرکز، مشترک بین محافظت مسیرها، ناوبری و عملیات حساس.",
    },
    tech: ["React", "TypeScript", "Zustand", "React Router", "TanStack Table", "Recharts", "Playwright"],
    github: "https://github.com/mina-gharzi/admin-dashboard",
    live: "https://admindashboardstate.netlify.app/",
    image: "/projects/admin.png",
    featured: false,
  },
  {
    id: "techstore",
    name: "TechStore",
    description: {
      en: "A responsive e-commerce application with product browsing, cart, discount codes, favorites, reviews, and admin features.",
      fa: "یک اپلیکیشن فروشگاهی واکنش‌گرا با مرور محصولات، سبد خرید، کد تخفیف، علاقه‌مندی‌ها، نظرات و بخش مدیریت.",
    },
    tech: ["React", "JavaScript", "React Router", "Context API", "Vite"],
    github: "https://github.com/mina-gharzi/techstore-react",
    live: "https://techstorereactshop.netlify.app/",
    image: "/projects/techstore.png",
    featured: false,
  },
];