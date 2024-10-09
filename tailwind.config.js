/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
        colors: {
          'bgPrimary': '#fff',
          'primary': '#155FE7',
          'secondary': '#100E2C',
          'tertiary': '#F7F7F9',
          'textPrimary': '#000000',
          'textAlt': '#FFFFFF',
          'textSecondary': '#100E2C',
          'textTertiary': '#4D4D4D',
          'urgent': '#F4455A',
          'dark': '#110229',
        }   
    },
  },
  plugins: [],
};
