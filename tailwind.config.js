/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./component/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile': { 'max': '639px' },
        'mobile-l': { 'min': '640px', 'max': '767px' },
        'tablet': { 'min': '768px', 'max': '1023px' },
        'notebook': { 'min': '1024px', 'max': '1279px' },
        'laptop': { 'min': '1280px', 'max': '1535px' },
        'pc': { 'min': '1536px' },
      },

    },
    
  },
  plugins: [],
}
