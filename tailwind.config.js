/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a1f2c',
          dark: '#0f1219',
        },
        accent: {
          DEFAULT: '#ffa500',
          glow: '#ffd700',
        },
        secondary: {
          DEFAULT: '#2a3447',
          light: '#3a4559',
        },
      },
      boxShadow: {
        'glow': '0 0 15px rgba(255, 165, 0, 0.5)',
        'glow-lg': '0 0 30px rgba(255, 165, 0, 0.5)',
      },
    },
  },
  plugins: [],
}