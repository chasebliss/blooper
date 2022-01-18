import React from 'react'
import Link from 'next/link'
import { ExternalLinkIcon } from '@heroicons/react/outline'

import { NAV_ITEMS } from './data'
import ThemeButton from './ThemeButton'

const DesktopNav = () => {
  return (
    <header className="max-w-[1440px] px-5 mx-auto h-[80px] flex items-center absolute inset-0 w-full z-50">
      <nav className="flex justify-between w-full z-50">
        <h3>
          <a href="/">Chase Bliss Audio</a>
        </h3>

        <ul className="flex items-center">
          {NAV_ITEMS.map(({ id, title, route, external }) => (
            <li key={id} className="pl-6 relative">
              <h3>
                <Link href={route} passHref>
                  <a target={external ? '__blank' : ''}>{title}</a>
                </Link>
                {external && (
                  <ExternalLinkIcon className="absolute w-3 -top-3 -right-3" />
                )}
              </h3>
            </li>
          ))}
          <ThemeButton />
        </ul>
      </nav>
    </header>
  )
}

export default DesktopNav
