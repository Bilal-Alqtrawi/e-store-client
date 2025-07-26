/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        vibrant: {
          primary: "#FF6B00",
          secondary: "#FFC107",
          accent: "#FF9500",
          background: "#FFF3E0",
          text: "#333333",
          nav: "#FF8C00",
        },
      },
    },
  },
  plugins: [],
};
