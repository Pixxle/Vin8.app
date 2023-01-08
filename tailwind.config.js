/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'neumorphic-outset': '12.61px 12.61px 17px #C4C6C9, -12.61px -12.61px 17px #FFFFFF',
        'neumorphic-inset': 'inset 28.23px 28.23px 17px #C4C6C9, inset -28.23px -28.23px 17px #FFFFFF;',
      },
      backgroundImage: {
        'neumorphic-concave': 'linear-gradient(145deg, #FFFFFF, #CBCDD0)',

      },
      colors: {
        'neumorphic-flat': '#EEF0F4',
      },
      fontFamily: {
        'neumorphic': ['Helvetica'],
      }
    },
  },
  plugins: [],
}
