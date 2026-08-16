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
        ink: "#18201d",
        moss: "#31483f",
        clay: "#a75f3f",
        brass: "#b48948",
        porcelain: "#f7f3ed",
        linen: "#ebe3d8",
        mist: "#e5ece8",
        graphite: "#2f3632"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Arial", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"]
      },
      boxShadow: {
        soft: "0 18px 55px rgba(24, 32, 29, 0.13)"
      }
    }
  },
  plugins: []
};

export default config;
