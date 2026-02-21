export interface Project {
    id: string;
    title: string;
    description: string;
    techStack: string[];
    category: "web" | "mobile" | "open-source" | "other";
    githubUrl?: string;
    liveUrl?: string;
    featured: boolean;
    gradient: string;
}

export interface Experience {
    id: string;
    type: "work" | "education";
    title: string;
    company: string;
    period: string;
    description: string;
    skills?: string[];
}

export interface Skill {
    name: string;
    icon: string;
    color: string; // brand hex color for glow effect
}

export const personalInfo = {
    name: "Ahmad Affandi",
    roles: ["Full Stack Developer", "Mobile Developer", "React Enthusiast", "Open Source Contributor"],
    bio: "Saya membangun produk digital yang menggabungkan logika yang kuat dengan desain yang indah. Passionate dalam menciptakan pengalaman web yang cepat, modern, dan berkesan.",
    bio2: "Full Stack Developer yang bekerja di RSUD dr. Soeratno Gemolong Sragen sejak 2023, sambil menempuh pendidikan S1 di Universitas Duta Bangsa Surakarta. Bersemangat dalam menghadirkan solusi teknologi di bidang kesehatan.",
    email: "ahmadaffandy08@gmail.com",
    location: "Surakarta, Jawa Tengah, Indonesia",
    github: "https://github.com/ahmad-affandi08",
    linkedin: "https://linkedin.com/in/ahmadaffandi",
    twitter: "https://twitter.com/ahmadaffandi",
    cvUrl: "/cv-ahmad-affandi.pdf",
};

export const stats = [
    { label: "Tahun Pengalaman", value: 2, suffix: "+" },
    { label: "Proyek Selesai", value: 15, suffix: "+" },
    { label: "Klien Puas", value: 10, suffix: "+" },
    { label: "Kontribusi GitHub", value: 200, suffix: "+" },
];

export const skills: { category: string; icon: string; items: Skill[] }[] = [
    {
        category: "Frontend",
        icon: "⚡",
        items: [
            { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB", color: "#61DAFB" },
            { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/000000", color: "#000000" },
            { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6", color: "#3178C6" },
            { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4", color: "#06B6D4" },
            { name: "HTML5", icon: "https://cdn.simpleicons.org/html5/E34F26", color: "#E34F26" },
            { name: "CSS3", icon: "https://cdn.simpleicons.org/css/1572B6", color: "#1572B6" },
        ],
    },
    {
        category: "Backend",
        icon: "🔧",
        items: [
            { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933", color: "#339933" },
            { name: "Express", icon: "https://cdn.simpleicons.org/express/000000", color: "#404040" },
            { name: "NestJS", icon: "https://cdn.simpleicons.org/nestjs/E0234E", color: "#E0234E" },
            { name: "REST API", icon: "https://cdn.simpleicons.org/openapiinitiative/6BA539", color: "#6BA539" },
            { name: "GraphQL", icon: "https://cdn.simpleicons.org/graphql/E10098", color: "#E10098" },
            { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB", color: "#3776AB" },
        ],
    },
    {
        category: "Database",
        icon: "🗄️",
        items: [
            { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1", color: "#4169E1" },
            { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1", color: "#4479A1" },
            { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248", color: "#47A248" },
            { name: "Redis", icon: "https://cdn.simpleicons.org/redis/FF4438", color: "#FF4438" },
            { name: "Prisma", icon: "https://cdn.simpleicons.org/prisma/2D3748", color: "#5A67D8" },
            { name: "Supabase", icon: "https://cdn.simpleicons.org/supabase/3ECF8E", color: "#3ECF8E" },
        ],
    },
    {
        category: "DevOps & Tools",
        icon: "🚀",
        items: [
            { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED", color: "#2496ED" },
            { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032", color: "#F05032" },
            { name: "CI/CD", icon: "https://cdn.simpleicons.org/githubactions/2088FF", color: "#2088FF" },
            { name: "Linux", icon: "https://cdn.simpleicons.org/linux/FCC624", color: "#FCC624" },
            { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/000000", color: "#555555" },
            { name: "Laravel", icon: "https://cdn.simpleicons.org/laravel/FF2D20", color: "#FF2D20" },
        ],
    },
];

export interface TechItem {
    name: string;
    icon: string; // Simple Icons CDN URL
}

export const techMarquee: TechItem[] = [
    { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
    { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/000000" },
    { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
    { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
    { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
    { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
    { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
    { name: "GraphQL", icon: "https://cdn.simpleicons.org/graphql/E10098" },
    { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
    { name: "Redis", icon: "https://cdn.simpleicons.org/redis/FF4438" },
    { name: "NestJS", icon: "https://cdn.simpleicons.org/nestjs/E0234E" },
    { name: "Prisma", icon: "https://cdn.simpleicons.org/prisma/2D3748" },
    { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/000000" },
    { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
    { name: "Linux", icon: "https://cdn.simpleicons.org/linux/FCC624" },
    { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
    { name: "Express", icon: "https://cdn.simpleicons.org/express/000000" },
    { name: "Supabase", icon: "https://cdn.simpleicons.org/supabase/3ECF8E" },
    { name: "Figma", icon: "https://cdn.simpleicons.org/figma/F24E1E" },
    { name: "Laravel", icon: "https://cdn.simpleicons.org/laravel/FF2D20" },
    { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
];

export const projects: Project[] = [
    {
        id: "1",
        title: "SaaS Dashboard Platform",
        description: "Platform manajemen bisnis all-in-one dengan analytics real-time, manajemen tim, dan laporan otomatis.",
        techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind"],
        category: "web",
        githubUrl: "https://github.com/ahmadaffandi/saas-dashboard",
        liveUrl: "https://saas-dashboard.vercel.app",
        featured: true,
        gradient: "from-violet-600 to-indigo-600",
    },
    {
        id: "2",
        title: "E-Commerce Microservices",
        description: "Sistem e-commerce berbasis microservices dengan payment gateway, inventory management, dan real-time notifications.",
        techStack: ["Node.js", "NestJS", "MongoDB", "Redis", "Docker"],
        category: "web",
        githubUrl: "https://github.com/ahmadaffandi/ecommerce-ms",
        featured: true,
        gradient: "from-cyan-500 to-blue-600",
    },
    {
        id: "3",
        title: "AI Content Generator",
        description: "Aplikasi web untuk generate konten marketing menggunakan OpenAI API dengan fitur multi-bahasa dan export.",
        techStack: ["Next.js", "OpenAI API", "Supabase", "Tailwind"],
        category: "web",
        githubUrl: "https://github.com/ahmadaffandi/ai-content",
        liveUrl: "https://ai-content.vercel.app",
        featured: true,
        gradient: "from-pink-500 to-rose-600",
    },
    {
        id: "4",
        title: "Open Source UI Library",
        description: "Koleksi komponen React yang dapat digunakan ulang dengan dukungan TypeScript dan Storybook documentation.",
        techStack: ["React", "TypeScript", "Storybook", "Rollup"],
        category: "open-source",
        githubUrl: "https://github.com/ahmadaffandi/ui-lib",
        featured: false,
        gradient: "from-emerald-500 to-teal-600",
    },
    {
        id: "5",
        title: "Task Management App",
        description: "Aplikasi manajemen tugas kolaboratif dengan fitur drag-and-drop, real-time sync, dan notifikasi.",
        techStack: ["React", "Socket.io", "Express", "MongoDB"],
        category: "web",
        githubUrl: "https://github.com/ahmadaffandi/taskapp",
        liveUrl: "https://taskapp.vercel.app",
        featured: false,
        gradient: "from-orange-500 to-amber-600",
    },
    {
        id: "6",
        title: "DevBlog Platform",
        description: "Platform blogging untuk developer dengan syntax highlighting, MDX support, dan SEO optimization.",
        techStack: ["Next.js", "MDX", "Tailwind", "Vercel"],
        category: "open-source",
        githubUrl: "https://github.com/ahmadaffandi/devblog",
        liveUrl: "https://devblog.vercel.app",
        featured: false,
        gradient: "from-purple-500 to-violet-600",
    },
];

export const experiences: Experience[] = [
    {
        id: "1",
        type: "work",
        title: "Full Stack Developer",
        company: "RSUD dr. Soeratno Gemolong Sragen",
        period: "2023 — Sekarang",
        description: "Mengembangkan dan memelihara sistem informasi rumah sakit, termasuk aplikasi manajemen pasien, rekam medis elektronik, dan sistem pelaporan. Berkolaborasi dengan tim medis untuk menciptakan solusi teknologi yang meningkatkan efisiensi pelayanan kesehatan.",
        skills: ["Laravel", "React", "MySQL", "REST API", "Docker"],
    },
    {
        id: "2",
        type: "education",
        title: "S1 Teknik Informatika",
        company: "Universitas Duta Bangsa Surakarta",
        period: "2023 — Sekarang",
        description: "Menempuh pendidikan S1 sambil berprofesi sebagai Full Stack Developer. Fokus pada pengembangan sistem informasi, rekayasa perangkat lunak, dan teknologi web modern.",
        skills: ["Sistem Informasi", "Software Engineering", "Web Development", "Mobile Development"],
    },
];
