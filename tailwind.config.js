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
      colors: {
        primary: "#832388",
        secondary: "#E3436B",
        subsecondary: "#F0772F",
        error: "rgb(239, 68, 68)",
        warning: "rgb(234, 179, 8)",
        success: "rgb(34, 197, 94)",
      },
    },
  },

  plugins: [require('daisyui'),],

  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#832388",
          "secondary": "#E3436B",
          "subsecondary": "#F0772F",
        },
      },
      "light",
    ],
  },

}



