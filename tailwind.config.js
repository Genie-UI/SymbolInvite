/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"IBM Plex Sans"', "sans-serif"],
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(90deg, #062236 0%, #212528 100%)",
      },
    },
  },
  plugins: [],
};
