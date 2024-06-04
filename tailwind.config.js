/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
     

      fontFamily: {

        'Clash-bold': ['ClashBold', 'sans-serif'],
        'ClashExtralight': ['ClashExtralight', 'sans-serif'],
        'Clashlight': ['Clashlight', 'sans-serif'],
        'ClashMedium': ['ClashMedium', 'sans-serif'],
        'ClashRegular': ['ClashRegular', 'sans-serif'],
        'Clashsemibold': ['Clashsemibold', 'sans-serif'],
      },

      colors: {
        'primary': '#FF5555',
      }
    },
  },
  plugins: [],
}

