"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "motion/react";
import BlurText from "@/components/bits/TextAnimations/BlurText/BlurText";
import RotatingText from "@/components/bits/TextAnimations/RotatingText/RotatingText";
import ShinyText from "@/components/bits/TextAnimations/ShinyText/ShinyText";
import SplitText from "@/components/bits/TextAnimations/SplitText/SplitText";
import Magnet from "@/components/bits/Animations/Magnet/Magnet";
import { personalInfo } from "@/lib/data";
import { IconBrandGithub, IconBrandLinkedin, IconDownload, IconArrowDown } from "@tabler/icons-react";

export default function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const yText = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const yButtons = useTransform(scrollYProgress, [0, 1], [0, 300]);

    const scrollToProjects = () => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="home"
            ref={containerRef}
            style={{
                position: "relative",
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
            }}
        >
            <motion.div
                className="container"
                style={{
                    position: "relative",
                    zIndex: 3,
                    textAlign: "center",
                    paddingTop: "100px",
                    paddingBottom: "60px",
                    y: yText,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <div
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        padding: "8px 18px",
                        borderRadius: "50px",
                        background: "rgba(0,0,0,0.05)",
                        border: "1px solid rgba(0,0,0,0.1)",
                        marginBottom: "32px",
                        fontSize: "14px",
                        fontWeight: 500,
                        flexShrink: 0,
                        whiteSpace: "nowrap",
                    }}
                >
                    <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#22c55e", display: "inline-block", flexShrink: 0, boxShadow: "0 0 12px 2px rgba(34,197,94,0.6)" }} />
                    <ShinyText text="Available for work" disabled={false} speed={3} className="text-zinc-600 font-medium" />
                </div>

                <div style={{ marginBottom: "16px", textAlign: "center", width: "100%" }}>
                    <BlurText
                        text="Halo, saya 👋"
                        className="text-muted"
                        delay={80}
                        animateBy="words"
                        direction="top"
                        stepDuration={0.4}
                    />
                </div>

                <div style={{ marginBottom: "24px", textAlign: "center", width: "100%" }}>
                    <SplitText
                        text="Ahmad Affandi"
                        className="hero-title"
                        delay={50}
                        duration={1.5}
                        ease="back.out(1.2)"
                    />
                </div>

                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "12px",
                        fontSize: "clamp(1.1rem, 3vw, 1.5rem)",
                        color: "#666",
                        marginBottom: "32px",
                        flexWrap: "wrap",
                    }}
                >
                    <span>Seorang</span>
                    <RotatingText
                        texts={personalInfo.roles}
                        mainClassName="px-3 py-1 rounded-lg overflow-hidden"
                        style={{
                            background: "rgba(0,0,0,0.07)",
                            border: "1px solid rgba(0,0,0,0.15)",
                            color: "#333",
                            fontWeight: 600,
                            fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
                            paddingLeft: '12px',
                            paddingRight: '12px'
                        }}
                        rotationInterval={2500}
                        staggerDuration={0.03}
                        staggerFrom="last"
                    />
                </div>

                <BlurText
                    text={personalInfo.bio}
                    className="section-desc"
                    delay={60}
                    animateBy="words"
                    direction="bottom"
                    stepDuration={0.3}
                />

                <motion.div
                    style={{
                        display: "flex",
                        gap: "16px",
                        justifyContent: "center",
                        marginTop: "40px",
                        flexWrap: "wrap",
                        y: yButtons,
                        width: "100%",
                        alignItems: "center",
                    }}
                >
                    <Magnet magnetStrength={5} padding={100}>
                        <button
                            onClick={scrollToProjects}
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "10px",
                                padding: "14px 32px",
                                borderRadius: "50px",
                                background: "#111",
                                color: "#fff",
                                border: "none",
                                fontSize: "15px",
                                fontWeight: 600,
                                cursor: "pointer",
                                whiteSpace: "nowrap",
                                boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                                transition: "background 0.2s, box-shadow 0.2s, transform 0.15s",
                                letterSpacing: "-0.01em",
                            }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLElement).style.background = "#000";
                                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 30px rgba(0,0,0,0.3)";
                                (e.currentTarget as HTMLElement).style.transform = "scale(1.04)";
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLElement).style.background = "#111";
                                (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(0,0,0,0.2)";
                                (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                            }}
                        >
                            Lihat Proyek
                            <IconArrowDown size={18} />
                        </button>
                    </Magnet>
                    <Magnet magnetStrength={5} padding={100}>
                        <a
                            href={personalInfo.cvUrl}
                            download
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "10px",
                                padding: "14px 32px",
                                borderRadius: "50px",
                                background: "#fff",
                                color: "#111",
                                border: "1.5px solid rgba(0,0,0,0.15)",
                                fontSize: "15px",
                                fontWeight: 600,
                                cursor: "pointer",
                                whiteSpace: "nowrap",
                                textDecoration: "none",
                                boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
                                transition: "border-color 0.2s, box-shadow 0.2s, transform 0.15s",
                                letterSpacing: "-0.01em",
                            }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,0,0,0.6)";
                                (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 20px rgba(0,0,0,0.1)";
                                (e.currentTarget as HTMLElement).style.transform = "scale(1.04)";
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,0,0,0.15)";
                                (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 10px rgba(0,0,0,0.06)";
                                (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                            }}
                        >
                            <IconDownload size={18} />
                            Download CV
                        </a>
                    </Magnet>
                </motion.div>

                <div
                    style={{
                        display: "flex",
                        gap: "16px",
                        justifyContent: "center",
                        marginTop: "32px",
                    }}
                >
                    {[
                        { href: personalInfo.github, icon: <IconBrandGithub size={20} />, label: "GitHub" },
                        { href: personalInfo.linkedin, icon: <IconBrandLinkedin size={20} />, label: "LinkedIn" },
                    ].map((s) => (
                        <Magnet key={s.label} magnetStrength={3} padding={50}>
                            <a
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={s.label}
                                style={{
                                    width: "44px",
                                    height: "44px",
                                    borderRadius: "50%",
                                    border: "1px solid rgba(0,0,0,0.12)",
                                    background: "rgba(0,0,0,0.02)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "#666",
                                    transition: "all 0.3s ease",
                                    textDecoration: "none",
                                }}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLElement).style.borderColor = "#000";
                                    (e.currentTarget as HTMLElement).style.color = "#000";
                                    (e.currentTarget as HTMLElement).style.background = "rgba(0,0,0,0.05)";
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,0,0,0.12)";
                                    (e.currentTarget as HTMLElement).style.color = "#666";
                                    (e.currentTarget as HTMLElement).style.background = "rgba(0,0,0,0.02)";
                                }}
                            >
                                {s.icon}
                            </a>
                        </Magnet>
                    ))}
                </div>

                <div
                    style={{
                        marginTop: "60px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "8px",
                        color: "#888",
                        fontSize: "12px",
                        animation: "bounce 2s infinite",
                    }}
                >
                    <span>Scroll</span>
                    <IconArrowDown size={16} />
                </div>
            </motion.div>

            <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }
        .text-muted {
          color: #666 !important;
          font-size: 1.1rem;
          margin-bottom: 8px;
          text-align: center;
        }
        .hero-title {
          font-family: var(--font-bricolage), 'Bricolage Grotesque', sans-serif;
          font-size: clamp(3rem, 10vw, 7rem);
          font-weight: 800;
          line-height: 1.0;
          letter-spacing: -2px;
          color: #000;
          text-align: center;
        }
      `}</style>
        </section>
    );
}
