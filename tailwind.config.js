/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      dark: "#131927",
      current: "currentColor",
      blue: "#CFE0F0",
      white: "#fff",
      whitelight: 'rgba(255, 255, 255, .1)'
    },
  },
  plugins: [],
};
