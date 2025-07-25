/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'light-coffee': '#f5ebe0',
        'coffee-text': '#4b2e2e',
        'coffee-accent': '#a47148',
      },
    },
  },
  plugins: [],
};
