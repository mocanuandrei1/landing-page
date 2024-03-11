/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        "jost-regular": ["Jost-Regular"],
      },
      screens: {
        "3xl": "1800px",
      },
    },
    colors: {
      "energy-blue": "#007bff",
      "energy-pink": "#f41559",
      "energy-grey": "#6f767f",
    },
  },
  plugins: [require("flowbite/plugin")],
};
