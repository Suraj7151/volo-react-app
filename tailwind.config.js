/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        syne: ['Syne', 'sans-serif'],
      },
      dropShadow: {
        'custom': '0 12px 35.8px rgba(0, 0, 0, 0.22)',
      },
      boxShadow: {
        'custom-shadow': '0 12px 12px 35.8px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
}

