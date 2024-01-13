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
        amber: {
          100: '#F8E8CA',
          300: '#FFDB5B',
          500: '#DF9B17',
        },
        yellow: {
          200: '#FDFF9F',
          400: '#FFCC00',
          500: '#E1C111',
          600: '#CB8800',
          700: '#9B6600',
        },
        slate: {
          200: '#DBE5EE',
          300: '#C1D7E9',
          500: '#4A7CAC',
        },
        cyan: {
          700: '#386A93',
          900: '#264A67',
        },
        stone: {
          300: '#C1C1C1',
          900: '#1E1E1E',
          950: '#0D0D0D',
        },
        neutral: {
          100: '#F6F6F6',
          200: '#E6E6E6',
          400: '#A0A0A0',
          700: '#3C3C3C',
        },
        violet: {
          100: '#E9E5FF',
          500: '#7B61FF',
        },
        zinc: {
          100: '#EEEEEE',
          300: '#DCDCDC',
          400: '#B8B8B8',
        },
        blue: {
          300: '#98CEFB',
        },
        sky: {
          100: '#E0FBFF',
        },
        orange: {
          200: '#FFDE9D',
        },
        white: '#FFFFFF',
        black: '#000000',
      },
    },
    fontFamily: {
      lato: ['var(--font-lato)'],
      lora: ['var(--font-lora)'],
    },
    backgroundImage: {
      'gradient-94deg':
        'linear-gradient(94deg,#dd9301 5.14%,#e8b860 55.47%,#e8b65e 95.45%)',
    },
    screens: {
      "sm": "375px",
      "md": "768px",
      "xl": "1440px",
    },
  },
  plugins: [],
};

export default config;
