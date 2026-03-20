import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Jonghyun Park | Data Analyst & Analytics Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#0a0c10",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          position: "relative",
          overflow: "hidden",
          fontFamily: "sans-serif",
        }}
      >
        {/* grid lines */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(#e8eaf0 1px, transparent 1px), linear-gradient(90deg, #e8eaf0 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            opacity: 0.03,
          }}
        />

        {/* glow */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, #1865F2 0%, transparent 70%)",
            opacity: 0.1,
          }}
        />

        {/* badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "#1865F2",
            }}
          />
          <span
            style={{
              fontSize: "13px",
              letterSpacing: "3px",
              color: "#6b7280",
              textTransform: "uppercase",
            }}
          >
            Data Analyst · Analytics Engineer
          </span>
        </div>

        {/* name */}
        <div
          style={{
            fontSize: "80px",
            fontWeight: 300,
            letterSpacing: "-3px",
            color: "#e8eaf0",
            lineHeight: 1.05,
            marginBottom: "8px",
          }}
        >
          Jonghyun Park
        </div>
        <div
          style={{
            fontSize: "28px",
            fontWeight: 300,
            color: "#6b7280",
            letterSpacing: "-0.5px",
            marginBottom: "40px",
          }}
        >
          박종현
        </div>

        {/* tagline */}
        <div
          style={{
            fontSize: "18px",
            color: "#4b5563",
            maxWidth: "700px",
            lineHeight: 1.6,
          }}
        >
          Pipeline automation · Adobe Analytics · Samsung global 30+ sites
        </div>

        {/* bottom border */}
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            height: "3px",
            background: "linear-gradient(90deg, #1865F2, #0ED4A3, transparent)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
