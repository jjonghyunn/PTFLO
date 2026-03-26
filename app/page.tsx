"use client";
import { useState } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import MapCollection from "@/components/MapCollection";
import Contact from "@/components/Contact";

const navLinks = [
  { href: "#about",    en: "About",    ko: "소개" },
  { href: "#skills",   en: "Skills",   ko: "스킬" },
  { href: "#projects", en: "Projects", ko: "프로젝트" },
  { href: "#collection", en: "Collection", ko: "수집" },
  { href: "#contact",  en: "Contact",  ko: "연락처" },
];

export default function Home() {
  const [lang, setLang] = useState<"en" | "ko">("ko");

  return (
    <>
      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: "rgba(12,12,12,0.85)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid var(--border)",
      }}>
        <div className="nav-inner" style={{ maxWidth: "780px", margin: "0 auto", padding: "0 24px" }}>
          {/* 항상 표시: 이름 + 언어토글 */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "52px" }}>
            <span style={{ fontWeight: 700, fontSize: "15px", letterSpacing: "-0.3px", color: "var(--text)", whiteSpace: "nowrap" }}>
              Jonghyun Park
            </span>

            <div style={{ display: "flex", alignItems: "center" }}>
              {/* PC 전용 인라인 링크 */}
              <div className="nav-links-pc" style={{ display: "flex" }}>
                {navLinks.map((l) => (
                  <a key={l.href} href={l.href} style={{
                    color: "var(--muted)", fontSize: "13px", fontWeight: 400,
                    padding: "6px 14px", borderRadius: "6px", transition: "color 0.15s",
                  }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
                  >
                    {lang === "en" ? l.en : l.ko}
                  </a>
                ))}
              </div>

              <button onClick={() => setLang(lang === "en" ? "ko" : "en")} style={{
                marginLeft: "8px",
                background: "var(--surface2)", border: "1px solid var(--border)",
                color: "var(--muted)", borderRadius: "6px",
                padding: "4px 11px", fontSize: "11px", fontWeight: 600, cursor: "pointer",
                transition: "color 0.15s, border-color 0.15s", letterSpacing: "0.3px",
              }}
                onMouseEnter={e => { e.currentTarget.style.color = "var(--text)"; e.currentTarget.style.borderColor = "var(--dim)"; }}
                onMouseLeave={e => { e.currentTarget.style.color = "var(--muted)"; e.currentTarget.style.borderColor = "var(--border)"; }}
              >
                {lang === "en" ? "한국어" : "EN"}
              </button>
            </div>
          </div>

          {/* 모바일 전용 2번째 줄: 링크들 */}
          <div className="nav-links-row" style={{ display: "none", paddingBottom: "8px" }}>
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} style={{
                color: "var(--muted)", fontSize: "12px", fontWeight: 400,
                padding: "4px 10px", borderRadius: "6px", transition: "color 0.15s",
              }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
              >
                {lang === "en" ? l.en : l.ko}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main style={{ maxWidth: "780px", margin: "0 auto", padding: "0 24px" }}>
        <Hero lang={lang} />
        <About lang={lang} />
        <Skills lang={lang} />
        <Projects lang={lang} />
        <MapCollection lang={lang} />
        <Contact lang={lang} />
      </main>
    </>
  );
}
