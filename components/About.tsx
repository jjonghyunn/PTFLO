type Props = { lang: "en" | "ko" };

export default function About({ lang }: Props) {
  return (
    <section id="about" style={{ padding: "80px 0", borderTop: "1px solid #252a35" }}>
      <div className="max-w-5xl mx-auto px-7">
        <p style={{ fontSize: "11px", fontWeight: 700, color: "#1865F2", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "10px" }}>
          {lang === "en" ? "About Me" : "소개"}
        </p>
        <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 900, marginBottom: "32px", color: "#E8EBF0" }}>
          {lang === "en" ? "Who I Am" : "저는 이런 사람입니다"}
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }}>
          <div>
            <p style={{ color: "#7A8294", lineHeight: "1.9", fontSize: "14px", marginBottom: "16px" }}>
              {lang === "en"
                ? "I'm a Data Analyst focused on building end-to-end pipelines that make analytical work faster, more reliable, and repeatable. I bridge the gap between raw platform data and business-ready reporting."
                : "저는 분석 작업을 더 빠르고, 신뢰할 수 있고, 반복 가능하게 만드는 엔드투엔드 파이프라인 구축에 집중하는 데이터 애널리스트입니다. 원시 플랫폼 데이터와 비즈니스 리포팅 사이의 간극을 메웁니다."}
            </p>
            <p style={{ color: "#7A8294", lineHeight: "1.9", fontSize: "14px" }}>
              {lang === "en"
                ? "My work spans Adobe Analytics API automation, web crawling for tagging audits, campaign data pipelines, and geospatial analysis. I prioritize building tools that the whole team can use — not just one-off scripts."
                : "Adobe Analytics API 자동화, 태깅 감사를 위한 웹 크롤링, 캠페인 데이터 파이프라인, 지리공간 분석에 걸쳐 작업합니다. 일회성 스크립트가 아니라 팀 전체가 활용할 수 있는 도구 구축을 우선시합니다."}
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              { label: lang === "en" ? "Focus" : "집중 분야", value: lang === "en" ? "Pipeline Automation · Analytics Engineering" : "파이프라인 자동화 · 애널리틱스 엔지니어링" },
              { label: lang === "en" ? "Domain" : "도메인", value: lang === "en" ? "E-commerce · Samsung Global" : "이커머스 · 삼성 글로벌" },
              { label: lang === "en" ? "Primary Stack" : "주요 스택", value: "Python · SQL · Adobe Analytics" },
              { label: "Email", value: "parkjh0051@gmail.com" },
            ].map((item) => (
              <div
                key={item.label}
                style={{ background: "#111318", border: "1px solid #252a35", borderRadius: "10px", padding: "14px 18px", display: "flex", flexDirection: "column", gap: "4px" }}
              >
                <span style={{ fontSize: "11px", fontWeight: 600, color: "#3D4454", textTransform: "uppercase", letterSpacing: "0.8px" }}>{item.label}</span>
                <span style={{ fontSize: "13px", color: "#E8EBF0" }}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
