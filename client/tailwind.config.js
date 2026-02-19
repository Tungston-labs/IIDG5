/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
       backgroundImage: {
         grad: 'linear-gradient(to right, #434343 0%, black 100%);',
         orangegradient: 'linear-gradient(90deg, rgba(249,235,235,1) 0%, rgba(255,255,255,1) 80%)',
         light: 'linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);'
       },
      boxShadow: {
        btn: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
        ip: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
      },
    },
    colors: {
      
    },
    fontFamily: {
      urban: ['Urbanist', 'sans-serif'],
      mes: ['El Messiri', 'sans-serif'],
      pop: [ "Poppins", 'sans-serif']
    },
  },
  plugins: [],
}