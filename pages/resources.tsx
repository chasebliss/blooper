import Heading from 'components/Heading';
import { useMediaQuery } from 'react-responsive';

import { ResourcesParticles } from 'styles/particles';
import { useTheme } from 'next-themes';
import Button from '../components/Button';
import Image from 'next/image';

const data = [
  {
    title: 'Quick Start',
    description: 'The bare essentials, for the looping experience.',
    asset: '/resources/docs/quick-start.pdf',
    downloadable: true,
  },
  {
    title: 'Video Manual',
    description:
      'Piece-by-piece video walkthroughs of blooper’s main features,' +
      ' including tips and tricks.',
    asset:
      'https://www.youtube.com/playlist?list=PLX7ehdcDltWiMQ-ffmCB4_OBLaU8IXPxw',
    downloadable: false,
  },
  {
    title: 'Manual',
    description:
      'There are lots of idden goodies in blooper, so you might' +
      ' want to read this. It’s pretty fun, as manuals go.',
    asset: '/resources/docs/manual.pdf',
    downloadable: true,
  },
  {
    title: 'Recording Modifiers',
    description:
      'A guide to blooper’s stranger side. Set up your blooper,' +
      ' take your time, and feel amaze.',
    asset: '/resources/docs/recording-mod.pdf',
    downloadable: true,
  },
];

export const Resources = () => {
  const { theme } = useTheme();
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 976px)' });

  return (
    <section className="w-full flex flex-col ">
      <Heading
        title="resources"
        subheading="What blooper is and how it works."
        descriptionOne="Blooper was designed to encourage free, experimental, and personalized looping. And with great freedom comes great confusion, sometimes."
        descriptionTwo="The resources below should help you get comfortable."
        images={[
          '/images/troop/Chase-Bliss_blooper_Pitcher.svg',
          '/images/troop/Chase-Bliss_blooper_Trimmer.svg',
          '/images/troop/Chase-Bliss_blooper_Swapper.svg',
        ]}
      />
      <div className="max-w-[1880px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 mx-[7vw]">
          <figure className="relative w-full pb-16 xl:pb-0 lg:h-[800px]">
            <Image
              width={1136}
              height={1938}
              layout={isTabletOrMobile ? 'responsive' : 'fill'}
              objectFit="contain"
              src="/images/blooper-front.png"
            />
          </figure>
          <ul className="lg:pl-12 lg:mx-0 xl:gap-16 grid xl:grid-cols-2">
            {data.map((data) => (
              <li
                key={data.title}
                className="flex flex-col justify-between my-8 h-64"
              >
                <div>
                  <p className="font-semibold pb-3">{data.title}</p>
                  <small>{data.description}</small>
                </div>
                <div className="space-x-5 pt-5">
                  <Button href={data.asset}>View</Button>
                  {data.downloadable && (
                    <Button href={data.asset} downloadable>
                      Download
                    </Button>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {theme === 'dark' && <ResourcesParticles />}
    </section>
  );
};

export default Resources;
