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
        primary: '#334155',    // slate-700
        dark: '#0f172a',       // slate-900
        secondary: '#475569',  // slate-600
        light: '#f8fafc'       // slate-50
      },
      screens: {
        '2xl': '1320px'
      }
    },
  },
  plugins: [],
}