import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'

const faqs = [
  {
    question: 'What do the dip switches do and should i be afraid?',
    answer:
      'no, they are fun and helpful. the dip switches perform two jobs:\n' +
      '\n' +
      'customize blooper\n' +
      'configure expression, cv, or internal modulation\n' +
      'that’s it! they add a lot of depth and flexibility to blooper – it won’t break. get a snack, pull up the manual, and it will all make sense within 30 minutes.\n' +
      '\n',
  },
  {
    question: 'I’m having trouble connecting to the blip interface.',
    answer:
      'some usb cables won’t make a good connection with blooper. use the included usb cable if possible, make sure the pedal is powered, and the rest is a breeze.',
  },
  {
    question: 'How do i access the alternate modifiers?\n',
    answer:
      'the bank a and bank b dip switches give you access to two different sets of modifiers. you can also choose your own modifiers and arrangements using the blip interface.',
  },
  {
    question:
      'Why is my loop getting weird when i record modifiers in add mode?',
    answer:
      'you may notice the start / end points of your loop changing places, or' +
      ' other weird behaviour when you record certain modifiers. it can be' +
      ' helpful to physically think of blooper as a tape machine. when you first record a loop, you are setting the length of the tape. from this point on you are free to do all kinds of weird things to the audio on that tape – and even the machinery itself – but you can’t change the length of that tape. so let’s say you record a 3 second loop, then use a modifier to slow it down to half speed. the loop is now in fact 6 seconds. this will play no problem, but once you record this effect in add mode you essentially lose half of your loop. it just can’t fit. it can be disorienting, but it makes sense with practice. it also has its advantages. this breakdown should really help.',
  },
  {
    question: 'What can i do with midi, and how?',
    answer: 'We have a page for that!',
  },
  {
    question: 'Can i save control settings?',
    answer:
      'short answer: no long answer: unlike other chase bliss pedals, we' +
      ' decided saving should focus on loop audio rather than control settings. this way, when you load up an old loop the controls won’t be invisibly locked in their saved position – what you see is what you get.',
  },

  {
    question: 'Can layers be isolated?',
    answer:
      'short answer: no long answer: because of blooper’s unique additive' +
      ' abilities, each layer contains all the audio from the previous layers. this makes it possible to completely transform your loop with stability and the modifiers, instead of those effects simply getting piled on top. you can go forward and backward through your layers, but you can’t isolate the audio on just one layer.',
  },

  // More questions...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="pt-32">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
          <h2 className="text-center text-3xl font-semibold text-white sm:text-4xl uppercase">
            Frequently asked questions
          </h2>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                        <span className="font-medium text-white">
                          {faq.question}
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
                      <p className="text-base text-white/60">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
