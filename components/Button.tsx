import React from 'react';

interface Props {
  children?: React.ReactNode;
  href?: string;
  downloadable?: boolean;
  light?: boolean;
}

const BtnComponent = ({ children, href, downloadable, light }: Props) => {
  return (
    <button
      className={`border w-32 ${
        light ? 'border-white' : 'border-blooperDarkBlue'
      } border-2 py-2 px-4 text-[18px] font-semibold tracking-wide hover:italic hover:backdrop-blur-sm hover:bg-blooperBlue01/30`}
    >
      {downloadable ? (
        <a download target="_blank" rel="noreferrer" href={href}>
          {children}
        </a>
      ) : (
        <a target="_blank" rel="noreferrer" href={href}>
          {children}
        </a>
      )}
    </button>
  );
};

export default BtnComponent;
