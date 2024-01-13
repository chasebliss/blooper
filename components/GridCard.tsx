import React from 'react';
import GridItem, { DataProps } from './GridItem';
import HeartBrainIcon from './Icons/HeartBrainIcon';

interface Props {
  backgroundImage: string;
  data: DataProps[];
}

const GridCard: React.FC<Props> = ({ data, backgroundImage }) => {
  return (
    <div className="mx-[4vw] lg:mx-0 my-16 lg:mb-0 drop-shadow-2xl lg:drop-shadow-none">
      <figure className="w-80 md:w-96 lg:w-[30vw] mx-auto pb-20 lg:pt-20 lg:pb-32">
        <HeartBrainIcon />
      </figure>
      <div className="relative py-16 lg:p-24 overflow-hidden rounded-3xl lg:rounded-none">
        <div
          className="absolute inset-0 z-10 brightness-50 bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        />

        <ul className="grid grid-cols-1 md:grid-cols-2 text-white relative gap-16 lg:gap-x-32 px-auto lg:px-0 z-20">
          {data.map((item) => (
            <GridItem key={item.title} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GridCard;
