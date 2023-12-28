/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#25183E',       // Roxo escuro
        'secondary': '#009FE3',     // Azul claro
        'alternative': '#E6007E',   // Rosa vibrante
        'neutral': '#F6F6F6',       // Cizento Claro
        'background' : '#FFFFFF',    // Branco
      }
    }
  },
  plugins: [],
}