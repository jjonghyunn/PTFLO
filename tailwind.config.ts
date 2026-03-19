import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      colors: {
        bg: "#0a0c10",
        surface: "#111318",
        surface2: "#181c24",
        border: "#252a35",
        blue: "#1865F2",
        green: "#0ED4A3",
        orange: "#F2A818",
        muted: "#7A8294",
        dim: "#3D4454",
      },
    },
  },
  plugins: [],
};
export default config;
