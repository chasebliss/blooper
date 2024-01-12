import React, { useEffect } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

import { NAV_ITEMS } from './data';
import { Sling as Hamburger } from 'hamburger-react';
import ThemeButton from './ThemeButton';
import CBALogo from '../Icons/CBALogo';
import ExternalLinkIcon from '../Icons/ExternalLinkIcon';

const MobileNav = () => {
  const [isOpen, setOpen] = React.useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    // Cleanup function to remove the class when the component unmounts
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);

  return (
    <div className="max-w-[1440px] flex items-center px-5 mx-auto h-[100px] w-full">
      <nav
        className="relative flex justify-between h-full items-center w-full z-50"
        role="navigation"
      >
        <Link
          href="/"
          passHref
          role="link"
          className="mx-auto"
          aria-label="Go to homepage"
        >
          <CBALogo />
        </Link>

        <div
          className={clsx(
            'flex justify-center items-center space-x-16 p-4 fixed z-50 text-blooperDarkBlue bg-white dark:bg-blooperBlue dark:text-white rounded-full transform -translate-x-1/2 -translate-y-1/2 left-1/2 bottom-0',
            !isOpen && 'shadow-lg',
          )}
        >
          <Hamburger toggled={isOpen} toggle={setOpen} size={32} />
          <div>
            <ThemeButton />
          </div>
        </div>

        <ul
          className={clsx(
            'flex items-center flex-col fixed bottom-0 left-0 w-full rounded-t-3xl bg-white dark:bg-blooperBlue p-16 pb-36 shadow-2xl transform transition-transform duration-500 ease-in-out',
            isOpen ? 'translate-y-0' : 'translate-y-full',
          )}
        >
          <li className="lg:pl-6 py-4">
            <h5
              onClick={() => setOpen((curr) => !curr)}
              className="text-blooperDarkBlue dark:text-white"
            >
              <Link href="/" passHref>
                Home
              </Link>
            </h5>
          </li>
          {NAV_ITEMS.map(({ id, title, route, external }) => (
            <li key={id} className="lg:pl-6 py-4">
              <h5
                onClick={() => setOpen((curr) => !curr)}
                className="text-blooperDarkBlue dark:text-white"
              >
                <Link href={route} passHref className="flex">
                  {title}
                  {external && (
                    <ExternalLinkIcon
                      className="dark:fill-white fill-blooperDarkBlue ml-4 mt-2"
                      width={16}
                    />
                  )}
                </Link>
              </h5>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MobileNav;
