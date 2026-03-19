import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jonghyun Park | Data Analyst",
  description: "Data Analyst specializing in analytics engineering, pipeline automation, and data visualization.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
