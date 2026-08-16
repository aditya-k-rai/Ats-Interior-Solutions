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
        ink: "#0c1814",
        moss: "#1b3b2f",
        emerald: {
          950: "#0c1814",
          900: "#13261f",
          800: "#1b3b2f",
          700: "#23493b",
          600: "#2d5e4d",
          500: "#387560",
          100: "#e6f0ed",
          50: "#f2f7f5"
        },
        gold: {
          600: "#aa7c11",
          500: "#c5a059",
          400: "#d4af37",
          300: "#e5c158",
          200: "#f3e3a3",
          100: "#faf4db"
        },
        brass: "#c5a059",
        porcelain: "#faf8f3",
        linen: "#f4eee3",
        mist: "#e8f0ec",
        graphite: "#4a5550"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Arial", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"]
      },
      boxShadow: {
        soft: "0 20px 50px rgba(12, 24, 20, 0.08)",
        glow: "0 0 25px rgba(212, 175, 55, 0.35)",
        card: "0 10px 30px rgba(0, 0, 0, 0.05)",
        gold: "0 8px 25px rgba(212, 175, 55, 0.25)",
        emerald: "0 8px 25px rgba(27, 59, 47, 0.3)"
      }
    }
  },
  plugins: []
};

export default config;
