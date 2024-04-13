/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'belleza': ['Belleza', 'sans-serif'],
        'bebas': ['Bebas Neue', 'cursive'],
        'cardo': ['Cardo', 'serif'],
        'dancing': ['Dancing Script', 'cursive'],
      },
      colors: {
        customBrown: '#b48c56',
        customDark: '#302725',
        customLightBrown: '#f2d2a3',
        customWhite: 'rgba(255, 255, 255, 0.5)',
      },
      backgroundImage: {
        'collections-bg': "url('bg3.png')",
      },
      boxShadow: {
        'custom-light': '0 0 15px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
}
