import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1rem", sm: "1.5rem", lg: "2rem" },
      screens: { "2xl": "1240px" },
    },
    extend: {
      colors: {
        // Oranye utama "Sunrise" — orisinal, terinspirasi palet e-commerce oranye
        brand: {
          50: "#FFF4EF",
          100: "#FFE4D6",
          200: "#FFC5A8",
          300: "#FF9F73",
          400: "#FF7A45",
          500: "#F25A22",
          600: "#D9461A",
          700: "#B33512",
          800: "#8A2A10",
          900: "#5E1D0B",
        },
        // Aksen sekunder (sakura/indigo) untuk badge & grafik
        sakura: { 100: "#FDE7EF", 500: "#E2557F", 700: "#A8355A" },
        indigo: { 100: "#E5E8FB", 500: "#4F5BD5", 700: "#323C9E" },
        // Token semantik — nilai dari CSS variable agar light/dark mode konsisten
        surface: "rgb(var(--surface) / <alpha-value>)",
        "surface-muted": "rgb(var(--surface-muted) / <alpha-value>)",
        canvas: "rgb(var(--canvas) / <alpha-value>)",
        ink: "rgb(var(--ink) / <alpha-value>)",
        "ink-muted": "rgb(var(--ink-muted) / <alpha-value>)",
        line: "rgb(var(--line) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        jp: ["var(--font-jp)", "Hiragino Sans", "Yu Gothic", "sans-serif"],
      },
      borderRadius: {
        card: "0.875rem",
      },
      boxShadow: {
        card: "0 1px 2px rgb(16 24 40 / 0.06), 0 1px 3px rgb(16 24 40 / 0.08)",
        "card-hover": "0 8px 24px rgb(242 90 34 / 0.14)",
      },
      keyframes: {
        "fade-in": { from: { opacity: "0", transform: "translateY(4px)" }, to: { opacity: "1", transform: "none" } },
      },
      animation: {
        "fade-in": "fade-in .25s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
