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
        "custom-black": "#2E2F37",
        "custom-gray": "#656566",
        "custom-white": "#D0D5DD",
        "light-gray": "#656566",
        "custom-blue": "#007BFF",
        "very-light-gray": "#475467",
        "deep-black": "#14191C",
      },
      screens: {
        xlg: "1050px",
        lg: "1025px",
        md: "768px",
      },
    },
  },
  plugins: [],
} satisfies Config;
