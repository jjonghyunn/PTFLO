"use client";
import { useState } from "react";

const links = [
  { href: "#about", en: "About", ko: "소개" },
  { href: "#skills", en: "Skills", ko: "스킬" },
  { href: "#projects", en: "Projects", ko: "프로젝트" },
  { href: "#contact", en: "Contact", ko: "연락처" },
];

export default function Nav() {
  const [lang, setLang] = useState<"en" | "ko">("en");

  return (
    <nav
      style={{ background: "rgba(10,12,16,0.95)", borderBottom: "1px solid #252a35" }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
    >
      <div className="max-w-5xl mx-auto px-7 h-13 flex items-center justify-between" style={{ height: "52px" }}>
        <span
          style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "2px", color: "#1865F2", fontSize: "17px" }}
        >
          JH.PARK
        </span>

        <div className="flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{ color: "#7A8294", fontSize: "12px", fontWeight: 500, borderRadius: "6px", padding: "6px 12px", textDecoration: "none", transition: "all 0.15s", whiteSpace: "nowrap" }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "#E8EBF0"; (e.target as HTMLElement).style.background = "#181c24"; }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "#7A8294"; (e.target as HTMLElement).style.background = "transparent"; }}
            >
              {lang === "en" ? l.en : l.ko}
            </a>
          ))}

          <button
            onClick={() => setLang(lang === "en" ? "ko" : "en")}
            style={{
              marginLeft: "8px",
              background: "rgba(24,101,242,0.12)",
              border: "1px solid rgba(24,101,242,0.3)",
              color: "#1865F2",
              borderRadius: "6px",
              padding: "4px 10px",
              fontSize: "11px",
              fontWeight: 700,
              cursor: "pointer",
              letterSpacing: "0.5px",
            }}
          >
            {lang === "en" ? "한국어" : "EN"}
          </button>
        </div>
      </div>
    </nav>
  );
}
