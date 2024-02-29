import React from 'react';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx'; // Make sure clsx is installed and imported

const ThemeButton = () => {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();

  React.useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="relative flex justify-center items-center dark:bg-blooperDarkBlue bg-blooperBlue01 dark:lg:bg-blooperBlue h-12 w-12 rounded-3xl md:rounded-full group"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <SunIcon
        className={clsx(
          'absolute h-6 w-6 text-yellow-400 transition-opacity duration-1000',
          theme === 'dark' ? 'opacity-100' : 'opacity-0',
        )}
      />
      <MoonIcon
        className={clsx(
          'absolute h-6 w-6 text-white transition-opacity duration-1000',
          theme === 'light' ? 'opacity-100' : 'opacity-0',
        )}
      />
    </button>
  );
};

export default ThemeButton;
