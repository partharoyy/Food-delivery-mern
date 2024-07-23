/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      backgroundImage: {
        'header-image': "url('/header_img.png')",
      },
      fontSize: {
        'header-title-font-size': 'max(4.5vw, 22px)',
        'header-button-font-size': 'max(1vw, 13px)',
        'explore-p-font-size': 'max(1.4vw,16px)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 3s',
      },
    },
  },
  plugins: [],
};
