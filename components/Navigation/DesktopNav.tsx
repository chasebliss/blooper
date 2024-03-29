import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { NAV_ITEMS } from './data';
import ThemeButton from './ThemeButton';
import CBALogo from '../Icons/CBALogo';
import ExternalLinkIcon from '../Icons/ExternalLinkIcon';
import { useRouter } from 'next/router';

const DesktopNav = () => {
  const router = useRouter();
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <header className="fixed backdrop-blur-md px-[4vw] h-[100px] mx-auto flex items-center w-full">
      <nav role="navigation" className="w-full max-w-[1800px] mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-between w-full z-50"
        >
          <motion.div variants={itemVariants}>
            <Link href="/" passHref role="link" aria-label="Go to homepage">
              <CBALogo />
            </Link>
          </motion.div>

          <motion.ul className="flex items-center" variants={containerVariants}>
            {NAV_ITEMS.map(({ id, title, route, external }) => (
              <motion.li
                key={id}
                className={`nav relative ${
                  router.pathname === route
                    ? 'underline underline-offset-8'
                    : ''
                }`}
                variants={itemVariants}
              >
                <Link href={route} passHref target={external ? '__blank' : ''}>
                  <div className="hover:not-italic flex items-center hover:scale-105 transition-transform">
                    {title}
                    {external && (
                      <ExternalLinkIcon
                        className="dark:fill-white fill-blooperDarkBlue ml-2"
                        width={10}
                      />
                    )}
                  </div>
                </Link>
              </motion.li>
            ))}
            <motion.div variants={itemVariants}>
              <ThemeButton />
            </motion.div>
          </motion.ul>
        </motion.div>
      </nav>
    </header>
  );
};

export default DesktopNav;
