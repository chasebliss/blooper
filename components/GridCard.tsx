import React from 'react';
import Image from 'next/image';
import Button from './Button';

interface DataProps {
  title?: string;
  link?: string;
  description?: string;
  downloadable?: boolean;
  route?: string;
}

interface Props {
  icon?: React.ReactNode;
  backgroundImage: string;
  data: Array<DataProps>;
}

const GridCard = ({ data, backgroundImage, icon }: Props) => {
  return (
    <div className="mx-[2vw] py-16">
      <div className="w-full relative py-[7vw]">
        <div className="relative text-white grid grid-cols-1  lg:grid-cols-5 z-50 justify-items-center items-center">
          <div className="w-2/3 lg:w-full col-span-2  lg:px-[5vw] xl:px-[4vw] pt-4">
            {icon}
          </div>
          <ul className="grid gird-cols-1 md:grid-cols-2  pt-8 gap-6 xl:gap-16  col-span-3">
            {data.map((data) => (
              <li
                key={data.title}
                className="grid px-[4vw] lg:px-0 grid-cols-2 md:grid-cols-1 h-full justify-items-end md:justify-items-start items-center"
              >
                <div className="h-full ">
                  <h3 className="font-semibold pb-3">{data.title}</h3>
                  <p className="text-base xl:text-2xl max-w-[25ch]">
                    {data.description}
                  </p>
                </div>

                <div className="flex flex-col md:flex-row md:space-x-3 md:block space-y-3 justify-center">
                  <Button light href={data.link} route={data.route}>
                    View
                  </Button>

                  <Button
                    light
                    href={data.link}
                    route={data.route}
                    downloadable
                  >
                    Download
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <figure className="absolute inset-0">
          <Image
            priority
            layout="fill"
            objectFit="cover"
            alt="someone twisting knobs"
            src={backgroundImage}
          />
          <div className="absolute inset-0 bg-black/40 z-40" />
        </figure>
      </div>
    </div>
  );
};

export default GridCard;
