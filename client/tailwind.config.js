/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'notFound_bg': "#0D0D2B",
      },
      backgroundImage:{
        'gradient-bg': 'linear-gradient(180deg, #0D0D2B 25%, #1E3A8A 100%)'
      },
      fontFamily: {
        'maven': ['Maven Pro', 'sans-serif'],
        'monserrat': ['Montserrat', 'sans-serif'],
        'mullish': ['Mullish', 'sans-serif'],
      },
      fontSize:{
        'title': '80px'
      },
      keyframes: {
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
      },
      animation: {
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
      },
      backgroundColor: {
        card: "rgba(0, 0, 0, 0.3)",
        iconCard: "#4D44BD",
        footerColor: "#1C1C40",
        bgBlueOpacity: "#0C1F50",
        bgFetchCard: "#FFF",
      },
      borderColor: {
        card: "#4D44BD"
      },
    },
  },
  plugins: [],
}