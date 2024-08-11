/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '112.5rem', // 1800px
        '4xl': '125rem',    // 2000px
      },
      colors: {
        'marble-blue' : '#4a6f8a'
      }
    },
  },
  plugins: [],
}