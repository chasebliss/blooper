import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { container, item } from '../styles/motion'

interface Props {
  images: Array<string>
}

const GlassGrid = ({ images }: Props) => {
  const { ref, inView } = useInView({
    rootMargin: '256px',
    threshold: 0.2,
  })

  return (
    <div className="p-5 md:px-0" ref={ref}>
      <div className="flex flex-col lg:flex-row w-full relative">
        <div className="w-full h-full backdrop-blur-sm bg-black/10 rounded-3xl absolute inset-0 z-10" />
        {inView && (
          <>
            <motion.div
              initial="hidden"
              animate="show"
              variants={container}
              className="relative gap-16 p-5 lg:p-16 z-50 grid grid-cols-1 lg:grid-cols-3 w-full"
            >
              {images.map((image, index) => (
                <motion.figure key={index} variants={item}>
                  <Image
                    priority
                    alt="Bloop Troop cards"
                    height={1456}
                    width={1036}
                    layout="intrinsic"
                    src={image}
                    className="rounded-xl"
                    objectFit="contain"
                  />
                </motion.figure>
              ))}
            </motion.div>
          </>
        )}
      </div>
    </div>
  )
}

export default GlassGrid
