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
}

export const personalInfo = {
    name: "Ahmad Affandi",
    roles: ["Full Stack Developer", "Mobile Developer", "React Enthusiast", "Open Source Contributor"],
    bio: "Saya membangun produk digital yang menggabungkan logika yang kuat dengan desain yang indah. Passionate dalam menciptakan pengalaman web yang cepat, modern, dan berkesan.",
    bio2: "Dengan pengalaman lebih dari 3 tahun di industri teknologi, saya telah membantu berbagai startup dan perusahaan mewujudkan visi digital mereka menjadi kenyataan.",
    email: "ahmadaffandy08@gmail.com",
    location: "Surakarta, Jawa Tengah, Indonesia",
    github: "https://github.com/ahmad-affandi08",
    linkedin: "https://linkedin.com/in/ahmadaffandi",
    twitter: "https://twitter.com/ahmadaffandi",
    cvUrl: "/cv-ahmad-affandi.pdf",
};

export const stats = [
    { label: "Tahun Pengalaman", value: 3, suffix: "+" },
    { label: "Proyek Selesai", value: 40, suffix: "+" },
    { label: "Klien Puas", value: 25, suffix: "+" },
    { label: "Kontribusi GitHub", value: 500, suffix: "+" },
];

export const skills: { category: string; items: Skill[] }[] = [
    {
        category: "Frontend",
        items: [
            { name: "React", icon: "⚛️" },
            { name: "Next.js", icon: "▲" },
            { name: "TypeScript", icon: "🔷" },
            { name: "Tailwind CSS", icon: "🎨" },
            { name: "HTML5", icon: "🌐" },
            { name: "CSS3", icon: "💅" },
        ],
    },
    {
        category: "Backend",
        items: [
            { name: "Node.js", icon: "🟢" },
            { name: "Express", icon: "🚂" },
            { name: "NestJS", icon: "🐈" },
            { name: "REST API", icon: "🔗" },
            { name: "GraphQL", icon: "◈" },
            { name: "Python", icon: "🐍" },
        ],
    },
    {
        category: "Database",
        items: [
            { name: "PostgreSQL", icon: "🐘" },
            { name: "MySQL", icon: "🐬" },
            { name: "MongoDB", icon: "🍃" },
            { name: "Redis", icon: "🔴" },
            { name: "Prisma", icon: "◭" },
            { name: "Supabase", icon: "⚡" },
        ],
    },
    {
        category: "DevOps & Tools",
        items: [
            { name: "Docker", icon: "🐳" },
            { name: "Git", icon: "🌿" },
            { name: "CI/CD", icon: "🔄" },
            { name: "Linux", icon: "🐧" },
            { name: "Vercel", icon: "▲" },
            { name: "AWS", icon: "☁️" },
        ],
    },
];

export const techMarquee = [
    "React", "Next.js", "TypeScript", "Node.js", "PostgreSQL",
    "Docker", "Tailwind CSS", "GraphQL", "MongoDB", "Redis",
    "NestJS", "Prisma", "Vercel", "AWS", "Git", "Linux",
    "Python", "Express", "Supabase", "Figma",
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
        title: "Senior Full Stack Developer",
        company: "Tech Startup XYZ",
        period: "2023 — Sekarang",
        description: "Memimpin pengembangan platform SaaS dengan 10.000+ pengguna aktif. Membangun arsitektur microservices dan meningkatkan performa API hingga 60%.",
        skills: ["Next.js", "NestJS", "PostgreSQL", "Docker", "AWS"],
    },
    {
        id: "2",
        type: "work",
        title: "Full Stack Developer",
        company: "Digital Agency ABC",
        period: "2022 — 2023",
        description: "Mengembangkan 15+ proyek web untuk klien dari berbagai industri. Spesialisasi dalam React, Node.js, dan integrasi payment gateway.",
        skills: ["React", "Node.js", "MongoDB", "Stripe"],
    },
    {
        id: "3",
        type: "work",
        title: "Frontend Developer",
        company: "Startup Fintech",
        period: "2021 — 2022",
        description: "Membangun dashboard keuangan interaktif dengan visualisasi data real-time dan antarmuka yang responsif.",
        skills: ["React", "TypeScript", "Chart.js", "Tailwind"],
    },
    {
        id: "4",
        type: "education",
        title: "S1 Teknik Informatika",
        company: "Universitas Indonesia",
        period: "2017 — 2021",
        description: "Lulus dengan predikat Cum Laude. Fokus pada rekayasa perangkat lunak, algoritma, dan pengembangan web.",
        skills: ["Algoritma", "Data Structures", "Software Engineering"],
    },
    {
        id: "5",
        type: "education",
        title: "Full Stack Web Development",
        company: "Bootcamp Hacktiv8",
        period: "2021",
        description: "Program intensif 3 bulan yang mencakup JavaScript, React, Node.js, dan deployment ke cloud.",
        skills: ["JavaScript", "React", "Node.js", "PostgreSQL"],
    },
];
