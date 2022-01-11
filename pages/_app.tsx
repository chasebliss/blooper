import DesktopNav from '../components/Navigation/DesktopNav'
import '../styles/globals.css'
import '../styles/typography.css'
import '../styles/glitch.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className="max-w-[1440px] mx-auto">
        <DesktopNav />
        <Component {...pageProps} />
        <footer className="h-64 w-full" />
      </main>
    </>
  )
}

export default MyApp
