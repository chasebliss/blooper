import React from 'react';

interface ItemProps {
  id: number;
  title: string;
  link: string;
}

interface FooterLinkListProps {
  heading: string;
  items: ItemProps[];
}

const FooterLinkList: React.FC<FooterLinkListProps> = ({ heading, items }) => (
  <ul className="flex flex-col space-y-3 w-fit">
    <h4>{heading}</h4>
    <div className="flex flex-col space-y-2">
      {items.map((item) => (
        <li key={item.id} className="text-xl ">
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            {item.title}
          </a>
        </li>
      ))}
    </div>
  </ul>
);

export default FooterLinkList;
