/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Roxo': '#25183E',
        'Azul': '#009FE3',
        'Rosa': '#E6007E',
      }
    }
  },
  plugins: [],
}