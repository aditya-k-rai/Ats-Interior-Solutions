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
        ink: "#121316",
        obsidian: "#121316",
        navy: {
          950: "#0D0F12",
          900: "#121316",
          800: "#181B20",
          700: "#1E232B",
          600: "#2A303C",
          500: "#3E4656",
          100: "#E8E3DC",
          50: "#F4F3EF"
        },
        amber: {
          600: "#A88452",
          500: "#C5A880",
          400: "#D8C29D",
          300: "#E3D1B0",
          200: "#EFE3CD",
          100: "#F8F3EA",
          50: "#FDFBF7"
        },
        champagne: {
          600: "#A88452",
          500: "#C5A880",
          400: "#D8C29D",
          300: "#E3D1B0",
          200: "#EFE3CD",
          100: "#F8F3EA",
          50: "#FDFBF7"
        },
        accent: "#C5A880",
        gold: "#C5A880",
        travertine: "#E8E3DC",
        alabaster: "#FBFBF9",
        porcelain: "#FBFBF9",
        linen: "#F4F3EF",
        mist: "#E8E3DC",
        graphite: "#2A303C"
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
