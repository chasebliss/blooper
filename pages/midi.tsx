import Heading from 'components/Heading';
import React from 'react';
import { useTheme } from 'next-themes';

import { MidiParticles } from '../styles/particles';
import GridCard from '../components/GridCard';
import MidiLogo from '../public/images/midi';

const DATA = [
  {
    title: 'What can midi do',
    description: 'An intro to the benefits of midi blooping.',
    link: '/midi/images/midi-can-do.png',
    asset: '/midi/docs/midi-can-do.pdf',
    downloadable: true,
  },
  {
    title: 'Quick Start',
    description: 'A friendly guide to starting out with midi.',
    link: '/midi/images/midi-quick-start.png',
    asset: '/midi/docs/midi-quick-start.pdf',
    downloadable: true,
  },
  {
    title: 'Manual',
    description: 'This is where you’ll find the details.',
    link: '/midi/images/midi-manual.png',
    asset: '/midi/docs/midi-manual.pdf',
    downloadable: true,
  },
];

const Midi = () => {
  const { theme } = useTheme();

  return (
    <section className="w-full flex flex-col">
      <Heading
        title="midi"
        subheading="Get your blooper talking"
        descriptionOne="The ins and outs of getting blooper talking with other devices."
        descriptionTwo="Embracing midi opens up a whole other side of blooper. Browse these quick references for an idea of what’s possible, and how to get going."
        images={['/images/troop/Chase-Bliss_blooper_Filter.svg']}
      />
      <GridCard
        backgroundImage="/images/bottom-view-blooper.jpeg"
        data={DATA}
        icon={<MidiLogo className="fill-white" />}
      />
      {theme === 'dark' && <MidiParticles />}
    </section>
  );
};

export default Midi;
