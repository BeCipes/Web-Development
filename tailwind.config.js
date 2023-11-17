/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      colors: {
        primary: "#7DA557",
        secondary: {
          100: "#A1C086",
          200: "#7DA557",
        },
      },
    },
  },
  plugins: [],
};
