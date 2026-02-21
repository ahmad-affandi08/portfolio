"use client";

import { useState, useEffect } from "react";
import { personalInfo } from "@/lib/data";


const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
];

export default function NavBar() {
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState("home");
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 20);
            const sections = navLinks.map((l) => l.href.replace("#", ""));
            for (const id of sections.reverse()) {
                const el = document.getElementById(id);
                if (el && window.scrollY >= el.offsetTop - 120) {
                    setActive(id);
                    break;
                }
            }
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollTo = (href: string) => {
        const id = href.replace("#", "");
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false);
    };

    return (
        <>
            <nav
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 100,
                    padding: "0 24px",
                    height: "72px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    transition: "all 0.3s ease",
                    background: scrolled ? "rgba(255,255,255,0.85)" : "transparent",
                    backdropFilter: scrolled ? "blur(20px)" : "none",
                    borderBottom: scrolled ? "1px solid rgba(0,0,0,0.05)" : "none",
                }}
            >
                <button
                    onClick={() => scrollTo("#home")}
                    style={{
                        fontFamily: "var(--font-bricolage), sans-serif",
                        fontWeight: 800,
                        fontSize: "22px",
                        color: "#000",
                        border: "none",
                        cursor: "pointer",
                        letterSpacing: "-0.5px",
                        background: "transparent",
                    }}
                >
                    Ahmad Affandi.
                </button>

                <div
                    style={{
                        display: "flex",
                        gap: "4px",
                        alignItems: "center",
                    }}
                    className="hidden-mobile"
                >
                    {navLinks.map((link) => (
                        <button
                            key={link.href}
                            onClick={() => scrollTo(link.href)}
                            style={{
                                padding: "8px 16px",
                                borderRadius: "50px",
                                border: "none",
                                background: active === link.href.replace("#", "") ? "rgba(0,0,0,0.05)" : "transparent",
                                color: active === link.href.replace("#", "") ? "#000" : "#666",
                                fontSize: "14px",
                                fontWeight: 500,
                                cursor: "pointer",
                                transition: "all 0.2s ease",
                            }}
                            onMouseEnter={(e) => {
                                if (active !== link.href.replace("#", "")) {
                                    (e.target as HTMLElement).style.color = "#000";
                                    (e.target as HTMLElement).style.background = "rgba(0,0,0,0.05)";
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (active !== link.href.replace("#", "")) {
                                    (e.target as HTMLElement).style.color = "#666";
                                    (e.target as HTMLElement).style.background = "transparent";
                                }
                            }}
                        >
                            {link.label}
                        </button>
                    ))}
                </div>

                <a
                    href={personalInfo.email ? `mailto:${personalInfo.email}` : "#contact"}
                    className="hidden-mobile"
                    onClick={(e) => { e.preventDefault(); scrollTo("#contact"); }}
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        padding: "12px 28px",
                        borderRadius: "50px",
                        background: "#000",
                        color: "#fff",
                        fontSize: "14px",
                        fontWeight: 600,
                        textDecoration: "none",
                        whiteSpace: "nowrap",
                        flexShrink: 0,
                        boxShadow: "0 4px 14px rgba(0,0,0,0.2)",
                        transition: "background 0.2s, box-shadow 0.2s, transform 0.15s",
                    }}
                    onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.background = "#222";
                        (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(0,0,0,0.3)";
                        (e.currentTarget as HTMLElement).style.transform = "scale(1.05)";
                    }}
                    onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.background = "#000";
                        (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 14px rgba(0,0,0,0.2)";
                        (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                    }}
                >
                    Hire Me ✨
                </a>

                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="show-mobile"
                    style={{
                        background: "none",
                        border: "1px solid rgba(0,0,0,0.1)",
                        borderRadius: "8px",
                        padding: "8px",
                        cursor: "pointer",
                        color: "#000",
                        display: "flex",
                        flexDirection: "column",
                        gap: "5px",
                    }}
                >
                    <span style={{ display: "block", width: "20px", height: "2px", background: menuOpen ? "#000" : "#000", transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
                    <span style={{ display: "block", width: "20px", height: "2px", background: "#000", opacity: menuOpen ? 0 : 1, transition: "all 0.3s" }} />
                    <span style={{ display: "block", width: "20px", height: "2px", background: menuOpen ? "#000" : "#000", transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
                </button>
            </nav>

            <div
                style={{
                    position: "fixed",
                    top: "72px",
                    left: 0,
                    right: 0,
                    zIndex: 99,
                    background: "rgba(255,255,255,0.98)",
                    backdropFilter: "blur(20px)",
                    borderBottom: "1px solid rgba(0,0,0,0.05)",
                    padding: menuOpen ? "16px 24px 24px" : "0 24px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                    overflow: "hidden",
                    maxHeight: menuOpen ? "600px" : "0px",
                    transition: "max-height 0.35s ease, padding 0.35s ease",
                    pointerEvents: menuOpen ? "auto" : "none",
                }}
            >
                {navLinks.map((link) => (
                    <button
                        key={link.href}
                        onClick={() => scrollTo(link.href)}
                        style={{
                            padding: "14px 16px",
                            borderRadius: "10px",
                            border: "none",
                            background: active === link.href.replace("#", "") ? "rgba(0,0,0,0.05)" : "transparent",
                            color: active === link.href.replace("#", "") ? "#000" : "#666",
                            fontSize: "16px",
                            fontWeight: 500,
                            cursor: "pointer",
                            textAlign: "left",
                        }}
                    >
                        {link.label}
                    </button>
                ))}
                <button
                    onClick={() => scrollTo("#contact")}
                    style={{
                        background: "#000",
                        color: "#fff",
                        padding: "12px 24px",
                        borderRadius: "12px",
                        border: "none",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        fontWeight: 600,
                        cursor: "pointer",
                        marginTop: "12px",
                        width: "100%",
                        fontSize: "15px",
                    }}
                >
                    Hire Me ✨
                </button>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
          .hidden-mobile { display: flex !important; }
        }
      `}</style>
        </>
    );
}
