/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'independence': '#484d6d',
      'forest': '#57a773',
      'magnolia': '#efe9f4',
      'cyan': '#08b2e3',
      'fire': '#ee6352'
      },
    },
  },
  plugins: [],
}