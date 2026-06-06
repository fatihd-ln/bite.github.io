/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    extend: {
      colors: {
        surface: '#141414',
        card: '#181818',
        border: '#252525',
        muted: '#888888',
        accent: '#6e8ac0',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        wordmark: ['"Saira Extra Condensed"', 'sans-serif'],
        product: ['"Saira Condensed"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
