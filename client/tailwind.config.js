/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        chakra: ['Chakra Petch', 'sans-serif'],
      },
      colors: {
        customWhite: '#e6f1ff',
        customGreen: '#64ffda',
        lightestSlate: '#ccd6f6',
        lightSlate: '#a8b2d1',
        slate: '#8892b0',
        lightestNavy: '#0a192f',
        lightNavy: '#112240',
        navy: '#0a192f',
      },
    },
  },
  plugins: [],
};
