const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      CorrectYellow: "#EEFF00",
      CorrectWhite: "#FFFFFF",
      CorrectBlack: "#292F33",
      CorrectGrey: "#ced6dc",
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      lightGrey:'#E6EBEF'
    },
    fontFamily: {
      oswald: ["Oswald"],
      roboto: ["Roboto Mono"],
    },
    letterSpacing: {
      spacing: "1rem",
    },
    extend: {
      animation: {
        ping: "ping 3s infinite alternate",
        rotate: "rotate 60s infinite linear",
        ltr1: 'ltr1 3s 1 forwards ',
        ltr2: 'ltr2 3s 1 forwards ',
      },
      keyframes: {
        rotate: {
          "0% 100%": { transform: "rotate(0deg) " },
          "50%": { transform: "rotate(360deg)" },
        },
        ping:{
          '0% 100%':{transform:'scale(0.9)',opacity:'100%'},
          '50%':{transform:'scale(1.1)',opacity:'100%'},
        },
        ltr1:{
          "0% ": { transform: "translateX(-100%) " },
          "100%": { transform: "translateX(0%)" },
          "50%": { transform: "translateX(0%)" },
        },
        ltr2:{
          "0% ": { transform: "translateX(0%) " },
          "100%": { transform: "translateX(200%)" },
          "50%": { transform: "translateX(200%)" },
        }
      },
      backgroundImage:{
        cityscape:'url("..")'
      }
    },
  },
  plugins: [],
};
