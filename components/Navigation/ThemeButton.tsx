import React from 'react';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

const ThemeButton = () => {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();

  React.useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="flex justify-center items-center h-12 w-12 bg-blooperBlue01  rounded-3xl md:rounded-full group"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {mounted && (
        <span>
          {theme === 'dark' ? (
            <SunIcon className="h-6 w-6 group-hover:text-white text-blooperDarkBlue transition-all" />
          ) : (
            <MoonIcon className="h-6 w-6  text-white group-hover:text-blooperDarkBlue transition-all" />
          )}
        </span>
      )}
    </button>
  );
};

export default ThemeButton;
