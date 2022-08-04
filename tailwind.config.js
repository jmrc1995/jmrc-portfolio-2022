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
      'orange':'#fbbf24',
      'white':'#ffffff',
      'blue' :'#202C36',
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
