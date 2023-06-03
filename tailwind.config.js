const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bluebg: "#4326F3",
        backclr: "#1D1B27",
        primary: "#FFE1E0",
        secondary: "#8E98A5",
        secure: "#5BB5CB",
        wallet: "#5E5B90",
        marked: "#3C3547",
        optimus: "#C1C0C7",
        gray1: "#2D2C35",
        gray2: "#FEFEFE",
        gray3: "#1D1B27",
        accordian: "#32303C",
        vr: "#2E4CF6",
      },
      fontFamily: {
        teko: ["Teko", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
});
