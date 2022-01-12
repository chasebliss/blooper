// @ts-nocheck
import List from '../components/List'
import Image from 'next/image'
import React from 'react'
import Particles from 'react-tsparticles'
import Heading from '../components/Heading'

export const bloopParticles = {
  background: {
    color: {
      value: '#294c61',
    },
    position: '50% 50%',
    repeat: 'no-repeat',
    size: 'cover',
  },
  fullScreen: {
    zIndex: -1,
  },
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: 'push',
      },
      onHover: {
        enable: true,
        mode: 'grab',
        parallax: {
          enable: true,
          force: 60,
        },
      },
    },
  },
  particles: {
    color: {
      value: '#bcdeee',
    },
    links: {
      color: {
        value: '#bcdeee',
      },
      distance: 150,
      enable: true,
      opacity: 0.6,
    },
    move: {
      attract: {
        rotate: {
          x: 600,
          y: 1200,
        },
      },
      speed: 1,
      enable: true,
      outModes: 'bounce',
    },
    shape: {
      options: {
        character: {
          value: ['BLOOPER', 'MOD B', 'MOD A', 'LAYERS', 'STABILITY', 'RAMP'],
          font: 'antarctican-mono',
          style: '',
          weight: '400',
          fill: true,
        },
        char: {
          value: ['BLOOPER', 'MOD B', 'MOD A', 'LAYERS', 'STABILITY', 'RAMP'],
          font: 'antarctican-mono',
          style: '',
          weight: '400',
          fill: true,
        },
      },
      type: 'char',
    },
    number: {
      max: 100,
      density: {
        enable: true,
      },
    },
    opacity: {
      value: 0.8,
      random: {
        enable: true,
        value: 0.8,
      },
    },
    size: {
      random: {
        enable: true,
      },
      value: {
        min: 7,
        max: 8,
      },
    },
  },
}

const Home = () => {
  return (
    <section className="w-full md:p-16">
      <Heading
        title="Blooper"
        description={`The Blooper was designed to encourage free, experimental, and
          personalized looping. And with great freedom comes great confusion,
          sometimes. The resources below should help you get comfortable.`}
      />

      <div className="flex flex-col lg:flex-row w-full">
        <div className="relative h-128 lg:h-auto lg:w-1/3 mx-5 my-16">
          <Image
            alt="Front of Blooper image"
            src="/images/blooper-front-v2.png"
            height={1136}
            width="100%"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <List />
      </div>
      <Particles options={bloopParticles} />
    </section>
  )
}

export default Home
