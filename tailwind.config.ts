import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0b1329",
        navy: {
          950: "#0b1329",
          900: "#0f1b38",
          800: "#16284f",
          700: "#1e376d",
          600: "#27488c",
          500: "#325aa8",
          100: "#e8eeed",
          50: "#f0f4f9"
        },
        amber: {
          600: "#b87c12",
          500: "#d99218",
          400: "#e5a93c",
          300: "#f3c368",
          200: "#f9dd9d",
          100: "#fdf3d8",
          50: "#fef9ec"
        },
        accent: "#f3b23e",
        gold: "#e5a93c",
        porcelain: "#f8fafc",
        linen: "#f1f5f9",
        mist: "#e2e8f0",
        graphite: "#334155"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Arial", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"]
      },
      boxShadow: {
        soft: "0 20px 50px rgba(11, 19, 41, 0.08)",
        glow: "0 2px 10px rgba(229, 169, 60, 0.15)",
        card: "0 10px 30px rgba(0, 0, 0, 0.05)",
        gold: "0 2px 8px rgba(229, 169, 60, 0.15), 0 1px 2px rgba(0, 0, 0, 0.05)",
        navy: "0 4px 14px rgba(15, 27, 56, 0.25)"
      }
    }
  },
  plugins: []
};

export default config;
