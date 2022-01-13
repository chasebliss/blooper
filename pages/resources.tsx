import Heading from 'components/Heading'
import Grid from 'components/Grid'

import { resourcesParticles } from 'styles/particles'
import React from 'react'
import Particles from 'react-tsparticles'

const headingContent = `
# Resources

Blooper was designed to encourage free, experimental, and personalized looping. And with great freedom comes great confusion, sometimes.

The resources below should help you get comfortable.

**[Download them all.](/docs/the-bloop-troop.pdf)**
`

export const Resources = () => (
  <div className="p-16">
    <Heading content={headingContent} />

    <Grid />
    <Particles options={resourcesParticles} />
  </div>
)

export default Resources
