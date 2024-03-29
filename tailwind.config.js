/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#014f86",
        secondary: "#2a6f97",
        tertiary: "#2c7da0",
        quartiary: "#468faf",
        quintiary: "#61a5c2",
      },
      colors: {
        primary: "#014f86",
        secondary: "#2a6f97",
        tertiary: "#2c7da0",
        quartiary: "#468faf",
        quintiary: "#61a5c2",
      },
      animation: {
        spin_1: "spin 240ms linear",
      },
      keyframes: {
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
};
