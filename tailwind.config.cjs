const plugin = require('tailwindcss/plugin');

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
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': value => {
            return {
              '--tw-text-shadow': value,
            };
          },
        },
        {
          values: theme('textShadow'),
        }
      );
    }),
  ],
};
