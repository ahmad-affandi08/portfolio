"use client";

import { useInView } from "react-intersection-observer";
import CountUp from "@/components/bits/TextAnimations/CountUp/CountUp";
import { personalInfo, stats } from "@/lib/data";
import {
    IconMapPin,
    IconMail,
    IconDownload,
    IconBrandGithub,
    IconBriefcase,
    IconSchool,
    IconArrowUpRight,
} from "@tabler/icons-react";

export default function AboutSection() {
    const { ref, inView } = useInView({ threshold: 0.08, triggerOnce: true });

    return (
        <section id="about" className="section">
            <div className="container">

                {/* ── Section Header ── */}
                <div style={{ textAlign: "center", marginBottom: "64px" }}>
                    <p className="section-label">Tentang Saya</p>
                    <h2 className="section-title">
                        Siapa{" "}
                        <span style={{ color: "#000", fontWeight: 800 }}>Ahmad Affandi?</span>
                    </h2>
                    <p className="section-desc" style={{ margin: "0 auto" }}>
                        Full Stack Developer yang membangun solusi digital cepat, modern, dan berkesan.
                    </p>
                </div>

                {/* ── Bento Grid ── */}
                <div
                    ref={ref}
                    className="about-bento"
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(12, 1fr)",
                        gridTemplateRows: "auto",
                        gap: "16px",
                    }}
                >
                    {/* ── [1] Photo Card ── col 1-5, row 1-2 */}
                    <BentoCard
                        inView={inView}
                        delay={0}
                        style={{
                            gridColumn: "1 / 6",
                            gridRow: "1 / 3",
                            minHeight: "440px",
                            padding: 0,
                            overflow: "hidden",
                            position: "relative",
                        }}
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/img/me.jpeg"
                            alt="Ahmad Affandi"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                objectPosition: "top center",
                                display: "block",
                                transition: "transform 0.6s ease",
                            }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLElement).style.transform = "scale(1.04)";
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                            }}
                        />
                        {/* Status badge */}
                        <div
                            style={{
                                position: "absolute",
                                bottom: "20px",
                                left: "20px",
                                right: "20px",
                                background: "rgba(255,255,255,0.92)",
                                backdropFilter: "blur(12px)",
                                borderRadius: "14px",
                                padding: "14px 18px",
                                border: "1px solid rgba(0,0,0,0.06)",
                                boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
                            }}
                        >
                            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                                <span
                                    style={{
                                        width: "8px", height: "8px", borderRadius: "50%",
                                        background: "#22c55e", display: "inline-block",
                                        boxShadow: "0 0 0 3px rgba(34,197,94,0.25)",
                                        animation: "pulse 2s ease infinite",
                                    }}
                                />
                                <span style={{ color: "#000", fontSize: "13px", fontWeight: 700 }}>Available for work</span>
                            </div>
                            <div style={{ color: "#666", fontSize: "12px", display: "flex", alignItems: "center", gap: "4px" }}>
                                <IconMapPin size={12} />
                                {personalInfo.location}
                            </div>
                        </div>
                    </BentoCard>

                    {/* ── [2] Bio Card ── col 6-12, row 1 */}
                    <BentoCard inView={inView} delay={80} style={{ gridColumn: "6 / 13", gridRow: "1" }}>
                        <div style={{ display: "flex", flexDirection: "column", height: "100%", gap: "16px" }}>
                            <div>
                                <div
                                    style={{
                                        display: "inline-flex", alignItems: "center", gap: "6px",
                                        background: "#f0fdf4", border: "1px solid #bbf7d0",
                                        borderRadius: "50px", padding: "4px 12px",
                                        fontSize: "12px", fontWeight: 600, color: "#16a34a",
                                        marginBottom: "14px",
                                    }}
                                >
                                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#22c55e", display: "inline-block" }} />
                                    Full Stack Developer
                                </div>
                                <h3
                                    style={{
                                        fontFamily: "var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
                                        fontSize: "1.5rem", fontWeight: 800, color: "#000",
                                        lineHeight: 1.25, marginBottom: "12px",
                                    }}
                                >
                                    {personalInfo.name}
                                </h3>
                                <p style={{ color: "#666", lineHeight: 1.75, fontSize: "0.95rem" }}>
                                    {personalInfo.bio}
                                </p>
                            </div>
                            <p style={{ color: "#888", lineHeight: 1.75, fontSize: "0.9rem" }}>
                                {personalInfo.bio2}
                            </p>
                            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "auto" }}>
                                <a
                                    href={`mailto:${personalInfo.email}`}
                                    style={{
                                        display: "inline-flex", alignItems: "center", gap: "6px",
                                        padding: "9px 18px", borderRadius: "50px",
                                        border: "1.5px solid #e5e5e5", background: "#fafafa",
                                        color: "#444", fontSize: "13px", fontWeight: 600,
                                        textDecoration: "none", transition: "all 0.2s ease",
                                    }}
                                    onMouseEnter={(e) => {
                                        (e.currentTarget as HTMLElement).style.borderColor = "#000";
                                        (e.currentTarget as HTMLElement).style.color = "#000";
                                        (e.currentTarget as HTMLElement).style.background = "#fff";
                                    }}
                                    onMouseLeave={(e) => {
                                        (e.currentTarget as HTMLElement).style.borderColor = "#e5e5e5";
                                        (e.currentTarget as HTMLElement).style.color = "#444";
                                        (e.currentTarget as HTMLElement).style.background = "#fafafa";
                                    }}
                                >
                                    <IconMail size={14} /> {personalInfo.email}
                                </a>
                                <a
                                    href={personalInfo.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: "inline-flex", alignItems: "center", gap: "6px",
                                        padding: "9px 18px", borderRadius: "50px",
                                        border: "1.5px solid #e5e5e5", background: "#fafafa",
                                        color: "#444", fontSize: "13px", fontWeight: 600,
                                        textDecoration: "none", transition: "all 0.2s ease",
                                    }}
                                    onMouseEnter={(e) => {
                                        (e.currentTarget as HTMLElement).style.borderColor = "#000";
                                        (e.currentTarget as HTMLElement).style.color = "#000";
                                        (e.currentTarget as HTMLElement).style.background = "#fff";
                                    }}
                                    onMouseLeave={(e) => {
                                        (e.currentTarget as HTMLElement).style.borderColor = "#e5e5e5";
                                        (e.currentTarget as HTMLElement).style.color = "#444";
                                        (e.currentTarget as HTMLElement).style.background = "#fafafa";
                                    }}
                                >
                                    <IconBrandGithub size={14} /> GitHub
                                </a>
                            </div>
                        </div>
                    </BentoCard>

                    {/* ── [3] Stats Row ── col 6-12, row 2 */}
                    <BentoCard
                        inView={inView}
                        delay={120}
                        style={{
                            gridColumn: "6 / 13",
                            gridRow: "2",
                            padding: "28px 32px",
                            background: "#111",
                            border: "none",
                        }}
                    >
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(4, 1fr)",
                                gap: "8px",
                                height: "100%",
                                alignItems: "center",
                            }}
                        >
                            {stats.map((stat, i) => (
                                <div key={i} style={{ textAlign: "center" }}>
                                    <div
                                        style={{
                                            fontFamily: "var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
                                            fontSize: "2rem", fontWeight: 800, color: "#fff",
                                            lineHeight: 1, marginBottom: "6px",
                                        }}
                                    >
                                        <CountUp to={stat.value} duration={2} delay={0.3} />
                                        <span style={{ color: "#aaa" }}>{stat.suffix}</span>
                                    </div>
                                    <div style={{ color: "#666", fontSize: "11px", fontWeight: 500, letterSpacing: "0.03em" }}>
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </BentoCard>

                    {/* ── [4] Work Card ── col 1-4, row 3 */}
                    <BentoCard inView={inView} delay={160} style={{ gridColumn: "1 / 5", gridRow: "3" }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                            <div
                                style={{
                                    display: "flex", alignItems: "center", justifyContent: "space-between",
                                }}
                            >
                                <div
                                    style={{
                                        width: "38px", height: "38px", borderRadius: "10px",
                                        background: "#f0f0f0",
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                    }}
                                >
                                    <IconBriefcase size={18} color="#333" />
                                </div>
                                <span style={{ fontSize: "11px", color: "#aaa", fontWeight: 500 }}>2023 — Sekarang</span>
                            </div>
                            <div>
                                <p style={{ fontSize: "11px", color: "#aaa", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "4px" }}>
                                    Pekerjaan
                                </p>
                                <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "#000", marginBottom: "4px" }}>
                                    Full Stack Developer
                                </h4>
                                <p style={{ fontSize: "13px", color: "#666" }}>
                                    RSUD dr. Soeratno Gemolong Sragen
                                </p>
                            </div>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "4px" }}>
                                {["Laravel", "React", "MySQL"].map((t) => (
                                    <span
                                        key={t}
                                        style={{
                                            padding: "3px 10px", borderRadius: "50px",
                                            background: "#f5f5f5", border: "1px solid #ebebeb",
                                            fontSize: "11px", color: "#555", fontWeight: 500,
                                        }}
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </BentoCard>

                    {/* ── [5] Education Card ── col 5-8, row 3 */}
                    <BentoCard inView={inView} delay={200} style={{ gridColumn: "5 / 9", gridRow: "3" }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                <div
                                    style={{
                                        width: "38px", height: "38px", borderRadius: "10px",
                                        background: "#eff6ff",
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                    }}
                                >
                                    <IconSchool size={18} color="#3b82f6" />
                                </div>
                                <span style={{ fontSize: "11px", color: "#aaa", fontWeight: 500 }}>2023 — Sekarang</span>
                            </div>
                            <div>
                                <p style={{ fontSize: "11px", color: "#aaa", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "4px" }}>
                                    Pendidikan
                                </p>
                                <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "#000", marginBottom: "4px" }}>
                                    S1 Teknik Informatika
                                </h4>
                                <p style={{ fontSize: "13px", color: "#666" }}>
                                    Universitas Duta Bangsa Surakarta
                                </p>
                            </div>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "4px" }}>
                                {["Web Dev", "Mobile Dev", "SE"].map((t) => (
                                    <span
                                        key={t}
                                        style={{
                                            padding: "3px 10px", borderRadius: "50px",
                                            background: "#eff6ff", border: "1px solid #bfdbfe",
                                            fontSize: "11px", color: "#3b82f6", fontWeight: 500,
                                        }}
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </BentoCard>

                    {/* ── [6] Download CV Card ── col 9-12, row 3 */}
                    <BentoCard
                        inView={inView}
                        delay={240}
                        style={{
                            gridColumn: "9 / 13",
                            gridRow: "3",
                            background: "linear-gradient(135deg, #18181b 0%, #3f3f46 100%)",
                            border: "none",
                            cursor: "pointer",
                            padding: "28px",
                        }}
                        href={personalInfo.cvUrl}
                        download
                    >
                        <div
                            style={{
                                display: "flex", flexDirection: "column",
                                justifyContent: "space-between", height: "100%", gap: "20px",
                            }}
                        >
                            <div
                                style={{
                                    width: "38px", height: "38px", borderRadius: "10px",
                                    background: "rgba(255,255,255,0.12)",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                }}
                            >
                                <IconDownload size={18} color="#fff" />
                            </div>
                            <div>
                                <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", marginBottom: "4px", fontWeight: 500 }}>
                                    Unduh
                                </p>
                                <h4 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#fff", marginBottom: "2px" }}>
                                    Curriculum Vitae
                                </h4>
                                <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.45)" }}>
                                    Versi terbaru 2024
                                </p>
                            </div>
                            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                                <div
                                    style={{
                                        width: "32px", height: "32px", borderRadius: "50%",
                                        background: "rgba(255,255,255,0.15)",
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                    }}
                                >
                                    <IconArrowUpRight size={16} color="#fff" />
                                </div>
                            </div>
                        </div>
                    </BentoCard>
                </div>
            </div>

            <style>{`
                @keyframes pulse {
                    0%, 100% { box-shadow: 0 0 0 3px rgba(34,197,94,0.25); }
                    50%       { box-shadow: 0 0 0 6px rgba(34,197,94,0.08); }
                }
                @media (max-width: 900px) {
                    .about-bento {
                        grid-template-columns: 1fr 1fr !important;
                    }
                    .about-bento > * {
                        grid-column: 1 / -1 !important;
                        grid-row: auto !important;
                    }
                }
                @media (max-width: 600px) {
                    .about-bento {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </section>
    );
}

/* ─── Reusable Bento Card ─── */
function BentoCard({
    children,
    style,
    inView,
    delay = 0,
    href,
    download,
}: {
    children: React.ReactNode;
    style?: React.CSSProperties;
    inView: boolean;
    delay?: number;
    href?: string;
    download?: boolean;
}) {
    const base: React.CSSProperties = {
        background: "#fff",
        borderRadius: "20px",
        border: "1.5px solid #ebebeb",
        padding: "28px",
        boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0) scale(1)" : "translateY(24px) scale(0.98)",
        transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`,
        overflow: "hidden",
        ...style,
    };

    if (href) {
        return (
            <a
                href={href}
                download={download}
                style={{ ...base, textDecoration: "none", display: "block" }}
                onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-3px) scale(1.01)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(0,0,0,0.18)";
                }}
                onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0) scale(1)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 1px 4px rgba(0,0,0,0.04)";
                }}
            >
                {children}
            </a>
        );
    }

    return (
        <div
            style={base}
            onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px) scale(1.005)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 28px rgba(0,0,0,0.08)";
            }}
            onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0) scale(1)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 1px 4px rgba(0,0,0,0.04)";
            }}
        >
            {children}
        </div>
    );
}
