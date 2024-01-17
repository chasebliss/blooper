import React from 'react';
import Image from 'next/image';
import Button from '../components/Button';

const FourOhFour = () => {
  return (
    <section className="w-full h-full flex-col-reverse lg:flex-row flex pt-24 relative justify-center">
      <figure className="w-full scale-x-[-1] -mb-32 drop-shadow-2xl lg:w-1/3 pt-8">
        <Image
          priority
          height={1512}
          width={1080}
          alt="the incredible joel korte is here to say you're lost"
          src="/images/joel.webp"
        />
      </figure>

      <div className="lg:w-1/3 flex flex-col items-center justify-center">
        <h1 className="text-[14vw] h-min">404</h1>
        <h4 className="pb-8 lg:pb-16">Oh boy... are you in the wrong place.</h4>
        <Button href="/">Home</Button>
      </div>
    </section>
  );
};

export default FourOhFour;
