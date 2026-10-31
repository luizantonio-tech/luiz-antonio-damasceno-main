
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./*.js",
  ],
  theme: {
    extend: {
      colors: {
        vinci: '#E51837',
        tinta: '#1A1A1A',
      },
      fontFamily: {
        titulo: ['Genos', 'sans-serif'],
        texto: ['Host Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
