import Heading from 'components/Heading'
import React from 'react'
import Particles from 'react-tsparticles'

import GlassGrid from '../components/GlassGrid'
import { modifierParticles } from '../styles/particles'

const headingContent = `
# Modifiers

**AKA the Bloop Troop**. 

It does a lot and it can get pretty weird. So, get familiar with its many tricks, or use the interface to update, download, and customize.

The modifiers are the creative heart of blooper, allowing you to contort and reimagine your loops.
`

const Modifiers = () => {
  return (
    <div className="lg:p-16 bg-blooperDarlBlue">
      <Heading content={headingContent} />
      <GlassGrid
        images={[
          '/images/bloops/stretcher-card.png',
          '/images/bloops/stepped-speed-card.png',
          '/images/bloops/smooth-speed-card.png',
        ]}
      />
      <GlassGrid
        images={[
          '/images/bloops/trimmer-card.png',
          '/images/bloops/stepped-trimmer-card.png',
          '/images/bloops/scrambler-card.png',
        ]}
      />
      <GlassGrid
        images={[
          '/images/bloops/dropper-card.png',
          '/images/bloops/filter-card.png',
          '/images/bloops/pitcher-card.png',
        ]}
      />
      <GlassGrid
        images={[
          '/images/bloops/stopper-card.png',
          '/images/bloops/swapper-card.png',
          '/images/bloops/stutter-card.png',
        ]}
      />
      <Particles options={modifierParticles} />
    </div>
  )
}

export default Modifiers
