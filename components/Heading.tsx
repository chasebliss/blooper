import React from 'react';
import Image from 'next/image';

interface Props {
  title: string;
  subheading?: string;
  descriptionOne?: string;
  descriptionTwo?: string;
  images?: Array<string>;
  modifier?: boolean;
}

const Heading = ({
  title,
  subheading,
  descriptionOne,
  descriptionTwo,
  images,
  modifier,
}: Props) => {
  return (
    <div className="px-6 md:px-[7vw] xl:px-[10vw] markdown py-32 pb-16 xl:py-16">
      <h2 className="pb-2 ">{title}</h2>
      {subheading && <h1>{subheading}</h1>}
      <div className="flex flex-col lg:flex-row">
        {images?.length === 1 ? (
          <figure className="w-1/2 lg:w-40 lg:mx-0 mx-auto relative">
            <Image
              priority
              key={images[0]}
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
          <p
            className={`${
              images && images.length > 0 ? `lg:pl-16 pt-16` : 'pt-2'
            } leading-10 max-w-[40ch] lg:pt-0`}
          >
            {descriptionOne}
            <br />
            <br />
            {descriptionTwo && descriptionTwo}
            {modifier && (
              <a
                target="_blank"
                className="underline text-blooperBlue/70 dark:text-white hover:text-blooperBlue"
                href="/resources/docs/modifier-manual.pdf"
              >
                Click here to download the full guide
              </a>
            )}
          </p>
        )}
      </div>
    </div>
  );
};

export default Heading;
