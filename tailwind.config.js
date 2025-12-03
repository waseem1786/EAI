
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "bg-dark": "#020617"
      },
      boxShadow: {
        "soft-glow": "0 0 40px rgba(56, 189, 248, 0.18)"
      }
    }
  },
  plugins: []
};
