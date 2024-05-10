/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: "var(--gold)",
        navyblue: "var(--navyblue)",
        black: "var(--black)",
        white: "var(--white)",
        nav: "var(--nav)",
        background: "var(--background)",
      },
    },
  },
  plugins: [],
};
