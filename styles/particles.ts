export const homeParticles = {
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
      random: true,
    },
    size: {
      random: true,
      value: {
        min: 7,
        max: 8,
      },
    },
  },
}

export const resourcesParticles = {
  fpsLimit: 60,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: 'repulse',
      },
      onHover: {
        enable: true,
        mode: 'attract',
        parallax: {
          enable: true,
          force: 80,
          smooth: 100,
        },
      },
      resize: true,
    },
  },

  particles: {
    opacity: {
      value: 0.3,
    },
    links: {
      distance: 50,
      enable: true,
      opacity: 0.4,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      enable: true,
      random: false,
      speed: 1,
      straight: false,
    },
    shape: {
      type: ['image'],
      image: [
        {
          src: `/particles/s1.svg`,
        },
        {
          src: `/particles/s3.svg`,
        },
        {
          src: `/particles/s4.svg`,
        },
        {
          src: `/particles/s7.svg`,
        },
        {
          src: `/particles/s9.svg`,
        },
        {
          src: `/particles/s10.svg`,
        },
      ],
    },

    number: {
      max: 100,
      density: {
        enable: true,
      },
    },
    size: {
      random: {
        enable: true,
        minimumValue: 6,
      },
      value: 18,
    },
  },
  detectRetina: true,
}

export const modifierParticles = {
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
          src: `/particles/dropper.svg`,
        },
        {
          src: `/particles/filter.svg`,
        },
        {
          src: `/particles/pitcher.svg`,
        },
        {
          src: `/particles/scrambler.svg`,
        },
        {
          src: `/particles/smooth-speed.svg`,
        },
        {
          src: `/particles/stepped-speed.svg`,
        },
        {
          src: `/particles/stepped-trimmer.svg`,
        },
        {
          src: `/particles/stopper.svg`,
        },
        {
          src: `/particles/stretcher.svg`,
        },
        {
          src: `/particles/stutter.svg`,
        },
        {
          src: `/particles/swapper.svg`,
        },
        {
          src: `/particles/trimmer.svg`,
        },
      ],
    },
    number: {
      value: 40,
    },
    opacity: {
      random: true,
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

export const faqParticles = {
  background: {
    position: '50% 50%',
    repeat: 'no-repeat',
    size: 'cover',
  },
  fullScreen: {
    zIndex: 1,
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
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
      },
      grab: {
        distance: 400,
      },
    },
  },
  particles: {
    color: {
      value: '#ffffff',
    },
    move: {
      attract: {
        rotate: {
          x: 600,
          y: 1200,
        },
      },
      enable: true,
    },
    shape: {
      options: {
        character: {
          value: ['F', 'A', 'Q'],
          font: 'antarctican-mono',
          style: '',
          weight: '400',
          fill: true,
        },
        char: {
          value: ['F', 'A', 'Q'],
          font: 'antarctican-mono',
          style: '',
          weight: '400',
          fill: true,
        },
      },
      type: 'char',
    },
    number: {
      density: {
        enable: true,
      },
    },
    opacity: {
      random: true,
      value: {
        min: 0.5,
        max: 0.9,
      },
      animation: {
        enable: true,
        speed: 3,
        minimumValue: 0.1,
      },
    },
    size: {
      random: true,
      value: {
        min: 0.1,
        max: 10,
      },
      animation: {
        enable: true,
        speed: 20,
        minimumValue: 0.1,
      },
    },
  },
}

export const midiParticles = {
  fpsLimit: 60,
  background: {
    color: '#294c61',
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: ['bubble', 'connect'],
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 200,
        duration: 4,
        opacity: 0.6,
        size: 20,
        speed: 1,
      },
      connect: {
        distance: 60,
        lineLinked: {
          opacity: 0.2,
        },
        radius: 200,
      },
    },
  },
  particles: {
    color: {
      value: '#ffffff',
    },
    move: {
      enable: true,
      random: false,
      speed: 1,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        value_area: 200,
      },
      value: 20,
    },
    opacity: {
      value: 0,
    },
    shape: {
      type: ['image'],
      image: [
        {
          src: `/particles/s1.svg`,
        },
        {
          src: `/particles/s3.svg`,
        },
        {
          src: `/particles/s4.svg`,
        },
        {
          src: `/particles/s7.svg`,
        },
        {
          src: `/particles/s9.svg`,
        },
        {
          src: `/particles/s10.svg`,
        },
      ],
    },
    size: {
      random: {
        enable: true,
        minimumValue: 10,
      },
      value: 15,
    },
  },
  retina_detect: true,
}
