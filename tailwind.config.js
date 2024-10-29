/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bebasNeue: ["Bebas Neue", "sans-serif"],
      },
      backgroundImage: {
        'primary-gradient-color': 'linear-gradient(90deg, #4D91FF 0%, #620A9C 51%, #FF00CC 100%)',
        'primary-gradient-color-invert': 'linear-gradient(270deg, #4D91FF 0%, #620A9C 51%, #FF00CC 100%)'
      },
      colors: {
        primary: "#4D91FF",
        secondary: "#FF00CC",
        thirdly: "#620A9C",
        darkWhite: "#E8E6E3",
        grayLight: "#38383E",
        grayDark: "#1D1A1A",
        base100: "#040509",
        error: "rgb(239, 68, 68)",
        warning: "rgb(234, 179, 8)",
        success: "rgb(34, 197, 94)",
      },
    },
  },

  plugins: [require('daisyui'),],

  daisyui: {
    themes: [],
  },

}



