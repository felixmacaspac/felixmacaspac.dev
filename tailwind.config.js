module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        "primary": {
          "DEFAULT": "#112031",
        },
        "secondary": {
          "DEFAULT": "#152D35",
        },
        "green": {
          "DEFAULT": "#345B63",
        },
        "neutral": {
          "DEFAULT": "#D4ECDD",
        },
      }
    },
  },
  plugins: [],
}