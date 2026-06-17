import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        violet: {
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9",
        },
        purple: {
          400: "#c084fc",
          500: "#a855f7",
          600: "#9333ea",
        },
        amber: {
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
        },
        navy: {
          900: "#0d0d14",
          800: "#13131f",
          700: "#1a1a2e",
        },
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        glow: {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)",
          },
          "50%": {
            boxShadow: "0 0 40px rgba(139, 92, 246, 0.6), 0 0 60px rgba(168, 85, 247, 0.3)",
          },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        fillBar: {
          "0%": { width: "0%" },
          "100%": { width: "var(--target-width)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.6s ease-out forwards",
        shimmer: "shimmer 3s linear infinite",
        glow: "glow 2s ease-in-out infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        fillBar: "fillBar 1s ease-out forwards",
      },
      fontFamily: {
        grotesk: ["'Space Grotesk'", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
