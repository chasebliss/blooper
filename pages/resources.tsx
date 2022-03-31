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
    <section className="w-full flex flex-col">
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
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-[7vw]">
        <figure className="relative w-full pb-16 xl:pb-0">
          {/*<svg*/}
          {/*  className="absolute z-10 h-20 w-20 dark:fill-white fill-blooperDarkBlue"*/}
          {/*  viewBox="0 0 86.25 86.25"*/}
          {/*>*/}
          {/*  <path*/}
          {/*    className="cls-1"*/}
          {/*    d="M6.57,44.53A55.45,55.45,0,0,0,0,44.94V86.25H59A53.82,53.82,0,0,0,6.57,44.53Z"*/}
          {/*  />*/}
          {/*  <path*/}
          {/*    className="cls-1"*/}
          {/*    d="M75.47,43.13A10.79,10.79,0,0,1,86.25,32.34V0A43.13,43.13,0,0,0,44.61,31.89L32.05,0,0,12.65H0L12.7,44.88,44.48,32.35a43.19,43.19,0,0,0,41.77,53.9h0V53.91A10.78,10.78,0,0,1,75.47,43.13Z"*/}
          {/*  />*/}
          {/*</svg>*/}

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
            <li key={data.title} className="flex flex-col justify-between my-8">
              <div>
                <h3 className="font-semibold pb-3">{data.title}</h3>
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
      {theme === 'dark' && <ResourcesParticles />}
    </section>
  );
};

export default Resources;
