/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "mobile-light": "url('/img/bg-mobile-light.jpg')",
      },
      colors: {
        "white-f8": "#F8F8FA",
        "white-fa": "#FAFAFA",
      },
    },
  },
  plugins: [],
};
