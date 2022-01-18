import React from 'react'
import Link from 'next/link'

import { NAV_ITEMS } from './data'
import { Sling as Hamburger } from 'hamburger-react'
import ThemeButton from './ThemeButton'

const MobileNav = () => {
  const [isOpen, setOpen] = React.useState(false)
  return (
    <header className="max-w-[1440px] flex items-center px-5 mx-auto h-[80px] absolute inset-0 w-full z-50">
      <nav className="relative flex justify-between h-full items-center w-full z-50">
        <h5>
          <a href="/">Chase Bliss Audio</a>
        </h5>
        <div className="p-1 fixed right-0 top-5 z-50 text-blooperDarkBlue bg-white rounded-l-2xl ">
          <Hamburger toggled={isOpen} toggle={setOpen} size={24} />
        </div>

        {isOpen && (
          <ul className="flex flex-col fixed top-5 rounded-2xl right-0 bg-white p-16 shadow-2xl">
            <li className="lg:pl-6 py-5">
              <h5
                onClick={() => setOpen((curr) => !curr)}
                className="text-blooperDarkBlue"
              >
                <Link href="/" passHref>
                  Home
                </Link>
              </h5>
            </li>
            {NAV_ITEMS.map(({ id, title, route }) => (
              <li key={id} className="lg:pl-6 py-5">
                <h5
                  onClick={() => setOpen((curr) => !curr)}
                  className="text-blooperDarkBlue"
                >
                  <Link href={route} passHref>
                    {title}
                  </Link>
                </h5>
              </li>
            ))}
            <ThemeButton />
          </ul>
        )}
      </nav>
    </header>
  )
}

export default MobileNav
