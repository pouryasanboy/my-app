/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        theme: {
          1: "#333333",
          2: "#D1D1D1",
          3: "#060606",
          4: "#000014",
          5: "#444444",
          6: "#555555",
          7: "#666666",
          8: "#f0f0f0",
          9: "#00000a",
          10: "#d72236",
          11: "#282828"
        }
      },
      fontFamily: {
        'poppins-black': ['Poppins'],
        'poppins-bold': ['Poppins'],
        'poppins-light': ['Poppins'],
        'poppins-medium': ['Poppins'],
        'poppins-regular': ['Poppins'],
        'poppins-thin': ['Poppins'],
      }
    },
  },
  plugins: [],
}
