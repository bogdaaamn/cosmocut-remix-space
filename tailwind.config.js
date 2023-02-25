/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: "#c1492a",
        secondary: "#e4cd8d",
        foreground: "#f4f3f1",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
