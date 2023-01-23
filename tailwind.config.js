/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
  // Or if using `src` directory:
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    screens: {
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
    colors: {
      'murPrimary': '#1A4539',
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
