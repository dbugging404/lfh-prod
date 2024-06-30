import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi2';

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    // Set the initial state of the theme based on the theme provided by next-themes.
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  if (!mounted) return null;

  return (
    <button
      className={`dark:border-zinc-700/50 dark:hover:border-zinc-700 dark:bg-zinc-800 group flex h-10 w-10 items-center justify-center rounded-2xl border p-1 transition duration-200`}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'light' ? (
        <HiOutlineSun className='text-2xl text-teal-500 hover:text-teal-400' />
      ) : (
        <HiOutlineMoon className='text-zinc-400/50 dark:group-hover:text-zinc-400 dark:bg-zinc-800 text-xl' />
      )}
    </button>
  );
};

export default ThemeToggle;
