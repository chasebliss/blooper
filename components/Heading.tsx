import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkBreaks from 'remark-breaks'

interface Props {
  content: string
}

const Heading = ({ content }: Props) => {
  return (
    <div className="backdrop-blur-sm relative z-40 p-5 m-5 mt-32 rounded-2xl border drop-shadow-2xl md:w-144 md:mx-auto lg:mx-0 dark:border-white border-black/50 dark:bg-blooperBlue">
      <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]}>
        {content}
      </ReactMarkdown>
    </div>
  )
}

export default Heading
