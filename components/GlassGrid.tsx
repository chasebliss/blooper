import React from 'react'
import Image from 'next/image'

interface Props {
  images: Array<string>
}

const GlassGrid = ({ images }: Props) => {
  return (
    <div className="px-5 lg:m-0 md:px-0">
      <div className="flex relative flex-col w-full lg:flex-row">
        <div className="absolute inset-0 z-10 w-full h-full rounded-3xl backdrop-blur-sm dark:bg-black/10" />

        <div className="grid relative z-10 grid-cols-1 gap-16 p-5 w-full lg:p-16 md:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <figure
              key={index}
              className="rounded-xl border border-black/50 dark:border-0"
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
          ))}
        </div>
      </div>
    </div>
  )
}

export default GlassGrid
