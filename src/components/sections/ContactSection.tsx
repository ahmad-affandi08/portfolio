"use client";

import { useState } from "react";
import FadeContent from "@/components/bits/Animations/FadeContent/FadeContent";
import SpotlightCard from "@/components/bits/Components/SpotlightCard/SpotlightCard";
import { personalInfo } from "@/lib/data";
import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconBrandTwitter,
    IconMail,
    IconMapPin,
    IconSend,
    IconCheck,
} from "@tabler/icons-react";

export default function ContactSection() {
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
    const [errors, setErrors] = useState<Record<string, string>>({});

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
        { href: personalInfo.github, icon: <IconBrandGithub size={20} />, label: "GitHub" },
        { href: personalInfo.linkedin, icon: <IconBrandLinkedin size={20} />, label: "LinkedIn" },
        { href: personalInfo.twitter, icon: <IconBrandTwitter size={20} />, label: "Twitter" },
    ];

    return (
        <section id="contact" className="section">
            <div className="container">
                <FadeContent blur duration={800} threshold={0.1}>
                    <div style={{ textAlign: "center", marginBottom: "60px" }}>
                        <p className="section-label">Kontak</p>
                        <h2 className="section-title">
                            Mari{" "}
                            <span style={{ color: "#000" }}>berkolaborasi</span>
                        </h2>
                        <p className="section-desc" style={{ margin: "0 auto" }}>
                            Punya proyek menarik? Saya selalu terbuka untuk diskusi dan peluang baru.
                        </p>
                    </div>
                </FadeContent>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1.6fr",
                        gap: "48px",
                        alignItems: "start",
                    }}
                    className="contact-grid"
                >
                    <div>
                        <SpotlightCard
                            className="glass"
                            spotlightColor="rgba(0, 0, 0, 0.05)"
                        // style={{ padding: "32px", marginBottom: "24px", background: "#fff" }}
                        >
                            <div style={{ padding: "32px", marginBottom: "24px" }}>
                                <h3
                                    style={{
                                        fontFamily: "var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
                                        fontSize: "1.2rem",
                                        fontWeight: 700,
                                        color: "#000",
                                        marginBottom: "24px",
                                    }}
                                >
                                    Informasi Kontak
                                </h3>
                                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                                    {[
                                        { icon: <IconMail size={18} />, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                                        { icon: <IconMapPin size={18} />, label: "Lokasi", value: personalInfo.location, href: null },
                                    ].map((item) => (
                                        <div key={item.label} style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                                            <div
                                                style={{
                                                    width: "40px",
                                                    height: "40px",
                                                    borderRadius: "10px",
                                                    background: "rgba(0,0,0,0.05)",
                                                    border: "1px solid rgba(0,0,0,0.1)",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    color: "#000",
                                                    flexShrink: 0,
                                                }}
                                            >
                                                {item.icon}
                                            </div>
                                            <div>
                                                <div style={{ color: "#666", fontSize: "12px", marginBottom: "2px" }}>{item.label}</div>
                                                {item.href ? (
                                                    <a href={item.href} style={{ color: "#000", fontSize: "14px", textDecoration: "none" }}>
                                                        {item.value}
                                                    </a>
                                                ) : (
                                                    <div style={{ color: "#000", fontSize: "14px" }}>{item.value}</div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </SpotlightCard>

                        <SpotlightCard className="glass" spotlightColor="rgba(0, 0, 0, 0.05)">
                            <div style={{ padding: "24px" }}>
                                <p style={{ color: "#666", fontSize: "13px", marginBottom: "16px" }}>Temukan saya di</p>
                                <div style={{ display: "flex", gap: "12px" }}>
                                    {socials.map((s) => (
                                        <a
                                            key={s.label}
                                            href={s.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={s.label}
                                            style={{
                                                width: "44px",
                                                height: "44px",
                                                borderRadius: "12px",
                                                border: "1px solid rgba(0,0,0,0.1)",
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
                                                (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,0,0,0.1)";
                                                (e.currentTarget as HTMLElement).style.color = "#666";
                                                (e.currentTarget as HTMLElement).style.background = "transparent";
                                            }}
                                        >
                                            {s.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </SpotlightCard>
                    </div>

                    <SpotlightCard className="glass" spotlightColor="rgba(0, 0, 0, 0.05)">
                        <div style={{ padding: "40px" }}>
                            {status === "sent" ? (
                                <div style={{ textAlign: "center", padding: "40px 0" }}>
                                    <div
                                        style={{
                                            width: "64px",
                                            height: "64px",
                                            borderRadius: "50%",
                                            background: "rgba(34,197,94,0.15)",
                                            border: "2px solid #22c55e",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            margin: "0 auto 20px",
                                            color: "#22c55e",
                                        }}
                                    >
                                        <IconCheck size={28} />
                                    </div>
                                    <h3 style={{ fontFamily: "var(--font-bricolage), 'Bricolage Grotesque', sans-serif", fontSize: "1.3rem", fontWeight: 700, color: "#000", marginBottom: "8px" }}>
                                        Pesan Terkirim! 🎉
                                    </h3>
                                    <p style={{ color: "#666", marginBottom: "24px" }}>
                                        Terima kasih! Saya akan membalas dalam 1-2 hari kerja.
                                    </p>
                                    <button className="btn-outline" onClick={() => setStatus("idle")}>
                                        Kirim Pesan Lagi
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} noValidate>
                                    <h3
                                        style={{
                                            fontFamily: "var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
                                            fontSize: "1.2rem",
                                            fontWeight: 700,
                                            color: "#000",
                                            marginBottom: "28px",
                                        }}
                                    >
                                        Kirim Pesan
                                    </h3>

                                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }} className="form-row">
                                        {[
                                            { key: "name", label: "Nama Lengkap", type: "text", placeholder: "Ahmad Affandi" },
                                            { key: "email", label: "Email", type: "email", placeholder: "ahmad@email.com" },
                                        ].map((field) => (
                                            <div key={field.key}>
                                                <label style={{ display: "block", color: "#666", fontSize: "13px", marginBottom: "8px", fontWeight: 500 }}>
                                                    {field.label}
                                                </label>
                                                <input
                                                    type={field.type}
                                                    placeholder={field.placeholder}
                                                    value={form[field.key as keyof typeof form]}
                                                    onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                                                    style={{
                                                        width: "100%",
                                                        padding: "12px 16px",
                                                        borderRadius: "10px",
                                                        background: "#f9f9f9",
                                                        border: `1px solid ${errors[field.key] ? "#ef4444" : "#e5e5e5"}`,
                                                        color: "#000",
                                                        fontSize: "14px",
                                                        outline: "none",
                                                        transition: "border-color 0.2s",
                                                    }}
                                                    onFocus={(e) => (e.target.style.borderColor = "#000")}
                                                    onBlur={(e) => (e.target.style.borderColor = errors[field.key] ? "#ef4444" : "#e5e5e5")}
                                                />
                                                {errors[field.key] && <p style={{ color: "#ef4444", fontSize: "12px", marginTop: "4px" }}>{errors[field.key]}</p>}
                                            </div>
                                        ))}
                                    </div>

                                    <div style={{ marginBottom: "16px" }}>
                                        <label style={{ display: "block", color: "#666", fontSize: "13px", marginBottom: "8px", fontWeight: 500 }}>Subjek</label>
                                        <input
                                            type="text"
                                            placeholder="Diskusi proyek baru"
                                            value={form.subject}
                                            onChange={(e) => setForm({ ...form, subject: e.target.value })}
                                            style={{
                                                width: "100%",
                                                padding: "12px 16px",
                                                borderRadius: "10px",
                                                background: "#f9f9f9",
                                                border: `1px solid ${errors.subject ? "#ef4444" : "#e5e5e5"}`,
                                                color: "#000",
                                                fontSize: "14px",
                                                outline: "none",
                                                transition: "border-color 0.2s",
                                            }}
                                            onFocus={(e) => (e.target.style.borderColor = "#000")}
                                            onBlur={(e) => (e.target.style.borderColor = errors.subject ? "#ef4444" : "#e5e5e5")}
                                        />
                                        {errors.subject && <p style={{ color: "#ef4444", fontSize: "12px", marginTop: "4px" }}>{errors.subject}</p>}
                                    </div>

                                    <div style={{ marginBottom: "28px" }}>
                                        <label style={{ display: "block", color: "#666", fontSize: "13px", marginBottom: "8px", fontWeight: 500 }}>Pesan</label>
                                        <textarea
                                            placeholder="Ceritakan tentang proyek atau kebutuhan Anda..."
                                            rows={5}
                                            value={form.message}
                                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                                            style={{
                                                width: "100%",
                                                padding: "12px 16px",
                                                borderRadius: "10px",
                                                background: "#f9f9f9",
                                                border: `1px solid ${errors.message ? "#ef4444" : "#e5e5e5"}`,
                                                color: "#000",
                                                fontSize: "14px",
                                                outline: "none",
                                                resize: "vertical",
                                                fontFamily: "inherit",
                                                transition: "border-color 0.2s",
                                            }}
                                            onFocus={(e) => (e.target.style.borderColor = "#000")}
                                            onBlur={(e) => (e.target.style.borderColor = errors.message ? "#ef4444" : "#e5e5e5")}
                                        />
                                        {errors.message && <p style={{ color: "#ef4444", fontSize: "12px", marginTop: "4px" }}>{errors.message}</p>}
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn-primary"
                                        disabled={status === "sending"}
                                        style={{ width: "100%", justifyContent: "center", opacity: status === "sending" ? 0.7 : 1 }}
                                    >
                                        {status === "sending" ? (
                                            <>Mengirim...</>
                                        ) : (
                                            <>
                                                <IconSend size={18} />
                                                Kirim Pesan
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </SpotlightCard>
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
}
