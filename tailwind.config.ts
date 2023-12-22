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
          primary: '#9bd9e7',
          secondary: '#2c5282',
          background: '#f8fafc',
          foreground: '#e2e8f0',
          success: '#9ae6b4',
          warning: '#f6e05e',
          error: '#f56565',
        },
        dark: {
          primary: '#9f7aea',
          secondary: '#6b46c1',
          background: '#1a202c',
          foreground: '#2d3748',
          success: '#48bb78',
          warning: '#ecc94b',
          error: '#e53e3e',
        },
      },
    },
  },
  plugins: [],
};

export default config;
