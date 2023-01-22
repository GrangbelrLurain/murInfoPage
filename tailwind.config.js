/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
  // Or if using `src` directory:
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    colors: {
      'murPrimary': '#154826',
      'murSecondary': '#EBC9A5',
    },
    fontFamily: {
      sans: ['Pretendard', 'sans-serif'],
      serif: ['Cormorant', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}
