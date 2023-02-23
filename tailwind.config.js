/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        'azul-hyde': '#23AFFF', 
        'azul-claro-hyde': '#55CCEF',
        'black':'#1B1C1E',
      }
    },
  },
  plugins: [],
}
