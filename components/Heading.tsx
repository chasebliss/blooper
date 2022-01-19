import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkBreaks from 'remark-breaks'

interface Props {
  content: string
}

const Heading = ({ content }: Props) => {
  return (
    <div className="relative z-40 p-5 m-5 mt-32 rounded-2xl border drop-shadow-2xl backdrop-blur-sm dark:bg-black/10 md:mb-16 md:w-144 lg:mx-0 dark:border-0 border-blooperDarkBlue/50">
      <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]}>
        {content}
      </ReactMarkdown>
    </div>
  )
}

export default Heading
