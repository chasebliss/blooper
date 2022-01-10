import Grid from '../components/Grid'
import Particles from '../components/Particles'

export default function Example() {
  const getRandomInt = (max: number) => Math.floor(Math.random() * max)
  console.log(getRandomInt(100))
  return (
    <div className="relative overflow-hidden px-[14vw] grid ">
      <div className="relative max-w-7xl py-24 px-4  md:px-0 sm:py-32  z-50">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Resources
        </h1>
        <p className="mt-6 text-xl text-white max-w-3xl">
          Blooper was designed to encourage free, experimental, and personalized
          looping. And with great freedom comes great confusion, sometimes.
          <br />
          <br />
          The resources below should help you get comfortable.
        </p>
      </div>
      <div className="relative z-10">
        <Particles />
      </div>
      <Grid />
    </div>
  )
}
