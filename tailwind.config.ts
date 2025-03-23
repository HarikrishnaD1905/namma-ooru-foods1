import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
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
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // South Indian earthy color palette
        earth: {
          "50": "#f9f5f0",
          "100": "#e8d6c0",
          "200": "#d7b791",
          "300": "#c69862",
          "400": "#b57a33",
          "500": "#955c28",
          "600": "#7a4a22",
          "700": "#60391c",
          "800": "#452716",
          "900": "#2b160f",
        },
        spice: {
          "50": "#fdf8e9",
          "100": "#f8e8b9",
          "200": "#f3d989",
          "300": "#eeca59",
          "400": "#e9bb2a",
          "500": "#cc9c18",
          "600": "#a47d13",
          "700": "#7d5f0f",
          "800": "#57420a",
          "900": "#302505",
        },
        leaf: {
          "50": "#eef6ee",
          "100": "#d0e6d0",
          "200": "#b2d5b2",
          "300": "#94c594",
          "400": "#75b475",
          "500": "#579557",
          "600": "#467846",
          "700": "#365b35",
          "800": "#253e24",
          "900": "#152213",
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
        slideIn: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideOut: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(5deg)" },
          "75%": { transform: "rotate(-5deg)" },
        },
        scale: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "slide-in": "slideIn 0.3s ease-out forwards",
        "slide-out": "slideOut 0.3s ease-out forwards",
        "fade-in": "fadeIn 0.3s ease-out forwards",
        "fade-out": "fadeOut 0.3s ease-out forwards",
        bounce: "bounce 1s ease-in-out",
        wiggle: "wiggle 0.5s ease-in-out",
        scale: "scale 0.3s ease-in-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config

