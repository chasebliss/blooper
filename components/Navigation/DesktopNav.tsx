import React from 'react';
import Link from 'next/link';
import { ExternalLinkIcon } from '@heroicons/react/outline';

import { NAV_ITEMS } from './data';
import ThemeButton from './ThemeButton';
import { useRouter } from 'next/router';

const DesktopNav = () => {
  const router = useRouter();
  return (
    <header className="px-[4vw] py-[1.6vw]  mx-auto flex items-center w-full z-50">
      <nav className="flex items-center justify-between w-full z-50">
        <h3>
          <Link href="/" passHref>
            <img
              src="/images/cba-logo.png"
              alt="chase bliss audio logo"
              className="w-52"
            />
          </Link>
        </h3>

        <ul className="flex items-center">
          {NAV_ITEMS.map(({ id, title, route, external }) => (
            <li key={id} className="relative">
              <h3 className="nav">
                <Link href={route} passHref>
                  <a
                    target={external ? '__blank' : ''}
                    className={
                      router.pathname == `${route}`
                        ? 'active border-b border-blooperBlue transition pb-1'
                        : 'hover:border-b hover:border-blooperBlue transition pb-1'
                    }
                  >
                    {title}
                    {/*{external && (*/}
                    {/*  <ExternalLinkIcon className="absolute w-3 -top-3 -right-3" />*/}
                    {/*)}*/}
                  </a>
                </Link>
              </h3>
            </li>
          ))}
          <ThemeButton />
        </ul>
      </nav>
    </header>
  );
};

export default DesktopNav;
