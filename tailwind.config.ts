import type { Config } from "tailwindcss";

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
        "blue-custom-10": "#1B59F81A",
        "blue-custom": "#1B59F8",
        "black-custom-70": "#000000B2",
        "black-custom-50": "#00000080",
      },
      borderColor: {
        custom: "#eff0f6",
      },
    },
  },
  plugins: [],
} satisfies Config;
