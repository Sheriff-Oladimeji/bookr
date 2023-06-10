/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brown: "#B55B02",
        dark: "#333333",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        mont: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
