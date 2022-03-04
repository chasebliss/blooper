import React from 'react';
import { useTheme } from 'next-themes';

const ThemeButton = () => {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();

  React.useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="md:ml-10 flex justify-center items-center h-12 w-12  hover:animate-spin	bg-blooperBlue01  rounded-3xl md:rounded-full"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {mounted && <span>&#127881;</span>}
    </button>
  );
};

export default ThemeButton;
