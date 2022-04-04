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
import { AnimatePresence, motion } from 'framer-motion';

function MyApp({ Component, pageProps, router }: AppProps) {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 976px)' });

  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      {isTabletOrMobile ? <MobileNav /> : <DesktopNav />}
      <main>
        <AnimatePresence
          exitBeforeEnter
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <motion.main
            key={router.route}
            variants={variants} // Pass the variant object into Framer Motion
            initial="hidden" // Set the initial state to variants.hidden
            animate="enter" // Animated state to variants.enter
            exit="exit" // Exit state (used later) to variants.exit
            transition={{ type: 'linear' }} // Set the transition to linear
            className=""
          >
            <Component {...pageProps} key={router.route} />
          </motion.main>
        </AnimatePresence>
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
