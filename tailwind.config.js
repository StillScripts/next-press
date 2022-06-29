/** @type {import('tailwindcss').Config} */

const extendsConfig = {
  colors: {
    "wp-dark": "#1D2327",
    "wp-middark": "#2C3338",
    "wp-gray": "#9CA2A7",
    "wp-blue": "#2271B1",
    "wp-background": "#F0F0F1",
    "wp-text": "#1d2327",
  },
  fontSize: {
    "wp-sm": "13px",
    "wp-xl": "23px",
  },
};

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media",
  theme: {
    extend: extendsConfig,
  },
  plugins: [],
};
