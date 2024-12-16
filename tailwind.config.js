/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./views/**/*.pug'], // Define el contenido correctamente.
  theme: {
    extend: {
      colors: {
        celeste: '#B5F4F4',
        neon: '#5C5CF4',
        blue: '#372DED',
        indigo: '#7F89F4',
        navy: '#190981',
        black: '#000000',
        white: '#ffffff',
        red: '#EA0707',
        green: '#68AF21',
        nav: '#D1D1EC',
        error: '#F44336', // Color rojo para los errores
        errorDark: '#D32F2F',
        primaryHover: '#40E3EA', 
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        pulse: 'pulse 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
