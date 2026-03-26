import { Label, H2 } from "./About";

type Props = { lang: "en" | "ko" };

const folders = [
  {
    nameEn: "Must Try 1",
    nameKo: "가봐야해 1",
    descEn: "Places I want to visit",
    descKo: "언젠가 꼭 가보고 싶은 곳",
    count: "~900",
    url: "https://naver.me/GvXp7tT1",
    accent: "var(--accent-blue)",
  },
  {
    nameEn: "Must Try 2",
    nameKo: "가봐야해 2",
    descEn: "More places to explore",
    descKo: "계속 추가 중인 버킷리스트",
    count: "~400",
    url: "https://naver.me/GyNhb01g",
    accent: "var(--accent-blue)",
  },
  {
    nameEn: "Good Spots",
    nameKo: "맛집",
    descEn: "Verified & recommended",
    descKo: "직접 가보고 검증된 곳",
    count: "~810",
    url: "https://naver.me/FKx6CIZX",
    accent: "var(--accent-green)",
  },
  {
    nameEn: "Not Worth It",
    nameKo: "노맛집",
    descEn: "Filtered out",
    descKo: "다시는 안 가는 곳",
    count: "~95",
    url: "https://naver.me/xhP8CNdY",
    accent: "var(--accent-orange)",
  },
];

export default function MapCollection({ lang }: Props) {
  return (
    <section
      id="collection"
      style={{ paddingTop: "80px", paddingBottom: "80px", borderTop: "1px solid var(--border)" }}
    >
      <Label en="Collection" ko="수집" lang={lang} />
      <H2
        en="I manage food like data"
        ko="먹는 것도 데이터처럼 관리합니다"
        lang={lang}
      />

      <p style={{ color: "var(--muted)", fontSize: "14px", lineHeight: "1.9", marginBottom: "8px" }}>
        {lang === "en"
          ? "2,200+ places across 4 categories — personally visited, reviewed, and curated on Naver Maps."
          : "네이버 지도에 직접 방문·분류하며 쌓아온 2,200+곳의 기록입니다."}
      </p>
      <p style={{ color: "var(--dim)", fontSize: "13px", lineHeight: "1.7", marginBottom: "40px" }}>
        {lang === "en"
          ? "Continuously updated as places open and close."
          : "폐점·오픈에 따라 지속적으로 업데이트 중입니다."}
      </p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
        gap: "12px",
      }}>
        {folders.map((f) => (
          <a
            key={f.nameEn}
            href={f.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "10px",
              padding: "20px 18px",
              textDecoration: "none",
              transition: "border-color 0.15s, background 0.15s",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = f.accent;
              (e.currentTarget as HTMLAnchorElement).style.background = "var(--surface2)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border)";
              (e.currentTarget as HTMLAnchorElement).style.background = "var(--surface)";
            }}
          >
            <div style={{
              fontSize: "22px",
              fontWeight: 700,
              color: f.accent,
              letterSpacing: "-0.5px",
              marginBottom: "6px",
              fontFamily: "monospace",
            }}>
              {f.count}
            </div>
            <div style={{
              fontSize: "14px",
              fontWeight: 600,
              color: "var(--text)",
              marginBottom: "6px",
              letterSpacing: "-0.2px",
            }}>
              {lang === "en" ? f.nameEn : f.nameKo}
            </div>
            <div style={{ fontSize: "12px", color: "var(--dim)", lineHeight: "1.6" }}>
              {lang === "en" ? f.descEn : f.descKo}
            </div>
          </a>
        ))}
      </div>

      <p style={{ marginTop: "16px", fontSize: "12px", color: "var(--dim)" }}>
        {lang === "en"
          ? "* Naver Maps login required to view full list."
          : "* 전체 목록 열람 시 네이버 로그인 필요"}
      </p>
    </section>
  );
}
