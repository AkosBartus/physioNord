/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  daisyui: {
    themes: ["autumn", "dark", "cupcake", "business"],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

