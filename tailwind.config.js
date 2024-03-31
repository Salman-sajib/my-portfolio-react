/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        openSans: ['Open Sans'],
        raleway: ['Raleway'],
        oswald: ['Oswald'],
        poppins: ['Poppins'],
        playfairDisplay: ['Playfair Display'],
        dancingScript: ['Dancing Script'],
        inter: ['Inter'],
      },
    },
  },
  plugins: [],
};
