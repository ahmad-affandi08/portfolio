"use client";

import { useState, useRef, useEffect } from "react";
import { useScroll, useTransform, motion } from "motion/react";
import { projects } from "@/lib/data";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";

const categories = ["Semua", "web", "mobile", "open-source", "other"];
const categoryLabels: Record<string, string> = {
    "Semua": "Semua",
    "web": "Web App",
    "mobile": "Mobile",
    "open-source": "Open Source",
    "other": "Lainnya",
};

export default function ProjectsSection() {
    const [activeFilter, setActiveFilter] = useState("Semua");
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [dynamicHeight, setDynamicHeight] = useState("200vh");

    const { scrollYProgress } = useScroll({
        target: containerRef,
    });

    const filtered = activeFilter === "Semua"
        ? projects
        : projects.filter((p) => p.category === activeFilter);

    const isHorizontal = filtered.length > 3;

    useEffect(() => {
        if (!isHorizontal || !scrollContainerRef.current) return;

        const updateHeight = () => {
            if (scrollContainerRef.current) {
                const scrollWidth = scrollContainerRef.current.scrollWidth;
                const viewWidth = window.innerWidth;
                const extraScroll = scrollWidth - viewWidth;
                setDynamicHeight(`${extraScroll + viewWidth}px`);
            }
        };

        updateHeight();
        window.addEventListener("resize", updateHeight);
        return () => window.removeEventListener("resize", updateHeight);
    }, [filtered, isHorizontal]);

    const cardCount = filtered.length;
    const xEndPercent = isHorizontal ? `-${Math.max(0, ((cardCount - 1) * 490) / (cardCount * 490) * 100 - 10)}%` : "0%";
    const x = useTransform(scrollYProgress, [0, 1], ["0%", xEndPercent]);

    return (
        <section
            id="projects"
            ref={containerRef}
            className="section"
            style={{
                height: isHorizontal ? dynamicHeight : "auto",
                position: "relative"
            }}
        >
            <div
                className={isHorizontal ? "sticky top-0 h-screen overflow-hidden flex flex-col justify-center" : "container"}
                style={{ paddingBottom: isHorizontal ? 0 : "100px" }}
            >
                <div className={isHorizontal ? "container mb-12" : "mb-12"}>
                    <div style={{ textAlign: "center", marginBottom: "40px" }}>
                        <p className="section-label">Portofolio</p>
                        <h2 className="section-title">
                            Proyek-proyek{" "}
                            <span style={{ color: "#000" }}>terbaik</span>
                        </h2>

                        <div style={{ display: "flex", gap: "8px", justifyContent: "center", flexWrap: "wrap", marginTop: "24px" }}>
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveFilter(cat)}
                                    style={{
                                        padding: "8px 20px",
                                        borderRadius: "50px",
                                        border: `1px solid ${activeFilter === cat ? "#000" : "#e5e5e5"}`,
                                        background: activeFilter === cat ? "#000" : "#fff",
                                        color: activeFilter === cat ? "#fff" : "#666",
                                        fontSize: "14px",
                                        fontWeight: activeFilter === cat ? 600 : 500,
                                        cursor: "pointer",
                                        transition: "all 0.2s ease",
                                        whiteSpace: "nowrap",
                                    }}
                                    onMouseEnter={(e) => {
                                        if (activeFilter !== cat) {
                                            (e.currentTarget as HTMLElement).style.borderColor = "#000";
                                            (e.currentTarget as HTMLElement).style.color = "#000";
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (activeFilter !== cat) {
                                            (e.currentTarget as HTMLElement).style.borderColor = "#e5e5e5";
                                            (e.currentTarget as HTMLElement).style.color = "#666";
                                        }
                                    }}
                                >
                                    {categoryLabels[cat]}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {isHorizontal ? (
                    <motion.div
                        ref={scrollContainerRef}
                        style={{ x, display: "flex", gap: "40px", paddingLeft: "10vw", paddingRight: "10vw" }}
                        className="items-center"
                    >
                        {filtered.map((project) => (
                            <div
                                key={project.id}
                                style={{
                                    minWidth: "450px",
                                    maxWidth: "450px",
                                    height: "500px",
                                    background: "#fff",
                                    borderRadius: "24px",
                                    border: "1px solid #eaeaea",
                                    overflow: "hidden",
                                    boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
                                    display: "flex",
                                    flexDirection: "column"
                                }}
                            >
                                <div style={{ height: "240px", background: "#f5f5f5", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "4rem", position: "relative" }}>
                                    {getCategoryIcon(project.category)}
                                    {project.featured && (
                                        <div className="absolute top-4 right-4 bg-black text-white text-xs font-bold px-3 py-1 rounded-full">Featured</div>
                                    )}
                                </div>
                                <div style={{ padding: "32px", flex: 1, display: "flex", flexDirection: "column" }}>
                                    <h3 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "12px", fontFamily: "var(--font-bricolage)" }}>{project.title}</h3>
                                    <p style={{ color: "#666", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "auto" }}>{project.description}</p>

                                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", margin: "20px 0" }}>
                                        {project.techStack.map(tech => (
                                            <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">{tech}</span>
                                        ))}
                                    </div>

                                    <div style={{ display: "flex", gap: "16px" }}>
                                        {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-black transition-colors"><IconBrandGithub size={18} /> GitHub</a>}
                                        {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-black transition-colors"><IconExternalLink size={18} /> Demo</a>}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                ) : (
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "24px" }}>
                        {filtered.map((project) => (
                            <div
                                key={project.id}
                                style={{
                                    background: "#fff",
                                    borderRadius: "24px",
                                    border: "1px solid #eaeaea",
                                    overflow: "hidden",
                                    boxShadow: "0 4px 12px rgba(0,0,0,0.02)",
                                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                                className="hover:translate-y-[-5px] hover:shadow-xl transition-all duration-300"
                            >
                                <div style={{ height: "200px", background: "#f5f5f5", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "3rem", position: "relative" }}>
                                    {getCategoryIcon(project.category)}
                                    {project.featured && (
                                        <div style={{ position: "absolute", top: "12px", right: "12px", background: "#000", color: "#fff", fontSize: "11px", fontWeight: 700, padding: "3px 10px", borderRadius: "50px" }}>Featured</div>
                                    )}
                                </div>
                                <div style={{ padding: "24px", flex: 1, display: "flex", flexDirection: "column" }}>
                                    <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "8px", fontFamily: "var(--font-bricolage)" }}>{project.title}</h3>
                                    <p style={{ color: "#666", fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "16px", flex: 1 }}>{project.description}</p>
                                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "16px" }}>
                                        {project.techStack.slice(0, 4).map(tech => (
                                            <span key={tech} className="px-2 py-1 bg-gray-50 text-gray-500 text-xs rounded-md border border-gray-100">{tech}</span>
                                        ))}
                                    </div>
                                    <div style={{ display: "flex", gap: "16px" }}>
                                        {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "#666", textDecoration: "none", fontWeight: 500, transition: "color 0.2s" }} onMouseEnter={e => (e.currentTarget.style.color = "#000")} onMouseLeave={e => (e.currentTarget.style.color = "#666")}><IconBrandGithub size={16} /> GitHub</a>}
                                        {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "#666", textDecoration: "none", fontWeight: 500, transition: "color 0.2s" }} onMouseEnter={e => (e.currentTarget.style.color = "#000")} onMouseLeave={e => (e.currentTarget.style.color = "#666")}><IconExternalLink size={16} /> Demo</a>}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}

function getCategoryIcon(category: string): string {
    const icons: Record<string, string> = {
        web: "🌐",
        mobile: "📱",
        "open-source": "🔓",
        other: "⚡",
    };
    return icons[category] || "💻";
}
