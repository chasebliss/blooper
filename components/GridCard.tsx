import React from 'react';
import GridItem, { DataProps } from './GridItem';
import HeartBrainIcon from './Icons/HeartBrainIcon';

interface Props {
  backgroundImage: string;
  data: DataProps[];
}

const GridCard: React.FC<Props> = ({ data, backgroundImage }) => {
  return (
    <div className="mx-auto  py-16 md:py-32">
      <figure className="w-80 md:w-96 lg:w-[30vw] mx-auto pb-12 lg:pt-20 md:pb-28">
        <HeartBrainIcon />
      </figure>
      <div className="relative w-full overflow-hidden">
        <div
          className="absolute w-screen  left-0 top-0 bottom-0 z-10 brightness-[60%] sm:brightness-100 dark:brightness-[60%] bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        />

        <ul className="grid backdrop-blur-sm w-fit mx-[4vw] gap-[14vw] md:gap-12 lg:mx-auto py-12 md:py-28 lg:py-48 grid-cols-1 md:grid-cols-2 text-white relative lg:gap-32 z-20">
          {data.map((item) => (
            <GridItem key={item.title} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GridCard;
