import React from 'react';
import Image from 'next/image';

import GridItem, { DataProps } from './GridItem';
import HeartBrainIcon from './Icons/HeartBrainIcon';

interface Props {
  icon?: React.ReactNode;
  backgroundImage: string;
  data: DataProps[];
}

const GridCard: React.FC<Props> = ({ data, backgroundImage, icon }) => {
  return (
    <div className="mx-[4vw] drop-shadow-2xl my-16 lg:my-32">
      <figure className="w-64  md:w-96 lg:w-[30vw] mx-auto pb-16">
        <HeartBrainIcon />
      </figure>
      <div className="w-full relative py-24 rounded-3xl overflow-hidden">
        <div className="relative text-white grid grid-cols-1 lg:grid-cols-3 z-50 justify-items-center items-center">
          <div className="col-span-1 pb-16">{icon}</div>
          <ul className="grid grid-cols-1 md:grid-cols-2 col-span-2 gap-16 px-8 w-full">
            {data.map((item) => (
              <GridItem key={item.title} item={item} />
            ))}
          </ul>
        </div>
        <figure className="absolute inset-0">
          <Image
            alt="Background"
            fill
            src={backgroundImage}
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50 z-40" />
        </figure>
      </div>
    </div>
  );
};

export default GridCard;
