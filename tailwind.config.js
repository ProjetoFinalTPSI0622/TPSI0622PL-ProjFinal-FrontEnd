/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple': '#25183E',       
        'blue': '#009FE3',     
        'pink': '#E6007E',   
        'grey': '#F6F6F6',
        'white': '#FFFFFF',
      },
    },
  },
  plugins: [],
}