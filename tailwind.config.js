/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#242565',
        customWhite: "rgba(255, 255, 255, 0.72)",
        customBlack: "#09090B",
        foreground: "#71717A"
      },
    },
  },
  plugins: [],
}

