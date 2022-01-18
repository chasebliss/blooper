import DesktopNav from '../components/Navigation/DesktopNav'
import '../styles/globals.css'
import '../styles/typography.css'
import '../styles/glitch.css'
import type { AppProps } from 'next/app'
import { useMediaQuery } from 'react-responsive'
import MobileNav from '../components/Navigation/MobileNav'
import { ThemeProvider, useTheme } from 'next-themes'
import React from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 976px)' })

  return (
    <ThemeProvider attribute="class">
      <main className="max-w-[1440px] mx-auto">
        {isTabletOrMobile ? <MobileNav /> : <DesktopNav />}
        <Component {...pageProps} />
        <footer className="h-16 w-full" />
      </main>
    </ThemeProvider>
  )
}

export default MyApp
