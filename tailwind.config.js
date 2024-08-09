/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        'custom-grid': '1fr 1.5fr 1fr 1fr 1fr 0.5fr',
      },
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
        'food-display-title-font-size': 'max(2vw, 24px)',
        'app-download-font-size': 'max(3vw, 20px)',
        'cart-item-title-size': 'max(1vw, 12px)',
      },
      gap: {
        'app-download-icons-gap': 'max(2vw, 10px)',
        'cart-gap': 'max(12vw, 20px)',
      },
      width: {
        'app-download-icons-width': 'max(3vw, 120px)',
        'login-popup-width': 'max(23vw, 330px)',
        'cart-button': 'max(15vw, 200px)',
        'cart-promo-button': 'max(10vw, 150px)',
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
