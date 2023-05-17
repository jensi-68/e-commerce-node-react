/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['poppins', 'sans-serif'],
        'MyFont': ['"My Font"', 'serif'] // Ensure fonts with spaces have " " surrounding it.
      },
      width: {
        '31': '31%',
      }
    },
  
  },
  plugins: [],
}

