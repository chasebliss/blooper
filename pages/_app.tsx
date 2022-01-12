import DesktopNav from '../components/Navigation/DesktopNav'
import '../styles/globals.css'
import '../styles/typography.css'
import '../styles/glitch.css'
import type { AppProps } from 'next/app'
import { useMediaQuery } from 'react-responsive'
import MobileNav from '../components/Navigation/MobileNav'
function MyApp({ Component, pageProps }: AppProps) {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 976px)' })
  return (
    <>
      <main className="max-w-[1440px] mx-auto">
        {isTabletOrMobile ? <MobileNav /> : <DesktopNav />}
        <Component {...pageProps} />
        <footer className="h-64 w-full" />
      </main>
    </>
  )
}

export default MyApp
