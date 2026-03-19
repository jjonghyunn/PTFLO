import { skillCategories } from "@/lib/projects";

type Props = { lang: "en" | "ko" };

export default function Skills({ lang }: Props) {
  return (
    <section id="skills" style={{ padding: "80px 0", borderTop: "1px solid #252a35" }}>
      <div className="max-w-5xl mx-auto px-7">
        <p style={{ fontSize: "11px", fontWeight: 700, color: "#1865F2", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "10px" }}>
          {lang === "en" ? "Technical Skills" : "기술 스택"}
        </p>
        <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 900, marginBottom: "40px", color: "#E8EBF0" }}>
          {lang === "en" ? "What I Work With" : "사용 기술"}
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" }}>
          {skillCategories.map((cat) => (
            <div
              key={cat.name}
              style={{ background: "#111318", border: "1px solid #252a35", borderRadius: "12px", padding: "22px" }}
            >
              <div style={{ fontSize: "12px", fontWeight: 700, color: "#0ED4A3", marginBottom: "14px", letterSpacing: "0.5px" }}>
                {lang === "en" ? cat.name : cat.nameKo}
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                {cat.items.map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#7A8294" }}>
                    <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#3D4454", flexShrink: 0, display: "inline-block" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
