const actions = [
  {
    title: 'Resources',
    href: '#',
    iconBackground: 'bg-moodDarkRed/20',
    img: '/images/s1.png',
  },
  {
    title: 'Modifiers',
    href: '#',
    iconBackground: 'bg-preampBlue/10',
    img: '/images/s2.png',
  },
  {
    title: 'Interface',
    href: '#',
    iconBackground: 'bg-thermaeGold/30',
    img: '/images/s3.png',
  },
  {
    title: 'Midi',
    href: '#',
    iconBackground: 'bg-moodLightRed/20',
    img: '/images/s9.png',
  },
  {
    title: 'FAQ',
    href: '#',
    iconBackground: 'bg-moodBlue/20',
    img: '/images/s5.png',
  },
  {
    title: 'Contact',
    href: '#',
    iconBackground: 'bg-darkWorldGreen/40',

    img: '/images/s4.png',
  },
]

// @ts-ignore
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="drop-shadow-2xl rounded-3xl bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px col-start-2 col-span-2 ">
      {actions.map((action, actionIdx) => (
        <div
          key={action.title}
          className={classNames(
            actionIdx === 0
              ? 'rounded-tl-3xl rounded-tr-3xl sm:rounded-tr-none'
              : '',
            actionIdx === 1 ? 'sm:rounded-tr-3xl' : '',
            actionIdx === actions.length - 2 ? 'sm:rounded-bl-3xl' : '',
            actionIdx === actions.length - 1
              ? 'rounded-bl-3xl rounded-br-3xl sm:rounded-bl-none'
              : '',
            'relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500'
          )}
        >
          <div>
            <span
              className={classNames(
                action.iconBackground,
                'rounded-3lg inline-flex p-3 ring-4 ring-white'
              )}
            >
              <img src={action.img} className="h-6 w-6" />
            </span>
          </div>
          <div className="mt-8">
            <h3 className="text-lg font-medium">
              <a href={action.href} className="focus:outline-none">
                {/* Extend touch target to entire panel */}
                <span className="absolute inset-0" aria-hidden="true" />
                {action.title}
              </a>
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Doloribus dolores nostrum quia qui natus officia quod et dolorem.
              Sit repellendus qui ut at blanditiis et quo et molestiae.
            </p>
          </div>
          <span
            className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
            aria-hidden="true"
          >
            <svg
              className="h-6 w-6"
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
  )
}
