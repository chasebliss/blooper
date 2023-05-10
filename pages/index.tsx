import React from 'react';
import Heading from '../components/Heading';
import GridCard from '../components/GridCard';
import Head from 'next/head';
import HeartBrainIcon from '../components/Icons/HeartBrainIcon';

const DATA = [
  {
    title: 'Resources',
    description:
      'What blooper is, how it works, and how to get the most out of it.',
    route: '/resources',
  },
  {
    title: 'Modifiers',
    description: "A closer look at blooper's cast of modifiers.",
    route: '/modifiers',
  },

  {
    title: 'MIDI',
    description:
      'The ins and out of getting blooper talking with other devices.',
    route: '/midi',
  },
  {
    title: 'FAQ',
    description: 'Some things you might be wondering about.',
    route: '/faq',
  },
];

const Home = () => {
  return (
    <>
      <Head>
        <title>Blooper - Chase Bliss Audio</title>
      </Head>
      <section className="w-full flex flex-col">
        <Heading
          title="blooper"
          subheading="A performance looper with additive sound design."
          descriptionOne="This is a website to help you enjoy a rich, rewarding time with your
          blooper."
          descriptionTwo="It does a lot and it can get pretty weird. So, get familiar with its
          many tricks, or use the interface to update, download, and customize."
          images={['/images/blooper-front.webp']}
        />
        <GridCard
          data={DATA}
          backgroundImage="/images/modifiers-blooper.webp"
          icon={<HeartBrainIcon />}
        />
      </section>
    </>
  );
};

export default Home;
