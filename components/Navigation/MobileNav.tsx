import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';

import { NAV_ITEMS } from './data';
import { Sling as Hamburger } from 'hamburger-react';
import ThemeButton from './ThemeButton';
import CBALogo from '../Icons/CBALogo';

const MobileNav = () => {
  const [isOpen, setOpen] = React.useState(false);
  return (
    <div className="max-w-[1440px] flex items-center px-5 mx-auto h-[100px] w-full">
      <nav
        className="relative flex justify-between h-full items-center w-full z-50"
        role="navigation"
      >
        <Link href="/" passHref role="link" aria-label="Go to homepage">
          <CBALogo />
        </Link>

        <div
          className={clsx(
            'p-1 fixed right-0 top-5 z-50 text-blooperDarkBlue bg-white dark:bg-blooperBlue dark:text-white rounded-l-2xl',
            !isOpen && 'shadow-lg',
          )}
        >
          <Hamburger toggled={isOpen} toggle={setOpen} size={24} />
        </div>

        <ul
          className={clsx(
            'flex flex-col fixed top-5 rounded-2xl right-0 bg-white dark:bg-blooperBlue p-16 shadow-2xl transform transition-transform duration-500 ease-in-out',
            isOpen ? 'translate-x-0' : 'translate-x-full',
          )}
        >
          <li className="lg:pl-6 py-5">
            <h5
              onClick={() => setOpen((curr) => !curr)}
              className="text-blooperDarkBlue dark:text-white"
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
                className="text-blooperDarkBlue dark:text-white"
              >
                <Link href={route} passHref>
                  {title}
                </Link>
              </h5>
            </li>
          ))}
          <div className="pt-5">
            <ThemeButton />
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default MobileNav;
