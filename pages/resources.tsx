import Grid from '../components/Grid'
import Particles from '../components/Particles'
import Heading from '../components/Navigation/Heading'
import React from 'react'

export default function Example() {
  return (
    <div className="p-16">
      <Heading
        title="Resources"
        description="
          Blooper was designed to encourage free, experimental, and personalized
          looping. And with great freedom comes great confusion, sometimes.
          The resources below should help you get comfortable.
        "
      />

      <Grid />
      <Particles />
    </div>
  )
}
