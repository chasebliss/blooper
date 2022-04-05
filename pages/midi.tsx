import Heading from 'components/Heading';
import React from 'react';
import { useTheme } from 'next-themes';

import { MidiParticles } from '../styles/particles';
import GridCard from '../components/GridCard';
import MidiLogo from '../public/images/midi';
import S1 from '../public/particles/s1';

const DATA = [
  {
    title: 'What can MIDI do',
    description: 'An intro to the benefits of midi blooping.',
    link: '/midi/docs/midi-can-do.pdf',
    downloadable: true,
  },
  {
    title: 'Quick Start',
    description: 'A friendly guide to starting out with MIDI.',
    link: '/midi/docs/midi-quick-start.pdf',
    downloadable: true,
  },
  {
    title: 'Manual',
    description: 'This is where you’ll find the details.',
    link: '/midi/docs/midi-manual.pdf',
    downloadable: true,
  },
];

const Midi = () => {
  const { theme } = useTheme();

  return (
    <section className="w-full flex flex-col">
      <Heading
        title="MIDI"
        subheading="Get your blooper talking"
        descriptionOne="Embracing MIDI opens up a whole other side of blooper. Browse these quick references for an idea of what’s possible, and how to get going."
        images={['/images/troop/Chase-Bliss_blooper_Filter.svg']}
      />
      <GridCard
        backgroundImage="/images/bottom-view-blooper.jpeg"
        data={DATA}
        icon={<S1 className="fill-white w-1/2 mx-auto" />}
      />
      {theme === 'dark' && <MidiParticles />}
    </section>
  );
};

export default Midi;
