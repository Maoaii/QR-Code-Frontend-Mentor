/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*html"],
  theme: {
    extend: {
      colors: {
        "custom-light-gray": "#d6e2f0",
        "custom-grayish-blue": "#7b879d",
        "custom-dark-blue": "#1f3251",
      }
    },

    fontFamily: {
      Outfit: ["Outfit, sans-serif"],
    },
  },

  plugins: [],
}
