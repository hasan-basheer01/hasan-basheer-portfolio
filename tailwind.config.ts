import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        // Every token below reads a CSS custom property set in globals.css,
        // so the whole palette flips when `.light` is toggled on <html>.
        bg: {
          DEFAULT: "rgb(var(--bg) / <alpha-value>)",
          raised: "rgb(var(--bg-raised) / <alpha-value>)",
          overlay: "rgb(var(--bg-overlay) / <alpha-value>)",
        },
        line: {
          DEFAULT: "var(--line)",
          strong: "var(--line-strong)",
        },
        ink: {
          DEFAULT: "rgb(var(--ink) / <alpha-value>)",
          muted: "rgb(var(--ink-muted) / <alpha-value>)",
          faint: "rgb(var(--ink-faint) / <alpha-value>)",
        },
        accent: {
          // Primary highlight/CTA color — teal-cyan in dark mode, deeper teal in light mode for contrast.
          DEFAULT: "rgb(var(--accent) / <alpha-value>)",
          soft: "rgb(var(--accent-soft) / <alpha-value>)",
          // Secondary accent — purple/magenta, used for diagrams and gradients.
          cyan: "rgb(var(--accent-cyan) / <alpha-value>)",
          // Tertiary accent — green, for status/build indicators.
          green: "rgb(var(--accent-green) / <alpha-value>)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "ui-sans-serif", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      fontSize: {
        "2xs": ["0.75rem", { lineHeight: "1.1rem" }],
      },
      maxWidth: {
        prose: "68ch",
      },
      backgroundImage: {
        "grid-lines":
          "linear-gradient(to right, var(--grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)",
        "accent-gradient":
          "linear-gradient(120deg, rgb(var(--accent)) 0%, rgb(var(--accent-soft)) 32%, rgb(var(--accent-warm)) 66%, rgb(var(--accent-cyan)) 100%)",
        "radial-glow":
          "radial-gradient(ellipse 80% 60% at 50% 0%, var(--radial-glow), transparent 70%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-node": {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "1" },
        },
        "dash-flow": {
          to: { strokeDashoffset: "-24" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.16,1,0.3,1) both",
        "pulse-node": "pulse-node 3s ease-in-out infinite",
        "dash-flow": "dash-flow 1.2s linear infinite",
        marquee: "marquee 32s linear infinite",
        "gradient-shift": "gradient-shift 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
