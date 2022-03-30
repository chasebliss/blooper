import DesktopNav from '../components/Navigation/DesktopNav';
import '../styles/globals.css';
import '../styles/typography.css';
import '../styles/glitch.css';

import type { AppProps } from 'next/app';
import { useMediaQuery } from 'react-responsive';
import MobileNav from '../components/Navigation/MobileNav';
import { ThemeProvider } from 'next-themes';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 976px)' });

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <main className="mx-auto">
        {isTabletOrMobile ? <MobileNav /> : <DesktopNav />}
        <Component {...pageProps} />
        <footer className="h-16 w-full" />
      </main>
    </ThemeProvider>
  );
}

export default MyApp;
