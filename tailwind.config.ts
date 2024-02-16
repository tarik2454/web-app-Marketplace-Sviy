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
          90: '#386A93',
          200: '#BBDEFB',
          700: '#1565C0',
          900: '#1565C0',
        },
        gray: {
          600: '#9E9E9E',
        },
        neutral: {
          50: '#FAFAFA',
          400: '#9E9E9E',
          600: '#656565',
          800: '#212121',
        },
        amber: {
          500: '#FF9800',
        },
        orange: {
          300: '#FFCC80',
        },
        red: {
          700: '#C50000',
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
        lg: '-1px',
        xl: '1440px',
        '2xl': '-1px',
      },
      borderRadius: {
        default: '20px',
        circle: '50%',
      },
      keyframes: {
        jump: {
          '0%': { transform: 'translateY(0)' },
          '8%': { transform: 'translateY(1px)' },
          '19%': { transform: 'translateY(1.5px)' },
          '50%': { transform: 'translateY(1.7px)' },
          '100%': { transform: 'translateY(1.8px)' },
        },
        // rotateAndTranslate: {
        //   '0%': { transform: 'rotate(30deg)' },
        //   '8%': { transform: 'translateY(2px) rotate(60deg)' },
        //   '19%': { transform: 'translateY(0.1px) rotate(60deg)' },
        //   '100%': { transform: 'translateY(2px) rotate(60deg)' },
        // },
      },
      animation: {
        jump: 'jump 2s cubic-bezier(0.42, 0, 0.58, 1) 1',
        rotateAndTranslate:
          'rotateAndTranslate 2s cubic-bezier(0.42, 0, 0.58, 1) forwards',
      },
      variants: {
        fill: ['hover', 'focus'],
      },
    },
    fontSize: {
      xs: ['12px', '1.6'],
      sm: ['14px', '1.6'],
      base: ['16px', '1.6'],
      lg: ['18px', '1.6'],
      xl: ['20px', '1.6'],
      '2xl': ['24px', '1.6'],
      '3xl': ['30px', '1.6'],
      '4xl': ['36px', '1.6'],
      '5xl': ['48px', '1.6'],
    },
  },
  plugins: [],
};

export default config;
