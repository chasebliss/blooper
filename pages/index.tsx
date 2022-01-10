import type { NextPage } from 'next'
import List from '../components/List'

import React from 'react'
const Home: NextPage = () => {
  const getRandomInt = (max: number) => Math.floor(Math.random() * max)
  console.log(getRandomInt(10))
  return (
    <section className="h-screen overflow-hidden py-[14vh] px-[14vw] grid h-full">
      <h1 title="blooper" className="glitch pb-20 mx-auto hero font-nunito">
        blooper
      </h1>

      <div className="grid  sm:grid-cols-3 grid-rows-1 h-full gap-24">
        <img
          src="/images/blooper-front-v2.png"
          className="drop-shadow-2xl object-contain"
        />
        <List />
      </div>
    </section>
  )
}

export default Home
