import React from 'react';
import GridItem, { DataProps } from './GridItem';
import HeartBrainIcon from './Icons/HeartBrainIcon';

interface Props {
  backgroundImage: string;
  data: DataProps[];
}

const GridCard: React.FC<Props> = ({ data, backgroundImage }) => {
  return (
    <div className="px-[4vw]  mx-auto  py-16 md:py-32 drop-shadow-2xl lg:drop-shadow-none">
      <figure className="w-80 md:w-96 lg:w-[30vw] mx-auto pb-20 lg:pt-20 lg:pb-32">
        <HeartBrainIcon />
      </figure>
      <div className="relative max-w-[1200px] mx-auto p-4 py-12 lg:py-32  border border-white/50 drop-shadow-2xl rounded-3xl">
        <div
          className="absolute inset-0 z-10 rounded-3xl brightness-[40%]  bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        />

        <ul className="grid grid-cols-1 md:grid-cols-2 text-white relative gap-16 z-20">
          {data.map((item) => (
            <GridItem key={item.title} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GridCard;
