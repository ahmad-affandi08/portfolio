"use client";

import { personalInfo } from "@/lib/data";
import { IconBrandGithub, IconBrandLinkedin, IconBrandTwitter, IconArrowUp } from "@tabler/icons-react";
import Magnet from "@/components/bits/Animations/Magnet/Magnet";

const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
];

export default function Footer() {
    const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <footer
            style={{
                borderTop: "1px solid rgba(0,0,0,0.08)",
                padding: "48px 0 32px",
                position: "relative",
                background: "#fafafa",
            }}
        >
            <div className="container">
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        marginBottom: "40px",
                        flexWrap: "wrap",
                        gap: "32px",
                    }}
                >
                    <div>
                        <div
                            style={{
                                fontFamily: "var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
                                fontWeight: 800,
                                fontSize: "24px",
                                marginBottom: "8px",
                                color: "#000",
                            }}
                        >
                            Ahmad Affandi.
                        </div>
                        <p style={{ color: "#666", fontSize: "14px", maxWidth: "260px", lineHeight: 1.6 }}>
                            Full Stack Developer yang membangun pengalaman web modern dan berkesan.
                        </p>
                    </div>

                    <div style={{ display: "flex", gap: "48px", flexWrap: "wrap" }}>
                        <div>
                            <p style={{ color: "#000", fontSize: "13px", fontWeight: 600, marginBottom: "16px" }}>Navigasi</p>
                            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                                {navLinks.map((link) => (
                                    <button
                                        key={link.href}
                                        onClick={() => document.getElementById(link.href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" })}
                                        style={{
                                            background: "none",
                                            border: "none",
                                            color: "#666",
                                            fontSize: "14px",
                                            cursor: "pointer",
                                            textAlign: "left",
                                            padding: 0,
                                            transition: "color 0.2s",
                                        }}
                                        onMouseEnter={(e) => (e.currentTarget.style.color = "#000")}
                                        onMouseLeave={(e) => (e.currentTarget.style.color = "#666")}
                                    >
                                        {link.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <p style={{ color: "#000", fontSize: "13px", fontWeight: 600, marginBottom: "16px" }}>Sosial</p>
                            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                                {[
                                    { href: personalInfo.github, label: "GitHub", icon: <IconBrandGithub size={14} /> },
                                    { href: personalInfo.linkedin, label: "LinkedIn", icon: <IconBrandLinkedin size={14} /> },
                                    { href: personalInfo.twitter, label: "Twitter", icon: <IconBrandTwitter size={14} /> },
                                ].map((s) => (
                                    <Magnet key={s.label} magnetStrength={2} padding={30}>
                                        <a
                                            href={s.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "8px",
                                                color: "#666",
                                                fontSize: "14px",
                                                textDecoration: "none",
                                                transition: "color 0.2s",
                                            }}
                                            onMouseEnter={(e) => (e.currentTarget.style.color = "#000")}
                                            onMouseLeave={(e) => (e.currentTarget.style.color = "#666")}
                                        >
                                            {s.icon}
                                            {s.label}
                                        </a>
                                    </Magnet>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        paddingTop: "24px",
                        borderTop: "1px solid rgba(0,0,0,0.08)",
                        flexWrap: "wrap",
                        gap: "12px",
                    }}
                >
                    <p style={{ color: "#999", fontSize: "13px" }}>
                        © {new Date().getFullYear()} Ahmad Affandi. Dibuat dengan ❤️ menggunakan Next.js & ReactBits.
                    </p>
                    <button
                        onClick={scrollTop}
                        style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "10px",
                            border: "1px solid rgba(0,0,0,0.1)",
                            background: "rgba(0,0,0,0.04)",
                            color: "#000",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                            (e.currentTarget as HTMLElement).style.background = "rgba(0,0,0,0.08)";
                            (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                        }}
                        onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.background = "rgba(0,0,0,0.04)";
                            (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                        }}
                        aria-label="Back to top"
                    >
                        <IconArrowUp size={18} />
                    </button>
                </div>
            </div>
        </footer>
    );
}
