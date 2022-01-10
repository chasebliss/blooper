import DesktopNav from '../components/Navigation/DesktopNav'
import '../styles/globals.css'
import '../styles/typography.css'
import '../styles/glitch.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DesktopNav />
      <main className="mx-auto">
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
