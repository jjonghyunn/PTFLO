export default function NotFound() {
  return (
    <div style={{ background: "#0a0c10", color: "#E8EBF0", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "16px" }}>
      <span style={{ fontFamily: "monospace", fontSize: "48px", color: "#1865F2" }}>404</span>
      <p style={{ color: "#7A8294" }}>Page not found</p>
      <a href="/" style={{ color: "#1865F2", textDecoration: "none", fontSize: "14px" }}>← Back to home</a>
    </div>
  );
}
