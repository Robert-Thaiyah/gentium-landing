/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      colors:{
        'agency-red': '#f70f52',
        'agency-grey': '#161616',
        'agency-charcoal': '#1b1b1b',
        'agency-black': '#101010',
        'agency-card': '#3f3f3f',
      },
      fontFamily:{
        'mulish': ['Mulish', 'sans-serif'],
        'oswald': ['Oswald', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

