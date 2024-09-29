/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'primary': '#FFFFFF',
        'secondary': {
          100: '#E2E2D5',
          200: '#888883',
        },
        'tertiary':{
          100 : '#00ADB5'
        }
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          "2xl": '6rem',
        },
      },
    },
  },
  plugins: [],
}