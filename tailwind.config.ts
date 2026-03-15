import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Rustic Theme Colors - Deco Decoster (Direct hex values)
        terracotta: "#C25B3B",
        sage: "#8BA88E",
        warmGray: "#6B6B6B",
        navy: "#2C3E50",
        gold: "#D4A574",
        cream: "#FDFBF7",
        lightCream: "#F5F1ED",
        
        // shadcn/ui Theme Colors (using oklch for better color management)
        background: "oklch(var(--background))",
        foreground: "oklch(var(--foreground))",
        card: {
          DEFAULT: "oklch(var(--card))",
          foreground: "oklch(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "oklch(var(--popover))",
          foreground: "oklch(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "oklch(var(--primary))",
          foreground: "oklch(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "oklch(var(--secondary))",
          foreground: "oklch(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "oklch(var(--muted))",
          foreground: "oklch(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "oklch(var(--accent))",
          foreground: "oklch(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "oklch(var(--destructive))",
          foreground: "oklch(var(--destructive-foreground))",
        },
        border: "oklch(var(--border))",
        input: "oklch(var(--input))",
        ring: "oklch(var(--ring))",
      },
      fontFamily: {
        heading: ["var(--font-playfair-display)", "serif"],
        body: ["var(--font-open-sans)", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        // Custom rustic rounded values
        button: "8px",
        card: "12px",
        image: "8px",
        input: "6px",
      },
      boxShadow: {
        card: "0 4px 6px rgba(0, 0, 0, 0.1)",
        button: "0 2px 4px rgba(0, 0, 0, 0.15)",
        hover: "0 8px 15px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
