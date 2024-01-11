import React from 'react';
import Heading from '../components/Heading';
import GridCard from '../components/GridCard';
import Head from 'next/head';
import HeartBrainIcon from '../components/Icons/HeartBrainIcon';
import { useInView } from 'react-intersection-observer';
import { homeData } from '../data/homeData';

const Home = () => {
  const [headingRef, headingInView] = useInView({
    threshold: 0.2,
  });
  const [gridCardRef, gridCardInView] = useInView({
    threshold: 0.2,
  });

  return (
    <>
      <Head>
        <title>Blooper - Chase Bliss Audio</title>
      </Head>
      <section className="w-full flex flex-col">
        <div
          ref={headingRef}
          className={`transition-opacity duration-1000 ${
            headingInView ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Heading
            title="blooper"
            subheading="A performance looper with additive sound design."
            descriptionOne="This is a website to help you enjoy a rich, rewarding time with your blooper."
            descriptionTwo="It does a lot and it can get pretty weird. So, get familiar with its many tricks, or use the interface to update, download, and customize."
            images={['/images/blooper-front.webp']}
          />
        </div>
        <div
          ref={gridCardRef}
          className={`transition-opacity duration-1000 ${
            gridCardInView ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <GridCard
            data={homeData}
            backgroundImage="/images/modifiers-blooper.webp"
            icon={
              <img
                src="/particles/s3.svg"
                alt="Blooper"
                className="fill-white w-1/2 mx-auto"
              />
            }
          />
        </div>
      </section>
    </>
  );
};

export default Home;
