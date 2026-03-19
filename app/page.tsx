"use client";
import { useState } from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  const [lang, setLang] = useState<"en" | "ko">("en");

  return (
    <>
      <NavWithLang lang={lang} setLang={setLang} />
      <main>
        <Hero lang={lang} />
        <About lang={lang} />
        <Skills lang={lang} />
        <Projects lang={lang} />
        <Contact lang={lang} />
      </main>
    </>
  );
}

// Nav wrapper that controls global lang state
function NavWithLang({ lang, setLang }: { lang: "en" | "ko"; setLang: (l: "en" | "ko") => void }) {
  const links = [
    { href: "#about", en: "About", ko: "소개" },
    { href: "#skills", en: "Skills", ko: "스킬" },
    { href: "#projects", en: "Projects", ko: "프로젝트" },
    { href: "#contact", en: "Contact", ko: "연락처" },
  ];

  return (
    <nav
      style={{ background: "rgba(10,12,16,0.95)", borderBottom: "1px solid #252a35", position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, backdropFilter: "blur(16px)" }}
    >
      <div style={{ maxWidth: "960px", margin: "0 auto", padding: "0 28px", height: "52px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "2px", color: "#1865F2", fontSize: "17px" }}>
          JH.PARK
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{ color: "#7A8294", fontSize: "12px", fontWeight: 500, borderRadius: "6px", padding: "6px 12px", textDecoration: "none", whiteSpace: "nowrap" }}
            >
              {lang === "en" ? l.en : l.ko}
            </a>
          ))}
          <button
            onClick={() => setLang(lang === "en" ? "ko" : "en")}
            style={{ marginLeft: "8px", background: "rgba(24,101,242,0.12)", border: "1px solid rgba(24,101,242,0.3)", color: "#1865F2", borderRadius: "6px", padding: "4px 10px", fontSize: "11px", fontWeight: 700, cursor: "pointer" }}
          >
            {lang === "en" ? "한국어" : "EN"}
          </button>
        </div>
      </div>
    </nav>
  );
}
