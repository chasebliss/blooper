import React from 'react';
import { useInView } from 'react-intersection-observer';
import Button from './Button';
import Image from 'next/image';
import clsx from 'clsx';

interface Card {
  img: string;
  title: string;
  description: string;
  asset: string;
}

interface ListItemProps {
  card: Card;
}

const ListItem: React.FC<Readonly<ListItemProps>> = ({ card }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <li
      ref={ref}
      className={clsx(
        'flex flex-col space-y-8 justify-between w-72 transition-all duration-1000',
        inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95',
      )}
    >
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
        className="troop"
        dangerouslySetInnerHTML={{ __html: card.description }}
      />

      <div className="flex space-x-8 justify-center lg:justify-start ">
        <Button href={card.asset}>View</Button>
        <Button href={card.asset} downloadable>
          Download
        </Button>
      </div>
    </li>
  );
};

export default ListItem;
