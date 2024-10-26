/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'samsung': '340px',
      'iphone': '360px',
      "iphone5": '320px',
      'ipad': '414px',
      'ipadAir': '768px',
      'laptop': '1280px',
      'desktop': '1920px',

      'sm': '575px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '2048px',
      
    },
    extend: {
      fontFamily:{
        Playfair:  ["Playfair Display", "serif"],
        DMSans: ["DM Sans", "sans-serif"]
      },
    },
  },
  plugins: [],
}