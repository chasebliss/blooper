import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkBreaks from 'remark-breaks'

interface Props {
  content: string
}

const Heading = ({ content }: Props) => {
  return (
    <div className="m-5 p-5  mt-32 md:w-144 md:mx-auto lg:mx-0 relative border bg-blooperBlue z-40 drop-shadow-2xl rounded-2xl">
      <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]}>
        {content}
      </ReactMarkdown>
    </div>
  )
}

export default Heading
