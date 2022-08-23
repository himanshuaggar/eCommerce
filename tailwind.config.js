/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    fontFamily:{
      gotham:['Gotham Pro', 'sans-serif']
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      'xxl': '1590px',
    },
    extend: {
      fontSize:{
        '8xl':'6rem'
      },
      spacing:{
        '128':'32rem',
        '144':'36rem'
      }
    },
  },
  plugins: [],
}
