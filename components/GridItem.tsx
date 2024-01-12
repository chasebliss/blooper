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
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <li
      ref={ref}
      className={clsx(
        'grid justify-between space-y-6 mx-6 transition-all duration-1000',
        inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95',
      )}
    >
      <h3 className="font-semibold">{item.title}</h3>
      <p className="text-base xl:text-2xl md:max-w-[25ch]">
        {item.description}
      </p>

      <div className="flex gap-3 items-end">
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
