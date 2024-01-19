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
        Lg: 'none',
        xl: '1440px',
      },
      borderRadius: {
        default: '20px',
        circle: '50%',
      },
    },
  },
  plugins: [],
};

export default config;
