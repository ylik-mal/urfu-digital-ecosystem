/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif']
      },
      colors: {
        urfu: {
          pink: '#FF1E6D',
          crimson: '#FF1E56',
          orange: '#FF6B35',
          dark: '#0F1420',
          cardDark: '#171E2E',
          lightBg: '#F4F5F8',
          ink: '#1A1D24'
        }
      },
      fontSize: {
        // Строгое соблюдение п. 4.1 ТЗ: минимальный размер шрифта 12px (0.75rem)
        xs: ['0.75rem', { lineHeight: '1.5' }],
        sm: ['0.875rem', { lineHeight: '1.5' }],
        base: ['1rem', { lineHeight: '1.6' }]
      }
    }
  },
  plugins: []
};