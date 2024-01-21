import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          200: '#BBDEFB',
          700: '#1565C0',
        },
        neutral: {
          50: '#FAFAFA',
          400: '#9E9E9E',
          800: '#212121',
        },
        amber: {
          500: '#FF9800',
        },
        orange: {
          300: '#FFCC80',
        },
        white: '#FFFFFF',
      },
      fontFamily: {
        lato: 'Lato',
        lora: 'Lora',
      },
      screens: {
        sm: '375px',
        md: '768px',
        lg: 'none',
        xl: '1440px',
      },
      borderRadius: {
        default: '20px',
        circle: '50%',
      },
      keyframes: {
        jump: {
          '0%, 13%, 24%': { transform: 'translateY(0)' },
          '8%': { transform: 'translateY(6px)' },
          '19%': { transform: 'translateY(1.5px)' },
          '100%': { transform: 'translateY(0)' },
        },
        rotateAndTranslate: {
          '0%, 13%, 24%': { transform: 'rotate(70deg)' },
          '8%': { transform: 'translateY(6px) rotate(70deg)' },
          '19%': { transform: 'translateY(1.5px) rotate(70deg)' },
          '100%': { transform: 'translateY(0) rotate(70deg)' },
        },
      },
      animation: {
        jump: 'jump 2s ease-out 1',
        rotateAndTranslate: 'rotateAndTranslate 2s ease-out forwards',
      },
      variants: {
        fill: ['hover', 'focus'],
      },
    },
  },
  plugins: [],
};

export default config;
