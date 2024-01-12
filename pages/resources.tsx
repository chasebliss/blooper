import React from 'react';
import Heading from 'components/Heading';
import GridCard from '../components/GridCard';

import Head from 'next/head';

import { useInView } from 'react-intersection-observer';
import { resourcesData } from '../data/resourcesData';

export const Resources = () => {
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
        <title>Resources - Blooper</title>
      </Head>
      <section className="w-full flex flex-col ">
        <div
          ref={headingRef}
          className={`transition-all duration-1000 ${
            headingInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
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
        </div>
        <div
          ref={gridCardRef}
          className={`transition-all duration-1000 ${
            gridCardInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <GridCard
            data={resourcesData}
            backgroundImage="/images/additive-blooper.webp"
          />
        </div>
      </section>
    </>
  );
};

export default Resources;
