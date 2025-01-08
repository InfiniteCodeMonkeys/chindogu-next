import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        zen: ["var(--font-zen-tokyo-zoo)"],
        dots: ["var(--font-dots)"],
        russo: ["var(--font-russo-one)"],
        sans: [...defaultTheme.fontFamily.sans],
      },
    },
  },
} satisfies Config;
