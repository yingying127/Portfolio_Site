/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    mode: "jit",
    theme: {
      extend: {
        colors: {
          "deep-blue": "#010026",
          blue: "#2430ab",
          red: "#5727b3",
          yellow: "#b1b1b1",
          grey: "#625c5c",
          "dark-grey": "#757575",
          "opaque-black": "rgba(0,0,0,0.35)",
        },
        backgroundImage: (theme) => ({
          "gradient-rainbow":
            "linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)",
  
          "gradient-rainblue":
            "linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)",
        }),
        fontFamily: {
          playfair: ["Playfair Display", "serif"],
          opensans: ["Open Sans", "sans-serif"],
        },
        content: {
          brush: "url('./assets/brush.png')",
          person1: "url('./assets/tommy-icon.png')",
          person2: "url('./assets/rachel-icon.png')",
          person3: "url('./assets/viraj-icon.png')",
        },
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
    },
    plugins: [],
  };
  