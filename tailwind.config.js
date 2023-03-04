/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'dark-red': '#EE3457',
      'teal': '#63F2D7',
      'green': '#7EF263',
      'light-green': '#C5F263',
      'tourqoise': '#63F2D7',
      'purple': '#8F63F2',
      'blue': '#637EF2',
      'orange': '#F29063',
      'magenta': '#F263C5',
      'primary-red': '#F2637E',
      'secondary-red': '#F2889B',
      'light-red': '#F2ACB9',
      'pink': '#F2CED5',
      'black': '#101026',
      'navy': '#1F1F4A'
    },
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}