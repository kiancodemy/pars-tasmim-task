/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'custom-negative': '-6px 2px 20px 0 rgba(29,29,29,0.25)',
      },
      fontFamily: {
        vazir: ["vazir", "sans-serif"],
        pnum: ["pnum", "sans-serif"],
      },
    },
  },
  plugins: [],
};
