import React from 'react';
import Heading from 'components/Heading';

import Head from 'next/head';

import { useInView } from 'react-intersection-observer';
import ListItem from '../components/ListItem';
import { modifiersData } from '../data/modifiersData';

const Modifiers = () => {
  const [headingRef, headingInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <>
      <Head>
        <title>Modifiers - Blooper</title>
      </Head>
      <section className="w-full flex flex-col pb-8 lg:pb-16">
        <div
          ref={headingRef}
          className={`transition-all duration-1000 ${
            headingInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <Heading
            title="modifiers"
            subheading="AKA the Bloop Troop"
            descriptionOne="The modifiers are the creative heart of blooper, allowing you to contort and reimagine your loops."
            modifier
          />
        </div>
        <ul className="grid md:grid-cols-2 xl:grid-cols-3 my-16 gap-24 lg:gap-32 mx-[7vw] md:mt-16 ">
          {modifiersData.map((card) => (
            <ListItem key={card.id} card={card} />
          ))}
        </ul>
      </section>
    </>
  );
};

export default Modifiers;
