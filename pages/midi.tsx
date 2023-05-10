import React from 'react';
import Heading from 'components/Heading';
import GridCard from '../components/GridCard';
import S1 from '../public/particles/s1';
import Head from 'next/head';

const DATA = [
  {
    title: 'What can MIDI do',
    description: 'An intro to the benefits of MIDI blooping.',
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
  return (
    <>
      <Head>
        <title>MIDI - Blooper</title>
      </Head>
      <section className="w-full flex flex-col">
        <Heading
          title="MIDI"
          subheading="Get your blooper talking"
          descriptionOne="Embracing MIDI opens up a whole other side of blooper. Browse these quick references for an idea of what’s possible, and how to get going."
          images={['/images/troop/Chase-Bliss_blooper_Stutter.svg']}
        />
        <GridCard
          backgroundImage="/images/bottom-view-blooper.webp"
          data={DATA}
          icon={<S1 className="fill-white w-1/2 mx-auto" />}
        />
      </section>
    </>
  );
};

export default Midi;
