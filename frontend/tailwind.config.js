/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',           // enable dark mode via class
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2f7f7b",
        "primary-orange": "#5bec13",
        "accent-orange": "#f97316",
        "primary-dark": "#236360",
        accent: "#f97316",
        "background-light": "#f6f8f7",
        "background-dark": "#141e1d",
      },
      fontFamily: {
        display: ["Plus Jakarta Sans", "sans-serif"],
        body: ["Noto Sans", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
    },
  },
  plugins: [],
}
