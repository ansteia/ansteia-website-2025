/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dusty-rose': '#C5A5A5',
        'turquoise': '#4FA5A5',
        'slate-gray': '#5B6F7F',
        'sage': '#B5C5B5',
        'cream': '#F5F0E8',
        'deep-teal': '#3A7B7F',
        'soft-pink': '#E8C5D5',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
