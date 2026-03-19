type Props = { lang: "en" | "ko" };

export default function Contact({ lang }: Props) {
  return (
    <section id="contact" style={{ padding: "80px 0", borderTop: "1px solid #252a35" }}>
      <div className="max-w-5xl mx-auto px-7 text-center">
        <p style={{ fontSize: "11px", fontWeight: 700, color: "#1865F2", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "10px" }}>
          {lang === "en" ? "Get In Touch" : "연락하기"}
        </p>
        <h2 style={{ fontSize: "clamp(22px, 3vw, 36px)", fontWeight: 900, marginBottom: "16px", color: "#E8EBF0" }}>
          {lang === "en" ? "Let's Connect" : "함께 이야기해요"}
        </h2>
        <p style={{ color: "#7A8294", fontSize: "15px", marginBottom: "36px", maxWidth: "480px", margin: "0 auto 36px" }}>
          {lang === "en"
            ? "Open to collaboration, feedback, or just a conversation about data."
            : "협업, 피드백, 또는 데이터에 관한 이야기라면 언제든지 환영합니다."}
        </p>

        <a
          href="mailto:parkjh0051@gmail.com"
          style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#1865F2", color: "#fff", borderRadius: "10px", padding: "14px 32px", fontWeight: 700, fontSize: "15px", textDecoration: "none" }}
        >
          parkjh0051@gmail.com
        </a>

        <div style={{ marginTop: "80px", paddingTop: "32px", borderTop: "1px solid #252a35", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px" }}>
          <span style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "2px", color: "#3D4454", fontSize: "14px" }}>
            JONGHYUN PARK · 박종현
          </span>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "#3D4454" }}>
            Data Analyst
          </span>
        </div>
      </div>
    </section>
  );
}
