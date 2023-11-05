/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text-color': 'rgba(0, 0, 34, 0.50)',
        'btn-color': '#1F64FF',
      },
      fontFamily: {
        'text': ['Nunito'],
      },
      fontSize: {
        'text-size': '0.778rem',
      }
    },
  },
  plugins: [],
}

