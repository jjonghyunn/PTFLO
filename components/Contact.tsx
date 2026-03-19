import { Label } from "./About";

type Props = { lang: "en" | "ko" };

export default function Contact({ lang }: Props) {
  return (
    <section id="contact" style={{ paddingTop: "80px", paddingBottom: "120px", borderTop: "1px solid var(--border)" }}>
      <Label en="Contact" ko="연락처" lang={lang} />

      <h2 style={{
        fontSize: "clamp(26px, 4vw, 42px)",
        fontWeight: 700, letterSpacing: "-1px",
        color: "var(--text)", lineHeight: 1.1,
        marginBottom: "20px",
      }}>
        {lang === "en" ? "Let's Connect" : "함께 이야기해요"}
      </h2>

      <p style={{ color: "var(--muted)", fontSize: "15px", marginBottom: "40px", maxWidth: "400px", lineHeight: "1.8" }}>
        {lang === "en"
          ? "Open to collaboration, feedback, or just a conversation about data."
          : "협업, 피드백, 또는 데이터에 관한 이야기라면 언제든지 환영합니다."}
      </p>

      <a href="mailto:parkjh0051@gmail.com" style={{
        display: "inline-flex", alignItems: "center", gap: "10px",
        background: "var(--text)", color: "var(--bg)",
        padding: "11px 24px", borderRadius: "8px",
        fontWeight: 600, fontSize: "14px", letterSpacing: "-0.2px",
        transition: "opacity 0.15s",
      }}
        onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
        onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
      >
        parkjh0051@gmail.com
      </a>

      {/* footer */}
      <div style={{
        marginTop: "96px", paddingTop: "28px",
        borderTop: "1px solid var(--border)",
        display: "flex", justifyContent: "space-between",
        alignItems: "center", flexWrap: "wrap", gap: "8px",
      }}>
        <span style={{ fontSize: "12px", color: "var(--dim)" }}>
          © 2026 Jonghyun Park. All rights reserved.
        </span>
        <span style={{ fontSize: "12px", color: "var(--dim)", fontFamily: "monospace" }}>
          Data Analyst
        </span>
      </div>
    </section>
  );
}
