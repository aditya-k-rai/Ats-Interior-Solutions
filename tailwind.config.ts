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
          950: "#003f5c",
          900: "#0b1c2d",
          800: "#2f4b7c",
          700: "#3b5b91",
          600: "#496ba6",
          500: "#587cbc",
          100: "#e6eef5",
          50: "#f0f5fa"
        },
        amber: {
          600: "#d48600",
          500: "#e69500",
          400: "#ffa600",
          300: "#ffb833",
          200: "#ffca66",
          100: "#fff0d4",
          50: "#fff8eb"
        },
        accent: "#ffa600",
        gold: "#ffa600",
        orange: "#ff7c43",
        coral: "#f95d6a",
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
