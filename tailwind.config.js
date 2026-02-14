/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        neonPurple: "#8b5cf6",
        neonPink: "#ec4899",
        neonBlue: "#3b82f6",
        neonCyan: "#06b6d4",
        neonOrange: "#fb923c",
      },
      backgroundImage: {
        "gradient-rainbow": "linear-gradient(90deg, #8b5cf6, #ec4899, #3b82f6, #06b6d4, #fb923c)",
      },
    },
  },
  plugins: [],
};
