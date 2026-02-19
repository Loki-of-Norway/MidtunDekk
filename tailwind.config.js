/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0B252E',
        accent: '#F35900',
        brand: {
          dark: '#0B252E',
          orange: '#F35900',
          button: '#C25B30',
        }
      },
      fontFamily: {
        varela: ['"Varela Round"', 'sans-serif'],
        manrope: ['"Manrope"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
