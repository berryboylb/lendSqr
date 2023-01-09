/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "3px 0px 20px rgba(0, 0, 0, 0.04)",
        sideBar: "0px 5px 20px rgba(0, 0, 0, 0.04)",
      },
      fontFamily: {
        roboto: ['"Roboto"', "normal"],
        workSans: ['"Work Sans"', "normal"],
        avenirNext: ['"AvenirNext"', "normal"],
      },
    },
  },
  plugins: [],
};
