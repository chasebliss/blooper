import DesktopNav from '../components/Navigation/DesktopNav';
import '../styles/globals.css';
import '../styles/typography.css';
import '../styles/glitch.css';

import type { AppProps } from 'next/app';
import { useMediaQuery } from 'react-responsive';
import MobileNav from '../components/Navigation/MobileNav';
import { ThemeProvider } from 'next-themes';
import React from 'react';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 976px)' });

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <main>
        {isTabletOrMobile ? <MobileNav /> : <DesktopNav />}
        <Component {...pageProps} />
        <Footer />
      </main>
    </ThemeProvider>
  );
}

export default MyApp;
