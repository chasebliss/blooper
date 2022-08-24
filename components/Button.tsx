import React from 'react';

interface Props {
  children?: React.ReactNode;
  href?: string;
  downloadable?: boolean;
  route?: string;
  light?: boolean;
}

const BtnComponent = ({
  children,
  href,
  downloadable,
  light,
  route,
}: Props) => {
  return (
    <a
      download={downloadable}
      target={!route ? '_blank' : ''}
      rel="noreferrer"
      href={!route ? href : route}
    >
      <button
        className={`border w-32 transition-all duration-300 ${
          light ? 'border-white' : 'border-blooperDarkBlue dark:border-white'
        } border-2 py-2 px-4 text-[18px] font-semibold tracking-wide hover:italic hover:backdrop-blur-sm hover:bg-blooperBlue01/30`}
      >
        {children}
      </button>
    </a>
  );
};

export default BtnComponent;
