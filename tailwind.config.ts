import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-poppins)", "system-ui", "sans-serif"]
      },
      colors: {
        background: "#020617",
        foreground: "#e5e7eb",
        accent: {
          DEFAULT: "#6366f1",
          soft: "#4f46e5"
        }
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(circle at 0% 0%, rgba(56,189,248,0.15), transparent 55%), radial-gradient(circle at 100% 0%, rgba(147,51,234,0.18), transparent 55%), radial-gradient(circle at 0% 100%, rgba(59,130,246,0.12), transparent 55%)"
      },
      boxShadow: {
        soft: "0 10px 30px rgba(15,23,42,0.7)",
        "glow-accent": "0 0 35px rgba(99,102,241,0.35)"
      }
    }
  },
  plugins: []
};

export default config;

