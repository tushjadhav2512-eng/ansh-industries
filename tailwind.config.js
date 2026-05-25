export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Manrope", "Inter", "ui-sans-serif", "system-ui"]
      },
      colors: {
        metal: {
          950: "#050912",
          900: "#07111f",
          800: "#0d1a2b",
          700: "#13283e",
          500: "#315d83"
        },
        forge: "#f97316",
        silver: "#d7e3ec"
      },
      boxShadow: {
        glow: "0 0 40px rgba(79,181,255,.25)"
      }
    }
  },
  plugins: []
};
