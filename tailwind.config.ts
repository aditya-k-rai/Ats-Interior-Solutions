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
        ink: "#0f1715",
        moss: "#143026",
        clay: "#d95338",
        brass: "#c5a059",
        gold: "#d4af37",
        porcelain: "#faf9f6",
        linen: "#f0ebe1",
        mist: "#e8f0ec",
        graphite: "#3a4440"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Arial", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"]
      },
      boxShadow: {
        soft: "0 20px 50px rgba(15, 23, 21, 0.08)",
        glow: "0 0 25px rgba(197, 160, 89, 0.35)",
        card: "0 10px 30px rgba(0, 0, 0, 0.05)"
      }
    }
  },
  plugins: []
};

export default config;
