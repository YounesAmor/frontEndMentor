/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      md: "600px",
      lg: "1100px",
    },
    extend: {
      backgroundImage: {
        mobile: "url('/src/assets/images/image-product-mobile.jpg')",
      },
      colors: {
        slightlyTransparentWhite: "hsla(0, 0%, 100%, 0.6)",
        transparentWhite: "hsla(0, 0%, 100%, 0.75)",
        softViolet: "hsl(277, 64%, 61%)",
        desaturatedBlue: "hsl(244, 38%, 16%)",
        veryDarkBlue: "hsl(233, 47%, 7%)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        lexandDeca: ["Lexand Deca", "sans-serif"],
      },
    },
  },
  "tailwindCSS.includeLanguages": {
    javascript: "javascript",
    html: "HTML",
  },
  "editor.quickSuggestions": {
    strings: true,
  },
  plugins: [],
};
