"use client";
import { useState } from "react";
import { projects } from "@/lib/projects";

type Props = { lang: "en" | "ko" };

const colorMap = {
  blue: { badge: "rgba(24,101,242,0.15)", badgeText: "#1865F2", badgeBorder: "rgba(24,101,242,0.3)" },
  green: { badge: "rgba(14,212,163,0.12)", badgeText: "#0ED4A3", badgeBorder: "rgba(14,212,163,0.3)" },
  orange: { badge: "rgba(242,168,24,0.12)", badgeText: "#F2A818", badgeBorder: "rgba(242,168,24,0.3)" },
};

export default function Projects({ lang }: Props) {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="projects" style={{ padding: "80px 0", borderTop: "1px solid #252a35" }}>
      <div className="max-w-5xl mx-auto px-7">
        <p style={{ fontSize: "11px", fontWeight: 700, color: "#1865F2", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "10px" }}>
          {lang === "en" ? "Selected Work" : "주요 프로젝트"}
        </p>
        <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 900, marginBottom: "8px", color: "#E8EBF0" }}>
          {lang === "en" ? "Projects" : "프로젝트"}
        </h2>
        <p style={{ color: "#7A8294", fontSize: "14px", marginBottom: "36px" }}>
          {lang === "en"
            ? "Click any card to expand details."
            : "카드를 클릭하면 상세 내용을 볼 수 있습니다."}
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {projects.map((p) => {
            const c = colorMap[p.color];
            const isOpen = expanded === p.id;

            return (
              <div
                key={p.id}
                style={{ background: "#111318", border: "1px solid #252a35", borderRadius: "12px", overflow: "hidden", transition: "border-color 0.2s" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = c.badgeBorder)}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#252a35")}
              >
                {/* header */}
                <button
                  onClick={() => setExpanded(isOpen ? null : p.id)}
                  style={{ width: "100%", display: "flex", alignItems: "center", gap: "14px", padding: "18px 22px", background: "transparent", border: "none", cursor: "pointer", textAlign: "left" }}
                >
                  <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "11px", letterSpacing: "1.5px", background: c.badge, color: c.badgeText, border: `1px solid ${c.badgeBorder}`, borderRadius: "6px", padding: "3px 10px", whiteSpace: "nowrap" }}>
                    {lang === "en" ? p.category : p.categoryKo}
                  </span>
                  <span style={{ fontWeight: 700, fontSize: "15px", color: "#E8EBF0", flex: 1 }}>
                    {lang === "en" ? p.title : p.titleKo}
                  </span>
                  <span style={{ color: "#7A8294", fontSize: "18px", transition: "transform 0.2s", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", display: "inline-block" }}>
                    ↓
                  </span>
                </button>

                {/* body */}
                {isOpen && (
                  <div style={{ padding: "0 22px 22px", borderTop: "1px solid #252a35" }}>
                    <p style={{ color: "#7A8294", lineHeight: "1.8", fontSize: "14px", marginTop: "18px", marginBottom: "20px" }}>
                      {lang === "en" ? p.desc : p.descKo}
                    </p>

                    {/* tags */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "20px" }}>
                      {p.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", background: "#181c24", border: "1px solid #252a35", color: "#7A8294", borderRadius: "4px", padding: "2px 8px" }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* highlights */}
                    <div style={{ borderTop: "1px solid #252a35", paddingTop: "16px" }}>
                      <p style={{ fontSize: "11px", fontWeight: 700, color: c.badgeText, letterSpacing: "1px", textTransform: "uppercase", marginBottom: "10px" }}>
                        {lang === "en" ? "Highlights" : "주요 특징"}
                      </p>
                      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "6px" }}>
                        {(lang === "en" ? p.highlights : p.highlightsKo).map((h, i) => (
                          <li key={i} style={{ display: "flex", gap: "10px", color: "#7A8294", fontSize: "13px", alignItems: "flex-start" }}>
                            <span style={{ color: c.badgeText, flexShrink: 0, marginTop: "1px" }}>▸</span>
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
