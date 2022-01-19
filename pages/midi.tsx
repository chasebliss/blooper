import Heading from 'components/Heading'
import React from 'react'

import { MidiParticles } from '../styles/particles'
import { useTheme } from 'next-themes'

const data = [
  {
    title: 'What can midi do',
    description: 'An intro to the benefits of midi blooping.',
    imageUrl: '/midi/images/midi-can-do.png',
    asset: '/midi/docs/midi-can-do.pdf',
  },
  {
    title: 'Quick Start',
    description: 'A friendly guide to starting out with midi.',
    imageUrl: '/midi/images/midi-quick-start.png',
    asset: '/midi/docs/midi-quick-start',
  },
  {
    title: 'Manual',
    description: 'this is where you’ll find the details.',
    imageUrl: '/midi/images/midi-manual.png',
    asset: '/midi/docs/midi-manual.pdf',
  },
]

const headingContent = `
# Midi

Embracing midi opens up a whole other side of blooper. Browse these quick references for an idea of what’s possible, and how to get going.
`

const Midi = () => {
  return (
    <div className="lg:p-16">
      <Heading content={headingContent} />
      <div className="relative p-12 lg:p-16">
        <div className="absolute inset-0 z-10 mx-5 h-full rounded-3xl border backdrop-blur-sm lg:mx-0 dark:bg-black/10 dark:border-0 border-black/50" />
        <ul
          role="list"
          className="grid grid-cols-1 gap-8 lg:m-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {data.map((card) => (
            <li
              key={card.title}
              className="flex relative flex-col text-center rounded-lg"
            >
              <div className="absolute inset-0 z-10 w-full h-full rounded-3xl backdrop-blur-sm bg-black/10" />
              <div className="flex relative z-10 flex-col flex-1 p-8">
                <img
                  className="object-contain relative z-10 flex-shrink-0 mx-auto h-32"
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
              <div className="relative z-20 border-t border-white/20">
                <div className="flex -mt-px divide-x divide-white/20">
                  <div className="flex flex-1 w-0">
                    <a
                      href={card.asset}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex relative flex-1 justify-center items-center py-4 w-0 text-sm font-medium rounded-bl-lg border border-transparent hover:text-gray-500"
                    >
                      <span className="uppercase">View</span>
                    </a>
                  </div>

                  <div className="flex flex-1 -ml-px w-0">
                    <a
                      href={card.asset}
                      download
                      className="inline-flex relative flex-1 justify-center items-center py-4 w-0 text-sm font-medium rounded-br-lg border border-transparent hover:text-gray-500"
                    >
                      <span className="uppercase">Download</span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <MidiParticles />
    </div>
  )
}

export default Midi
