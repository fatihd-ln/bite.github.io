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
        sans: ['"Saira Semi Condensed"', 'system-ui', 'sans-serif'],
        heading: ['"Saira Condensed"', 'sans-serif'],
        wordmark: ['"Saira Extra Condensed"', 'sans-serif'],
        product: ['"Saira Condensed"', 'sans-serif'],
      },
      // +2px on the body/UI steps to compensate for the narrower
      // Saira Semi Condensed cut (headings use larger arbitrary sizes).
      fontSize: {
        sm: ['1rem', '1.4rem'],       // 14px -> 16px
        base: ['1.125rem', '1.6rem'], // 16px -> 18px
        lg: ['1.25rem', '1.8rem'],    // 18px -> 20px (lead paragraphs)
      },
    },
  },
  plugins: [],
};
