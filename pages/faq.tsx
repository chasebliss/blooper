import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import React from 'react'
import remarkGfm from 'remark-gfm'
import remarkBreaks from 'remark-breaks'
import ReactMarkdown from 'react-markdown'
import { FAQParticles } from '../styles/particles'

const faqs = [
  {
    question: '###### What do the dip switches do and should i be afraid?',
    answer: `
No, they are fun and helpful. the dip switches perform two jobs:

- Customize blooper
- Configure expression, cv, or internal modulation

That’s it! 
    
They add a lot of depth and flexibility to the Blooper – it won’t break. Get a snack, pull up the manual, and it will all make sense within 30 minutes.`,
  },
  {
    question: `###### I’m having trouble connecting to the blip interface.`,
    answer: `
Some usb cables won’t make a good connection with blooper. Use the included usb cable if possible, make sure the pedal is powered, and the rest is a breeze.,`,
  },
  {
    question: `###### How do i access the alternate modifiers?`,
    answer: `
the bank a and bank b dip switches give you access to two different
sets of modifiers. you can also choose your own modifiers and
arrangements using the [blip interface](https://chasebliss.com/wp-content/uploads/2021/12/blooper.3.1.1.html).,`,
  },
  {
    question: `###### Why is my loop getting weird when i record modifiers in add mode?`,
    answer: `
You may notice the start/end points of your loop changing places, or other weird behaviour when you record certain modifiers. It can be helpful to physically think of blooper as a tape machine. When you first record a loop, you are setting the length of the tape.  
            
From this point on you are free to do all kinds of weird things to the audio on that tape – and even the machinery itself – but you can’t change the length of that tape. 

So let’s say you record a 3 second loop, then use a modifier to slow it down to half speed. The loop is now in fact 6 seconds. This will play no problem, but once you record this effect in add mode you essentially lose half of your loop. It just can’t fit. It can be disorienting, but it makes sense with practice. It also has its advantages. This [breakdown](/docs/recording-mod.pdf) should really help.,`,
  },
  {
    question: `###### What can i do with midi, and how?`,
    answer: `We have a [page](/midi) for that!`,
  },
  {
    question: `###### Can I save control settings?`,
    answer: `
**Short answer:** No 

**Long answer:** Unlike other chase bliss pedals, we decided saving should focus on loop audio rather than control settings. 

This way, when you load up an old loop the controls won’t be invisibly locked in their saved position – what you see is what you get.,`,
  },

  {
    question: `###### Can layers be isolated?`,
    answer: `
**Short answer:** No
 
**Long answer:** Because of blooper’s unique additive abilities, each layer contains all the audio from the previous layers. 

This makes it possible to completely transform your loop with stability and the modifiers, instead of those effects simply getting piled on top. you can go forward and backward through your layers, but you can’t isolate the audio on just one layer.,
`,
  },

  // More questions...
]

const classNames = (...classes: string[]) => classes.filter(Boolean).join(' ')
const markdownConfig = {
  ul: ({ ...props }) => <ul className="py-3" {...props} />,
  a: ({ ...props }) => (
    <a className="underline italic font-semibold" {...props} />
  ),
  li: ({ ...props }) => (
    <li className="list-disc list-inside pb-3" {...props} />
  ),
}

export default function Example() {
  return (
    <div className="pt-32 mx-5 lg:mx-0">
      <div className="relative max-w-4xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200 relative z-40">
          <h2 className="text-center text-3xl font-semibold  sm:text-4xl uppercase  py-8">
            Frequently asked questions
          </h2>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="text-left w-full flex justify-between items-start">
                        <span className="font-medium ">
                          <ReactMarkdown
                            remarkPlugins={[remarkGfm, remarkBreaks]}
                          >
                            {faq.question}
                          </ReactMarkdown>
                        </span>
                        <span className="ml-6 h-7 flex items-center">
                          <ChevronDownIcon
                            className={classNames(
                              open ? '-rotate-180' : 'rotate-0',
                              'h-6 w-6 transform'
                            )}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm, remarkBreaks]}
                        components={markdownConfig}
                      >
                        {faq.answer}
                      </ReactMarkdown>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
        <div className="w-full h-full backdrop-blur-sm dark:bg-black/10 border border-black/50 darK:border-0 rounded-3xl absolute inset-0 z-10" />
      </div>
      <FAQParticles />
    </div>
  )
}
