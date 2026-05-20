import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Grimoire Brand Colors
        void: "#0D0720",
        "void-800": "#130a2e",
        "void-700": "#1a1040",
        "void-600": "#211552",
        lavender: {
          DEFAULT: "#C9A0DC",
          light: "#dbbfea",
          dark: "#a87cc4",
          muted: "rgba(201,160,220,0.15)",
        },
        gold: {
          DEFAULT: "#C9A84C",
          light: "#dfc070",
          dark: "#a88a30",
          muted: "rgba(201,168,76,0.15)",
          glow: "rgba(201,168,76,0.3)",
        },
        sage: {
          DEFAULT: "#7ED4A8",
          muted: "rgba(126,212,168,0.15)",
        },
        blush: {
          DEFAULT: "#F5D5E0",
          muted: "rgba(245,213,224,0.7)",
        },
        // Shadcn tokens
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        border: "hsl(var(--border))",
        ring: "hsl(var(--ring))",
      },
      fontFamily: {
        cinzel: ["Cinzel", "serif"],
        "cinzel-dec": ["Cinzel Decorative", "serif"],
        garamond: ["EB Garamond", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      animation: {
        "star-twinkle": "twinkle 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "candle-flicker": "flicker 4s ease-in-out infinite",
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "slow-rotate": "slowRotate 60s linear infinite",
      },
      keyframes: {
        twinkle: {
          "0%, 100%": { opacity: "0.3", transform: "scale(0.8)" },
          "50%": { opacity: "1", transform: "scale(1.2)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(201,168,76,0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(201,168,76,0.6), 0 0 80px rgba(201,168,76,0.2)" },
        },
        flicker: {
          "0%, 100%": { opacity: "1" },
          "25%": { opacity: "0.85" },
          "50%": { opacity: "0.95" },
          "75%": { opacity: "0.8" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slowRotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      backgroundImage: {
        "grimoire-radial": "radial-gradient(ellipse at center top, #211552 0%, #130a2e 40%, #0D0720 100%)",
        "gold-glow": "radial-gradient(ellipse at center, rgba(201,168,76,0.2) 0%, transparent 70%)",
        "lavender-glow": "radial-gradient(ellipse at center, rgba(201,160,220,0.15) 0%, transparent 70%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
