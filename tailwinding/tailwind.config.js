/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          200 : "#7f95ac",
          500 : "#18406b",
          700: "#012b5b"
        },
        green : {
          400 : "#3dd7c9"
        }
      },
    },
  },
  plugins: [],
}

