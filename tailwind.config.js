/** @type {import('tailwindcss').Config} */
module.exports = {
  // <-- instead of "media"
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class", 
  plugins: [],
};
