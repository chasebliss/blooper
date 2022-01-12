import React from 'react'

const data = [
  {
    title: 'Quick Start',
    description: 'The bare essentials, for the looping experience.',
    imageUrl: '/docs/quick-start.png',
    asset: '/docs/quick-start.pdf',
    downloadable: true,
  },
  {
    title: 'Video Manual',
    description:
      'Piece-by-piece video walkthroughs of blooper’s main features,' +
      ' including tips and tricks.',
    imageUrl: '/docs/you-tube.png',
    asset:
      'https://www.youtube.com/playlist?list=PLX7ehdcDltWiMQ-ffmCB4_OBLaU8IXPxw',
    downloadable: false,
  },
  {
    title: 'Manual',
    description:
      'There are lots of hidden goodies in blooper, so you might' +
      ' want to read this. It’s pretty fun, as manuals go.',
    imageUrl: '/docs/dip-switches.png',
    asset: '/docs/manual.pdf',
    downloadable: true,
  },
  {
    title: 'Recording Modifiers',
    description:
      'A guide to blooper’s stranger side. Set up your blooper,' +
      ' take your time, and feel amaze.',
    imageUrl: '/docs/recording.png',
    asset: '/docs/recording-mod.pdf',
    downloadable: true,
  },
]

export default function Example() {
  return (
    <ul
      role="list"
      className="m-5 grid grid-cols-1 gap-16 pt-16 md:grid-cols-2"
    >
      {data.map((card) => (
        <li
          key={card.title}
          className="relative flex flex-col text-center rounded-lg "
        >
          <div className="w-full h-full backdrop-blur-sm bg-black/10 rounded-3xl absolute inset-0 z-10" />
          <div className="flex-1 flex flex-col relative z-20 p-8">
            <img
              className="w-full h-32 flex-shrink-0 mx-auto rounded-2xl object-contain"
              src={card.imageUrl}
              alt=""
            />
            <h3 className="mt-6  text-md uppercase text-white font-medium  pb-3">
              {card.title}
            </h3>
            <dl className="mt-1  flex-grow flex flex-col justify-between">
              <dd className="text-white  text-left">{card.description}</dd>
            </dl>
          </div>
          <div className="relative border-t border-white/20 z-20">
            <div className="-mt-px flex divide-x divide-white/20">
              <div className="w-0 flex-1 flex">
                <a
                  href={card.asset}
                  target="_blank"
                  rel="noreferrer"
                  className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-white font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                >
                  <span className=" uppercase">View</span>
                </a>
              </div>
              {card.downloadable && (
                <div className="-ml-px w-0 flex-1 flex">
                  <a
                    href={card.asset}
                    download
                    className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-white font-medium border border-transparent rounded-br-lg hover:text-gray-500"
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
  )
}
