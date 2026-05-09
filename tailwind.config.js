/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'neon-red': '#ff2d55',
        'soft-black': '#070707',
        'card-black': '#121212',
        'fade-black': '#0b0b0b'
      },
      boxShadow: {
        neon: '0 0 30px rgba(255,45,85,0.22)',
        glow: '0 0 45px rgba(255,45,85,0.2)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top, rgba(255,45,85,0.18), transparent 35%), radial-gradient(circle at right, rgba(255,255,255,0.08), transparent 20%), linear-gradient(180deg, rgba(0,0,0,0.95), #050505 85%)',
      }
    },
  },
  plugins: [],
};
