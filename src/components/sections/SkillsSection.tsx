"use client";

import { useInView } from "react-intersection-observer";
import { skills, techMarquee } from "@/lib/data";
import Magnet from "@/components/bits/Animations/Magnet/Magnet";
import SplitText from "@/components/bits/TextAnimations/SplitText/SplitText";
import SpotlightCard from "@/components/bits/Components/SpotlightCard/SpotlightCard";

export default function SkillsSection() {
    const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

    return (
        <section id="skills" className="section" style={{ background: "rgba(255,255,255,0.01)" }}>
            <div className="container">
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
                            gap: "16px",
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
                                    padding: "10px 20px",
                                    borderRadius: "50px",
                                    background: "#f5f5f5",
                                    border: "1px solid #e5e5e5",
                                    color: "#666",
                                    fontSize: "14px",
                                    fontWeight: 500,
                                    whiteSpace: "nowrap",
                                    transition: "all 0.3s",
                                    cursor: "default",
                                }}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLElement).style.borderColor = "#000";
                                    (e.currentTarget as HTMLElement).style.color = "#000";
                                    (e.currentTarget as HTMLElement).style.background = "#fff";
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLElement).style.borderColor = "#e5e5e5";
                                    (e.currentTarget as HTMLElement).style.color = "#666";
                                    (e.currentTarget as HTMLElement).style.background = "#f5f5f5";
                                }}
                            >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={tech.icon}
                                    alt={tech.name}
                                    width={18}
                                    height={18}
                                    style={{ display: "block", flexShrink: 0 }}
                                />
                                {tech.name}
                            </div>
                        ))}
                    </div>
                </div>

                <div
                    ref={ref}
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                        gap: "24px",
                        overflow: "hidden",
                    }}
                >
                    {skills.map((category, catIdx) => (
                        <div
                            key={catIdx}
                            style={{
                                opacity: inView ? 1 : 0,
                                transform: inView ? "translateY(0)" : "translateY(30px)",
                                transition: `all 0.6s ease ${catIdx * 0.1}s`,
                            }}
                        >
                            <SpotlightCard
                                spotlightColor="rgba(0, 0, 0, 0.05)"
                                className="h-full border border-gray-100 bg-white/50 backdrop-blur-sm rounded-2xl p-10 shadow-sm hover:shadow-md transition-shadow"
                            >
                                <h3
                                    style={{
                                        display: 'block',
                                        boxSizing: 'border-box',
                                        width: '100%',
                                        fontFamily: "var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
                                        fontSize: "1.1rem",
                                        fontWeight: 700,
                                        color: "#000",
                                        marginTop: "6px",
                                        marginBottom: "18px",
                                        paddingTop: "12px",
                                        paddingBottom: "12px",
                                        paddingLeft: "18px",
                                        paddingRight: "18px",
                                        minHeight: "48px",
                                        borderBottom: "1px solid #eaeaea",
                                    }}
                                >
                                    <SplitText
                                        text={category.category}
                                        className="font-bold text-lg"
                                        delay={40}
                                        duration={1}
                                        threshold={0.1}
                                    />
                                </h3>
                                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                                    {category.items.map((skill, i) => (
                                        <Magnet key={i} magnetStrength={3} padding={40}>
                                            <div
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "8px",
                                                    padding: "8px 16px",
                                                    borderRadius: "10px",
                                                    background: "#f5f5f5",
                                                    border: "1px solid #e8e8e8",
                                                    fontSize: "13.5px",
                                                    color: "#555",
                                                    transition: "all 0.2s",
                                                    cursor: "default",
                                                    fontWeight: 500,
                                                }}
                                                onMouseEnter={(e) => {
                                                    (e.currentTarget as HTMLElement).style.background = "#fff";
                                                    (e.currentTarget as HTMLElement).style.borderColor = "#000";
                                                    (e.currentTarget as HTMLElement).style.color = "#000";
                                                }}
                                                onMouseLeave={(e) => {
                                                    (e.currentTarget as HTMLElement).style.background = "#f5f5f5";
                                                    (e.currentTarget as HTMLElement).style.borderColor = "#e8e8e8";
                                                    (e.currentTarget as HTMLElement).style.color = "#555";
                                                }}
                                            >
                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                <img
                                                    src={skill.icon}
                                                    alt={skill.name}
                                                    width={18}
                                                    height={18}
                                                    style={{ display: "block", flexShrink: 0 }}
                                                />
                                                <span>{skill.name}</span>
                                            </div>
                                        </Magnet>
                                    ))}
                                </div>
                            </SpotlightCard>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
        </section>
    );
}
