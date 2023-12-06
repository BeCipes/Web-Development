/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      circle: 'circle',
    },
    daisyui: {
      themes: ["light"],
    },
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
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
