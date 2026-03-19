type Props = { lang: "en" | "ko" };

const info = [
  { labelEn: "Focus",       labelKo: "집중 분야", valueEn: "Pipeline Automation · Analytics Engineering",  valueKo: "파이프라인 자동화 · 애널리틱스 엔지니어링" },
  { labelEn: "Domain",      labelKo: "도메인",    valueEn: "E-commerce · Samsung Global",                  valueKo: "이커머스 · 삼성 글로벌" },
  { labelEn: "Stack",       labelKo: "주요 스택", valueEn: "Python · SQL · Adobe Analytics",               valueKo: "Python · SQL · Adobe Analytics" },
  { labelEn: "Email",       labelKo: "이메일",    valueEn: "parkjh0051@gmail.com",                         valueKo: "parkjh0051@gmail.com" },
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
              ? "I'm a Data Analyst focused on end-to-end pipeline automation — transforming raw platform data into reliable, reproducible business reporting."
              : "저는 원시 플랫폼 데이터를 신뢰할 수 있는 비즈니스 리포팅으로 전환하는 엔드투엔드 파이프라인 자동화에 집중하는 데이터 애널리스트입니다."}
          </p>
          <p style={{ color: "var(--muted)", lineHeight: "1.9", fontSize: "14px" }}>
            {lang === "en"
              ? "My work spans Adobe Analytics API automation, web crawling, campaign data pipelines, and geospatial analysis. I build tools the whole team can rely on — not one-off scripts."
              : "Adobe Analytics API 자동화, 웹 크롤링, 캠페인 파이프라인, 지리공간 분석에 걸쳐 작업합니다. 팀 전체가 의존할 수 있는 도구를 만드는 것을 목표로 합니다."}
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
