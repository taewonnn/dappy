/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx}",],
  theme: {
    extend: {
      colors: {
        brand: '#022aed'
      },
      backgroundImage: {
        banner: `url('/public/images/banner.jpg')`,
      }
    },
  },
  plugins: [],
}

