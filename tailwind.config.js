/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        // added new 4 column grid as new4
        small: "40px 40px auto 34px 36px",
        md: "40px 40px 40px auto 34px 34px 34px 34px 36px",
      },
      gridTemplateRows: {
        "50px": "50px",
      },
      gridAutoRows: {
        "50px": "minmax(50px, auto)",
      },
    },
    fontFamily: { manrope: ["Manrope", "sans-serif"] },
  },
  plugins: [],
};
