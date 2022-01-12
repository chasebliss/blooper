import Heading from 'components/Heading'
import React from 'react'
import Particles from 'react-tsparticles'

import GlassGrid from '../components/GlassGrid'

const modifierParticles = {
  fullScreen: {
    zIndex: -1,
  },
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: 'repulse',
      },
      onHover: {
        enable: true,
        mode: 'repulse',
        parallax: {
          enable: true,
          force: 100,
          smooth: 100,
        },
      },
    },
    modes: {
      grab: {
        distance: 400,
      },
    },
  },
  particles: {
    move: {
      speed: 0.2,
      attract: {
        rotate: {
          x: 600,
          y: 1200,
        },
      },
      enable: true,
    },
    shape: {
      type: ['image'],
      image: [
        {
          src: `/images/bloops/dropper.svg`,
        },
        {
          src: `/images/bloops/filter.svg`,
        },
        {
          src: `/images/bloops/pitcher.svg`,
        },
        {
          src: `/images/bloops/scrambler.svg`,
        },
        {
          src: `/images/bloops/smooth-speed.svg`,
        },
        {
          src: `/images/bloops/stepped-speed.svg`,
        },
        {
          src: `/images/bloops/stepped-trimmer.svg`,
        },
        {
          src: `/images/bloops/stopper.svg`,
        },
        {
          src: `/images/bloops/stretcher.svg`,
        },
        {
          src: `/images/bloops/stutter.svg`,
        },
        {
          src: `/images/bloops/swapper.svg`,
        },
        {
          src: `/images/bloops/trimmer.svg`,
        },
      ],
    },
    number: {
      value: 40,
    },
    opacity: {
      random: {
        enable: true,
      },
      value: {
        min: 0.1,
        max: 0.5,
      },
      animation: {
        enable: true,
        speed: 1,
        minimumValue: 0.1,
      },
    },
    size: {
      value: 16,
    },
  },
}

const Modifiers = () => {
  return (
    <div className="lg:p-16 bg-blooperDarlBlue">
      <Heading
        title="Modifiers"
        description="
          Blooper was designed to encourage free, experimental, and personalized
          looping. And with great freedom comes great confusion, sometimes.
          The resources below should help you get comfortable.
        "
      />
      <GlassGrid
        images={[
          '/images/bloops/stretcher-card.png',
          '/images/bloops/stepped-speed-card.png',
          '/images/bloops/smooth-speed-card.png',
        ]}
      />
      <GlassGrid
        images={[
          '/images/bloops/trimmer-card.png',
          '/images/bloops/stepped-trimmer-card.png',
          '/images/bloops/scrambler-card.png',
        ]}
      />
      <GlassGrid
        images={[
          '/images/bloops/dropper-card.png',
          '/images/bloops/filter-card.png',
          '/images/bloops/pitcher-card.png',
        ]}
      />
      <GlassGrid
        images={[
          '/images/bloops/stopper-card.png',
          '/images/bloops/swapper-card.png',
          '/images/bloops/stutter-card.png',
        ]}
      />
      <Particles options={modifierParticles} />
    </div>
  )
}

export default Modifiers
