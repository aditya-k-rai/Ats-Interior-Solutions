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
          500: "#444C5E",
          100: "#E8E3DC",
          50: "#F4F3EF"
        },
        amber: {
          950: "#3D2B03",
          900: "#624504",
          800: "#88620B",
          700: "#AA7C11",
          600: "#C59B27",
          500: "#D4AF37",
          400: "#DFBC63",
          300: "#EAD096",
          200: "#F7E7CE",
          100: "#FBF4E6",
          50: "#FFFDF9"
        },
        champagne: {
          950: "#3D2B03",
          900: "#624504",
          800: "#88620B",
          700: "#AA7C11",
          600: "#C59B27",
          500: "#D4AF37",
          400: "#DFBC63",
          300: "#EAD096",
          200: "#F7E7CE",
          100: "#FBF4E6",
          50: "#FFFDF9"
        },
        accent: "#D4AF37",
        gold: "#D4AF37",
        travertine: "#E8E3DC",
        frosted: "#F0ECE3",
        alabaster: "#FBFBF9",
        porcelain: "#FBFBF9",
        linen: "#F4F3EF",
        mist: "#E8E3DC",
        graphite: "#181B20"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Arial", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"]
      },
      boxShadow: {
        soft: "0 20px 50px rgba(18, 19, 22, 0.08)",
        glow: "0 4px 20px rgba(212, 175, 55, 0.35)",
        card: "0 10px 30px rgba(18, 19, 22, 0.06)",
        gold: "0 4px 18px rgba(212, 175, 55, 0.38), 0 1px 3px rgba(0, 0, 0, 0.12)",
        navy: "0 8px 30px rgba(13, 15, 18, 0.4)"
      }
    }
  },
  plugins: []
};

export default config;
