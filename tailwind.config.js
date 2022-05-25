module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        "primary": {
          "DEFAULT": "#222831",
          50: "#E7EAEE",
          100: "#CCD2DB",
          200: "#9CA8BA",
          300: "#687B97",
          400: "#455163",
          500: "#1B2027",
          600: "#15191E",
          700: "#0F1115",
          800: "#060709",
        },
        "secondary": {
          "DEFAULT": "#663EFF",
        },
        "neutral": {
          "DEFAULT": "#EEEEEE",
        },
      }
    },
  },
  plugins: [],
}