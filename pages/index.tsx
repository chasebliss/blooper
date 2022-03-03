import List from '../components/List'
import Image from 'next/image'
import React from 'react'

import { HomeParticles } from '../styles/particles'
import Heading from '../components/Heading'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'

const headingContent = `
# Blooper

This is a website to help you enjoy a rich, rewarding time with your blooper. 

It does a lot and it can get pretty weird. So, get familiar with its many tricks, or use the interface to update, download, and customize.
`

const Home = () => {
  const { theme } = useTheme()
  return (
    <section className="w-full md:p-16 flex flex-col justify-center items-center">
      <Heading content={headingContent} />
      <div className="flex flex-col w-full lg:flex-row">
        <motion.div className="relative mx-5 my-16 h-128 lg:h-auto lg:w-1/3">
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
      {theme === 'dark' && <HomeParticles theme={theme} />}
    </section>
  )
}

export default Home
