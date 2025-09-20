/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        15: "3.75rem",
        17: "4.25rem",
        18: "4.5rem",
        21: "5.25rem",
        22: "5.5rem",
        25: "6.25rem",
        30: "7.5rem",
        34: "8.5rem",
        35: "8.75rem",
        40: "10rem",
        45: "11.25rem",
        50: "12.5rem",
        65: "16.25rem",
        70: "17.5rem",
        90: "22.5rem",
        100: "25rem",
        130: "32.5rem",
      },
      rotate: {
        35: "35deg",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      zIndex: {
        100: "100",
      },
      width: {
        "1/7": "14.285714%",
        "17/18": "94.444444%",
      },
    },
  },
  plugins: [],
};
