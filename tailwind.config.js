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
    },
    fontFamily: {
      oswald: ["Oswald"],
      roboto: ["Roboto Mono"],
    },
    letterSpacing: {
      spacing: "1rem",
    },
    extend: {},
  },
  plugins: [],
};
