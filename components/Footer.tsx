import React from 'react';
import MarkLogo from '../public/images/cba-mark';

const DATA = [
  {
    id: 0,
    heading: 'Company',
    items: [
      { id: 0, title: 'About', link: 'https://www.chasebliss.com/about' },
      { id: 1, title: 'Store', link: 'https://www.chasebliss.com' },
      {
        id: 3,
        title: 'Mailing List',
        link: 'https://www.chasebliss.com/mailing-list/about',
      },
    ],
  },
  {
    id: 2,
    heading: 'Social',
    items: [
      {
        id: 0,
        title: 'YouTube',
        link: 'https://www.youtube.com/channel/UCAPwhELXDP5lpUZUeCwK35Q',
      },
      {
        id: 1,
        title: 'Instagram',
        link: 'https://www.instagram.com/chasebliss/',
      },
      { id: 2, title: 'Facebook', link: 'https://www.facebook.com/chasebliss' },
      { id: 3, title: 'Twitter', link: 'https://twitter.com/chasebliss' },
      {
        id: 4,
        title: 'Soundcloud',
        link: 'https://soundcloud.com/chaseblissaudio',
      },
    ],
  },
];
const Footer = () => {
  return (
    <footer className="flex flex-col items-center md:flex-row px-[2vw] py-16 mt-32 border-t-2 border-gray-200">
      <MarkLogo className="fill-blooperDarkBlue pb-12 lg:pb-0" width={120} />
      <div className=" flex w-full justify-evenly">
        {DATA.map(({ id, heading, items }) => (
          <ul key={id} className="flex flex-col space-y-3">
            <h4>{heading}</h4>
            <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4 flex-wrap">
              {items.map((item) => (
                <a key={item.id}>
                  <li className="flex text-xl">{item.title}</li>
                </a>
              ))}
            </div>
          </ul>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
