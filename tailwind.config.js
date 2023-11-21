/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    daisyui: {
      themes: ["light"]
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      colors: {
        primary: "#7DA557",
        grab: "#6FC81F",
        hitam: "#181616",
        secondary: {
          100: "#A1C086",
          200: "#7DA557",
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
