/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        terracotta: '#C25B3B',
        sage: '#8BA88E',
        warmGray: '#6B6B6B',
        // Accent Colors
        navy: '#2C3E50',
        gold: '#D4A574',
        // Neutral Colors
        background: '#FDFBF7',
        lightBackground: '#F5F1ED',
        darkText: '#2D2D2D',
        lightText: '#666666',
      },
      fontFamily: {
        heading: ['var(--font-playfair-display)', 'serif'],
        body: ['var(--font-open-sans)', 'sans-serif'],
      },
      borderRadius: {
        'button': '8px',
        'card': '12px',
        'image': '8px',
        'input': '6px',
      },
      boxShadow: {
        'card': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'button': '0 2px 4px rgba(0, 0, 0, 0.15)',
        'hover': '0 8px 15px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
}
