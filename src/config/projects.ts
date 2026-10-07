interface Bilingual {
  en: string;
  fa: string;
}

export interface Project {
  id: string;
  name: string;
  description: Bilingual;
  tech: string[];
  github: string;
  live?: string;
  image?: string;
  featured: boolean;

  // Fields used on the project detail page
  overview: Bilingual;
  problem: Bilingual;
  solution: Bilingual;
  features: Bilingual[];
  architecture: Bilingual[];
  challenges: Bilingual;
  learned: Bilingual;
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
    overview: {
      en: "Jobino is a full-stack job board platform built to handle two distinct user roles — candidates and employers — each with their own permissions, dashboards, and workflows.",
      fa: "Jobino یک پلتفرم جاب‌بورد full-stack هست که برای دو نقش کاربری جدا — کارجو و کارفرما — ساخته شده، هرکدوم با دسترسی‌ها، داشبورد و فلوی کاری مخصوص خودشون.",
    },
    problem: {
      en: "Job boards need to serve two very different audiences with conflicting needs on the same platform: employers who need to manage postings and applicants, and candidates who need to discover and apply for jobs — all while keeping each side's data properly isolated.",
      fa: "جاب‌بوردها باید دو مخاطب کاملاً متفاوت با نیازهای متضاد رو روی یک پلتفرم پوشش بدن: کارفرماهایی که باید آگهی و متقاضی‌ها رو مدیریت کنن، و کارجوهایی که باید شغل پیدا کنن و درخواست بدن — و در عین حال داده‌ی هر طرف باید کاملاً جدا و امن بمونه.",
    },
    solution: {
      en: "I designed a role-based authorization system with Better Auth, where every server action checks both the user's role and resource ownership before executing. The data model in Prisma enforces relational integrity, and search includes Persian text normalization so queries match regardless of character variations.",
      fa: "یک سیستم authorization نقش‌محور با Better Auth طراحی کردم که هر server action قبل از اجرا هم نقش کاربر هم مالکیت منبع رو چک می‌کنه. مدل داده در Prisma یکپارچگی رابطه‌ای رو تضمین می‌کنه، و جست‌وجو شامل نرمال‌سازی متن فارسی هست تا صرف‌نظر از تفاوت کاراکترها، نتیجه‌ی درست برگرده.",
    },
    features: [
      { en: "Separate candidate and employer dashboards", fa: "داشبورد جدا برای کارجو و کارفرما" },
      { en: "Job posting, search, and filtering", fa: "ثبت آگهی، جست‌وجو و فیلتر کردن" },
      { en: "Secure resume upload pipeline via Vercel Blob", fa: "پایپ‌لاین امن آپلود رزومه با Vercel Blob" },
      { en: "Persian text normalization in search", fa: "نرمال‌سازی متن فارسی در جست‌وجو" },
    ],
    architecture: [
      { en: "Next.js Server Actions instead of a separate REST API layer", fa: "استفاده از Next.js Server Actions به‌جای یک لایه‌ی REST API جدا" },
      { en: "Prisma + PostgreSQL with relational constraints enforced at the database level", fa: "Prisma و PostgreSQL با محدودیت‌های رابطه‌ای اعمال‌شده در سطح دیتابیس" },
      { en: "Ownership checks on every mutation to prevent cross-user data access", fa: "بررسی مالکیت روی هر عملیات تغییر داده برای جلوگیری از دسترسی بین کاربران" },
    ],
    challenges: {
      en: "Getting authorization right across both roles was the hardest part — a single missed ownership check could expose one employer's applicants to another. I addressed this by centralizing the checks in shared helper functions rather than repeating logic per route.",
      fa: "درست کردن authorization بین دو نقش سخت‌ترین بخش کار بود — یک بررسی مالکیت جا افتاده می‌تونست متقاضی‌های یک کارفرما رو به کارفرمای دیگه نشون بده. این مشکل رو با متمرکز کردن این بررسی‌ها در توابع کمکی مشترک (به‌جای تکرار منطق در هر route) حل کردم.",
    },
    learned: {
      en: "This project pushed me to think about authorization as a system-wide concern rather than a per-page checkbox, and to write tests that specifically target permission boundaries, not just happy paths.",
      fa: "این پروژه باعث شد به authorization به‌عنوان یک دغدغه‌ی کل‌سیستمی فکر کنم، نه یک چک‌باکس تک‌صفحه‌ای، و تست‌هایی بنویسم که مشخصاً مرزهای دسترسی رو هدف می‌گیرن، نه فقط مسیرهای موفقیت‌آمیز.",
    },
  },
  {
    id: "kanban",
    name: "Kanban",
    description: {
      en: "A real-time collaborative Kanban board with drag-and-drop, optimistic updates, role-based board sharing, and security enforced in the database through Row Level Security — verified by 158 automated checks against a live Supabase instance.",
      fa: "یک بورد کانبان collaborative با sync لحظه‌ای، drag-and-drop، optimistic update، اشتراک‌گذاری بورد با نقش‌های مختلف و امنیتی که در خود دیتابیس با Row Level Security اعمال می‌شه — با ۱۵۸ بررسی خودکار روی یک دیتابیس واقعی Supabase تأیید شده.",
    },
    tech: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Row Level Security", "TanStack Query", "dnd-kit", "Tailwind CSS", "Vitest", "Playwright"],
    github: "https://github.com/mina-gharzi/kanban-app",
    live: "https://kanban-app-nine-red.vercel.app/",
    image: "/projects/kanbanapp.png",
    featured: true,
    overview: {
      en: "Kanban is a Persian-first (RTL) board app where several people can work on the same board at once. Changes appear live for everyone, boards can be shared with owner, editor, and viewer roles, and accounts can be deleted safely with ownership transfer.",
      fa: "Kanban یک اپ بورد فارسی‌محور (RTL) هست که چند نفر می‌تونن هم‌زمان روی یک بورد کار کنن. تغییرات برای همه لحظه‌ای نشون داده می‌شه، بورد با نقش‌های مالک، ویرایشگر و فقط‌خواندنی به اشتراک گذاشته می‌شه، و حذف حساب با انتقال مالکیت بوردها به‌شکل امن انجام می‌شه.",
    },
    problem: {
      en: "Collaborative boards combine hard problems: several tabs and users editing the same data at once, drags that must feel instant yet stay in the right order, and sharing rules that must hold even if someone bypasses the UI and talks to the database API directly.",
      fa: "بوردهای collaborative چند مشکل سخت رو با هم دارن: چند تب و چند کاربر که هم‌زمان روی یک داده کار می‌کنن، drag که باید فوری حس بشه ولی ترتیبش درست بمونه، و قوانین اشتراک‌گذاری که باید حتی اگه کسی UI رو دور بزنه و مستقیم با API دیتابیس حرف بزنه، برقرار بمونن.",
    },
    solution: {
      en: "I treated the database as the security boundary: Row Level Security policies and role helper functions decide who can read or change what, while the UI only mirrors those rules. On the client, a per-board mutation queue keeps writes in order, optimistic updates make drags feel instant, and a conflict check compares the actual edited fields before overwriting.",
      fa: "دیتابیس رو به‌عنوان مرز امنیتی در نظر گرفتم: policyهای Row Level Security و توابع کمکی نقش‌ها تصمیم می‌گیرن چه کسی چه چیزی رو ببینه یا تغییر بده، و UI فقط همین قوانین رو منعکس می‌کنه. سمت کلاینت، یک صف mutation برای هر بورد ترتیب نوشتن‌ها رو حفظ می‌کنه، optimistic update باعث می‌شه drag فوری حس بشه، و یک بررسی تعارض قبل از بازنویسی، مقدار واقعی فیلدهای در حال ویرایش رو مقایسه می‌کنه.",
    },
    features: [
      { en: "Drag-and-drop for cards and columns with live sync across tabs and users", fa: "drag-and-drop کارت و ستون با sync لحظه‌ای بین تب‌ها و کاربرها" },
      { en: "Board sharing by email invite with owner, editor, and viewer roles", fa: "اشتراک‌گذاری بورد با دعوت ایمیلی و نقش‌های مالک، ویرایشگر و فقط‌خواندنی" },
      { en: "Account deletion with password re-check, ownership transfer, and data export", fa: "حذف حساب با تأیید دوباره‌ی رمز، انتقال مالکیت و خروجی گرفتن از داده‌ها" },
      { en: "RTL Persian interface with light/dark themes and automated accessibility checks", fa: "رابط فارسی RTL با تم روشن/تیره و بررسی‌های خودکار دسترسی‌پذیری" },
    ],
    architecture: [
      { en: "Row Level Security as the real permission layer, with SECURITY DEFINER helpers pinned to an empty search_path", fa: "Row Level Security به‌عنوان لایه‌ی اصلی دسترسی، با توابع کمکی SECURITY DEFINER که search_path اون‌ها خالی پین شده" },
      { en: "Fractional positions and a database RPC so a move updates one row instead of renumbering a whole column", fa: "position کسری و یک RPC در دیتابیس تا جابه‌جایی فقط یک سطر رو عوض کنه، نه شماره‌گذاری دوباره‌ی کل ستون" },
      { en: "Server-side route protection in proxy.ts plus a client AuthGuard for sessions that expire mid-use", fa: "محافظت مسیرها سمت سرور در proxy.ts به‌همراه AuthGuard سمت کلاینت برای نشست‌هایی که وسط کار منقضی می‌شن" },
      { en: "Realtime events handled by pure, tested functions, with a resync after reconnects because missed events are not replayed", fa: "رویدادهای realtime با توابع pure و تست‌شده مدیریت می‌شن، و بعد از قطع و وصل شدن اتصال resync انجام می‌شه چون رویدادهای از‌دست‌رفته دوباره پخش نمی‌شن" },
    ],
    challenges: {
      en: "The hardest part was making optimistic updates, realtime events, and concurrent edits agree with each other. A realtime event must not overwrite a value that is still in flight, a delete event can arrive twice, and Supabase does not replay events missed during a network drop. I solved it with a write queue, idempotent cache updates, and a refetch whenever the channel reconnects.",
      fa: "سخت‌ترین بخش این بود که optimistic updateها، رویدادهای realtime و ویرایش‌های هم‌زمان با هم سازگار بمونن. یک رویداد realtime نباید مقداری رو که هنوز در جریانه بازنویسی کنه، یک رویداد حذف ممکنه دو بار برسه، و Supabase رویدادهای از‌دست‌رفته‌ی وسط قطعی شبکه رو دوباره پخش نمی‌کنه. این رو با یک صف نوشتن، به‌روزرسانی‌های idempotent کش و refetch بعد از هر اتصال مجدد کانال حل کردم.",
    },
    learned: {
      en: "I learned to test security where it actually lives. Instead of only checking the UI, I wrote suites that call the database as different users and try to cross ownership and role boundaries — and I learned to be honest about what a test cannot prove, which is why unverifiable checks are reported separately rather than counted as passes.",
      fa: "یاد گرفتم امنیت رو همون جایی تست کنم که واقعاً هست. به‌جای فقط چک کردن UI، سوئیت‌هایی نوشتم که دیتابیس رو با کاربرهای مختلف صدا می‌زنن و سعی می‌کنن از مرز مالکیت و نقش‌ها رد بشن — و یاد گرفتم درباره‌ی چیزی که یک تست نمی‌تونه ثابت کنه صادق باشم، به همین خاطر بررسی‌های تأییدنشدنی جدا گزارش می‌شن و جزو موفق‌ها شمرده نمی‌شن.",
    },
  },
  {
    id: "stayly",
    name: "Stayly",
    description: {
      en: "A multi-hotel booking platform with a complete multi-step flow — search, room selection, guest info, payment, and confirmation — backed by a centralized pricing service layer.",
      fa: "یک پلتفرم رزرو چند-هتلی با فلوی کامل چندمرحله‌ای — جست‌وجو، انتخاب اتاق، اطلاعات مهمان، پرداخت و تایید — با یک لایه‌ی سرویس متمرکز برای قیمت‌گذاری.",
    },
    tech: ["React", "TypeScript", "Zustand", "TanStack Query", "React Hook Form", "Zod", "Playwright"],
    github: "https://github.com/mina-gharzi/Stayly",
    live: "https://staylybooking.netlify.app/",
    image: "/projects/stayly.png",
    featured: true,
    overview: {
      en: "Stayly is a multi-hotel booking platform that walks users through a complete reservation flow — from searching available rooms to confirming payment — while keeping pricing and business logic decoupled from the UI.",
      fa: "Stayly یک پلتفرم رزرو چند-هتلی هست که کاربر رو از جست‌وجوی اتاق‌های موجود تا تایید پرداخت، در یک فلوی کامل رزرو همراهی می‌کنه، در حالی که منطق قیمت‌گذاری و کسب‌وکار از UI جدا نگه داشته شده.",
    },
    problem: {
      en: "Multi-step booking flows are easy to get wrong: pricing rules, room availability, and guest data all need to stay in sync across several screens without losing state if the user goes back and forth.",
      fa: "فلوهای رزرو چندمرحله‌ای به‌راحتی می‌تونن دچار مشکل بشن: قواعد قیمت‌گذاری، موجودی اتاق و اطلاعات مهمان باید در چند صفحه هماهنگ بمونن، بدون از دست رفتن state اگه کاربر جلو و عقب بره.",
    },
    solution: {
      en: "I built a service-layer architecture that centralizes booking and pricing logic separately from UI components, with Zustand managing persistent booking state across steps and TanStack Query handling server data and caching.",
      fa: "یک معماری service-layer ساختم که منطق رزرو و قیمت‌گذاری رو جدا از کامپوننت‌های UI متمرکز می‌کنه، با Zustand برای مدیریت state پایدار رزرو در طول مراحل و TanStack Query برای مدیریت داده‌ی سرور و کش.",
    },
    features: [
      { en: "Multi-step flow: search, room selection, guest info, payment, confirmation", fa: "فلوی چندمرحله‌ای: جست‌وجو، انتخاب اتاق، اطلاعات مهمان، پرداخت، تایید" },
      { en: "Persistent booking state across steps", fa: "state پایدار رزرو در طول مراحل مختلف" },
      { en: "Centralized pricing service, independent from UI", fa: "سرویس قیمت‌گذاری متمرکز، مستقل از UI" },
      { en: "Users can only access their own reservations", fa: "دسترسی کاربر فقط به رزروهای خودش" },
    ],
    architecture: [
      { en: "Service layer separating booking/pricing logic from components", fa: "لایه‌ی سرویس جدا برای منطق رزرو و قیمت‌گذاری از کامپوننت‌ها" },
      { en: "Zustand for cross-step client state persistence", fa: "Zustand برای پایداری state کلاینت در طول مراحل" },
      { en: "TanStack Query for server state and caching", fa: "TanStack Query برای مدیریت state سرور و کش" },
    ],
    challenges: {
      en: "Keeping pricing calculations consistent across steps — while still allowing users to go back and change room selections — required treating pricing as a derived value recalculated from a single source of truth, rather than something stored and mutated per step.",
      fa: "حفظ یکپارچگی محاسبات قیمت در طول مراحل — در حالی که کاربر می‌تونست برگرده و انتخاب اتاق رو تغییر بده — نیاز داشت که قیمت رو به‌عنوان یک مقدار مشتق‌شده از یک منبع واحد در نظر بگیرم، نه چیزی که در هر مرحله ذخیره و تغییر داده بشه.",
    },
    learned: {
      en: "I learned how valuable a dedicated service layer is once business logic (like pricing) grows beyond trivial — it made the code far easier to test and reason about compared to keeping that logic inside components.",
      fa: "یاد گرفتم وقتی منطق کسب‌وکار (مثل قیمت‌گذاری) از حالت ساده فراتر می‌ره، داشتن یک لایه‌ی سرویس جدا چقدر ارزشمنده — کد رو خیلی راحت‌تر برای تست و درک کردن می‌کنه، در مقایسه با نگه‌داشتن اون منطق داخل کامپوننت‌ها.",
    },
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
    overview: {
      en: "Shopino Admin is an e-commerce administration dashboard covering analytics, orders, products, customers, and team management, built around a single shared permission system.",
      fa: "Shopino Admin یک داشبورد مدیریت فروشگاهی هست که آنالیتیکس، سفارش‌ها، محصولات، مشتریان و مدیریت تیم رو پوشش می‌ده، همه بر پایه‌ی یک سیستم دسترسی مشترک.",
    },
    problem: {
      en: "Admin dashboards with multiple team roles often end up with permission logic scattered across route guards, navigation menus, and individual action buttons — making it easy for one part of the app to allow something another part correctly blocks.",
      fa: "داشبوردهای ادمین با چند نقش تیمی معمولاً منطق دسترسی رو پخش می‌کنن بین route guardها، منوهای ناوبری و دکمه‌های عملیات جدا — که باعث می‌شه یک بخش از اپ چیزی رو مجاز کنه که بخش دیگه درست جلوشو گرفته.",
    },
    solution: {
      en: "I built a centralized five-level RBAC system where a single source of truth for permissions drives route protection, what appears in navigation, and which action buttons are enabled — so the rules only need to be defined once.",
      fa: "یک سیستم RBAC پنج‌سطحی متمرکز ساختم که یک منبع واحد برای دسترسی‌ها، هم محافظت مسیرها، هم چیزی که در ناوبری نشون داده می‌شه، هم فعال‌بودن دکمه‌های عملیات رو کنترل می‌کنه — یعنی قوانین فقط یک‌بار تعریف می‌شن.",
    },
    features: [
      { en: "Five-level role-based access control", fa: "کنترل دسترسی پنج‌سطحی نقش‌محور" },
      { en: "Centralized routing tied to permission rules", fa: "روتینگ متمرکز مرتبط با قوانین دسترسی" },
      { en: "Analytics, orders, products, customers, and team modules", fa: "ماژول‌های آنالیتیکس، سفارش، محصول، مشتری و تیم" },
      { en: "Responsive, data-driven interfaces with reusable components", fa: "رابط‌های واکنش‌گرا و داده‌محور با کامپوننت‌های قابل‌استفاده‌ی مجدد" },
    ],
    architecture: [
      { en: "Single permission source shared by routes, nav, and actions", fa: "یک منبع دسترسی مشترک بین مسیرها، ناوبری و عملیات" },
      { en: "TanStack Table for large, sortable/filterable data grids", fa: "TanStack Table برای گریدهای داده‌ی بزرگ و قابل مرتب‌سازی/فیلتر" },
      { en: "Recharts for dashboard analytics visualizations", fa: "Recharts برای نمودارهای آنالیتیکس داشبورد" },
    ],
    challenges: {
      en: "The biggest challenge was avoiding duplicated permission checks — early versions had route guards and UI visibility checked separately, which drifted out of sync. Centralizing the rule definitions fixed this at the source.",
      fa: "بزرگ‌ترین چالش جلوگیری از تکرار بررسی دسترسی بود — نسخه‌های اولیه route guard و نمایش UI رو جدا چک می‌کردن که با هم هماهنگ نمی‌موندن. متمرکز کردن تعریف قوانین این مشکل رو از ریشه حل کرد.",
    },
    learned: {
      en: "I came away with a much clearer sense of how permission systems should be architected: as one source of truth consumed everywhere, not re-implemented per feature.",
      fa: "درک خیلی روشن‌تری از نحوه‌ی طراحی سیستم‌های دسترسی به دست آوردم: یک منبع واحد که همه‌جا استفاده می‌شه، نه پیاده‌سازی جداگانه در هر بخش.",
    },
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
    overview: {
      en: "TechStore is a full e-commerce front-end covering the core shopping experience — browsing, cart, discounts, favorites, and reviews — plus basic admin management, built early in my React journey.",
      fa: "TechStore یک فرانت‌اند فروشگاهی کامل هست که تجربه‌ی اصلی خرید — مرور، سبد خرید، تخفیف، علاقه‌مندی و نظرات — به‌همراه مدیریت پایه‌ی ادمین رو پوشش می‌ده، ساخته‌شده در ابتدای مسیر یادگیری React.",
    },
    problem: {
      en: "An e-commerce front-end needs to handle shared state (cart, favorites, auth) across many unrelated pages without prop-drilling, while also differentiating what unauthenticated and unauthorized users can access.",
      fa: "یک فرانت‌اند فروشگاهی باید state مشترک (سبد خرید، علاقه‌مندی‌ها، احراز هویت) رو بین صفحات مختلف بدون prop-drilling مدیریت کنه، و همزمان دسترسی کاربران احراز‌هویت‌نشده و غیرمجاز رو از هم جدا کنه.",
    },
    solution: {
      en: "I used React's Context API to share cart, favorites, and user state globally, and implemented protected routes that behave differently depending on whether a user is logged out versus logged in without the right permissions.",
      fa: "از Context API ری‌اکت برای اشتراک‌گذاری سراسری state سبد خرید، علاقه‌مندی و کاربر استفاده کردم، و مسیرهای محافظت‌شده‌ای پیاده کردم که رفتار متفاوتی برای کاربر خارج‌شده در مقابل کاربر واردشده‌ی بدون دسترسی درست دارن.",
    },
    features: [
      { en: "Product browsing with discount codes and favorites", fa: "مرور محصول با کد تخفیف و علاقه‌مندی‌ها" },
      { en: "Shopping cart and order management", fa: "سبد خرید و مدیریت سفارش" },
      { en: "Customer reviews", fa: "نظرات مشتریان" },
      { en: "Admin features for managing products and users", fa: "بخش ادمین برای مدیریت محصولات و کاربران" },
    ],
    architecture: [
      { en: "Context API for global cart/favorites/auth state", fa: "Context API برای state سراسری سبد خرید/علاقه‌مندی/احراز هویت" },
      { en: "Protected routes with distinct unauthenticated vs. unauthorized behavior", fa: "مسیرهای محافظت‌شده با رفتار جدا برای کاربر خارج‌شده و غیرمجاز" },
      { en: "Vite for fast local development", fa: "Vite برای توسعه‌ی سریع لوکال" },
    ],
    challenges: {
      en: "This was one of my earlier projects, so managing global state without a dedicated library (like Zustand) inside Context API taught me firsthand where Context starts to strain — which shaped how I approached state management in later projects.",
      fa: "این یکی از پروژه‌های اولیه‌ی من بود، پس مدیریت state سراسری بدون یک کتابخونه‌ی مخصوص (مثل Zustand) با Context API بهم به‌صورت عملی نشون داد Context از کجا شروع به فشار آوردن می‌کنه — که روی نحوه‌ی برخوردم با مدیریت state در پروژه‌های بعدی تاثیر گذاشت.",
    },
    learned: {
      en: "Building TechStore is what pushed me toward learning dedicated state management tools for later, more complex projects — a direct line from this project to using Zustand in Stayly and Shopino Admin.",
      fa: "ساخت TechStore چیزی بود که من رو به سمت یادگیری ابزارهای مخصوص مدیریت state برای پروژه‌های پیچیده‌تر بعدی سوق داد — یک خط مستقیم از این پروژه تا استفاده از Zustand در Stayly و Shopino Admin.",
    },
  },
];