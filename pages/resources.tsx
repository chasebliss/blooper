import Heading from 'components/Heading'
import Grid from 'components/Grid'

import { ResourcesParticles } from 'styles/particles'

const headingContent = `
# Resources

Blooper was designed to encourage free, experimental, and personalized looping. And with great freedom comes great confusion, sometimes.

The resources below should help you get comfortable.
`

export const Resources = () => {
  return (
    <div className="lg:p-16">
      <Heading content={headingContent} />
      <Grid />
      <ResourcesParticles />
    </div>
  )
}

export default Resources
