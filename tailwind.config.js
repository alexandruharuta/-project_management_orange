/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        'light-blue': '#5394d7',
        'light-gray': '#f1eded',
        'dark-gray': '#212123',
      },
      textColor: {
        'dark-blue': '#10407a',
        'light-blue': '#5394d7',
        'light-gray-300': '#a69999',
      },
      borderColor: {
        'light-blue': '#5394d7',
      },
      flex: {
        '2': '2 2 0%',
        '3': '3 3 0%'
      }
    },
    colors: {
      transparent: "transparent",
      darkBlueHover: '#1E2435',
      darkBlue: "#111625",
      darkerBlue: "#070C24",
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
      gray1: "#E9E9E9",
    },
  },
  plugins: [],
};
