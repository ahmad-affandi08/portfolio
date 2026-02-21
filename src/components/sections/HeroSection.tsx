"use client";

import { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion, useSpring } from "motion/react";
import RotatingText from "@/components/bits/TextAnimations/RotatingText/RotatingText";
import ShinyText from "@/components/bits/TextAnimations/ShinyText/ShinyText";
import Magnet from "@/components/bits/Animations/Magnet/Magnet";
import { personalInfo } from "@/lib/data";
import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconDownload,
    IconArrowRight,
    IconMapPin,
} from "@tabler/icons-react";

export default function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const yLeft = useTransform(scrollYProgress, [0, 1], [0, 180]);
    const yRight = useTransform(scrollYProgress, [0, 1], [0, 80]);
    const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

    const springX = useSpring(0, { stiffness: 60, damping: 20 });
    const springY = useSpring(0, { stiffness: 60, damping: 20 });

    useEffect(() => {
        const handleMouse = (e: MouseEvent) => {
            const { innerWidth, innerHeight } = window;
            springX.set((e.clientX / innerWidth - 0.5) * 18);
            springY.set((e.clientY / innerHeight - 0.5) * 12);
            setMousePos({ x: e.clientX / innerWidth, y: e.clientY / innerHeight });
        };
        window.addEventListener("mousemove", handleMouse);
        return () => window.removeEventListener("mousemove", handleMouse);
    }, [springX, springY]);

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
                overflow: "hidden",
                background: "#fafafa",
            }}
        >
            {/* ── Animated background blobs ── */}
            <div
                aria-hidden
                style={{
                    position: "absolute", inset: 0, zIndex: 0,
                    pointerEvents: "none", overflow: "hidden",
                }}
            >
                <div
                    className="blob blob-1"
                    style={{
                        transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -15}px)`,
                    }}
                />
                <div
                    className="blob blob-2"
                    style={{
                        transform: `translate(${mousePos.x * 25}px, ${mousePos.y * 18}px)`,
                    }}
                />
                <div
                    className="blob blob-3"
                    style={{
                        transform: `translate(${mousePos.x * -12}px, ${mousePos.y * 20}px)`,
                    }}
                />
                {/* Grid lines */}
                <div style={{
                    position: "absolute", inset: 0,
                    backgroundImage: "linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                    maskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black, transparent)",
                }} />
            </div>

            {/* ── Main split layout ── */}
            <div
                className="hero-split container"
                style={{
                    position: "relative", zIndex: 2,
                    display: "grid",
                    gridTemplateColumns: "1fr 420px",
                    gap: "60px",
                    alignItems: "center",
                    paddingTop: "100px",
                    paddingBottom: "80px",
                    width: "100%",
                }}
            >
                {/* ══ LEFT SIDE ══ */}
                <motion.div style={{ y: yLeft, opacity }} className="hero-left">

                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        style={{
                            display: "inline-flex", alignItems: "center", gap: "8px",
                            padding: "7px 16px", borderRadius: "50px",
                            background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.3)",
                            fontSize: "13px", fontWeight: 600, color: "#16a34a",
                            marginBottom: "28px",
                        }}
                    >
                        <span style={{
                            width: "7px", height: "7px", borderRadius: "50%",
                            background: "#22c55e", display: "inline-block",
                            boxShadow: "0 0 10px rgba(34,197,94,0.7)",
                            animation: "blink 1.8s ease infinite",
                        }} />
                        <ShinyText
                            text="Available for work"
                            disabled={false}
                            speed={3}
                            className="font-semibold"
                        />
                    </motion.div>

                    {/* Greeting */}
                    <motion.p
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        style={{ color: "#888", fontSize: "1.05rem", fontWeight: 500, marginBottom: "8px" }}
                    >
                        Halo, saya 👋
                    </motion.p>

                    {/* Big name */}
                    <motion.h1
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.65, delay: 0.3 }}
                        className="hero-name"
                    >
                        Ahmad<br />
                        <span className="hero-name-outline">Affandi</span>
                    </motion.h1>

                    {/* Role ticker */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        style={{
                            display: "flex", alignItems: "center", gap: "12px",
                            fontSize: "clamp(1rem, 2.2vw, 1.25rem)",
                            color: "#666", marginBottom: "28px", flexWrap: "wrap",
                        }}
                    >
                        <span style={{ fontWeight: 400 }}>Seorang</span>
                        <RotatingText
                            texts={personalInfo.roles}
                            mainClassName="px-3 py-1 rounded-lg overflow-hidden"
                            style={{
                                background: "#111",
                                color: "#fff",
                                fontWeight: 700,
                                fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
                                letterSpacing: "-0.01em",
                                paddingLeft: "14px",
                                paddingRight: "14px",
                            }}
                            rotationInterval={2500}
                            staggerDuration={0.03}
                            staggerFrom="last"
                        />
                    </motion.div>

                    {/* Bio */}
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        style={{
                            color: "#777", fontSize: "1rem", lineHeight: 1.8,
                            maxWidth: "520px", marginBottom: "40px",
                        }}
                    >
                        {personalInfo.bio}
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.75 }}
                        style={{ display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center", marginBottom: "36px" }}
                    >
                        <Magnet magnetStrength={5} padding={80}>
                            <button
                                onClick={scrollToProjects}
                                className="btn-primary"
                            >
                                Lihat Proyek <IconArrowRight size={17} />
                            </button>
                        </Magnet>
                        <Magnet magnetStrength={5} padding={80}>
                            <a href={personalInfo.cvUrl} download className="btn-outline">
                                <IconDownload size={17} /> Download CV
                            </a>
                        </Magnet>
                    </motion.div>

                    {/* Socials + location */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.9 }}
                        style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}
                    >
                        {[
                            { href: personalInfo.github, icon: <IconBrandGithub size={19} />, label: "GitHub" },
                            { href: personalInfo.linkedin, icon: <IconBrandLinkedin size={19} />, label: "LinkedIn" },
                        ].map((s) => (
                            <Magnet key={s.label} magnetStrength={3} padding={40}>
                                <a
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={s.label}
                                    style={{
                                        width: "42px", height: "42px", borderRadius: "12px",
                                        border: "1.5px solid #e5e5e5", background: "#fff",
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                        color: "#555", textDecoration: "none",
                                        transition: "all 0.2s ease",
                                        boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
                                    }}
                                    onMouseEnter={(e) => {
                                        (e.currentTarget as HTMLElement).style.borderColor = "#111";
                                        (e.currentTarget as HTMLElement).style.color = "#111";
                                        (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                                        (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 14px rgba(0,0,0,0.12)";
                                    }}
                                    onMouseLeave={(e) => {
                                        (e.currentTarget as HTMLElement).style.borderColor = "#e5e5e5";
                                        (e.currentTarget as HTMLElement).style.color = "#555";
                                        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                                        (e.currentTarget as HTMLElement).style.boxShadow = "0 1px 4px rgba(0,0,0,0.05)";
                                    }}
                                >
                                    {s.icon}
                                </a>
                            </Magnet>
                        ))}

                        <div style={{ width: "1px", height: "24px", background: "#ddd" }} />

                        <span style={{ display: "flex", alignItems: "center", gap: "5px", color: "#999", fontSize: "13px" }}>
                            <IconMapPin size={14} /> {personalInfo.location}
                        </span>
                    </motion.div>
                </motion.div>

                {/* ══ RIGHT SIDE — Floating Photo ══ */}
                <motion.div
                    style={{ y: yRight, opacity, rotateX: springY, rotateY: springX, perspective: 800 }}
                    initial={{ opacity: 0, scale: 0.9, x: 40 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="hero-photo-wrapper"
                >
                    {/* Decorative ring */}
                    <div className="hero-ring" />
                    <div className="hero-ring hero-ring-2" />

                    {/* Photo container */}
                    <div className="hero-photo-box">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/img/me.jpeg"
                            alt="Ahmad Affandi"
                            className="hero-photo"
                        />

                        {/* Floating chips */}
                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            style={{
                                position: "absolute", top: "18px", right: "-24px",
                                background: "#fff", borderRadius: "14px",
                                padding: "10px 14px",
                                boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
                                border: "1px solid #f0f0f0",
                                display: "flex", alignItems: "center", gap: "8px",
                                fontSize: "12px", fontWeight: 700, color: "#111",
                                whiteSpace: "nowrap",
                            }}
                        >
                            <span style={{ fontSize: "18px" }}>⚡</span>
                            Full Stack Dev
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            style={{
                                position: "absolute", bottom: "60px", left: "-28px",
                                background: "#111", borderRadius: "14px",
                                padding: "10px 14px",
                                boxShadow: "0 8px 30px rgba(0,0,0,0.25)",
                                display: "flex", alignItems: "center", gap: "8px",
                                fontSize: "12px", fontWeight: 700, color: "#fff",
                                whiteSpace: "nowrap",
                            }}
                        >
                            <span style={{ fontSize: "18px" }}>🏥</span>
                            RSUD Gemolong
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, -6, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            style={{
                                position: "absolute", bottom: "20px", right: "-18px",
                                background: "#fff", borderRadius: "12px",
                                padding: "8px 12px",
                                boxShadow: "0 6px 20px rgba(0,0,0,0.10)",
                                border: "1px solid #f0f0f0",
                                display: "flex", alignItems: "center", gap: "6px",
                                fontSize: "12px", fontWeight: 600, color: "#22c55e",
                                whiteSpace: "nowrap",
                            }}
                        >
                            <span style={{
                                width: "6px", height: "6px", borderRadius: "50%",
                                background: "#22c55e", display: "inline-block",
                            }} />
                            Open to work
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* ── Scroll indicator ── */}
            <motion.div
                style={{ opacity }}
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="scroll-indicator"
                suppressHydrationWarning
            >
                <div className="scroll-line" />
                <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", color: "#aaa", textTransform: "uppercase" }}>
                    Scroll
                </span>
            </motion.div>

            <style>{`
                /* ── Blobs ── */
                .blob {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(80px);
                    transition: transform 0.6s ease;
                    pointer-events: none;
                }
                .blob-1 {
                    width: 500px; height: 500px;
                    background: radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%);
                    top: -100px; left: -100px;
                    animation: blobFloat1 12s ease-in-out infinite;
                }
                .blob-2 {
                    width: 600px; height: 600px;
                    background: radial-gradient(circle, rgba(236,72,153,0.10) 0%, transparent 70%);
                    bottom: -150px; right: -100px;
                    animation: blobFloat2 14s ease-in-out infinite;
                }
                .blob-3 {
                    width: 400px; height: 400px;
                    background: radial-gradient(circle, rgba(34,197,94,0.09) 0%, transparent 70%);
                    top: 40%; left: 40%;
                    animation: blobFloat3 10s ease-in-out infinite;
                }
                @keyframes blobFloat1 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(40px,30px)} }
                @keyframes blobFloat2 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(-30px,-40px)} }
                @keyframes blobFloat3 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(20px,-20px)} }

                /* ── Name ── */
                .hero-name {
                    font-family: var(--font-bricolage), 'Bricolage Grotesque', sans-serif;
                    font-size: clamp(3.5rem, 8vw, 6.5rem);
                    font-weight: 900;
                    line-height: 0.95;
                    letter-spacing: -3px;
                    color: #000;
                    margin-bottom: 20px;
                }
                .hero-name-outline {
                    -webkit-text-stroke: 2.5px #000;
                    color: transparent;
                }

                /* ── Buttons ── */
                .btn-primary {
                    display: inline-flex; align-items: center; gap: 8px;
                    padding: 13px 28px; border-radius: 50px;
                    background: #111; color: #fff; border: none;
                    font-size: 15px; font-weight: 700; cursor: pointer;
                    letter-spacing: -0.01em;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.2);
                    transition: all 0.2s ease;
                    white-space: nowrap;
                }
                .btn-primary:hover {
                    background: #000;
                    box-shadow: 0 8px 32px rgba(0,0,0,0.3);
                    transform: scale(1.04);
                }
                .btn-outline {
                    display: inline-flex; align-items: center; gap: 8px;
                    padding: 13px 28px; border-radius: 50px;
                    background: #fff; color: #111;
                    border: 1.5px solid #ddd;
                    font-size: 15px; font-weight: 700; cursor: pointer;
                    letter-spacing: -0.01em;
                    text-decoration: none;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
                    transition: all 0.2s ease;
                    white-space: nowrap;
                }
                .btn-outline:hover {
                    border-color: #111;
                    box-shadow: 0 6px 20px rgba(0,0,0,0.1);
                    transform: scale(1.04);
                }

                /* ── Photo ── */
                .hero-photo-wrapper {
                    position: relative;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .hero-ring {
                    position: absolute;
                    width: 360px; height: 360px;
                    border-radius: 50%;
                    border: 1.5px dashed rgba(0,0,0,0.1);
                    animation: spinRing 20s linear infinite;
                }
                .hero-ring-2 {
                    width: 420px; height: 420px;
                    border-color: rgba(0,0,0,0.05);
                    animation-duration: 30s;
                    animation-direction: reverse;
                }
                @keyframes spinRing { to { transform: rotate(360deg); } }

                .hero-photo-box {
                    position: relative;
                    width: 300px; height: 360px;
                    border-radius: 28px;
                    overflow: visible;
                }
                .hero-photo {
                    width: 300px; height: 360px;
                    object-fit: cover;
                    object-position: top center;
                    border-radius: 28px;
                    display: block;
                    box-shadow: 0 30px 80px rgba(0,0,0,0.18), 0 8px 24px rgba(0,0,0,0.10);
                    border: 3px solid #fff;
                }

                /* ── Scroll indicator ── */
                .scroll-indicator {
                    position: absolute;
                    bottom: 32px; left: 50%;
                    transform: translateX(-50%);
                    display: flex; flex-direction: column;
                    align-items: center; gap: 8px;
                    z-index: 4;
                }
                .scroll-line {
                    width: 1.5px; height: 40px;
                    background: linear-gradient(to bottom, transparent, #bbb);
                    border-radius: 2px;
                }

                /* ── Blink ── */
                @keyframes blink {
                    0%, 100% { opacity: 1; box-shadow: 0 0 10px rgba(34,197,94,0.7); }
                    50%       { opacity: 0.5; box-shadow: 0 0 4px rgba(34,197,94,0.3); }
                }

                /* ── Responsive ── */
                @media (max-width: 900px) {
                    .hero-split {
                        grid-template-columns: 1fr !important;
                        gap: 50px !important;
                        text-align: center;
                    }
                    .hero-left { display: flex; flex-direction: column; align-items: center; }
                    .hero-photo-wrapper { order: -1; }
                    .hero-ring, .hero-ring-2 { display: none; }
                    .hero-name { letter-spacing: -2px; }
                    .hero-ring { width: 280px; height: 280px; }
                    .hero-ring-2 { width: 320px; height: 320px; }
                }
            `}</style>
        </section>
    );
}
