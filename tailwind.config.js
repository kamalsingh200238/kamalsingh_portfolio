/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#ced0d4",
          200: "#9ca1a8",
          300: "#525b67",
          // 400: "#212c3c",
          400: "#112240",
          500: "#081426",
          600: "#071222",
          700: "#060e1b",
          800: "#03080f",
          900: "#010204",
        },
        secondary: {
          // 100: "",
          // 200: "",
          // 300: "",
          // 400: "",
          500: "#60FFD9",
          // 600: "",
          // 700: "",
          // 800: "",
          // 900: "",
        },
        tertiary: {
          // 100: "",
          // 200: "",
          // 300: "",
          // 400: "",
          500: "#ccd6f6",
          // 600: "",
          // 700: "",
          // 800: "",
          // 900: "",
        },
      },
      fontFamily: {
        oswald: ["var(--oswald-font)", ...defaultTheme.fontFamily.sans],
        roboto: ["var(--roboto-font)", ...defaultTheme.fontFamily.sans],
        fira: ["var(--fira-code-font)", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
