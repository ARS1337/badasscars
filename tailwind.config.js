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
      lightGrey: "#E6EBEF",
    },
    fontFamily: {
      oswald: ["Oswald"],
      roboto: ["Roboto Mono"],
    },
    letterSpacing: {
      spacing: "1rem",
      title:'0.3rem'
    },
    extend: {
      animation: {
        ping: "ping 3s infinite alternate",
        rotate: "rotate 60s infinite linear",
        ltr1: "ltr1 3s 1 forwards ",
        ltr2: "ltr2 3s 1 forwards ",
        rtl1: "rtl1 3s 1 forwards ",
        rtl2: "rtl2 3s 1 forwards ",
        bounceCustom: "bounceCustom 1.5s 1, rotate 60s 1.5s infinite linear ",
        moveBackgroundLinearToLeft:"moveBackgroundLinearToLeft 2s 1 forwards",
        moveBackgroundLinearToRight:"moveBackgroundLinearToRight 2s 1 forwards"
      },
      keyframes: {
        rotate: {
          "100%": { transform: "rotate(360deg)" },
        },
        ltr1: {
          "0% ": { transform: "translateX(-200%) " },
          "100%": { transform: "translateX(0%)" },
          "50%": { transform: "translateX(0%)" },
        },
        ltr2: {
          "0% ": { transform: "translateX(0%) " },
          "100%": { transform: "translateX(200%)" },
          "50%": { transform: "translateX(200%)" },
        },
        rtl1: {
          "0% ": { transform: "translateX(200%) " },
          "100%": { transform: "translateX(0%)" },
          "50%": { transform: "translateX(0%)" },
        },
        rtl2: {
          "0% ": { transform: "translateX(0%) " },
          "100%": { transform: "translateX(-200%)" },
          "50%": { transform: "translateX(-200%)" },
        },
        bounceCustom: {
          "0% ": { transform: "scale(1) " },
          "25%": { transform: "scale(0.7) " },
          "50%": { transform: "scale(1.4)" },
          "100%": { transform: "scale(1)" },
        },
        moveBackgroundLinearToLeft:{
          "0% ": { transform: "translateX(0%) " },
          "100%": { transform: "translateX(-20%)" },
        },
        moveBackgroundLinearToRight:{
          "0% ": { transform: "translateX(0%) " },
          "100%": { transform: "translateX(20%)" },
        },
      },
      backgroundImage: {
        cityscape: 'url("..")',
      },
    },
  },
  plugins: [],
};
