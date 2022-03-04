import Particles from 'react-tsparticles';

const HomeParticles = ({ theme }: any) => {
  const options = {
    background: {
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
        value: theme === 'dark' ? '#bcdeee' : '#294c61',
      },
      links: {
        color: {
          value: theme === 'dark' ? '#bcdeee' : '#294c61',
        },
        distance: 150,
        enable: true,
        opacity: theme === 'dark' ? 0.3 : 0.1,
      },
      move: {
        attract: {
          rotate: {
            x: 600,
            y: 1200,
          },
        },
        speed: 0.1,
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
        value: 0.5,
      },
      size: {
        random: true,
        value: {
          min: 7,
          max: 8,
        },
      },
    },
  };
  return (
    <div>
      <Particles id="tsparticles" options={options} />
    </div>
  );
};

const ResourcesParticles = () => {
  const options = {
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
            src: `/particles/color/s1.png`,
          },
          {
            src: `/particles/color/s3.png`,
          },
          {
            src: `/particles/color/s4.png`,
          },
          {
            src: `/particles/color/s7.png`,
          },
          {
            src: `/particles/color/s9.png`,
          },
          {
            src: `/particles/color/s10.png`,
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
  };
  return (
    <div>
      <Particles id="tsparticles" options={options} />
    </div>
  );
};

const ModifierParticles = () => {
  const options = {
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
  };
  return (
    <div>
      <Particles id="tsparticles" options={options} />
    </div>
  );
};

const MidiParticles = () => {
  const options = {
    fpsLimit: 60,

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
            src: `/particles/color/s1.png`,
          },
          {
            src: `/particles/color/s3.png`,
          },
          {
            src: `/particles/color/s4.png`,
          },
          {
            src: `/particles/color/s7.png`,
          },
          {
            src: `/particles/color/s9.png`,
          },
          {
            src: `/particles/color/s10.png`,
          },
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
      size: {
        random: {
          enable: true,
          minimumValue: 10,
        },
        value: 15,
      },
    },
    retina_detect: true,
  };
  return (
    <div>
      <Particles id="tsparticles" options={options} />
    </div>
  );
};

const FAQParticles = ({ theme }: any) => {
  const options = {
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
          duration: 1,
          opacity: 0.2,
          size: 40,
        },
        grab: {
          distance: 400,
        },
      },
    },
    particles: {
      color: {
        value: theme === 'dark' ? '#bcdeee' : '#294c61',
      },
      links: {
        color: {
          value:
            theme === 'dark'
              ? 'rgba(126,139,144,0.15)'
              : 'rgba(126,139,144,0.15)',
        },
        distance: 150,

        opacity: theme === 'dark' ? 0.1 : 0.1,
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
        value: 0.5,
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
  };
  return (
    <div>
      <Particles id="tsparticles" options={options} />
    </div>
  );
};

export {
  HomeParticles,
  ResourcesParticles,
  ModifierParticles,
  MidiParticles,
  FAQParticles,
};
