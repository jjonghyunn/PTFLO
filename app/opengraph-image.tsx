import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Jonghyun Park | Data Analyst & Analytics Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  const bars = [
    { label: "Pipeline",   w: 170, color: "#1865F2" },
    { label: "Analytics",  w: 140, color: "#0ED4A3" },
    { label: "Automation", w: 115, color: "#1865F2" },
    { label: "Reporting",  w: 90,  color: "#0ED4A3" },
    { label: "API",        w: 65,  color: "#1865F2" },
  ];

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px", height: "630px",
          background: "#0a0c10",
          display: "flex",
          padding: "72px 80px",
          position: "relative",
          overflow: "hidden",
          fontFamily: "sans-serif",
        }}
      >
        {/* grid */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(#e8eaf0 1px, transparent 1px), linear-gradient(90deg, #e8eaf0 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          opacity: 0.025,
        }} />

        {/* blue glow */}
        <div style={{
          position: "absolute", top: "-160px", left: "-80px",
          width: "520px", height: "520px", borderRadius: "50%",
          background: "radial-gradient(circle, #1865F2 0%, transparent 70%)",
          opacity: 0.09,
        }} />

        {/* teal glow */}
        <div style={{
          position: "absolute", bottom: "-120px", right: "200px",
          width: "360px", height: "360px", borderRadius: "50%",
          background: "radial-gradient(circle, #0ED4A3 0%, transparent 70%)",
          opacity: 0.07,
        }} />

        {/* left: content */}
        <div style={{ display: "flex", flexDirection: "column", flex: 1, justifyContent: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "36px" }}>
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#1865F2" }} />
            <span style={{ fontSize: "13px", letterSpacing: "3px", color: "#4b5563", textTransform: "uppercase" }}>
              Data Analyst · Analytics Engineer
            </span>
          </div>

          <div style={{ fontSize: "84px", fontWeight: 300, letterSpacing: "-4px", color: "#e8eaf0", lineHeight: 1, marginBottom: "36px" }}>
            Jonghyun Park
          </div>

          <div style={{ display: "flex", gap: "10px", marginBottom: "16px" }}>
            {["Python", "SQL", "Adobe Analytics"].map((s) => (
              <div key={s} style={{
                padding: "6px 14px", borderRadius: "6px",
                background: "rgba(24,101,242,0.12)",
                border: "1px solid rgba(24,101,242,0.22)",
                fontSize: "13px", color: "#6b7280", letterSpacing: "0.5px",
              }}>{s}</div>
            ))}
          </div>

          <div style={{ fontSize: "14px", color: "#374151", letterSpacing: "1px" }}>
            30+ Global Sites
          </div>
        </div>

        {/* right: bar chart decoration */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "14px", paddingLeft: "56px" }}>
          {bars.map((b) => (
            <div key={b.label} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span style={{ fontSize: "11px", color: "#374151", width: "76px", textAlign: "right", letterSpacing: "0.5px" }}>
                {b.label}
              </span>
              <div style={{ width: `${b.w}px`, height: "8px", borderRadius: "4px", background: b.color, opacity: 0.55 }} />
            </div>
          ))}
        </div>

        {/* bottom bar */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: "3px",
          background: "linear-gradient(90deg, #1865F2, #0ED4A3, transparent)",
        }} />
      </div>
    ),
    { ...size }
  );
}
