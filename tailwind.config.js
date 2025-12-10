/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        warm: {
          DEFAULT: "#ff9b50",
          light: "#ffb56b",
          dark: "#e57f33",
        },
        darkbg: {
          primary: "#0f0f0f",
          secondary: "#181818",
          panel: "#232323",
        },
      },
    },
  },
  plugins: [],
};
