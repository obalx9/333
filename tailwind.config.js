/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          100: '#222222',
          200: '#1a1a1a',
          300: '#111111',
          400: '#0a0a0a',
        },
      },
      boxShadow: {
        'glow': '0 0 30px rgba(37, 99, 235, 0.15)',
        'glow-lg': '0 0 50px rgba(37, 99, 235, 0.2)',
      },
    },
  },
  plugins: [],
};