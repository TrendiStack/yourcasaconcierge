/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        light: '#F7F7F7',
        dark: '#1F1F1F',
        variant: '#252422',
        accent: '#FFC107',
        success: '#4CAF50',
        info: '#2196F3',
        warning: '#FFEB3B',
        error: '#F44336',
      },

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
};
