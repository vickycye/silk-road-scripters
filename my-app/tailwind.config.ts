import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light mode
        'silk-bg': '#e6e1d6',
        'silk-heading': '#3d2f1f',
        'silk-text': '#5d4e3a',
        'silk-btn': {
          DEFAULT: '#b8860b',
          active: '#9a7209',
          hover: '#daa520',
        },
        'silk-outline': {
          primary: '#8b4513',
          secondary: '#a0522d',
          accent: '#cd853f',
        },
        // Dark mode colors
        'silk-dark': {
          bg: '#3c3c3c',
          heading: '#e8dcc8',
          text: '#b8b0a0',
          btn: {
            DEFAULT: '#d4a574',
            active: '#c4955c',
            hover: '#8b6914',
          },
          outline: {
            primary: '#deb887',
            secondary: '#cd853f',
            accent: '#a0522d',
          },
        },
      },
    },
  },
  plugins: [],
};

export default config; 