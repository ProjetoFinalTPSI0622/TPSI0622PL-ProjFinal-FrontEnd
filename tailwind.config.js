/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography'
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple': '#25183E',       
        'purpleLight': '#312052',
        'blue': '#009FE3',     
        'pink': '#E6007E',   
        'grey': '#F6F6F6',
        'greyDark': '#e3e3e3',
        'white': '#FFFFFF',
      },
    },
  },
  plugins: [typography],
}