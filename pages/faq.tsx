import React, { useState } from 'react';
import { ChevronUpIcon } from '@heroicons/react/24/outline';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import ReactMarkdown from 'react-markdown';
import Head from 'next/head';
import clsx from 'clsx';
import { faqData } from '../data/faqData';
import { useInView } from 'react-intersection-observer';

const markdownConfig = {
  a: ({ ...props }) => (
    <a className="italic font-semibold underline" {...props} />
  ),
  p: ({ ...props }) => <p className="text-xl pb-6" {...props} />,
};

export default function Example() {
  const [openIndex, setOpenIndex] = useState(-1);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  return (
    <>
      <Head>
        <title>FAQ - Blooper</title>
      </Head>
      <section
        ref={ref}
        className={clsx(
          'w-full flex flex-col transition-all duration-1000',
          inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95',
        )}
      >
        <div className="relative px-6 pt-12 mx-auto max-w-4xl sm:py-16 sm:px-6 lg:px-8">
          <div className="relative z-40 mx-auto max-w-3xl">
            <h1 className="pb-8 text-5xl lg:text-8xl md:text-7xl font-semibold text-center">
              FAQ&apos;s
            </h1>
            <dl className="mt-6 mb-16 space-y-6 divide-y divide-blooperDarkBlue/40 dark:divide-white/40">
              {faqData.map((faq, index) => (
                <div key={faq.question} className="pt-6 group">
                  <dt
                    className={`${
                      openIndex === index ? 'italic' : ''
                    } text-lg rounded-3xl group-hover:italic`}
                  >
                    <button
                      onClick={() =>
                        setOpenIndex(openIndex === index ? -1 : index)
                      }
                      className="flex gap-4 justify-between items-center w-full text-left"
                    >
                      <span className="font-medium flex-grow">
                        <ReactMarkdown
                          remarkPlugins={[remarkGfm, remarkBreaks]}
                        >
                          {faq.question}
                        </ReactMarkdown>
                      </span>
                      <span
                        className={clsx(
                          'flex-shrink-0 transform transition-transform pr-2',
                          {
                            'rotate-180': openIndex === index,
                          },
                        )}
                      >
                        <ChevronUpIcon aria-hidden="true" className="w-6 h-6" />
                      </span>
                    </button>
                  </dt>
                  <div
                    className={clsx(
                      'pr-12 ml-6 m-2 transition-all duration-500 ease-in-out overflow-hidden',
                      {
                        'max-h-[100vh]': openIndex === index,
                        'max-h-0': openIndex !== index,
                      },
                    )}
                  >
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm, remarkBreaks]}
                      components={markdownConfig}
                    >
                      {faq.answer}
                    </ReactMarkdown>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
