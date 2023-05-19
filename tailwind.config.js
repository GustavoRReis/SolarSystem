/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        // eslint-disable-next-line quotes
        espaco: "url('./src/images/background.png')",
        animation: ['hover', 'focus'],
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite', // Defina a duração e velocidade desejada
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
};
