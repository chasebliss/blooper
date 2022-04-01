import React from 'react';

interface Props {
  title: string;
  subheading?: string;
  descriptionOne: string;
  descriptionTwo?: string;
  images?: Array<string>;
}

const Heading = ({
  title,
  subheading,
  descriptionOne,
  descriptionTwo,
  images,
}: Props) => {
  return (
    <div className="px-6 md:px-[7vw] xl:px-[10vw] markdown pt-24 pb-16 xl:py-16">
      <h2 className="pb-2">{title}</h2>
      {subheading && <h1>{subheading}</h1>}
      <div className="flex flex-col lg:flex-row">
        {images?.length === 1 ? (
          <img
            key={images[0]}
            src={images[0]}
            className="object-contain h-128 lg:h-64"
            alt="bloops"
          />
        ) : (
          <div className="space-x-5 space-y-5 flex lg:flex-col lg:justify-center items-center lg:pb-10 xl:bp-0">
            {images?.map((img) => (
              <img key={img} src={img} className="w-16 h-16" alt="bloops" />
            ))}
          </div>
        )}
        <p className="lg:pl-16 leading-10 max-w-[45ch] pt-16 lg:pt-0">
          {descriptionOne}
          <br />
          <br />
          {descriptionTwo && descriptionTwo}
        </p>
      </div>
    </div>
  );
};

export default Heading;
