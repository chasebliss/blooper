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

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);

  return (
    <>
      <Link
        href="/"
        passHref
        role="link"
        className="fixed max-w-[1440px] flex justify-center  h-[80px] w-full z-50 backdrop-blur-lg"
        aria-label="Go to homepage"
      >
        <CBALogo />
      </Link>
      <nav
        className="relative flex justify-between h-full items-center w-full z-50"
        role="navigation"
      >
        <div
          className={clsx(
            'flex justify-center border  items-center space-x-12 p-2 fixed z-50  bg-white dark:bg-blooperBlue text-white rounded-full transform -translate-x-1/2 -translate-y-1/2 left-1/2 -bottom-2 transition-colors duration-300',
            !isOpen
              ? 'shadow-lg border-transparent'
              : 'border border-blooperDarkBlue/20 dark:border-blooperDarkBlue',
          )}
        >
          <div className="dark:bg-blooperDarkBlue bg-blooperBlue01  rounded-full">
            <Hamburger toggled={isOpen} toggle={setOpen} size={28} />
          </div>
          <div>
            <ThemeButton />
          </div>
        </div>

        <ul
          className={clsx(
            'flex items-center flex-col fixed bottom-0 left-0 w-full rounded-t-3xl bg-white dark:bg-blooperBlue p-16 pb-36 shadow-2xl transform transition-all duration-500 ease-in-out',
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
    </>
  );
};

export default MobileNav;
