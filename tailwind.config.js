/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
      extend: {
        colors: {
          majid: '#0ea5e9',
        },
        fontFamily: {
          fun: ['"Comic Neue"', 'cursive'],
        },
      },
    },
    plugins: [],
  };
  