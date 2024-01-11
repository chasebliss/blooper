import React, { useLayoutEffect, useState } from 'react';
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

import Head from 'next/head';
import dynamic from 'next/dynamic';

const MediaQuery = dynamic(() => import('react-responsive'), {
  ssr: false,
});

const poppins = Poppins({ weight: ['400', '500', '600'], subsets: ['latin'] });

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  const [isContentVisible, setContentVisible] = useState(false);

  useLayoutEffect(() => {
    // Function to handle the end of the transition
    const handleTransitionEnd = () => {
      setContentVisible(true);
    };

    // Initially hide the content
    setContentVisible(false);

    // Add a slight delay to allow the page transition to complete
    const timeout = setTimeout(handleTransitionEnd, 300); // Adjust the timeout duration as needed

    return () => clearTimeout(timeout);
  }, [router.asPath]);

  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <div style={{ visibility: isContentVisible ? 'visible' : 'hidden' }}>
        <Head>
          <link rel="icon" href="/images/favicon.ico" />
          <meta property="og:title" content="Blooper by Chase Bliss" />
          <meta
            property="og:description"
            content="A performance looper with additive sound design."
          />
          <meta
            property="description"
            content="A performance looper with additive sound design."
          />
          <meta
            property="og:image"
            content="https://images.squarespace-cdn.com/content/v1/622176a9b8d15d57ffbf5700/dc30d122-ba24-4732-a3cd-eaa2744c6b40/Chase+Bliss_Logo_Horizontal.png?format=1500w"
          />
          <meta property="og:image:height" content="100" />
          <meta property="og:url" content="https://blooper.chasebliss.com" />
          <meta property="og:type" content="website" />
          <meta
            property="twitter:image"
            content="https://images.squarespace-cdn.com/content/v1/622176a9b8d15d57ffbf5700/dc30d122-ba24-4732-a3cd-eaa2744c6b40/Chase+Bliss_Logo_Horizontal.png?format=1500w"
          />
          <meta property="twitter:card" content="summary" />
          <meta property="twitter:title" content="Blooper by Chase Bliss" />
          <meta
            property="twitter:description"
            content="A performance looper with additive sound design."
          />
        </Head>
        <div>
          <header className={poppins.className}>
            <MediaQuery query="(max-width: 976px)">
              {(matches) => (matches ? <MobileNav /> : <DesktopNav />)}
            </MediaQuery>
          </header>

          <AnimatePresence
            mode="wait"
            initial={false}
            onExitComplete={() => window.scrollTo(0, 0)}
          >
            <motion.main
              className={`${poppins.className} flex-main`}
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
          <Footer className={poppins.className} />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default MyApp;
