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
    <div className="px-6 md:px-[7vw] xl:px-[10vw] markdown py-24 xl:py-16">
      <h2 className="pb-2">{title}</h2>
      {subheading && <h1>{subheading}</h1>}
      <div className="flex flex-col xl:flex-row">
        <div className="space-x-5 xl:space-x-0 xl:space-y-5 flex xl:flex-col flex-row pb-10 xl:bp0">
          {images?.map((img) => (
            <img key={img} src={img} className="w-16 h-16" alt="bloops" />
          ))}
        </div>
        <p className="xl:pl-16 leading-10 max-w-[45ch]">
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
