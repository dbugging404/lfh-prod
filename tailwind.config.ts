import type { Config } from 'tailwindcss';
import withMT from '@material-tailwind/react/utils/withMT';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/assets/**/*.{js,ts,jsx,tsx,mdx,svg}',
  ],
  theme: {
    extend: {
      colors: {
        zinc: {
          50: '#FAFAFA',
          100: '#F4F4F5',
          200: '#E4E4E7',
          300: '#D4D4D8',
          400: '#A1A1AA',
          500: '#71717A',
          600: '#52525B',
          700: '#3F3F46',
          800: '#27272A',
          900: '#171717',
          950: '#09090B',
        },
      },
      fontFamily: {
        body: ['var(--font-dm-sans)', 'DM Sans', 'sans-serif'],
        heading: ['var(--font-lexend)', 'Lexend', 'sans-serif'],
      },
      typography: (theme: (arg0: string) => any) => ({
        DEFAULT: {
          css: {
            strong: {
              fontWeight: theme('fontWeight.extrabold'),
              color: theme('colors.zinc.800'),
              '.dark &': {
                color: theme('colors.zinc.200'),
              },
            },
            a: {
              color: theme('colors.zinc.800'),
              '.dark &': {
                color: theme('colors.zinc.200'),
              },
            },
            h1: {
              color: theme('colors.zinc.800'),
              '.dark &': {
                color: theme('colors.zinc.200'),
              },
            },
            h2: {
              color: theme('colors.zinc.800'),
              '.dark &': {
                color: theme('colors.zinc.200'),
              },
            },
            // Add more customizations as needed
          },
        },
      }),
    },
  },
  plugins: [
    require('@headlessui/tailwindcss'),
    require('@tailwindcss/typography'),
  ],
};
export default withMT(config);
