"use client";

import { useInView } from "react-intersection-observer";
import FadeContent from "@/components/bits/Animations/FadeContent/FadeContent";
import { experiences } from "@/lib/data";
import { IconBriefcase, IconSchool } from "@tabler/icons-react";
import SpotlightCard from "@/components/bits/Components/SpotlightCard/SpotlightCard";
import type { CSSProperties, ReactNode } from "react";

const styles = {
  iconBox: {
    width: "36px",
    height: "36px",
    borderRadius: "10px",
    background: "rgba(0,0,0,0.05)",
    border: "1px solid rgba(0,0,0,0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#000",
  } satisfies CSSProperties,

  columnHeading: {
    fontFamily: "var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
    fontSize: "1.2rem",
    fontWeight: 700,
    color: "#000",
  } satisfies CSSProperties,

  timelineLine: {
    position: "absolute",
    left: "15px",
    top: 0,
    bottom: 0,
    width: "1px",
    background: "#e5e5e5",
  } satisfies CSSProperties,

  dot: {
    position: "absolute",
    left: "8px",
    top: "4px",
    width: "16px",
    height: "16px",
    borderRadius: "50%",
    background: "#000",
    border: "3px solid #fff",
    boxShadow: "0 0 0 2px rgba(0,0,0,0.1)",
  } satisfies CSSProperties,

  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: "8px",
    flexWrap: "wrap",
    gap: "4px",
  } satisfies CSSProperties,

  cardTitle: {
    fontFamily: "var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
    fontSize: "1rem",
    fontWeight: 700,
    color: "#000",
  } satisfies CSSProperties,

  badge: {
    fontSize: "12px",
    color: "#000",
    fontWeight: 500,
    background: "rgba(0,0,0,0.05)",
    padding: "2px 10px",
    borderRadius: "50px",
    whiteSpace: "nowrap",
  } satisfies CSSProperties,

  skillTag: {
    padding: "5px 12px",
    borderRadius: "8px",
    background: "#f5f5f5",
    border: "1px solid #e5e5e5",
    color: "#555",
    fontSize: "12.5px",
    fontWeight: 500,
  } satisfies CSSProperties,
};

type Experience = (typeof experiences)[number];

type TimelineColumnProps = {
  icon: ReactNode;
  title: string;
  items: Experience[];
  inView: boolean;
  direction: "left" | "right";
};

function TimelineColumn({ icon, title, items, inView, direction }: TimelineColumnProps) {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "32px" }}>
        <div style={styles.iconBox}>{icon}</div>
        <h3 style={styles.columnHeading}>{title}</h3>
      </div>

      <div style={{ position: "relative" }}>
        <div style={styles.timelineLine} />
        {items.map((exp, i) => (
          <div
            key={exp.id}
            style={{
              paddingLeft: "44px",
              paddingBottom: "32px",
              position: "relative",
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : `translateX(${direction === "left" ? "-20px" : "20px"})`,
              transition: `all 0.6s ease ${i * 0.15}s`,
            }}
          >
            <div style={styles.dot} />
            <SpotlightCard className="glass" spotlightColor="rgba(0, 0, 0, 0.05)">
              <div style={{ padding: "20px 24px" }}>
              <div style={styles.cardHeader}>
                <h4 style={styles.cardTitle}>{exp.title}</h4>
                <span style={styles.badge}>{exp.period}</span>
              </div>
              <p style={{ color: "#333", fontSize: "13px", fontWeight: 600, marginBottom: "8px" }}>
                {exp.company}
              </p>
              <p style={{ color: "#666", fontSize: "13px", lineHeight: 1.7, marginBottom: "12px" }}>
                {exp.description}
              </p>
              {exp.skills && (
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "4px" }}>
                  {exp.skills.map((s) => (
                    <span key={s} style={styles.skillTag}>{s}</span>
                  ))}
                </div>
              )}
              </div>
            </SpotlightCard>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ExperienceSection() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  const work = experiences.filter((e) => e.type === "work");
  const education = experiences.filter((e) => e.type === "education");

  return (
    <section id="experience" className="section" style={{ background: "transparent" }}>
      <div className="container">
        <FadeContent blur duration={800} threshold={0.1}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <p className="section-label">Perjalanan</p>
            <h2 className="section-title">
              Pengalaman & <span style={{ color: "#000" }}>Pendidikan</span>
            </h2>
            <p className="section-desc" style={{ margin: "0 auto" }}>
              Perjalanan profesional dan akademis yang membentuk saya menjadi developer seperti sekarang.
            </p>
          </div>
        </FadeContent>

        <div
          ref={ref}
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px" }}
          className="exp-grid"
        >
          <TimelineColumn
            icon={<IconBriefcase size={18} />}
            title="Pengalaman Kerja"
            items={work}
            inView={inView}
            direction="left"
          />
          <TimelineColumn
            icon={<IconSchool size={18} />}
            title="Pendidikan"
            items={education}
            inView={inView}
            direction="right"
          />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .exp-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
