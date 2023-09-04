/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontSize: {
        '2xl': ['clamp(1rem, 2vw, 2rem)'],
        '3xl': ['clamp(1.5rem, 3vw, 3rem)']
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
