import List from '../components/List';
import Image from 'next/image';
import React from 'react';

import { HomeParticles } from '../styles/particles';
import Heading from '../components/Heading';
import { useTheme } from 'next-themes';

const Home = () => {
  const { theme } = useTheme();
  return (
    <section className="w-full flex flex-col">
      <Heading
        title="blooper"
        subheading="A performance looper with additive sound design."
        descriptionOne="This is a website to help you enjoy a rich, rewarding time with your
          blooper."
        descriptionTwo="It does a lot and it can get pretty weird. So, get familiar with its
          many tricks, or use the interface to update, download, and customize."
        images={[
          '/images/troop/Chase-Bliss_blooper_Scrambler.svg',
          '/images/troop/Chase-Bliss_blooper_Dropper.svg',
          '/images/troop/Chase-Bliss_blooper_Smooth-Speed.svg',
        ]}
      />
      <div className="flex w-screen h-full xl:py-28 justify-center px-[2vw]">
        <Image
          priority
          height={1250}
          width={2500}
          alt="someone twisting knobs"
          src="/images/deeper-bloop.jpeg"
        />
      </div>
      <List />
      {theme === 'dark' && <HomeParticles theme={theme} />}
    </section>
  );
};

export default Home;
