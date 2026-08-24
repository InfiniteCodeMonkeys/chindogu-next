import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const { sans, mono } = defaultTheme.fontFamily;

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#131313",
        "on-background": "#e2e2e2",
        surface: "#131313",
        "surface-dim": "#131313",
        "surface-bright": "#393939",
        "surface-variant": "#353535",
        "surface-tint": "#c6c6c7",
        "surface-container-lowest": "#0e0e0e",
        "surface-container-low": "#1b1b1b",
        "surface-container": "#1f1f1f",
        "surface-container-high": "#2a2a2a",
        "surface-container-highest": "#353535",
        "on-surface": "#e2e2e2",
        "on-surface-variant": "#c4c7c8",
        "inverse-surface": "#e2e2e2",
        "inverse-on-surface": "#303030",
        primary: "#ffffff",
        "on-primary": "#2f3131",
        "primary-container": "#e2e2e2",
        "on-primary-container": "#636565",
        "primary-fixed": "#e2e2e2",
        "primary-fixed-dim": "#c6c6c7",
        "on-primary-fixed": "#1a1c1c",
        "on-primary-fixed-variant": "#454747",
        "inverse-primary": "#5d5f5f",
        secondary: "#ffb59e",
        "on-secondary": "#5e1700",
        "secondary-container": "#ff5717",
        "on-secondary-container": "#521300",
        "secondary-fixed": "#ffdbd0",
        "secondary-fixed-dim": "#ffb59e",
        "on-secondary-fixed": "#3a0b00",
        "on-secondary-fixed-variant": "#842500",
        tertiary: "#ffffff",
        "on-tertiary": "#313030",
        "tertiary-container": "#e5e2e1",
        "tertiary-fixed": "#e5e2e1",
        "tertiary-fixed-dim": "#c8c6c5",
        "on-tertiary-fixed": "#1c1b1b",
        "on-tertiary-fixed-variant": "#474746",
        error: "#ffb4ab",
        "on-error": "#690005",
        "error-container": "#93000a",
        "on-error-container": "#ffdad6",
        outline: "#8e9192",
        "outline-variant": "#444748",
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
      spacing: {
        "margin-desktop": "64px",
        "margin-mobile": "16px",
        unit: "4px",
        "max-width": "960px",
        gutter: "24px",
      },
      fontFamily: {
        display: ["var(--font-geist)", ...sans],
        "headline-lg": ["var(--font-geist)", ...sans],
        "headline-lg-mobile": ["var(--font-geist)", ...sans],
        "body-md": ["var(--font-geist)", ...sans],
        "label-caps": ["var(--font-geist)", ...sans],
        "code-sm": ["var(--font-jetbrains-mono)", ...mono],
        sans: ["var(--font-geist)", ...sans],
      },
      fontSize: {
        // Fluid from phone to desktop, topping out at the 72px design size, so
        // the longest hero line never forces horizontal overflow at any width.
        display: [
          "clamp(28px, 7.2vw, 72px)",
          { lineHeight: "1.0", letterSpacing: "-0.04em", fontWeight: "700" },
        ],
        "headline-lg": [
          "32px",
          { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "600" },
        ],
        "headline-lg-mobile": [
          "24px",
          { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "600" },
        ],
        "body-md": [
          "16px",
          { lineHeight: "1.5", letterSpacing: "-0.01em", fontWeight: "400" },
        ],
        "code-sm": ["13px", { lineHeight: "1.6", fontWeight: "400" }],
        "label-caps": [
          "11px",
          { lineHeight: "1.0", letterSpacing: "0.1em", fontWeight: "700" },
        ],
      },
    },
  },
} satisfies Config;
