/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    minHeight: {
      '1/2': '50%',
    },
    minWidth: {
      '1/2': '50%',
    },
    colors:{
      'orange':'#FC9E4F',
      'green':'#4F9D69',
      'white':'#ffffff',
      'blue' :'#004BA8',
      'black': '#000000',
      'darkGrey':'#222222'

    },
    fontFamily: {
      dmserif: ["DM Serif Display", "serif"],
      opensans: ["Open Sans", "sans-serif"]
    },
    extend: {},
  },
  plugins: [],
}
