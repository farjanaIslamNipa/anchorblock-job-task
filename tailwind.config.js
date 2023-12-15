/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: '#9E7AF4',
        defaultGray: '#4E5D78',
        lightGray: '#B0B7C3',
        errorBorder: '#FDA29B',
        errorFocus: '#FEE4E2',
        error: '#F04438',
        dark: '#101828',
        defaultBorder: '#EAECF0'
      }
    },
  },
  plugins: [],
}

