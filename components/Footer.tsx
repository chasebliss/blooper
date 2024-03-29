import React from 'react';
import CBAMarkIcon from './Icons/CBAMarkIcon';
import FooterLinkList from './FooterLinkList';

const DATA = [
  {
    id: 0,
    heading: 'Company',
    items: [
      { id: 0, title: 'About', link: 'https://www.chasebliss.com/about' },
      { id: 1, title: 'Store', link: 'https://www.chasebliss.com' },
      {
        id: 3,
        title: 'Newsletter sign up',
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

interface FooterProps {
  className: string;
}

const currentYear = new Date().getFullYear();

const Footer = ({ className }: FooterProps) => {
  return (
    <footer
      className={`flex flex-col md:flex-row gap-12 relative mx-[7vw] pb-16 md:pb-24  justify-around ${className}`}
    >
      <div className="flex flex-col items-center justify-center md:justify-start">
        <CBAMarkIcon className="h-fit fill-blooperDarkBlue dark:fill-white pb-12 w-[150px] lg:w-[200px]" />
        <div className="text-sm dark:text-white text-blooperDarkBlue/80 h-fit max-w-[250px] ">
          Created and copyrighted in {currentYear} - by
          <a
            href="https://www.youtube.com/watch?v=izDc3G9ZRfw"
            className="border-b h-fit border-blooperBlue01 ml-1"
          >
            cba,
          </a>
          <a
            href="https://www.knobscreative.com/"
            className="border-b h-fit border-blooperBlue01 ml-1"
          >
            knobs
          </a>{' '}
          and
          <a
            href="https://www.jsfowles.com"
            className="border-b h-fit border-blooperBlue01 ml-1"
          >
            jsfowles.
          </a>
        </div>
      </div>
      {DATA.map((section) => (
        <FooterLinkList
          key={section.id}
          heading={section.heading}
          items={section.items}
        />
      ))}
    </footer>
  );
};

export default Footer;
