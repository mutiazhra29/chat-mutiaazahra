import type { SVGProps } from 'react';

export default function LollipopIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M37 35 50 57"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <circle cx="27" cy="24" r="19" fill="#F28FB3" />
      <path
        d="M15.5 31.5a15 15 0 0 0 21-21L15.5 31.5Z"
        fill="#FFF2D7"
      />
      <path
        d="M13.5 15.5a19 19 0 0 1 27 0c7.5 7.5 5.3 18.5-2.2 24.5-6.5 5.2-15 4.3-21.5-2.2s-6.4-15.8.1-22.3c5.8-5.8 14.8-5.5 20.1.1 4.4 4.7 3.6 11.6-1.1 15.8-3.8 3.4-9.4 3.3-12.8-.5"
        stroke="#C85D85"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
