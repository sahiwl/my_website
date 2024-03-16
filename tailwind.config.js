/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        Comfortaa: ["Comfortaa", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
        Caveat: ["Caveat", "cursive"]
      }
    },
  },
  plugins: [],
}

