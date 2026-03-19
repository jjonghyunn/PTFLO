"use client";
import { useState } from "react";
import { projects } from "@/lib/projects";
import { Label, H2 } from "./About";

type Props = { lang: "en" | "ko" };

const colorVars = {
  blue:   { text: "var(--blue)",   dim: "var(--blue-dim)",   border: "var(--blue-border)" },
  green:  { text: "var(--green)",  dim: "var(--green-dim)",  border: "var(--green-border)" },
  orange: { text: "var(--orange)", dim: "var(--orange-dim)", border: "var(--orange-border)" },
};

export default function Projects({ lang }: Props) {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="projects" style={{ paddingTop: "80px", paddingBottom: "80px", borderTop: "1px solid var(--border)" }}>
      <Label en="Selected Work" ko="주요 프로젝트" lang={lang} />
      <H2 en="Projects" ko="프로젝트" lang={lang} />

      <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
        {projects.map((p, i) => {
          const c = colorVars[p.color];
          const isOpen = expanded === p.id;

          return (
            <div key={p.id}>
              {/* row */}
              <button
                onClick={() => setExpanded(isOpen ? null : p.id)}
                style={{
                  width: "100%", background: "transparent", border: "none",
                  borderTop: i === 0 ? "1px solid var(--border)" : "none",
                  borderBottom: "1px solid var(--border)",
                  padding: "20px 0", cursor: "pointer",
                  display: "flex", alignItems: "center", gap: "20px",
                  textAlign: "left",
                }}
              >
                {/* index */}
                <span style={{
                  fontVariantNumeric: "tabular-nums",
                  fontSize: "12px", color: "var(--dim)", fontWeight: 500,
                  width: "20px", flexShrink: 0,
                }}>
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* category */}
                <span style={{
                  fontSize: "11px", fontWeight: 600, color: c.text,
                  background: c.dim, border: `1px solid ${c.border}`,
                  borderRadius: "5px", padding: "2px 9px",
                  whiteSpace: "nowrap", flexShrink: 0, letterSpacing: "0.2px",
                }}>
                  {lang === "en" ? p.category : p.categoryKo}
                </span>

                {/* title */}
                <span style={{
                  fontSize: "14px", fontWeight: 600,
                  color: "var(--text)", flex: 1, letterSpacing: "-0.2px",
                }}>
                  {lang === "en" ? p.title : p.titleKo}
                </span>

                {/* tags preview — hidden when open, hidden on mobile */}
                {!isOpen && (
                  <div className="project-row-tags" style={{ display: "flex", gap: "6px", flexShrink: 0 }}>
                    {p.tags.slice(0, 3).map(tag => (
                      <span key={tag} style={{
                        fontSize: "11px", color: "var(--dim)",
                        background: "var(--surface2)", border: "1px solid var(--border)",
                        borderRadius: "4px", padding: "1px 7px",
                        fontFamily: "monospace",
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* chevron */}
                <span style={{
                  color: "var(--dim)", fontSize: "14px",
                  transition: "transform 0.2s",
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                  display: "inline-block", flexShrink: 0,
                }}>
                  ↓
                </span>
              </button>

              {/* expanded body */}
              {isOpen && (
                <div style={{
                  padding: "24px 0 28px 40px",
                  borderBottom: "1px solid var(--border)",
                }}>
                  <p style={{ color: "var(--muted)", fontSize: "14px", lineHeight: "1.85", marginBottom: "24px", maxWidth: "600px" }}>
                    {lang === "en" ? p.desc : p.descKo}
                  </p>

                  {/* all tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "24px" }}>
                    {p.tags.map(tag => (
                      <span key={tag} style={{
                        fontSize: "12px", color: "var(--muted)",
                        background: "var(--surface)", border: "1px solid var(--border)",
                        borderRadius: "5px", padding: "3px 10px", fontFamily: "monospace",
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* highlights */}
                  <p style={{ fontSize: "11px", fontWeight: 600, color: "var(--dim)", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "12px" }}>
                    {lang === "en" ? "Highlights" : "주요 특징"}
                  </p>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "7px" }}>
                    {(lang === "en" ? p.highlights : p.highlightsKo).map((h, idx) => (
                      <li key={idx} style={{ display: "flex", gap: "12px", color: "var(--muted)", fontSize: "13px", alignItems: "flex-start" }}>
                        <span style={{ color: c.text, flexShrink: 0, marginTop: "2px", fontSize: "10px" }}>▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
