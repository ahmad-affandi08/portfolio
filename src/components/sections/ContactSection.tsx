"use client";

import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { personalInfo } from "@/lib/data";
import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconBrandTwitter,
    IconMail,
    IconMapPin,
    IconSend,
    IconCheck,
    IconArrowUpRight,
    IconPhone,
} from "@tabler/icons-react";

export default function ContactSection() {
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [focused, setFocused] = useState<string | null>(null);
    const { ref, inView } = useInView({ threshold: 0.08, triggerOnce: true });

    const validate = () => {
        const e: Record<string, string> = {};
        if (!form.name.trim()) e.name = "Nama wajib diisi";
        if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Email tidak valid";
        if (!form.subject.trim()) e.subject = "Subjek wajib diisi";
        if (!form.message.trim() || form.message.length < 10) e.message = "Pesan minimal 10 karakter";
        return e;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length > 0) { setErrors(errs); return; }
        setErrors({});
        setStatus("sending");
        await new Promise((r) => setTimeout(r, 1500));
        setStatus("sent");
        setForm({ name: "", email: "", subject: "", message: "" });
    };

    const socials = [
        { href: personalInfo.github, icon: <IconBrandGithub size={18} />, label: "GitHub" },
        { href: personalInfo.linkedin, icon: <IconBrandLinkedin size={18} />, label: "LinkedIn" },
        { href: personalInfo.twitter, icon: <IconBrandTwitter size={18} />, label: "Twitter" },
    ];

    const inputStyle = (field: string): React.CSSProperties => ({
        width: "100%",
        padding: "14px 16px",
        borderRadius: "12px",
        background: focused === field ? "#fff" : "#f7f7f7",
        border: `1.5px solid ${errors[field] ? "#ef4444" : focused === field ? "#111" : "#ebebeb"}`,
        color: "#111",
        fontSize: "14px",
        outline: "none",
        transition: "all 0.2s ease",
        fontFamily: "inherit",
        boxSizing: "border-box",
        boxShadow: focused === field ? "0 0 0 3px rgba(0,0,0,0.06)" : "none",
    });

    return (
        <section id="contact" className="section">
            <div className="container">

                {/* ── Header ── */}
                <div style={{ textAlign: "center", marginBottom: "64px" }}>
                    <p className="section-label">Kontak</p>
                    <h2 className="section-title">
                        Mari{" "}
                        <span style={{ color: "#000", fontWeight: 800 }}>berkolaborasi</span>
                    </h2>
                    <p className="section-desc" style={{ margin: "0 auto" }}>
                        Punya proyek menarik? Saya selalu terbuka untuk diskusi dan peluang baru.
                    </p>
                </div>

                {/* ── Main Grid ── */}
                <div
                    ref={ref}
                    className="contact-grid"
                    style={{
                        display: "grid",
                        gridTemplateColumns: "420px 1fr",
                        gap: "24px",
                        alignItems: "stretch",
                    }}
                >
                    {/* ══ LEFT — Dark Info Panel ══ */}
                    <div
                        style={{
                            background: "#111",
                            borderRadius: "24px",
                            padding: "48px 40px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            gap: "40px",
                            position: "relative",
                            overflow: "hidden",
                            opacity: inView ? 1 : 0,
                            transform: inView ? "translateX(0)" : "translateX(-30px)",
                            transition: "all 0.6s ease",
                            minHeight: "520px",
                        }}
                    >
                        {/* Background decoration */}
                        <div style={{
                            position: "absolute", bottom: -80, right: -80,
                            width: "280px", height: "280px", borderRadius: "50%",
                            background: "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)",
                            pointerEvents: "none",
                        }} />
                        <div style={{
                            position: "absolute", top: -40, left: -40,
                            width: "200px", height: "200px", borderRadius: "50%",
                            background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
                            pointerEvents: "none",
                        }} />

                        <div>
                            <div
                                style={{
                                    display: "inline-flex", alignItems: "center", gap: "6px",
                                    background: "rgba(34,197,94,0.15)", border: "1px solid rgba(34,197,94,0.3)",
                                    borderRadius: "50px", padding: "5px 12px",
                                    fontSize: "12px", fontWeight: 600, color: "#4ade80",
                                    marginBottom: "20px",
                                }}
                            >
                                <span style={{
                                    width: "6px", height: "6px", borderRadius: "50%",
                                    background: "#22c55e", display: "inline-block",
                                    boxShadow: "0 0 8px rgba(34,197,94,0.8)",
                                    animation: "blink 1.8s ease infinite",
                                }} />
                                Siap berkolaborasi
                            </div>

                            <h3 style={{
                                fontFamily: "var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
                                fontSize: "1.9rem", fontWeight: 900, color: "#fff",
                                lineHeight: 1.15, marginBottom: "14px",
                                letterSpacing: "-0.03em",
                            }}>
                                Yuk, mulai <br />
                                <span style={{ color: "rgba(255,255,255,0.4)" }}>sesuatu yang</span>
                                <br />keren bareng 🚀
                            </h3>
                            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px", lineHeight: 1.7 }}>
                                Apapun kebutuhanmu — website, aplikasi, atau konsultasi teknis — saya siap membantu mewujudkan ide jadi kenyataan.
                            </p>
                        </div>

                        {/* Contact info */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                            {[
                                { icon: <IconMail size={16} />, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                                { icon: <IconMapPin size={16} />, label: "Lokasi", value: personalInfo.location, href: null },
                                { icon: <IconPhone size={16} />, label: "Status", value: "Available for freelance", href: null },
                            ].map((item) => (
                                <div key={item.label} style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                                    <div style={{
                                        width: "36px", height: "36px", borderRadius: "10px",
                                        background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)",
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                        color: "rgba(255,255,255,0.7)", flexShrink: 0,
                                    }}>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <div style={{ color: "rgba(255,255,255,0.35)", fontSize: "11px", fontWeight: 500, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                                            {item.label}
                                        </div>
                                        {item.href ? (
                                            <a href={item.href} style={{ color: "#fff", fontSize: "13px", fontWeight: 500, textDecoration: "none" }}>
                                                {item.value}
                                            </a>
                                        ) : (
                                            <div style={{ color: "#fff", fontSize: "13px", fontWeight: 500 }}>{item.value}</div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Social links */}
                        <div>
                            <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "12px" }}>
                                Temukan saya di
                            </p>
                            <div style={{ display: "flex", gap: "10px" }}>
                                {socials.map((s) => (
                                    <a
                                        key={s.label}
                                        href={s.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={s.label}
                                        style={{
                                            width: "40px", height: "40px", borderRadius: "10px",
                                            border: "1px solid rgba(255,255,255,0.12)",
                                            background: "rgba(255,255,255,0.06)",
                                            display: "flex", alignItems: "center", justifyContent: "center",
                                            color: "rgba(255,255,255,0.6)",
                                            textDecoration: "none",
                                            transition: "all 0.2s ease",
                                        }}
                                        onMouseEnter={(e) => {
                                            (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.15)";
                                            (e.currentTarget as HTMLElement).style.color = "#fff";
                                            (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                                        }}
                                        onMouseLeave={(e) => {
                                            (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)";
                                            (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.6)";
                                            (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                                        }}
                                    >
                                        {s.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ══ RIGHT — Form ══ */}
                    <div
                        style={{
                            background: "#fff",
                            borderRadius: "24px",
                            border: "1.5px solid #ebebeb",
                            padding: "48px 44px",
                            opacity: inView ? 1 : 0,
                            transform: inView ? "translateX(0)" : "translateX(30px)",
                            transition: "all 0.6s ease 0.15s",
                        }}
                    >
                        {status === "sent" ? (
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", gap: "20px", textAlign: "center", padding: "60px 0" }}>
                                <div style={{
                                    width: "72px", height: "72px", borderRadius: "50%",
                                    background: "#f0fdf4", border: "2px solid #4ade80",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    color: "#22c55e",
                                    boxShadow: "0 0 0 8px rgba(34,197,94,0.08)",
                                }}>
                                    <IconCheck size={32} />
                                </div>
                                <div>
                                    <h3 style={{ fontFamily: "var(--font-bricolage), 'Bricolage Grotesque', sans-serif", fontSize: "1.6rem", fontWeight: 800, color: "#000", marginBottom: "8px" }}>
                                        Pesan Terkirim! 🎉
                                    </h3>
                                    <p style={{ color: "#777", lineHeight: 1.7 }}>
                                        Terima kasih sudah menghubungi saya.<br />
                                        Saya akan membalas dalam 1–2 hari kerja.
                                    </p>
                                </div>
                                <button
                                    onClick={() => setStatus("idle")}
                                    style={{
                                        padding: "12px 28px", borderRadius: "12px",
                                        border: "1.5px solid #e5e5e5", background: "#fafafa",
                                        color: "#333", fontWeight: 600, fontSize: "14px",
                                        cursor: "pointer", transition: "all 0.2s ease",
                                    }}
                                    onMouseEnter={(e) => {
                                        (e.currentTarget as HTMLElement).style.borderColor = "#111";
                                        (e.currentTarget as HTMLElement).style.background = "#fff";
                                    }}
                                    onMouseLeave={(e) => {
                                        (e.currentTarget as HTMLElement).style.borderColor = "#e5e5e5";
                                        (e.currentTarget as HTMLElement).style.background = "#fafafa";
                                    }}
                                >
                                    Kirim Pesan Lagi
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} noValidate>
                                <div style={{ marginBottom: "32px" }}>
                                    <h3 style={{
                                        fontFamily: "var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
                                        fontSize: "1.4rem", fontWeight: 800, color: "#000",
                                        marginBottom: "6px",
                                    }}>
                                        Kirim Pesan
                                    </h3>
                                    <p style={{ color: "#aaa", fontSize: "14px" }}>
                                        Biasanya saya balas dalam 24 jam.
                                    </p>
                                </div>

                                {/* Name + Email row */}
                                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }} className="form-row">
                                    {[
                                        { key: "name", label: "Nama Lengkap", type: "text", placeholder: "Ahmad Affandi" },
                                        { key: "email", label: "Alamat Email", type: "email", placeholder: "ahmad@email.com" },
                                    ].map((f) => (
                                        <div key={f.key}>
                                            <label style={{ display: "block", color: "#555", fontSize: "13px", fontWeight: 600, marginBottom: "8px" }}>
                                                {f.label}
                                            </label>
                                            <input
                                                type={f.type}
                                                placeholder={f.placeholder}
                                                value={form[f.key as keyof typeof form]}
                                                onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                                                onFocus={() => setFocused(f.key)}
                                                onBlur={() => setFocused(null)}
                                                style={inputStyle(f.key)}
                                            />
                                            {errors[f.key] && <p style={{ color: "#ef4444", fontSize: "12px", marginTop: "5px", fontWeight: 500 }}>{errors[f.key]}</p>}
                                        </div>
                                    ))}
                                </div>

                                {/* Subject */}
                                <div style={{ marginBottom: "16px" }}>
                                    <label style={{ display: "block", color: "#555", fontSize: "13px", fontWeight: 600, marginBottom: "8px" }}>
                                        Subjek
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Diskusi proyek kolaborasi"
                                        value={form.subject}
                                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                                        onFocus={() => setFocused("subject")}
                                        onBlur={() => setFocused(null)}
                                        style={inputStyle("subject")}
                                    />
                                    {errors.subject && <p style={{ color: "#ef4444", fontSize: "12px", marginTop: "5px", fontWeight: 500 }}>{errors.subject}</p>}
                                </div>

                                {/* Message */}
                                <div style={{ marginBottom: "32px" }}>
                                    <label style={{ display: "block", color: "#555", fontSize: "13px", fontWeight: 600, marginBottom: "8px" }}>
                                        Pesan
                                    </label>
                                    <textarea
                                        placeholder="Ceritakan tentang proyek atau kebutuhan Anda..."
                                        rows={5}
                                        value={form.message}
                                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                                        onFocus={() => setFocused("message")}
                                        onBlur={() => setFocused(null)}
                                        style={{ ...inputStyle("message"), resize: "vertical" }}
                                    />
                                    {errors.message && <p style={{ color: "#ef4444", fontSize: "12px", marginTop: "5px", fontWeight: 500 }}>{errors.message}</p>}
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    disabled={status === "sending"}
                                    style={{
                                        width: "100%",
                                        display: "flex", alignItems: "center", justifyContent: "center", gap: "10px",
                                        padding: "15px 28px", borderRadius: "14px",
                                        background: status === "sending" ? "#555" : "#111",
                                        color: "#fff", border: "none",
                                        fontSize: "15px", fontWeight: 700,
                                        cursor: status === "sending" ? "default" : "pointer",
                                        letterSpacing: "-0.01em",
                                        boxShadow: "0 4px 20px rgba(0,0,0,0.18)",
                                        transition: "all 0.22s ease",
                                    }}
                                    onMouseEnter={(e) => {
                                        if (status !== "sending") {
                                            (e.currentTarget as HTMLElement).style.background = "#000";
                                            (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.28)";
                                            (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        (e.currentTarget as HTMLElement).style.background = status === "sending" ? "#555" : "#111";
                                        (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(0,0,0,0.18)";
                                        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                                    }}
                                >
                                    {status === "sending" ? (
                                        <>
                                            <span className="spinner" />
                                            Mengirim...
                                        </>
                                    ) : (
                                        <>
                                            <IconSend size={18} />
                                            Kirim Pesan
                                            <IconArrowUpRight size={16} style={{ opacity: 0.7 }} />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes blink {
                    0%, 100% { opacity: 1; box-shadow: 0 0 8px rgba(34,197,94,0.8); }
                    50%       { opacity: 0.5; box-shadow: 0 0 3px rgba(34,197,94,0.3); }
                }
                .spinner {
                    width: 16px; height: 16px;
                    border: 2px solid rgba(255,255,255,0.3);
                    border-top-color: #fff;
                    border-radius: 50%;
                    animation: spin 0.7s linear infinite;
                    display: inline-block;
                }
                @keyframes spin { to { transform: rotate(360deg); } }
                @media (max-width: 900px) {
                    .contact-grid { grid-template-columns: 1fr !important; }
                    .form-row     { grid-template-columns: 1fr !important; }
                }
            `}</style>
        </section>
    );
}
