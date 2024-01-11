import React from 'react';
import clsx from 'clsx';

interface Props {
  children?: React.ReactNode;
  href?: string;
  downloadable?: boolean;
  route?: string;
  light?: boolean;
  ariaLabel?: string;
}

const BtnComponent = ({
  children,
  href,
  downloadable,
  light,
  route,
  ariaLabel,
}: Props) => {
  const isExternalLink = !route;

  return (
    <a
      download={downloadable ? 'true' : undefined}
      target={isExternalLink ? '_blank' : undefined}
      rel={isExternalLink ? 'noopener noreferrer' : ''}
      href={isExternalLink ? href : route}
      role="button"
      aria-label={ariaLabel || 'Button'}
    >
      <button
        className={clsx(
          'border w-32 transition-all duration-300 py-2 px-4 text-[18px] font-semibold tracking-wide hover:italic hover:backdrop-blur-sm hover:bg-blooperBlue01/30',
          light ? 'border-white' : 'border-blooperDarkBlue dark:border-white',
        )}
        aria-label={children ? undefined : ariaLabel || 'Button'}
      >
        {children}
      </button>
    </a>
  );
};

export default BtnComponent;
