import React from 'react';
import { Lexend, Inter, DM_Sans } from 'next/font/google';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import type { ThemeProviderProps } from 'next-themes/dist/types';
import { ThemeProvider } from '@material-tailwind/react';

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
});

const dm_sans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
});

const Layout = ({ children, ...props }: ThemeProviderProps) => {
  return (
    <ThemeProvider>
      <NextThemeProvider attribute='class' defaultTheme='dark'>
        <main
          className={`${lexend.variable} ${dm_sans.variable} bg-zinc-100 dark:bg-zinc-950`}
          {...props}
        >
          {children}
        </main>
      </NextThemeProvider>
    </ThemeProvider>
  );
};

export default Layout;
