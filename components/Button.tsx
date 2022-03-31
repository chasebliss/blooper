import React from 'react';

interface Props {
  children?: React.ReactNode;
  href: string;
  downloadable?: boolean;
}

const BtnComponent = ({ children, href, downloadable }: Props) => {
  return (
    <button className="border border-blooperDarkBlue border-2 py-2 px-4 text-[18px] font-semibold tracking-wide hover:italic">
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
