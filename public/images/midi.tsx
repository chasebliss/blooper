import * as React from 'react';
import { SVGProps } from 'react';

const MidiLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 1000 455"
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    {...props}
  >
    <path
      aria-label="M"
      d="M137 96h233c19.6 0 31 16.9 31 37v229h-65V163h-38v199h-59V163h-37v199h-65V96z"
    />
    <path aria-label="I" d="M433 96h65v266h-65z" />
    <path
      aria-label="D"
      d="M529 96h193c19.6 0 31 16.9 31 37v196c0 24.9-10.4 33-33 33H529V193h66v104h93V156H529V96z"
    />
    <path aria-label="I" d="M783 96h66v266h-66z" />
  </svg>
);

export default MidiLogo;
