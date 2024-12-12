import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [
    require("tailwindcss-animate"),
    require("@assistant-ui/react/tailwindcss"),
    require("@assistant-ui/react-markdown/tailwindcss"),
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        "components-cards-backgrounds-BG-color-1":
          "var(--components-cards-backgrounds-BG-color-1)",
        "components-cards-borders-BR-color-2":
          "var(--components-cards-borders-BR-color-2)",
        "components-inputs-select-text-text-neutral":
          "var(--components-inputs-select-text-text-neutral)",
        "components-titles-paragraphs-text-neutral":
          "var(--components-titles-paragraphs-text-neutral)",
        "globals-global-borders-border-3":
          "var(--globals-global-borders-border-3)",
        "globals-global-surfaces-surface-1":
          "var(--globals-global-surfaces-surface-1)",
        "globals-global-texts-color-3": "var(--globals-global-texts-color-3)",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
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
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
} satisfies Config;

export default config;

module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "components-avatars-backgrounds-BG-color-1":
          "var(--components-avatars-backgrounds-BG-color-1)",
        "components-badges-backgrounds-BG-color-1":
          "var(--components-badges-backgrounds-BG-color-1)",
        "components-badges-backgrounds-BG-color-2":
          "var(--components-badges-backgrounds-BG-color-2)",
        "components-badges-borders-BR-color-2":
          "var(--components-badges-borders-BR-color-2)",
        "components-badges-text-text-dark":
          "var(--components-badges-text-text-dark)",
        "components-inputs-select-backgrounds-BG-color-1":
          "var(--components-inputs-select-backgrounds-BG-color-1)",
        "components-inputs-select-borders-BR-color-1":
          "var(--components-inputs-select-borders-BR-color-1)",
        "components-inputs-select-text-text-dark":
          "var(--components-inputs-select-text-text-dark)",
        "components-inputs-select-text-text-neutral":
          "var(--components-inputs-select-text-text-neutral)",
        "components-titles-paragraphs-text-neutral-light":
          "var(--components-titles-paragraphs-text-neutral-light)",
        "globals-global-borders-border-2":
          "var(--globals-global-borders-border-2)",
        "globals-global-surfaces-surface-1":
          "var(--globals-global-surfaces-surface-1)",
        "globals-global-surfaces-surface-2":
          "var(--globals-global-surfaces-surface-2)",
        "globals-global-surfaces-surface-8":
          "var(--globals-global-surfaces-surface-8)",
        "globals-global-texts-color-2": "var(--globals-global-texts-color-2)",
        "globals-global-texts-color-3": "var(--globals-global-texts-color-3)",
        "globals-global-texts-color-4": "var(--globals-global-texts-color-4)",
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
      },
      fontFamily: {
        "display-1-medium": "var(--display-1-medium-font-family)",
        "display-1-regular": "var(--display-1-regular-font-family)",
        "display-1-uppercase-medium":
          "var(--display-1-uppercase-medium-font-family)",
        "display-2-medium": "var(--display-2-medium-font-family)",
        "display-2-regular": "var(--display-2-regular-font-family)",
        "display-2-strong": "var(--display-2-strong-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      boxShadow: { "neutral-BS-small": "var(--neutral-BS-small)" },
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
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
