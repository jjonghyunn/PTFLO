import { skillCategories } from "@/lib/projects";
import { Label, H2 } from "./About";

type Props = { lang: "en" | "ko" };

export default function Skills({ lang }: Props) {
  return (
    <section id="skills" style={{ paddingTop: "80px", paddingBottom: "80px", borderTop: "1px solid var(--border)" }}>
      <Label en="Skills" ko="기술 스택" lang={lang} />
      <H2 en="What I Work With" ko="사용 기술" lang={lang} />

      <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
        {skillCategories.map((cat) => (
          <div key={cat.name}>
            <p style={{ fontSize: "12px", fontWeight: 600, color: "var(--dim)", marginBottom: "14px", letterSpacing: "0.2px" }}>
              {lang === "en" ? cat.name : cat.nameKo}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {cat.items.map((item) => (
                <span key={item} style={{
                  fontSize: "13px", color: "var(--muted)",
                  background: "var(--surface)", border: "1px solid var(--border)",
                  borderRadius: "6px", padding: "5px 13px",
                  fontWeight: 400, letterSpacing: "-0.1px",
                  transition: "color 0.15s, border-color 0.15s",
                  cursor: "default",
                }}
                  onMouseEnter={e => { e.currentTarget.style.color = "var(--text)"; e.currentTarget.style.borderColor = "var(--dim)"; }}
                  onMouseLeave={e => { e.currentTarget.style.color = "var(--muted)"; e.currentTarget.style.borderColor = "var(--border)"; }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
