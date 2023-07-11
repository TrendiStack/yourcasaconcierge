/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        mob: '355px',
        tablet: '768px',
        laptop: '1024px',
        desktop: '1280px',
        laptopl: '1440px',
        desktopl: '1440px',
      },
    },
  },
};
