/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#B91C1C', // Muted Red from logo
          secondary: '#F8931F', // Orange from logo
          dark: '#111827',
          gray: '#374151',
          light: '#F3F4F6',
          // Keeping old keys mapped to new colors to avoid breaking existing code immediately
          blue: '#B91C1C', 
          lightBlue: '#F8931F'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
