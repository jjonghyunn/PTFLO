import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "180px",
          height: "180px",
          background: "#0a0c10",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* blue glow */}
        <div style={{
          position: "absolute", top: "-30px", right: "-30px",
          width: "140px", height: "140px", borderRadius: "50%",
          background: "radial-gradient(circle, #1865F2 0%, transparent 70%)",
          opacity: 0.2,
        }} />
        {/* teal glow */}
        <div style={{
          position: "absolute", bottom: "-30px", left: "-30px",
          width: "120px", height: "120px", borderRadius: "50%",
          background: "radial-gradient(circle, #0ED4A3 0%, transparent 70%)",
          opacity: 0.18,
        }} />

        <div style={{ fontSize: "88px", lineHeight: 1 }}>📊</div>

        {/* bottom bar */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: "3px",
          background: "linear-gradient(90deg, #1865F2, #0ED4A3)",
        }} />
      </div>
    ),
    { ...size }
  );
}
