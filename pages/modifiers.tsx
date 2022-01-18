import Heading from 'components/Heading'
import React from 'react'

import GlassGrid from '../components/GlassGrid'
import { ModifierParticles } from '../styles/particles'
import { useTheme } from 'next-themes'

const headingContent = `
# Modifiers

**AKA the Bloop Troop**. 

It does a lot and it can get pretty weird. So, get familiar with its many tricks, or use the interface to update, download, and customize.

The modifiers are the creative heart of blooper, allowing you to contort and reimagine your loops.
`

const Modifiers = () => {
  const { theme } = useTheme()
  return (
    <div className="lg:p-16">
      <Heading content={headingContent} />
      <GlassGrid
        images={[
          '/modifiers/images/stretcher-card.png',
          '/modifiers/images/stepped-speed-card.png',
          '/modifiers/images/smooth-speed-card.png',
          '/modifiers/images/trimmer-card.png',
          '/modifiers/images/stepped-trimmer-card.png',
          '/modifiers/images/scrambler-card.png',
          '/modifiers/images/dropper-card.png',
          '/modifiers/images/filter-card.png',
          '/modifiers/images/pitcher-card.png',
          '/modifiers/images/stopper-card.png',
          '/modifiers/images/swapper-card.png',
          '/modifiers/images/stutter-card.png',
        ]}
      />

      <ModifierParticles theme={theme} />
    </div>
  )
}

export default Modifiers
