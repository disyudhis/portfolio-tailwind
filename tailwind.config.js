/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        primary: '#C84B31',
        dark: '#191919',
        secondary: '#2D4263',
        light: '#ECDBBA'
      },
      screens: {
        '2xl' : '1320px'
      }
    },
  },
  plugins: [],
}
