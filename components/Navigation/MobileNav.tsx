import React, { useEffect } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

import { NAV_ITEMS } from './data';
import { Sling as Hamburger } from 'hamburger-react';
import ThemeButton from './ThemeButton';
import ExternalLinkIcon from '../Icons/ExternalLinkIcon';
import { useRouter } from 'next/router';
import CBALogo from '../Icons/CBALogo';

const MobileNav = () => {
  const [isOpen, setOpen] = React.useState(false);
  const router = useRouter();

  const getDisplayRoute = (pathname: string) => {
    if (pathname === '/') return '';
    if (pathname === '/faq') return "FAQ's";

    const formattedPath = pathname.replace(/^\/|\/$/g, '');
    return formattedPath.charAt(0).toUpperCase() + formattedPath.slice(1);
  };

  const displayRoute = getDisplayRoute(router.pathname);

  const isActiveRoute = (route: string) => {
    return router.pathname === route;
  };

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
      <div className="fixed grid grid-cols-2 px-[7vw] items-center h-[80px] z-50 backdrop-blur-lg w-full justify-center">
        <Link
          href="/"
          passHref
          role="link"
          aria-label="Go to homepage"
          className="flex justify-self-start w-40"
        >
          <CBALogo className=" dark:fill-white fill-blooperDarkBlue" />
        </Link>
        <h2 className="font-medium leading-none text-lg w-fit justify-self-end pb-0.5">
          {displayRoute}
        </h2>
      </div>

      <nav
        className="relative flex justify-between h-full items-center w-full z-50 shadow-2xl"
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
              <Link
                href="/"
                passHref
                className={clsx(
                  'flex items-center',
                  isActiveRoute('/') ? 'underline underline-offset-8' : '', // Apply underline if active
                  'text-blooperDarkBlue dark:text-white',
                )}
              >
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
                <Link
                  href={route}
                  passHref
                  className={clsx(
                    'flex items-center',
                    isActiveRoute(route) ? 'underline underline-offset-8' : '', // Apply underline if active
                    'text-blooperDarkBlue dark:text-white',
                  )}
                >
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
