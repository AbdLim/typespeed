/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5',
        'primary-variant': '#3730A3',
        secondary: '#06B6D4',
        'secondary-variant': '#0E7490',
        'custom-bg': '#0F172A',
        'custom-surface': '#1E293B',
        'on-primary': '#FFFFFF',
        'on-secondary': '#FFFFFF',
        'on-background': '#E2E8F0',
        'on-surface': '#CBD5E1',
        'custom-error': '#EF4444',
        'on-error': '#FFFFFF'
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'custom-default': '0 2px 4px rgba(0, 0, 0, 0.1)',
        'custom-elevated': '0 4px 12px rgba(0, 0, 0, 0.15)',
      },
      fontSize: {
        'headline1': ['32px', { lineHeight: '40px', fontWeight: '700' }],
        'headline2': ['24px', { lineHeight: '32px', fontWeight: '600' }],
        'body1': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'body2': ['14px', { lineHeight: '20px', fontWeight: '400' }],
        'caption': ['12px', { lineHeight: '16px', fontWeight: '300' }],
      }
    },
  },
  plugins: [],
};