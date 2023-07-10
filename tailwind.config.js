/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        white:"#FFFFFF",
        purpink:"#481C8A",
        secondary:"#838996",
        palepink:"#D02798",
        orange:"#ff8403"
      }
    },
  },
  plugins: [],
}

