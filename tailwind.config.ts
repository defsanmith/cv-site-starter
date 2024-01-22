import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          1: "#272829",
          2: "#61677A",
          3: "#D8D9DA",
          4: "#FFF6E0",
        },
        text: {
          1: "#ffffff",
        },
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          lg: "768px",
          xl: "768px",
          "2xl": "768px",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
