"use client";

import { useInView } from "react-intersection-observer";
import TiltedCard from "@/components/bits/Components/TiltedCard/TiltedCard";
import CountUp from "@/components/bits/TextAnimations/CountUp/CountUp";
import SplitText from "@/components/bits/TextAnimations/SplitText/SplitText";
import { personalInfo, stats } from "@/lib/data";
import { IconMapPin, IconMail, IconDownload } from "@tabler/icons-react";

export default function AboutSection() {
    const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

    return (
        <section id="about" className="section">
            <div className="container">
                <div
                    ref={ref}
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "80px",
                        alignItems: "center",
                    }}
                    className="about-grid"
                >
                    <div
                        style={{
                            opacity: inView ? 1 : 0,
                            transform: inView ? "translateX(0)" : "translateX(-40px)",
                            transition: "all 0.8s ease",
                        }}
                    >
                        <TiltedCard
                            imageSrc={`/img/me.jpeg`}
                            altText="Ahmad Affandi"
                            captionText="Ahmad Affandi"
                            containerHeight="420px"
                            containerWidth="100%"
                            imageHeight="500px"
                            imageWidth="350px"
                            rotateAmplitude={10}
                            scaleOnHover={1.05}
                            showMobileWarning={false}
                            displayOverlayContent
                            overlayContent={
                                <div
                                    style={{
                                        position: "absolute",
                                        bottom: "20px",
                                        left: "20px",
                                        right: "20px",
                                        background: "rgba(255,255,255,0.92)",
                                        backdropFilter: "blur(10px)",
                                        borderRadius: "12px",
                                        padding: "14px 18px",
                                        border: "1px solid rgba(0,0,0,0.05)",
                                        boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
                                    }}
                                >
                                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                                        <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#22c55e", display: "inline-block" }} />
                                        <span style={{ color: "#000", fontSize: "13px", fontWeight: 600 }}>Available for work</span>
                                    </div>
                                    <div style={{ color: "#666", fontSize: "12px", display: "flex", alignItems: "center", gap: "4px" }}>
                                        <IconMapPin size={12} />
                                        {personalInfo.location}
                                    </div>
                                </div>
                            }
                        />
                    </div>

                    <div
                        style={{
                            opacity: inView ? 1 : 0,
                            transform: inView ? "translateX(0)" : "translateX(40px)",
                            transition: "all 0.8s ease 0.2s",
                        }}
                    >
                        <p className="section-label">Tentang Saya</p>
                        <h2 className="section-title">
                            Membangun produk digital yang{" "}
                            <span style={{ color: "#000" }}>berkesan</span>
                        </h2>

                        <div style={{ marginBottom: "16px" }}>
                            <SplitText
                                text={personalInfo.bio}
                                className="text-[1rem] leading-[1.8] text-[#666]"
                                delay={50}
                                from={{ opacity: 0, transform: 'translate3d(0,20px,0)' }}
                                to={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                threshold={0.1}
                                rootMargin="-50px"
                            />
                        </div>

                        <p style={{ color: "#666", lineHeight: 1.8, marginBottom: "32px", fontSize: "1rem" }}>
                            {personalInfo.bio2}
                        </p>

                        <div
                            style={{
                                display: "flex",
                                gap: "8px",
                                marginBottom: "32px",
                                flexWrap: "wrap",
                            }}
                        >
                            <a
                                href={`mailto:${personalInfo.email}`}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "6px",
                                    color: "#666",
                                    fontSize: "14px",
                                    textDecoration: "none",
                                }}
                            >
                                <IconMail size={16} style={{ color: "#000" }} />
                                {personalInfo.email}
                            </a>
                        </div>

                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(2, 1fr)",
                                gap: "20px",
                                marginBottom: "32px",
                            }}
                        >
                            {stats.map((stat, i) => (
                                <div
                                    key={i}
                                    className="glass"
                                    style={{ padding: "20px", textAlign: "center", background: "#fff" }}
                                >
                                    <div
                                        style={{
                                            fontFamily: "var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
                                            fontSize: "2.2rem",
                                            fontWeight: 800,
                                            color: "#000",
                                            lineHeight: 1,
                                            marginBottom: "4px",
                                        }}
                                    >
                                        <CountUp to={stat.value} duration={2} delay={0.3} />
                                        {stat.suffix}
                                    </div>
                                    <div style={{ color: "#666", fontSize: "12px", fontWeight: 500 }}>
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <a
                            href={personalInfo.cvUrl}
                            download
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "10px",
                                padding: "14px 32px",
                                borderRadius: "50px",
                                background: "#111",
                                color: "#fff",
                                fontSize: "15px",
                                fontWeight: 600,
                                textDecoration: "none",
                                letterSpacing: "-0.01em",
                                boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                                transition: "background 0.2s, box-shadow 0.2s, transform 0.15s",
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
                            <IconDownload size={18} />
                            Download CV
                        </a>
                    </div>
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
        </section>
    );
}
