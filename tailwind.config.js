/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        nonito: ["Nunito Sans", "sans-serif"],
      },
      colors: {
        lightmodetext: "hsl(200,15%,8%)",
        lightmodeinput: "hsl(0,0%,52%)",
        lightmodebackground: "#f8f8f8",
        darkmodeelements: "hsl(209,23%,22%)",
        darkmodebackground: "hsl(207,26%,17%)",
      },
    },
  },
  plugins: [],
};
