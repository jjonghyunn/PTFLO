import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jonghyun Park | Data Analyst",
  description: "Data Analyst & Analytics Engineer specializing in pipeline automation and data engineering.",
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
