/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      darkBlue: "#111625",
      current: "currentColor",
      blue: "#CFE0F0",
      gray: "#999999",
      white: "#FFFFFF",
      white10: "rgba(255, 255, 255, .1)",
      dark: "#000",
      dark10: "rgba(0, 0, 0, .1)",
      dark50: "rgba(0, 0, 0, .5)",
      sky: "#0060F0",
      indigo: "#405292",
      bluetask: "#697DDD",
      red: "#E21B1B",
      yellow: "#F5D2BC",
    },
  },
  plugins: [],
};
