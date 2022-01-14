import React from 'react'
import Image from 'next/image'

interface Props {
  images: Array<string>
}

const GlassGrid = ({ images }: Props) => {
  return (
    <div className="p-5 md:px-0">
      <div className="flex flex-col lg:flex-row w-full relative">
        <div className="relative gap-16 p-5 lg:p-16 z-40 grid grid-cols-1 lg:grid-cols-3 w-full">
          {images.map((image, index) => (
            <figure key={index}>
              <Image
                alt="Bloop Troop cards"
                height={1456}
                width={1036}
                layout="intrinsic"
                src={image}
                className="rounded-xl"
                objectFit="contain"
              />
            </figure>
          ))}
        </div>
        <div className="w-full h-full backdrop-blur-sm bg-black/10 rounded-3xl absolute inset-0" />
      </div>
    </div>
  )
}

export default GlassGrid
