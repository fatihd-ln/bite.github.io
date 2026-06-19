/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    extend: {
      colors: {
        surface: '#f4f6fb',
        card: '#ffffff',
        border: '#e2e8f0',
        muted: '#64748b',
        accent: '#2f58b1',
        ink: '#23272e',
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
