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
        'md:backdrop-blur-md md:backdrop-saturate-125 md:-backdrop-hue-rotate-30 md:backdrop-contrast-125 md:border md:border-white md:bg-black/40 md:p-8 grid space-y-6 w-full lg:w-128 transition-all md:mx-auto duration-1000 rounded-3xl ',
        inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95',
      )}
    >
      <div className="space-y-12 grid">
        <div className="space-y-4">
          <h3 className="font-semibold text-3xl lg:text-4xl">{item.title}</h3>
          <p className="text-[20px] xl:text-2xl ">{item.description}</p>
        </div>

        <div className="flex justify-around items-end gap-4 w-fit">
          <Button light href={item.link} route={item.route}>
            View
          </Button>
          {item.downloadable && (
            <Button light href={item.link} route={item.route} downloadable>
              Download
            </Button>
          )}
        </div>
      </div>
    </li>
  );
};

export default GridItem;
