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
      fontFamily: {
        sans: ['var(--font-raleway)', 'system-ui', 'sans-serif'],
        raleway: ['var(--font-raleway)', 'sans-serif'],
        baskerville: ['var(--font-baskerville)', 'serif'],
      },
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
        // Couleurs gosholo - Conformes au Guide de Normes 2024
        gosholo: {
          // Couleurs Principales de la marque
          "forest-green": "#016167", // VERT FORÊT - Couleur principale
          "vert-foret": "#016167",   // Alias français
          "lime-green": "#b2fd9d",   // VERT LIME - Couleur principale
          "vert-lime": "#b2fd9d",    // Alias français
          
          // Couleurs d'Accent (pour mettre l'accent sur des éléments)
          "steel-blue": "#5bc4db",   // BLEU ACIER - Accent
          "bleu-acier": "#5bc4db",   // Alias français
          orange: "#ff6233",         // ORANGE - Accent
          
          // Blanc
          white: "#ffffff",          // BLANC
          
          // Alias pour compatibilité avec code existant
          primary: "#016167",        // → forest-green
          "light-green": "#b2fd9d",  // → lime-green
          "light-blue": "#5bc4db",   // → steel-blue
          "dark-teal": "#016167",    // → forest-green (ancien nom)
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
