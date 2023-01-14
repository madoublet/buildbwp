/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: ["**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'slate': colors.slate,
      'white': colors.white,
      'blue': '#1A98FE',
      'orage': '#FF7630'
    }
  },
  plugins: [],
}
