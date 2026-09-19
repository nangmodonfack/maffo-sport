import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      boxShadow: {
        glow: "0 0 40px rgba(34,197,94,.10)"
      }
    }
  },
  plugins: []
};

export default config;