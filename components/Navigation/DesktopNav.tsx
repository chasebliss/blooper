import React from 'react'
import Link from 'next/link'

import { NAV_ITEMS } from './data'

const DesktopNav = () => {
  return (
    <header className="max-w-[1440px] px-5 mx-auto h-[80px] sm:hidden lg:flex items-center absolute inset-0 w-full z-50">
      <nav className="flex justify-between w-full z-50">
        <h5>
          <a href="/">Chase Bliss Audio</a>
        </h5>

        <ul className="flex">
          {NAV_ITEMS.map(({ id, title, route }) => (
            <li key={id} className="pl-6">
              <h5>
                <Link href={route} passHref>
                  {title}
                </Link>
              </h5>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default DesktopNav
