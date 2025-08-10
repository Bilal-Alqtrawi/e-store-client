/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        vibrant: {
          primary: "#FF6B00", // Bright orange (call to action)
          primaryDark: "#D95300", // Darker orange for dark mode hover
          secondary: "#FFC107", // Amber yellow
          accent: "#FF9500", // Accent orange

          background: "#FFF3E0", // Light warm cream background
          backgroundDark: "#1F2937", // Dark slate background for dark mode (zinc-900 alternative)

          text: "#333333", // Dark text for light mode
          textDark: "#E1E1E1", // Light text for dark mode

          nav: "#FF8C00", // Navigation highlight orange

          successLight: "#22C55E", // green-500 for success
          successDark: "#4ADE80", // lighter green for dark mode

          infoLight: "#3B82F6", // blue-500 for info links/buttons
          infoDark: "#60A5FA", // lighter blue for dark mode

          mutedLight: "#6B7280", // gray-500 for muted text in light mode
          mutedDark: "#9CA3AF", // gray-400 for muted text in dark mode
        },
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
