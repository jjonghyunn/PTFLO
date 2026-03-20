import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jonghyun Park | Data Analyst",
  description: "Data Analyst & Analytics Engineer specializing in pipeline automation and data engineering.",
  openGraph: {
    title: "Jonghyun Park | Data Analyst & Analytics Engineer",
    description: "Pipeline automation · Adobe Analytics · Samsung global 30+ sites",
    url: "https://ptflo-zeta.vercel.app",
    siteName: "Jonghyun Park Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jonghyun Park | Data Analyst",
    description: "Pipeline automation · Adobe Analytics · Samsung global 30+ sites",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
