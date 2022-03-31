import React from 'react';
import Image from 'next/image';

const actions = [
  {
    title: 'Resources',
    description:
      'What the blooper is, how it works, and how to get the most' +
      ' out of it.',
    href: '/resources',
    iconBackground: 'bg-blooperBlue01',
    img: '/particles/s1.svg',
  },
  {
    title: 'Modifiers',
    description: "A closer look at blooper's cast of modifiers",
    href: '/modifiers',
    iconBackground: 'bg-blooperBlue01',
    img: '/particles/s3.svg',
  },
  {
    title: 'Interface',
    description:
      'Connect directly to your blooper to download saved loops,' +
      ' update firmware, or customize your modifiers.',
    href: 'https://chasebliss.github.io',
    iconBackground: 'bg-blooperBlue01',
    img: '/particles/s4.svg',
  },
  {
    title: 'Midi',
    description:
      'The ins and out of getting blooper talking with other devices',
    href: '/midi',
    iconBackground: 'bg-blooperBlue01',
    img: '/particles/s7.svg',
  },
  {
    title: 'FAQ',
    description: 'Some things you might be wondering about.',
    href: 'faq',
    iconBackground: 'bg-blooperBlue01',
    img: '/particles/s9.svg',
  },
  {
    title: 'Contact',
    description: 'Hi, we are friendly',
    href: 'mailto:https://info@chaseblissaudio.com',
    iconBackground: 'bg-blooperBlue01',
    img: '/particles/s10.svg',
  },
];

export default function Example() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 lg:px-[7vw] py-16">
      {actions.map((action) => (
        <div key={action.title} className="relative p-6 hover:bg-black/10">
          <div>
            <span
              className={`${action.iconBackground} rounded-3lg inline-flex p-3 ring-4 ring-white rounded-xl`}
            >
              <Image width={24} height={24} src={action.img} />
            </span>
          </div>
          <div className="mt-1">
            <h3 className="font-medium">
              <a href={action.href} className="focus:outline-none">
                <span className="absolute inset-0" aria-hidden="true" />
                {action.title}
              </a>
            </h3>
            <p className="mt-4 w-full">{action.description}</p>
          </div>
          <span
            className="absolute top-6 right-6 pointer-events-none"
            aria-hidden="true"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
            </svg>
          </span>
        </div>
      ))}
    </div>
  );
}
