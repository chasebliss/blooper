import React from 'react';
import Image from 'next/image';

const data = [
  {
    title: 'Quick Start',
    description: 'The bare essentials, for the looping experience.',
    imageUrl: '/resources/images/quick-start.png',
    asset: '/resources/docs/quick-start.pdf',
    downloadable: true,
  },
  {
    title: 'Video Manual',
    description:
      'Piece-by-piece video walkthroughs of blooper’s main features,' +
      ' including tips and tricks.',
    imageUrl: '/resources/images/you-tube.png',
    asset:
      'https://www.youtube.com/playlist?list=PLX7ehdcDltWiMQ-ffmCB4_OBLaU8IXPxw',
    downloadable: false,
  },
  {
    title: 'Manual',
    description:
      'There are lots of idden goodies in blooper, so you might' +
      ' want to read this. It’s pretty fun, as manuals go.',
    imageUrl: '/resources/images/dip-switches.png',
    asset: '/resources/docs/manual.pdf',
    downloadable: true,
  },
  {
    title: 'Recording Modifiers',
    description:
      'A guide to blooper’s stranger side. Set up your blooper,' +
      ' take your time, and feel amaze.',
    imageUrl: '/resources/images/recording.png',
    asset: '/resources/docs/recording-mod.pdf',
    downloadable: true,
  },
];

export const Grid = () => {
  return (
    <ul role="list" className="grid grid-cols-1 gap-10 m-5 md:grid-cols-2">
      {data.map((card) => (
        <li
          key={card.title}
          className="flex relative flex-col text-center rounded-lg"
        >
          <div className="absolute inset-0 z-10 w-full h-full rounded-3xl border backdrop-blur-sm dark:bg-black/10 border-blooperDarkBlue/50 dark:border-0" />
          <div className="flex relative z-20 flex-col flex-1 p-8">
            <Image
              className="object-contain flex-shrink-0 mx-auto w-full h-32 rounded-2xl"
              width={550}
              height={150}
              src={card.imageUrl}
              alt=""
            />
            <h3 className="pb-3 mt-6 font-medium uppercase text-md">
              {card.title}
            </h3>
            <dl className="flex flex-col flex-grow justify-between mt-1">
              <dd className="text-left">{card.description}</dd>
            </dl>
          </div>
          <div className="relative z-20 border-t border-blooperDarkBlue/50">
            <div className="flex -mt-px divide-x divide-blooperDarkBlue/50">
              <div className="flex flex-1 w-0 hover:bg-black/20">
                <a
                  href={card.asset}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex relative flex-1 justify-center items-center py-4 w-0 text-sm font-medium rounded-bl-lg border border-transparent"
                >
                  <span className="uppercase">View</span>
                </a>
              </div>
              {card.downloadable && (
                <div className="flex flex-1 -ml-px w-0 hover:bg-black/20">
                  <a
                    href={card.asset}
                    download
                    className="inline-flex relative flex-1 justify-center items-center py-4 w-0 text-sm font-medium rounded-br-lg border border-transparent"
                  >
                    <span className="uppercase">Download</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Grid;
