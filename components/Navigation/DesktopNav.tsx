import React from 'react'
import Link from 'next/link'

import { NAV_ITEMS } from './data'

const DesktopNav = () => {
  return (
    <header className="h-[80px] px-[14vw] mx-auto flex items-center absolute w-full z-50">
      <nav className="flex justify-between w-full">
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
