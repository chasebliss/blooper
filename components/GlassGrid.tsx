import React from 'react'
import Image from 'next/image'

const GlassGrid = ({ images }) => {
  return (
    <div className="p-5 md:px-0">
      <div className="flex flex-col lg:flex-row w-full relative">
        <div className="relative gap-16 p-5 lg:p-16 z-40 grid grid-cols-1 lg:grid-cols-3 w-full">
          {images.map((image) => (
            <Image
              height={1456}
              width={1036}
              layout="intrinsic"
              src={image}
              className="rounded-xl"
              objectFit="contain"
            />
          ))}
        </div>
        <div className="w-full h-full backdrop-blur-sm bg-blooperGray/10 rounded-3xl absolute inset-0" />
      </div>
    </div>
  )
}

export default GlassGrid
