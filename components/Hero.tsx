type Props = { lang: "en" | "ko" };

export default function Hero({ lang }: Props) {
  return (
    <section
      id="hero"
      style={{ paddingTop: "120px", paddingBottom: "80px", position: "relative", overflow: "hidden" }}
    >
      {/* glow blobs */}
      <div style={{ position: "absolute", top: "-160px", left: "-160px", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(24,101,242,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-80px", right: "-80px", width: "360px", height: "360px", background: "radial-gradient(circle, rgba(14,212,163,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div className="max-w-5xl mx-auto px-7 relative">
        <div
          style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "rgba(24,101,242,0.1)", border: "1px solid rgba(24,101,242,0.25)", borderRadius: "100px", padding: "4px 14px", fontSize: "11px", fontWeight: 700, color: "#1865F2", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "20px" }}
        >
          {lang === "en" ? "Data Analyst · Analytics Engineer" : "데이터 애널리스트 · 애널리틱스 엔지니어"}
        </div>

        <h1
          style={{ fontSize: "clamp(32px, 5vw, 54px)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-1px", marginBottom: "10px", color: "#E8EBF0" }}
        >
          Jonghyun Park
        </h1>
        <p style={{ fontSize: "clamp(18px, 2.5vw, 26px)", fontWeight: 300, color: "#7A8294", marginBottom: "24px", letterSpacing: "0.5px" }}>
          박종현
        </p>

        <p
          style={{ color: "#7A8294", fontSize: "15px", maxWidth: "600px", lineHeight: "1.8", marginBottom: "36px" }}
        >
          {lang === "en"
            ? "Building automated data pipelines and analytical tools that turn raw Adobe Analytics data into actionable insights — across 30+ global Samsung sites."
            : "Adobe Analytics 원시 데이터를 실행 가능한 인사이트로 전환하는 자동화 파이프라인과 분석 도구를 만듭니다. 삼성 글로벌 30개 이상 사이트 커버."}
        </p>

        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <a
            href="#projects"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#1865F2", color: "#fff", borderRadius: "8px", padding: "10px 22px", fontWeight: 700, fontSize: "14px", textDecoration: "none", transition: "opacity 0.15s" }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.opacity = "0.85")}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.opacity = "1")}
          >
            {lang === "en" ? "View Projects →" : "프로젝트 보기 →"}
          </a>
          <a
            href="mailto:parkjh0051@gmail.com"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "transparent", color: "#E8EBF0", border: "1px solid #252a35", borderRadius: "8px", padding: "10px 22px", fontWeight: 500, fontSize: "14px", textDecoration: "none" }}
          >
            parkjh0051@gmail.com
          </a>
        </div>

        {/* stat chips */}
        <div style={{ display: "flex", gap: "14px", marginTop: "48px", flexWrap: "wrap" }}>
          {[
            { num: "8+", label: lang === "en" ? "Automation Projects" : "자동화 프로젝트" },
            { num: "30+", label: lang === "en" ? "Global Sites Covered" : "글로벌 사이트 커버" },
            { num: "6+", label: lang === "en" ? "Major Campaigns / Year" : "연간 주요 캠페인" },
            { num: "~2h", label: lang === "en" ? "Pipeline Runtime (vs. days)" : "파이프라인 실행 시간" },
          ].map((s) => (
            <div
              key={s.num}
              style={{ background: "#111318", border: "1px solid #252a35", borderRadius: "10px", padding: "14px 20px" }}
            >
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "26px", color: "#1865F2", lineHeight: 1 }}>{s.num}</div>
              <div style={{ fontSize: "11px", color: "#7A8294", marginTop: "4px" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
