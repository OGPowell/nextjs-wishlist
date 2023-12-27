import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      colors: {
        light: {
          button: 'rgb(59 130 246)',
          background: 'rgb(248 250 252)',
          foreground: 'rgb(148 163 184)',
        },
        dark: {
          button: 'rgb(168 85 247)',
          background: '#0d1117',
          foreground: 'rgb(17 24 39)',
        },
      },
    },
  },
  plugins: [],
};

export default config;
