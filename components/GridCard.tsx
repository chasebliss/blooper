import React from 'react';
import Image from 'next/image';

import GridItem, { DataProps } from './GridItem';
import HeartBrainIcon from './Icons/HeartBrainIcon';

interface Props {
  icon?: React.ReactNode;
  backgroundImage: string;
  data: DataProps[];
}

const GridCard: React.FC<Props> = ({ data, backgroundImage }) => {
  return (
    <div className="mx-[7vw] lg:mx-0 drop-shadow-2xl lg:drop-shadow-none my-16 lg:mb-0 ">
      <figure className="w-80  md:w-96 lg:w-[30vw] mx-auto pb-20 lg:pt-20 lg:pb-32">
        <HeartBrainIcon />
      </figure>
      <div className="w-full relative py-16 lg:p-24 rounded-3xl lg:rounded-none overflow-hidden ">
        <div className="relative text-white grid z-50 justify-items-center items-center">
          {/*<div className="col-span-1 pb-16 drop-shadow-2xl">{icon}</div>*/}
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-x-32 px-auto lg:px-0 ">
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
