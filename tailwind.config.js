/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        darkBlueHover: '#1E2435',
        darkBlue: "#111625",
        darkerBlue: "#070C24",
        current: "currentColor",
        blue0: "#CFE0F0",
        gray0: "#999999",
        white0: "#FFFFFF",
        white10: "rgba(255, 255, 255, .1)",
        dark0: "#000",
        dark10: "rgba(0, 0, 0, .1)",
        dark50: "rgba(0, 0, 0, .5)",
        sky0: "#0060F0",
        indigo0: "#405292",
        bluetask: "#697DDD",
        red0: "#E21B1B",
        yellow0: "#F5D2BC",
        gray1: "#E9E9E9",
      },
    },
  },
  plugins: [],
};
