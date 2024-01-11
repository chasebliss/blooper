import React from 'react';
import Link from 'next/link';

import { NAV_ITEMS } from './data';

import ThemeButton from './ThemeButton';
import CBALogo from '../Icons/CBALogo';
import ExternalLinkIcon from '../Icons/ExternalLinkIcon';

const DesktopNav = () => {
  return (
    <header className="px-[4vw] py-[1.6vw]  mx-auto flex items-center w-full">
      <nav
        className="flex items-center justify-between w-full z-50"
        role="navigation"
      >
        <Link href="/" passHref role="link" aria-label="Go to homepage">
          <CBALogo />
        </Link>

        <ul className="flex items-center">
          {NAV_ITEMS.map(({ id, title, route, external }) => (
            <li key={id} className="nav relative">
              <Link href={route} passHref target={external ? '__blank' : ''}>
                <div className="hover:not-italic flex items-center">
                  {title}
                  {external && (
                    <ExternalLinkIcon
                      className="fill-blooperDarkBlue ml-2"
                      width={10}
                    />
                  )}
                </div>
              </Link>
            </li>
          ))}
          <ThemeButton />
        </ul>
      </nav>
    </header>
  );
};

export default DesktopNav;
