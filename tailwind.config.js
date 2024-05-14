/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode:"class",
  theme: {
    screens: {
      sm: '500px',
      md: '728px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      
    },
  },
  plugins: [],
}

