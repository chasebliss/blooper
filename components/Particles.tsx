import React from 'react'
import Particles from 'react-tsparticles'

const MyComponent = () => {
  return (
    <Particles
      className="particles"
      options={{
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
            },
            resize: true,
          },
        },
        particles: {
          opacity: {
            value: 0.3,
          },
          links: {
            distance: 150,
            enable: true,
            opacity: 0.4,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: 'none',
            enable: true,
            outMode: 'bounce',
            random: false,
            speed: 1,
            straight: false,
          },
          shape: {
            type: ['image'],
            image: [
              {
                src: `/images/s1.svg`,
              },
              {
                src: `/images/s3.svg`,
              },
              {
                src: `/images/s4.svg`,
              },
              {
                src: `/images/s7.svg`,
              },
              {
                src: `/images/s9.svg`,
              },
              {
                src: `/images/s10.svg`,
              },
            ],
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
      }}
    />
  )
}

export default MyComponent
