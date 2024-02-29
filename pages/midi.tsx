import React from 'react';
import Heading from 'components/Heading';
import GridCard from '../components/GridCard';
import Head from 'next/head';
import { useInView } from 'react-intersection-observer';
import { midiData } from '../data/midiData';

const Midi = () => {
  const [headingRef, headingInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [gridCardRef, gridCardInView] = useInView({
    threshold: 0.1,
  });

  return (
    <>
      <Head>
        <title>MIDI - Blooper</title>
      </Head>
      <section className="w-full flex flex-col">
        <div
          ref={headingRef}
          className={`transition-all max-w-[1800px] w-full mx-auto duration-1000 ${
            headingInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <Heading
            title="MIDI"
            subheading="Get your blooper talking"
            descriptionOne="Embracing MIDI opens up a whole other side of blooper. Browse these quick references for an idea of what’s possible, and how to get going."
            images={['/images/troop/Chase-Bliss_blooper_Stutter.svg']}
          />
        </div>
        <div
          ref={gridCardRef}
          className={`transition-all duration-1000 ${
            gridCardInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <GridCard
            backgroundImage="/images/bottom-view-blooper.webp"
            data={midiData}
          />
        </div>
      </section>
    </>
  );
};

export default Midi;
