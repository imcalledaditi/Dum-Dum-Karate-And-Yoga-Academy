import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#d03e6c", // Cabaret
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#f8d77c", // Marigold
          foreground: "#3b5b9b", // Chambray
        },
        highlight: {
          DEFAULT: "#f5a300", // Web Orange
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#ffb4a8", // Cornflower
          foreground: "#3b5b9b", // Chambray
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        navy: {
          DEFAULT: "#3b5b9b", // Chambray
          foreground: "#ffffff",
        },
        orange: {
          DEFAULT: "#f5a300", // Web Orange
          foreground: "#ffffff",
        },
        pink: {
          DEFAULT: "#ffb4a8", // Cornflower
          foreground: "#3b5b9b",
        },
        yellow: {
          DEFAULT: "#f8d77c", // Marigold
          foreground: "#3b5b9b",
        },
        red: {
          DEFAULT: "#d03e6c", // Cabaret
          foreground: "#ffffff",
        },
        blue: {
          DEFAULT: "#3b5b9b", // Chambray
          foreground: "#ffffff",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "pulse-glow": {
          "0%, 100%": {
            boxShadow: "0 0 15px 5px rgba(245, 163, 0, 0.2)",
          },
          "50%": {
            boxShadow: "0 0 25px 10px rgba(245, 163, 0, 0.4)",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "bounce-in": {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "80%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        wave: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(10px)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-glow": "pulse-glow 2s infinite",
        float: "float 3s ease-in-out infinite",
        "spin-slow": "spin-slow 8s linear infinite",
        "bounce-in": "bounce-in 0.6s ease-out",
        wave: "wave 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config

