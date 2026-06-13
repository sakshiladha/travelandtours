import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: "#07172F",
        saffron: "#F97316",
        ivory: "#FAF5EC",
        forest: "#1F5F3D",
        gold: "#D9A441",
        ink: "#132033"
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Fraunces", "serif"],
        body: ["var(--font-plus-jakarta)", "Plus Jakarta Sans", "sans-serif"]
      },
      boxShadow: {
        premium: "0 20px 55px rgba(7, 23, 47, 0.14)",
        navy: "0 18px 45px rgba(3, 10, 24, 0.32)"
      }
    }
  },
  plugins: []
};

export default config;
