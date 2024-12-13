import type { Config } from "tailwindcss";

const themeColors = {
  carnitas: {
    primary: "#ea384c",
    secondary: "#C0392B",
    accent: "#E67E22",
    text: "#222222",
    light: "#FDF2E9",
    turquoise: "#40E0D0",
    yellow: "#FAA002",
    darkGreyTransparent: "rgba(50, 50, 50, 0.6)",
    blackTransparent: "rgba(0, 0, 0, 0.7)", // Updated to 70% transparency
  },
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
};

const animations = {
  keyframes: {
    "accordion-down": {
      from: { height: "0" },
      to: { height: "var(--radix-accordion-content-height)" },
    },
    "accordion-up": {
      from: { height: "var(--radix-accordion-content-height)" },
      to: { height: "0" },
    },
    fadeIn: {
      "0%": { opacity: "0" },
      "100%": { opacity: "1" },
    },
    wiggle: {
      '0%, 100%': { transform: 'rotate(-3deg)' },
      '50%': { transform: 'rotate(3deg)' },
    },
    float: {
      '0%, 100%': { transform: 'translateY(0)' },
      '50%': { transform: 'translateY(-10px)' },
    }
  },
  animation: {
    "accordion-down": "accordion-down 0.2s ease-out",
    "accordion-up": "accordion-up 0.2s ease-out",
    fadeIn: "fadeIn 0.5s ease-out",
    wiggle: 'wiggle 1s ease-in-out infinite',
    float: 'float 3s ease-in-out infinite',
  },
};

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
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
      fontFamily: {
        sans: ['Roboto Flex', 'sans-serif'],
        display: ['Roboto Flex', 'sans-serif'],
        handwritten: ['Roboto Flex', 'sans-serif'],
        sketch: ['Roboto Flex', 'sans-serif'],
      },
      colors: themeColors,
      ...animations,
      backgroundImage: {
        'mexican-pattern': "url('/lovable-uploads/48a433ce-f5a4-4639-8d6e-a495f29066b1.png')",
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
