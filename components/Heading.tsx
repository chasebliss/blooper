import React from 'react'

interface Props {
  title: string
  description: string
}

const Heading = ({ title, description }: Props) => {
  return (
    <div className="m-5 p-5  mt-32 md:w-144 md:mx-auto lg:mx-0 relative border bg-blooperBlue z-40 drop-shadow-2xl rounded-2xl">
      <h1>{title}</h1>
      <p className="mt-6 text-white">{description}</p>
    </div>
  )
}

export default Heading
