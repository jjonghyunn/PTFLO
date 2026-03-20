type Props = { lang: "en" | "ko" };

const info = [
  { labelEn: "Focus",  labelKo: "집중 분야", valueEn: "Pipeline Automation · Analytics Engineering", valueKo: "파이프라인 자동화 · 애널리틱스 엔지니어링" },
  { labelEn: "Domain", labelKo: "도메인",    valueEn: "E-commerce · Samsung Global",                 valueKo: "이커머스 · 삼성 글로벌" },
  { labelEn: "Stack",  labelKo: "주요 스택", valueEn: "Python · SQL · Adobe Analytics",              valueKo: "Python · SQL · Adobe Analytics" },
];

export default function About({ lang }: Props) {
  return (
    <section id="about" style={{ paddingTop: "80px", paddingBottom: "80px", borderTop: "1px solid var(--border)" }}>

      <Label en="About" ko="소개" lang={lang} />
      <H2 en="Who I Am" ko="저는 이런 사람입니다" lang={lang} />

      <div className="grid-2col">
        <div>
          <p style={{ color: "var(--muted)", lineHeight: "1.9", fontSize: "14px", marginBottom: "16px" }}>
            {lang === "en"
              ? "e-commerce analytics across 30+ global sites — building pipelines that turn raw Adobe Analytics data into actionable reports."
              : "글로벌 소비자 가전 브랜드의 이커머스 데이터를 전담 분석합니다. 30개 이상 국가 사이트, 연 6회 이상 대형 캠페인 데이터를 파이프라인으로 자동화하고 있습니다."}
          </p>
          <p style={{ color: "var(--muted)", lineHeight: "1.9", fontSize: "14px" }}>
            {lang === "en"
              ? "My work spans Adobe Analytics API automation, web crawling for tagging audits, and campaign data pipelines. I build tools the whole team can rely on — not one-off scripts."
              : "Adobe Analytics API 자동화, 태깅 감사를 위한 웹 크롤링, 캠페인 데이터 파이프라인 구축 등 팀 전체가 반복적으로 활용할 수 있는 도구를 만드는 것을 목표로 합니다."}
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          {info.map((item) => (
            <div key={item.labelEn} style={{
              display: "grid", gridTemplateColumns: "90px 1fr",
              gap: "16px", padding: "12px 0",
              borderBottom: "1px solid var(--border)",
            }}>
              <span style={{ fontSize: "12px", color: "var(--dim)", fontWeight: 500, paddingTop: "1px" }}>
                {lang === "en" ? item.labelEn : item.labelKo}
              </span>
              <span style={{ fontSize: "13px", color: "var(--muted)" }}>
                {lang === "en" ? item.valueEn : item.valueKo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// shared micro-components
export function Label({ en, ko, lang }: { en: string; ko: string; lang: "en" | "ko" }) {
  return (
    <p style={{ fontSize: "11px", fontWeight: 600, color: "var(--dim)", letterSpacing: "1.2px", textTransform: "uppercase", marginBottom: "12px" }}>
      {lang === "en" ? en : ko}
    </p>
  );
}

export function H2({ en, ko, lang }: { en: string; ko: string; lang: "en" | "ko" }) {
  return (
    <h2 style={{ fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 700, letterSpacing: "-0.5px", color: "var(--text)", marginBottom: "40px", lineHeight: 1.2 }}>
      {lang === "en" ? en : ko}
    </h2>
  );
}
