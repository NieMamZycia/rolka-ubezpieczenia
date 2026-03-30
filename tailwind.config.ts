import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1E4E8C",
          light: "#3B82F6",
          dark: "#1E3A8A",
        },
        background: "#F3F4F6",
      },
    },
  },
  plugins: [],
};

export default config;

