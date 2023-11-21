/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    daisyui: {
      themes: ["light"],
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      height: {
        '128': '32rem',
      },
      colors: {
        primary: "#7DA557",
        grab: "#6FC81F",
        secondary: {
          100: "#A1C086",
          200: "#7DA557",
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
