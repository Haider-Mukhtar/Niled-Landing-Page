/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent1: "#282A2E",
        accent2: "#FFDB64",
        accent3: "#B5C1E6",
        background: "#F6F6F6",
      },
    },
  },
  plugins: [],
};

