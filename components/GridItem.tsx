import React from 'react';
import Button from './Button';
import { useInView } from 'react-intersection-observer';
import clsx from 'clsx';

export interface DataProps {
  title?: string;
  link?: string;
  description?: string;
  downloadable?: boolean;
  route?: string;
}

const GridItem = ({ item }: { item: DataProps }) => {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <li
      ref={ref}
      className={clsx(
        'grid lg:px-0 grid-cols-1 md:grid-cols-1 h-full md:items-end gap-8 transition-opacity duration-1000',
        inView ? 'opacity-100' : 'opacity-0',
      )}
    >
      <div className="h-full">
        <h3 className="font-semibold break-keep">{item.title}</h3>
        <p className="text-base xl:text-2xl md:max-w-[25ch]">
          {item.description}
        </p>
      </div>
      <div className="flex gap-3">
        <Button light href={item.link} route={item.route}>
          View
        </Button>
        {item.downloadable && (
          <Button light href={item.link} route={item.route} downloadable>
            Download
          </Button>
        )}
      </div>
    </li>
  );
};

export default GridItem;
