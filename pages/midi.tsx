import Heading from 'components/Heading'
import React from 'react'
import Image from 'next/image'
import Particles from 'react-tsparticles'
import { midiParticles } from '../styles/particles'

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
    <div className="lg:p-16 bg-blooperDarkBlue">
      <Heading content={headingContent} />
      <div className="relative p-16">
        <Image
          priority
          src="/midi/images/midi-time.png"
          height={216}
          width={1120}
          className="z-50"
          layout="responsive"
          objectFit="contain"
        />
        <div className="mx-5 lg:mx-0 z-10 h-full backdrop-blur-sm bg-black/10 rounded-3xl absolute inset-0" />

        <ul
          role="list"
          className="lg:m-5 grid grid-cols-1 gap-16 pt-16 md:grid-cols-3"
        >
          {data.map((card) => (
            <li
              key={card.title}
              className="relative flex flex-col text-center rounded-lg "
            >
              <div className="w-full h-full backdrop-blur-sm bg-black/10 rounded-3xl absolute inset-0 z-10" />
              <div className="flex-1 flex flex-col relative z-20 p-8 ">
                <img
                  className=" h-32 flex-shrink-0 mx-auto object-contain"
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

                  <div className="-ml-px w-0 flex-1 flex">
                    <a
                      href={card.asset}
                      download
                      className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-white font-medium border border-transparent rounded-br-lg hover:text-gray-500"
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
      <Particles options={midiParticles} />
    </div>
  )
}

export default Midi
