/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        'light-blue': '#3B68FF',
        'light-gray': '#F7F7F7',
        'dark-gray': '#131327',
      },
      textColor: {
        'dark-blue': '#10407a',
        'light-blue': '#3B68FF',
        'light-gray-300': '#a69999',
      },
      borderColor: {
        'light-blue': '#3B68FF',
      },
      flex: {
        '2': '2 2 0%',
        '3': '3 3 0%'
      },
      fontSize: {
        '12-14': ['12px', '14px'],
        '14-17': ['14px', '17px'],
        '16-19': ['16px', '19px'],
        '18-21': ['18px', '21px'],
        '24-34': ['24px', '34px'],
        '30-36': ['30px', '36px'],
        '34-41': ['34px', '41px'],
        '78-94': ['78px', '94px'],
        '28-34': ['28px', '34px']
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
