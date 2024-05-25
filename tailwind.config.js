/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        SongMyung: ["SongMyung", "sans-serif"],
        Dokdo: ["Dokdo", "sans-serif"],
        Dodum: ["Dodum", "sans-serif"],
        Bungee: ["Bungee", "sans-serif"],
      },
      textShadow: {
        bb: "-2px 0 #538377,0 2px #538377, 2px 0 #538377, 0 -2px #538377",
      },
      animation: {
        blink: "blink 1s step-start infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
