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
      },
      screens: {
        tablet: "640px",
        laptop: "768px",
        desktop: "1024px",
      },
    },
  },

  plugins: [],
};
