export type Project = {
  id: string;
  category: string;
  categoryKo: string;
  title: string;
  titleKo: string;
  desc: string;
  descKo: string;
  tags: string[];
  highlights: string[];
  highlightsKo: string[];
  color: "blue" | "green" | "orange";
};

export const projects: Project[] = [
  {
    id: "aa-exporter",
    category: "Pipeline Automation",
    categoryKo: "파이프라인 자동화",
    title: "AA Exporter",
    titleKo: "AA 데이터 자동 추출 시스템",
    desc: "End-to-end Adobe Analytics data extraction pipeline. Automatically generates 6 extraction notebooks from JSON configs, runs parallel API calls across 30+ global sites, validates column mappings, and formats the final report-ready CSV — reducing manual work from days to ~2 hours.",
    descKo: "Adobe Analytics API 기반 전사 데이터 추출 자동화 파이프라인. JSON 설정에서 6개 노트북을 자동 생성하고, 30개 이상 글로벌 사이트 병렬 추출 후 컬럼 매핑 검수를 거쳐 제출용 CSV를 포맷팅. 수작업 수일치에서 약 2시간으로 단축.",
    tags: ["Python", "Adobe Analytics API", "Jupyter", "pandas", "병렬처리"],
    highlights: [
      "6 notebooks auto-generated from JSON config",
      "Parallel extraction across 30+ sites (max_workers=6)",
      "3-way validation: JSON ↔ mapping ↔ notebook",
      "Auto retry on 429/5xx with FAILED status report",
      "Multi-year / multi-region (NY, US, Prior) support",
    ],
    highlightsKo: [
      "JSON 설정에서 6개 노트북 자동 생성",
      "30개 이상 사이트 병렬 추출 (max_workers=6)",
      "JSON ↔ 매핑 ↔ 노트북 3방향 검수",
      "429/5xx 자동 재시도 및 FAILED 건 리포트",
      "NY / US / Prior 다기간·다지역 동시 지원",
    ],
    color: "blue",
  },
  {
    id: "web-crawlers",
    category: "Web Crawling & Automation",
    categoryKo: "웹 크롤링 & 자동화",
    title: "Adobe Tagging Crawler & Outlink Tracker",
    titleKo: "어도비 태깅 크롤러 & 아웃링크 트래커",
    desc: "Selenium-based crawlers for auditing Adobe Analytics tagging on Samsung.com. The tagging crawler extracts CTA button tracking codes across pages and detects missing/inconsistent tags. The outlink tracker maps all external link destinations. Iterated through 16 versions with progressive CTA logic refinements.",
    descKo: "Samsung.com 어도비 태깅 감사를 위한 Selenium 기반 크롤러. 태깅 크롤러는 전체 페이지 CTA 버튼의 트래킹 코드를 추출하고 누락·불일치 태그를 감지. 아웃링크 트래커는 외부 링크 목적지를 자동 매핑. CTA 로직 개선을 거쳐 v16까지 반복 개발.",
    tags: ["Python", "Selenium", "ChromeDriver", "BeautifulSoup", "Adobe Analytics"],
    highlights: [
      "Automated CTA tagging audit across Samsung.com",
      "v1 → v16 iterative refinement of CTA detection logic",
      "Excludes GNB/footer to reduce false positives",
      "Outlink destination mapping with CSV export",
      "Page capture & folder auto-organization",
    ],
    highlightsKo: [
      "Samsung.com 전체 CTA 태깅 자동 감사",
      "CTA 감지 로직 v1 → v16 점진적 개선",
      "GNB/푸터 제외로 오탐 감소",
      "아웃링크 목적지 매핑 및 CSV 출력",
      "페이지 캡처 및 폴더 자동 정리",
    ],
    color: "green",
  },
  {
    id: "auto-mailer",
    category: "Reporting Automation",
    categoryKo: "리포팅 자동화",
    title: "Automated Email Reporter",
    titleKo: "자동 이메일 리포터",
    desc: "Scheduled Python-based email reporting system using Windows Task Scheduler. Queries data, formats HTML reports, and delivers to stakeholders on a daily/weekly cadence without manual intervention.",
    descKo: "Windows 작업 스케줄러를 활용한 Python 기반 이메일 자동 발송 시스템. 데이터를 조회·정제하고 HTML 리포트로 포맷팅하여 매일/매주 이해관계자에게 자동 배포.",
    tags: ["Python", "Windows Task Scheduler", "smtplib", "HTML", "자동화"],
    highlights: [
      "Zero-touch daily/weekly delivery via schtasks",
      "HTML-formatted email body with data tables",
      "Batch + Python hybrid execution",
      "Run log tracking (run_mailer.log)",
    ],
    highlightsKo: [
      "schtasks 기반 완전 자동 일간/주간 발송",
      "HTML 포맷 이메일 본문 (테이블 포함)",
      "배치 + Python 혼합 실행 구조",
      "실행 로그 자동 기록 (run_mailer.log)",
    ],
    color: "orange",
  },
  {
    id: "traffic-analysis",
    category: "Traffic & Audience Analysis",
    categoryKo: "트래픽 & 오디언스 분석",
    title: "Global Traffic & Audience Segmentation",
    titleKo: "글로벌 트래픽 & 오디언스 세그먼테이션",
    desc: "Multi-dimensional traffic analysis across B2B/B2C, EU/non-EU, US channel segments for Samsung DS division. Includes monthly trend tracking, country-level breakdown, and channel attribution using SQL + Python pipeline with automated JSON-driven reporting.",
    descKo: "삼성 DS 부문 대상 B2B/B2C, EU/non-EU, 미국 채널 세그먼트별 다차원 트래픽 분석. SQL + Python 파이프라인으로 월별 트렌드 추적, 국가별 세분화, 채널 기여 분석을 자동화.",
    tags: ["Python", "SQL", "Adobe Analytics", "pandas", "B2B/B2C"],
    highlights: [
      "EU vs non-EU traffic segmentation",
      "B2B / B2C monthly trend analysis",
      "Channel attribution by country",
      "DS Forum, Gen AI, Exynos segment deep-dives",
      "Sankey diagram for traffic flow visualization",
    ],
    highlightsKo: [
      "EU / non-EU 트래픽 세그먼테이션",
      "B2B / B2C 월별 트렌드 분석",
      "국가별 채널 기여 분석",
      "DS Forum, Gen AI, Exynos 세그먼트 심층 분석",
      "트래픽 흐름 시각화 (Sankey 다이어그램)",
    ],
    color: "blue",
  },
  {
    id: "campaign-pipeline",
    category: "Campaign Analytics",
    categoryKo: "캠페인 애널리틱스",
    title: "Campaign Data Pipeline & Reporting",
    titleKo: "캠페인 데이터 파이프라인 & 리포팅",
    desc: "End-to-end analytics pipeline for major Samsung e-commerce campaigns (Black Friday, AI Just For You, Samsung Week, Holiday, NYNY). Automates KV mapping, multi-purchase analysis, best-selling product rankings, and channel attribution. Supports 30+ global sites per campaign.",
    descKo: "삼성 이커머스 주요 캠페인(블랙프라이데이, AI Just For You, 삼성위크, 홀리데이, NYNY) 전용 엔드투엔드 분석 파이프라인. KV 매핑, 멀티퍼처스, 베스트셀러 랭킹, 채널 기여 자동화. 캠페인당 30개 이상 글로벌 사이트 지원.",
    tags: ["Python", "SQL", "Adobe Analytics", "Jupyter", "Campaign Analytics"],
    highlights: [
      "Covers 6+ major campaigns per year",
      "KV mapping automation across 30+ sites",
      "Multi-purchase & best-selling product ranking",
      "Channel attribution (PAID/NONPAID classification)",
      "Year-over-year comparison (current / prior / last campaign)",
    ],
    highlightsKo: [
      "연간 6개 이상 주요 캠페인 커버",
      "30개 이상 사이트 KV 매핑 자동화",
      "멀티퍼처스 & 베스트셀러 랭킹 산출",
      "채널 기여 분석 (PAID/NONPAID 분류)",
      "당해 / prior / 전년 동기 비교 지원",
    ],
    color: "green",
  },
  {
    id: "document-tools",
    category: "Document & Translation Tools",
    categoryKo: "문서 & 번역 도구",
    title: "PDF/PPT Auto Translator & Page Archiver",
    titleKo: "PDF/PPT 자동 번역기 & 페이지 아카이버",
    desc: "Python tools for document workflow automation. The translator converts English PDF/PPT files to Korean using translation APIs. The page archiver batch-captures Samsung.com pages as HTML/PNG snapshots and auto-submits them to the Wayback Machine for historical preservation.",
    descKo: "문서 워크플로우 자동화 Python 도구 모음. 번역기는 영문 PDF/PPT를 번역 API로 한국어 변환. 페이지 아카이버는 Samsung.com 페이지를 HTML/PNG로 일괄 캡처하고 Wayback Machine에 자동 제출.",
    tags: ["Python", "PDF", "PPT", "Translation API", "Selenium", "Wayback Machine"],
    highlights: [
      "PDF layout-preserving Korean translation",
      "PPT slide-by-slide translation",
      "Batch HTML/PNG page capture",
      "Wayback Machine auto-submission",
      "Folder auto-organization by campaign",
    ],
    highlightsKo: [
      "PDF 레이아웃 보존 한국어 번역",
      "PPT 슬라이드 단위 번역",
      "HTML/PNG 페이지 일괄 캡처",
      "Wayback Machine 자동 제출",
      "캠페인별 폴더 자동 정리",
    ],
    color: "orange",
  },
  {
    id: "monthly-reporting",
    category: "Reporting Automation",
    categoryKo: "리포팅 자동화",
    title: "DS Monthly / Weekly Automated Report",
    titleKo: "DS 월간 / 주간 자동화 리포트",
    desc: "Automated monthly and weekly performance reporting pipeline for the Samsung DS division. Pulls data from multiple sources, aggregates metrics by period and country, and exports structured Excel reports with embedded SQL queries.",
    descKo: "삼성 DS 부문 월간·주간 성과 리포팅 자동화 파이프라인. 다중 소스 데이터 수집, 기간·국가별 지표 집계 후 SQL 쿼리 내장 구조화 엑셀 리포트 출력.",
    tags: ["Python", "Jupyter", "SQL", "Excel", "pandas", "자동화"],
    highlights: [
      "Monthly & weekly granularity reports",
      "Country-level breakdown",
      "SQL query embedded in Excel output",
      "Iterative version control (250527 → 250710)",
    ],
    highlightsKo: [
      "월간 / 주간 단위 리포트",
      "국가별 세분화",
      "SQL 쿼리 내장 엑셀 출력",
      "반복적 버전 관리 (250527 → 250710)",
    ],
    color: "blue",
  },
];

export const skills = [
  { name: "Python", level: 90 },
  { name: "SQL", level: 85 },
  { name: "Adobe Analytics API", level: 88 },
  { name: "pandas / numpy", level: 85 },
  { name: "Jupyter Notebook", level: 90 },
  { name: "Selenium / Web Scraping", level: 78 },
  { name: "Data Visualization", level: 75 },
  { name: "Pipeline Automation", level: 82 },
];

export const skillCategories = [
  {
    name: "Data Engineering",
    nameKo: "데이터 엔지니어링",
    items: ["Python", "SQL", "pandas", "Jupyter Notebook", "Pipeline Automation"],
  },
  {
    name: "Analytics & APIs",
    nameKo: "애널리틱스 & API",
    items: ["Adobe Analytics", "Adobe Analytics API", "GA4", "JSON / REST API"],
  },
  {
    name: "Automation & Crawling",
    nameKo: "자동화 & 크롤링",
    items: ["Selenium", "ChromeDriver", "Windows Task Scheduler", "smtplib", "BeautifulSoup"],
  },
  {
    name: "Visualization & Reporting",
    nameKo: "시각화 & 리포팅",
    items: ["Sankey Diagram", "Heatmap", "Excel Automation", "HTML Report", "Plotly"],
  },
];
