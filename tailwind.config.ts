import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        alata: ['Alata'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      // Move fadeSlideUp into keyframes
      keyframes: {
        fadeSlideUp: {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      // Move animation into extend
      animation: {
        'fade-slide': 'fadeSlideUp 1s ease-in-out',
      },
    },
  },
  plugins: [],
};

export default config;
