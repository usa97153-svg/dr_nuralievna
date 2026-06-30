import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F5EFE6",
        gold: "#C9A268",
        "gold-light": "#DCC093",
        ink: "#2B2420",
        muted: "#6B6259",
        cardwhite: "#FDFBF8",
        border: "#E5DDD0",
        darkbrown: "#231D17",
      },
      fontFamily: {
        serif: ["Georgia", "Times New Roman", "Noto Serif", "serif"],
        sans: ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};
export default config;
