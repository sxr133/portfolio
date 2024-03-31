/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          background: '#333', // Dark background color
          text: '#fff', // Light text color
        },
    },
  },
  plugins: [],
}
}
