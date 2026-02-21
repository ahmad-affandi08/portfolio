"use client";

import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { skills, techMarquee } from "@/lib/data";
import SplitText from "@/components/bits/TextAnimations/SplitText/SplitText";

export default function SkillsSection() {
    const [activeTab, setActiveTab] = useState(0);
    const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

    const activeCategory = skills[activeTab];

    return (
        <section id="skills" className="section" style={{ background: "rgba(255,255,255,0.01)" }}>
            <div className="container">

                {/* ── Header ── */}
                <div style={{ textAlign: "center", marginBottom: "60px" }}>
                    <p className="section-label">Keahlian</p>
                    <div className="section-title-wrapper">
                        <h2 className="section-title">
                            Tech Stack yang saya{" "}
                            <span style={{ color: "#000", fontWeight: 800 }}>kuasai</span>
                        </h2>
                    </div>
                    <p className="section-desc" style={{ margin: "0 auto" }}>
                        Teknologi-teknologi yang saya gunakan untuk membangun produk digital berkualitas tinggi.
                    </p>
                </div>

                {/* ── Marquee Strip ── */}
                <div
                    style={{
                        overflow: "hidden",
                        marginBottom: "60px",
                        maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                        WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            gap: "14px",
                            animation: "marquee 30s linear infinite",
                            width: "max-content",
                        }}
                        onMouseEnter={(e) => {
                            (e.currentTarget as HTMLElement).style.animationPlayState = "paused";
                        }}
                        onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.animationPlayState = "running";
                        }}
                    >
                        {[...techMarquee, ...techMarquee].map((tech, i) => (
                            <div
                                key={i}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "8px",
                                    padding: "8px 18px",
                                    borderRadius: "50px",
                                    background: "#f5f5f5",
                                    border: "1px solid #e5e5e5",
                                    color: "#555",
                                    fontSize: "13px",
                                    fontWeight: 500,
                                    whiteSpace: "nowrap",
                                    transition: "all 0.25s ease",
                                    cursor: "default",
                                }}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLElement).style.borderColor = "#000";
                                    (e.currentTarget as HTMLElement).style.color = "#000";
                                    (e.currentTarget as HTMLElement).style.background = "#fff";
                                    (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.10)";
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLElement).style.borderColor = "#e5e5e5";
                                    (e.currentTarget as HTMLElement).style.color = "#555";
                                    (e.currentTarget as HTMLElement).style.background = "#f5f5f5";
                                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                                }}
                            >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={tech.icon} alt={tech.name} width={16} height={16} style={{ display: "block", flexShrink: 0 }} />
                                {tech.name}
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Category Tabs ── */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "8px",
                        marginBottom: "44px",
                        flexWrap: "wrap",
                    }}
                >
                    {skills.map((cat, idx) => {
                        const isActive = activeTab === idx;
                        return (
                            <button
                                key={idx}
                                onClick={() => setActiveTab(idx)}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "8px",
                                    padding: "10px 22px",
                                    borderRadius: "50px",
                                    border: isActive ? "1.5px solid #111" : "1.5px solid #e5e5e5",
                                    background: isActive ? "#111" : "#fff",
                                    color: isActive ? "#fff" : "#777",
                                    fontSize: "14px",
                                    fontWeight: 600,
                                    cursor: "pointer",
                                    transition: "all 0.25s ease",
                                    boxShadow: isActive ? "0 4px 20px rgba(0,0,0,0.18)" : "none",
                                    letterSpacing: "0.01em",
                                }}
                                onMouseEnter={(e) => {
                                    if (!isActive) {
                                        (e.currentTarget as HTMLElement).style.borderColor = "#111";
                                        (e.currentTarget as HTMLElement).style.color = "#111";
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (!isActive) {
                                        (e.currentTarget as HTMLElement).style.borderColor = "#e5e5e5";
                                        (e.currentTarget as HTMLElement).style.color = "#777";
                                    }
                                }}
                            >
                                <span style={{ fontSize: "16px" }}>{cat.icon}</span>
                                {cat.category}
                            </button>
                        );
                    })}
                </div>

                {/* ── Skill Grid ── */}
                <div
                    ref={ref}
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
                        gap: "16px",
                        maxWidth: "900px",
                        margin: "0 auto",
                    }}
                >
                    {activeCategory.items.map((skill, i) => (
                        <SkillCard
                            key={`${activeTab}-${i}`}
                            skill={skill}
                            delay={i * 60}
                            inView={inView}
                        />
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes marquee {
                    from { transform: translateX(0); }
                    to   { transform: translateX(-50%); }
                }
                @keyframes skillFadeUp {
                    from { opacity: 0; transform: translateY(20px) scale(0.97); }
                    to   { opacity: 1; transform: translateY(0) scale(1); }
                }
            `}</style>
        </section>
    );
}

/* ─── Individual Skill Card ─── */
function SkillCard({
    skill,
    delay,
    inView,
}: {
    skill: { name: string; icon: string; color: string };
    delay: number;
    inView: boolean;
}) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "14px",
                padding: "28px 16px",
                borderRadius: "20px",
                border: hovered ? `1.5px solid ${skill.color}44` : "1.5px solid #ebebeb",
                background: hovered ? `${skill.color}0d` : "#fafafa",
                cursor: "default",
                transition: "all 0.25s ease",
                boxShadow: hovered
                    ? `0 8px 32px ${skill.color}30, 0 2px 8px rgba(0,0,0,0.06)`
                    : "0 1px 4px rgba(0,0,0,0.04)",
                transform: hovered ? "translateY(-4px) scale(1.03)" : "translateY(0) scale(1)",
                animation: inView ? `skillFadeUp 0.4s ease ${delay}ms both` : "none",
            }}
        >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src={skill.icon}
                alt={skill.name}
                width={42}
                height={42}
                style={{
                    display: "block",
                    transition: "transform 0.25s ease",
                    transform: hovered ? "scale(1.15)" : "scale(1)",
                    filter: hovered ? "drop-shadow(0 4px 8px " + skill.color + "66)" : "none",
                }}
            />
            <span
                style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    color: hovered ? skill.color : "#444",
                    textAlign: "center",
                    transition: "color 0.25s ease",
                    letterSpacing: "0.01em",
                }}
            >
                {skill.name}
            </span>
        </div>
    );
}
