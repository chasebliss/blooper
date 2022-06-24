import React from 'react';
import Heading from 'components/Heading';
import GridCard from '../components/GridCard';
import HeartBrain from '../public/images/heart-brain';

import { ResourcesParticles } from 'styles/particles';
import { useTheme } from 'next-themes';
import Head from 'next/head';

const DATA = [
  {
    title: 'Quick Start',
    description: 'The bare essentials, for the looping experienced.',
    link: '/resources/docs/quick-start.pdf',
    downloadable: true,
  },
  {
    title: 'Video Manual',
    description:
      'Piece-by-piece video walkthroughs of blooper’s main features,' +
      ' including tips and tricks.',
    link: 'https://www.youtube.com/playlist?list=PLX7ehdcDltWiMQ-ffmCB4_OBLaU8IXPxw',
    downloadable: false,
  },
  {
    title: 'Manual',
    description:
      'There are lots of hidden goodies in blooper, so you might' +
      ' want to read this. It’s pretty fun, as manuals go.',
    link: '/resources/docs/manual.pdf',
    downloadable: true,
  },
  {
    title: 'Recording Modifiers',
    description:
      'A guide to blooper’s stranger side. Set up your blooper,' +
      ' take your time, and feel amaze.',
    link: '/resources/docs/recording-mod.pdf',
    downloadable: true,
  },
];

export const Resources = () => {
  const { theme } = useTheme();

  return (
    <>
      <Head>
        <title>Resources - Blooper</title>
      </Head>
      <section className="w-full flex flex-col ">
        <Heading
          title="resources"
          subheading="Bloop?"
          descriptionOne="Blooper was designed to encourage free, experimental, and personalized looping. And with great freedom comes great confusion, sometimes."
          descriptionTwo="The resources below should help you get comfortable."
          images={[
            '/images/troop/Chase-Bliss_blooper_Pitcher.svg',
            '/images/troop/Chase-Bliss_blooper_Trimmer.svg',
            '/images/troop/Chase-Bliss_blooper_Swapper.svg',
          ]}
        />
        <GridCard
          data={DATA}
          backgroundImage="/images/additive-blooper.jpeg"
          icon={<HeartBrain />}
        />

        {theme === 'dark' && <ResourcesParticles />}
      </section>
    </>
  );
};

export default Resources;
