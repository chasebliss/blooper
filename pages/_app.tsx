import React, { useEffect, useState } from 'react';
import DesktopNav from '../components/Navigation/DesktopNav';
import { Analytics } from '@vercel/analytics/react';
import '../styles/globals.css';
import '../styles/typography.css';

import type { AppProps } from 'next/app';
import MobileNav from '../components/Navigation/MobileNav';
import { ThemeProvider } from 'next-themes';
import Footer from '../components/Footer';

import { Poppins } from 'next/font/google';

import Head from 'next/head';
import dynamic from 'next/dynamic';

const MediaQuery = dynamic(() => import('react-responsive'), {
  ssr: false,
});

const poppins = Poppins({ weight: ['400', '500', '600'], subsets: ['latin'] });

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  // const [isPageLoaded, setIsPageLoaded] = useState(false);
  //
  // useEffect(() => {
  //   // Function to set isPageLoaded to true
  //   const handleLoad = () => {
  //     setIsPageLoaded(true);
  //   };
  //
  //   // Ensure this runs only on the client side
  //   if (typeof window !== 'undefined') {
  //     // Add event listener for 'load' event
  //     window.addEventListener('load', handleLoad);
  //
  //     // Check if the page is already loaded
  //     if (document.readyState === 'complete') {
  //       handleLoad();
  //     }
  //   }
  //
  //   // Cleanup function to remove the event listener
  //   return () => {
  //     if (typeof window !== 'undefined') {
  //       window.removeEventListener('load', handleLoad);
  //     }
  //   };
  // }, []);
  //
  // if (!isPageLoaded) {
  //   return (
  //     <div className="h-screen flex justify-center text-5xl items-center w-screen">
  //       Loading...
  //     </div>
  //   ); // Or a more sophisticated loading component
  // }

  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <div>
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

          <main className="pt-[100px]">
            <Component {...pageProps} key={router.route} />
            <Analytics />
          </main>

          <Footer className={poppins.className} />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default MyApp;
