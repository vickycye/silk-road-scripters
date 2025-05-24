/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'green': {
          100: 'oklch(0.83 0.0537 103.95)',
          300: 'oklch(0.53 0.0546 137.73)',
        },
      },
      fontFamily: {
        sans: ['Geist Variable', 'sans-serif'],
        mono: ['Geist Mono Variable', 'monospace'],
      },
    },
  },
  plugins: [],
} 