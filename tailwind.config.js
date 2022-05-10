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
        moveBackgroundLinearToRight:"moveBackgroundLinearToRight 2s 1 forwards",
        bottomToTop:"bottomToTop 2s 1 forwards",
        scaleIn:'scaleIn 0.9s 1 forwards',
        bottomToTopMore:"bottomToTopMore 1.5s 1 forwards",
        bottomToTopMoreMainPage:"bottomToTopMoreMainPage 1.5s 1 forwards",
        bottomToTopFooter:'bottomToTopFooter 1.5s 1 forwards',
        onlyBounce :'maxBounce 1.5s linear 0.5s  1 forwards',
        onlyBounceReverse:'maxBounce 0.5s linear reverse 1 forwards',
        secondPageToTop:'secondPageToTop 1s 1 forwards',
        bottomToTopFinished:"bottomToTop 0s 1 forwards",
        scaleInFinished:'scaleIn 0s 1 forwards',
        bottomToTopMoreFinished:"bottomToTopMore 0s 1 forwards",
        bottomToTopFooterFinished:'bottomToTopFooter 0s 1 forwards',
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
          "0% ": { transform: "scale(0.6) " },
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
        bottomToTop:{
          "100%": { transform: "translateY(-15%)" },
        },
        bottomToTopMore:{
          "100%": { transform: "translateY(-120%)" },
        },
        bottomToTopMoreMainPage:{
          "100%": { transform: "translateY(-60%)" },
        },
        bottomToTopFooter:{
          "100%": { transform: "translateY(-1450px)" },
        },
        scaleIn:{
          "100%": { transform: "scale(0)" },
        },
        maxBounce:{
          "0% ": { transform: "scale(0.0) " },
          "25%": { transform: "scale(0.7) " },
          "50%": { transform: "scale(1.2)" },
          "100%": { transform: "scale(1)" },
        },
        secondPageToTop:{
          "0%": { transform: "translateY(2000px)" },
          "100%": { transform: "translateY(0%)" },
        }
      },
      backgroundImage: {
        cityscape: 'url("..")',
      },
    },
  },
  plugins: [],
};
