type Props = { lang: "en" | "ko" };

const stats = [
  { num: "8+",  en: "Projects",         ko: "프로젝트" },
  { num: "30+", en: "Sites Covered",    ko: "글로벌 사이트" },
  { num: "6+",  en: "Campaigns / yr",   ko: "연간 캠페인" },
  { num: "~2h", en: "Pipeline Runtime", ko: "파이프라인" },
];

export default function Hero({ lang }: Props) {
  return (
    <section style={{ paddingTop: "148px", paddingBottom: "96px" }}>

      {/* role badge */}
      <div style={{
        display: "inline-flex", alignItems: "center", gap: "6px",
        color: "var(--muted)", fontSize: "12px", fontWeight: 500,
        marginBottom: "28px", letterSpacing: "0.2px",
      }}>
        <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--blue)", display: "inline-block" }} />
        Data Analyst &amp; Analytics Engineer
      </div>

      {/* avatar + name row */}
      <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "10px" }}>
        <img
          src="https://avatars.githubusercontent.com/u/208093681?v=4"
          alt="Jonghyun Park"
          width={56}
          height={56}
          style={{ borderRadius: "50%", border: "1px solid var(--border)", flexShrink: 0 }}
        />
        <h1 style={{
          fontSize: "clamp(32px, 5vw, 56px)",
          fontWeight: 600,
          letterSpacing: "-1.5px",
          lineHeight: 1.08,
          color: "var(--text)",
        }}>
          Jonghyun Park
        </h1>
      </div>
      <p style={{
        fontSize: "clamp(20px, 3vw, 30px)",
        fontWeight: 300,
        letterSpacing: "-0.5px",
        color: "var(--dim)",
        marginBottom: "32px",
      }}>
        박종현
      </p>

      {/* description */}
      <p style={{
        color: "var(--muted)", fontSize: "15px",
        lineHeight: "1.8", maxWidth: "520px", marginBottom: "40px",
      }}>
        {lang === "en"
          ? "I build automated data pipelines and analytical tools — turning Adobe Analytics raw data into actionable reporting across 30+ global Samsung sites."
          : "Adobe Analytics 원시 데이터를 삼성 글로벌 30개 이상 사이트의 실행 가능한 리포팅으로 전환하는 자동화 파이프라인과 분석 도구를 만듭니다."}
      </p>

      {/* cta */}
      <div style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "64px" }}>
        <a href="#projects" style={{
          background: "var(--text)", color: "var(--bg)",
          padding: "9px 20px", borderRadius: "7px",
          fontWeight: 600, fontSize: "13px", letterSpacing: "-0.1px",
          transition: "opacity 0.15s",
        }}
          onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
          onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
        >
          {lang === "en" ? "View Projects" : "프로젝트 보기"}
        </a>
        <a href="mailto:parkjh0051@gmail.com" style={{
          color: "var(--muted)", fontSize: "13px",
          padding: "9px 16px", borderRadius: "7px",
          border: "1px solid var(--border)",
          transition: "color 0.15s, border-color 0.15s",
        }}
          onMouseEnter={e => { e.currentTarget.style.color = "var(--text)"; e.currentTarget.style.borderColor = "var(--dim)"; }}
          onMouseLeave={e => { e.currentTarget.style.color = "var(--muted)"; e.currentTarget.style.borderColor = "var(--border)"; }}
        >
          parkjh0051@gmail.com
        </a>
      </div>

      {/* stats */}
      <div className="stats-grid">
        {stats.map((s) => (
          <div key={s.num} style={{
            background: "var(--surface)", padding: "20px 24px",
          }}>
            <div style={{
              fontSize: "22px", fontWeight: 700,
              letterSpacing: "-0.5px", color: "var(--text)",
              marginBottom: "3px",
            }}>
              {s.num}
            </div>
            <div style={{ fontSize: "12px", color: "var(--muted)" }}>
              {lang === "en" ? s.en : s.ko}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
