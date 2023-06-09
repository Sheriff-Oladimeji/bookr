/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      brown: "#B55B02",
      gray: "#8FCFFF",
      dark: "#333333",
    },
    fontFamily: {
      lato: ["Lato", 'sans-serif'],
    mont: ['Montserrat', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
