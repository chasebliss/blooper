import React from 'react';
import Heading from 'components/Heading';
import Button from '../components/Button';
import Head from 'next/head';
import Image from 'next/image';

const DATA = [
  {
    id: 0,
    title: 'Smooth Speed',
    description:
      '<strong>Smooth Speed</strong> enjoys bending time in a fluid, organic way reminiscent of a tape machine. It excels at slowing things to a crawl.',
    img: '/images/troop/Chase-Bliss_blooper_Smooth-Speed.svg',
    asset: '/modifiers/images/smooth-speed-card.webp',
  },
  {
    id: 1,
    title: 'Dropper',
    description:
      'Oop! <strong>Dropper</strong> is your clumsy saboteur, injecting moments of silence into your loop. Each drop varies in smoothness and duration.',
    img: '/images/troop/Chase-Bliss_blooper_Dropper.svg',
    asset: '/modifiers/images/dropper-card.webp',
  },
  {
    id: 2,
    title: 'Trimmer',
    description:
      '<strong>Trimmer</strong> makes that big old loop of yours littler. Handy for tweaking timing, creating interruptions, or discovering loops within loops.',
    img: '/images/troop/Chase-Bliss_blooper_Trimmer.svg',
    asset: '/modifiers/images/trimmer-card.webp',
  },
  {
    id: 3,
    title: 'Stepped Speed',
    description:
      '<strong>Stepped Speed</strong> is all about efficiency and precision. Speed up or slow your loops in musical steps of fifths and octaves.',
    img: '/images/troop/Chase-Bliss_blooper_Stepped-Speed.svg',
    asset: '/modifiers/images/stepped-speed-card.webp',
  },
  {
    id: 4,
    title: 'Scrambler',
    description:
      '<strong>Scrambler</strong> just can’t keep it together, breaking up the timeline of your loop, jumping here and there to create patterns or random departures.',
    img: '/images/troop/Chase-Bliss_blooper_Scrambler.svg',
    asset: '/modifiers/images/scrambler-card.webp',
  },
  {
    id: 5,
    title: 'Filter',
    description:
      'Loop feeling busy? Shrill? Big whoop. Pop on the dual-mode <strong>Filter</strong> and tidy things up to mellow those pesky highs or create space in the lows.\n' +
      '\n',
    img: '/images/troop/Chase-Bliss_blooper_Filter.svg',
    asset: '/modifiers/images/filter-card.webp',
  },
  {
    id: 6,
    title: 'Swapper',
    description:
      'Once you swap, the fun don’t stop. <strong>Swapper</strong> allows you to replace parts of your loop, either manually, or with your playing dynamics.',
    img: '/images/troop/Chase-Bliss_blooper_Swapper.svg',
    asset: '/modifiers/images/swapper-card.webp',
  },
  {
    id: 7,
    title: 'Stutter',
    description:
      'DJ time. <strong>Stutter</strong>—sometimes known as beat repeat—latches onto the current moment and repeats it, like scratching a record.',
    img: '/images/troop/Chase-Bliss_blooper_Stutter.svg',
    asset: '/modifiers/images/stutter-card.webp',
  },
  {
    id: 8,
    title: 'Stepped Trimmer',
    description:
      '<strong>Stepped Trimmer</strong> allows you to shrink your loop by precise subdivisions, so your adjustments fit nicely into rhythm.\n' +
      '\n',
    img: '/images/troop/Chase-Bliss_blooper_Speed-Trimmer.svg',
    asset: '/modifiers/images/stepped-trimmer-card.webp',
  },
  {
    id: 9,
    title: 'Stretcher',
    description:
      '<strong>Stretcher</strong> allows you to explore the microscopic world hiding within each loop or condense it into a blur. All without affecting pitch!',
    img: '/images/troop/Chase-Bliss_blooper_Stretcher.svg',
    asset: '/modifiers/images/stretcher-card.webp',
  },
  {
    id: 10,
    title: 'Stopper',
    description:
      'All good things come to an end. <strong>Stopper</strong> eases that transition, introducing either a volume fade or a tape stop.',
    img: '/images/troop/Chase-Bliss_blooper_Stopper.svg',
    asset: '/modifiers/images/stopper-card.webp',
  },
  {
    id: 11,
    title: 'Pitcher',
    description:
      '<strong>Pitcher</strong> allows you to transpose your loop without changing the speed, with an outrageous three octave range up or down.',
    img: '/images/troop/Chase-Bliss_blooper_Pitcher.svg',
    asset: '/modifiers/images/pitcher-card.webp',
  },
];

const Modifiers = () => {
  return (
    <>
      <Head>
        <title>Modifiers - Blooper</title>
      </Head>
      <section className="w-full flex flex-col">
        <Heading
          title="modifiers"
          subheading="AKA the Bloop Troop"
          descriptionOne="The modifiers are the creative heart of blooper, allowing you to contort and reimagine your loops."
          modifier
        />
        <ul className="grid md:grid-cols-2 xl:grid-cols-3 gap-16 mx-[10vw] md:mt-16 flex flex-wrap align-stretch">
          {DATA.map((card) => (
            <li key={card.id} className="flex flex-col justify-between">
              <div className="">
                <figure className="relative w-full flex justify-center">
                  <Image
                    width={175}
                    height={150}
                    src={card.img}
                    alt={card.title}
                    className="min-w-32 max-h-32 object-contain"
                  />
                </figure>
                <p
                  className="troop pt-8"
                  dangerouslySetInnerHTML={{ __html: card.description }}
                />
              </div>
              <div className="flex space-x-3 md:block md:space-y-3 md:justify-center">
                <Button href={card.asset}>View</Button>
                <Button href={card.asset} downloadable>
                  Download
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Modifiers;
