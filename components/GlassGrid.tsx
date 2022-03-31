import React from 'react';
import Image from 'next/image';
import Button from './Button';

interface Props {
  images: Array<string>;
}

const GlassGrid = ({ images }: Props) => {
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null);
  return (
    <div className="p-5 sm:px-24 md:px-5">
      <div className="flex relative flex-col w-full lg:flex-row">
        <div className="absolute inset-0 z-10 w-full h-full rounded-3xl backdrop-blur-sm dark:bg-black/10" />

        <div className="grid relative z-10 grid-cols-1 gap-20 p-5 w-full lg:p-16 md:grid-cols-2 lg:grid-cols-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative flex"
              onMouseEnter={() => {
                setSelectedIndex(index);
              }}
              onMouseLeave={() => {
                setSelectedIndex(null);
              }}
            >
              <figure
                className={`rounded-xl border border-blooperDarkBlue/50 dark:border-0 relative z-50 transition bg-white ${
                  selectedIndex === index && '-translate-y-16 brightness-100'
                }`}
              >
                <Image
                  priority
                  alt="Bloop Troop cards"
                  height={1456}
                  width={1036}
                  layout="intrinsic"
                  src={image}
                  className="relative rounded-xl"
                  objectFit="contain"
                />
              </figure>
              <div className="bottom-0 w-full flex justify-center absolute rounded-xl hover:text-blooperDarkBlue/70 transition">
                <a href={image} download>
                  <Button>Download</Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GlassGrid;
