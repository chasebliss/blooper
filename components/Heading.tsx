import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';

interface Props {
  title: string;
  subheading?: string;
  descriptionOne?: string;
  descriptionTwo?: string;
  images?: string[];
  modifier?: boolean;
}

const Heading: React.FC<Props> = ({
  title,
  subheading,
  descriptionOne,
  descriptionTwo,
  images,
  modifier,
}) => {
  const singleImage = images && images?.length === 1;
  const hasImages = images && images?.length > 0;

  return (
    <div className="mx-[7vw] lg:mt-8">
      <h2 className="pb-2">{title}</h2>
      {subheading && <h1>{subheading}</h1>}
      <div className="flex flex-col lg:flex-row">
        {singleImage ? (
          <figure className="w-48 lg:w-56 lg:mx-0 mx-auto relative">
            <Image
              priority
              src={images[0]}
              width={128}
              height={64}
              alt="bloops"
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
          </figure>
        ) : (
          <div className="space-x-5 lg:space-x-0 lg:space-y-5 flex lg:flex-col lg:justify-center items-center lg:pb-10 xl:bp-0">
            {images?.map((img) => (
              <Image
                priority
                key={img}
                src={img}
                width={64}
                height={64}
                alt="bloops"
              />
            ))}
          </div>
        )}

        {descriptionOne && (
          <div
            className={clsx(
              'flex flex-col gap-8 lg:space-y-8 justify-center',
              hasImages && 'lg:pl-16 pt-8',
            )}
          >
            <p className="leading-10 max-w-[40ch]">{descriptionOne}</p>
            {descriptionTwo && (
              <p className="leading-10 max-w-[40ch]">{descriptionTwo}</p>
            )}
            {modifier && (
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blooperBlue/70 dark:text-white hover:text-blooperBlue"
                href="/resources/docs/modifier-manual.pdf"
              >
                Click here to download the full guide
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Heading;
