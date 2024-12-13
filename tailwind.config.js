/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins"', 'sans-serif'], // Primary sans-serif font
        montserrat: ['"Montserrat"', 'sans-serif'], // Secondary serif-like font
        monospace: ['"Source Code Pro"', 'monospace'], // Monospace font
        'custom': ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Oxygen-Sans', 'Ubuntu', 'Cantarell', '"Helvetica Neue"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
