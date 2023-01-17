/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: "Outfit",
        jakarta: "Plus Jakarta Sans",
      },
      colors: {
        green: "#4D9078",
        orange: "#F2B705",
      },
    },
  },

  plugins: [],
};
