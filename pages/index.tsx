import List from '../components/List'
import Image from 'next/image'
import React from 'react'
import Particles from 'react-tsparticles'
import Heading from '../components/Heading'
import { homeParticles } from '../styles/particles'
import { motion } from 'framer-motion'
const headingContent = `
# Blooper

This is a website to help you enjoy a rich, rewarding time with your blooper. 

It does a lot and it can get pretty weird. So, get familiar with its many tricks, or use the interface to update, download, and customize.
`

const Home = () => {
  return (
    <section className="w-full md:p-16">
      <motion.div>
        <Heading content={headingContent} />
      </motion.div>

      <div className="flex flex-col lg:flex-row w-full">
        <motion.div className="relative h-128 lg:h-auto lg:w-1/3 mx-5 my-16">
          <Image
            priority
            alt="Front of Blooper image"
            src="/images/blooper-front.png"
            height={1136}
            width="100%"
            layout="fill"
            objectFit="contain"
          />
        </motion.div>

        <List />
      </div>
      <Particles options={homeParticles} />
    </section>
  )
}

export default Home
