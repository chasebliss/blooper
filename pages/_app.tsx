import React from 'react';
import DesktopNav from '../components/Navigation/DesktopNav';
import { Analytics } from '@vercel/analytics/react';
import '../styles/globals.css';
import '../styles/typography.css';

import type { AppProps } from 'next/app';
import MobileNav from '../components/Navigation/MobileNav';
import { ThemeProvider } from 'next-themes';
import Footer from '../components/Footer';
import { AnimatePresence, motion } from 'framer-motion';

import { Poppins } from 'next/font/google';
import { useMediaQuery } from 'react-responsive';
import Head from 'next/head';

const poppins = Poppins({ weight: ['400', '500', '600'], subsets: ['latin'] });

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 976px)' });

  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <Head>
        <link rel="icon" href="/images/favicon.ico" />
        <meta property="og:title" content="Blooper by Chase Bliss" />
        <meta
          property="og:description"
          content="A performance looper with additive sound design."
        />
        <meta
          property="og:image"
          content="https://blooper.chasebliss.com/_next/image?url=%2Fimages%2Fblooper-front.webp&w=256&q=75"
        />
        <meta property="og:image:height" content="100" />
        <meta property="og:url" content="https://blooper.chasebliss.com" />
        <meta property="og:type" content="website" />
      </Head>
      <header className={poppins.className}>
        {isTabletOrMobile ? <MobileNav /> : <DesktopNav />}
      </header>

      <AnimatePresence
        mode="wait"
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <motion.main
          className={poppins.className}
          key={router.route}
          variants={variants} // Pass the variant object into Framer Motion
          initial="hidden" // Set the initial state to variants.hidden
          animate="enter" // Animated state to variants.enter
          exit="exit" // Exit state (used later) to variants.exit
          transition={{ type: 'linear' }} // Set the transition to linear
        >
          <Component {...pageProps} key={router.route} />
          <Analytics />
        </motion.main>
      </AnimatePresence>
      <footer className={poppins.className}>
        <Footer />
      </footer>
    </ThemeProvider>
  );
};

export default MyApp;
