import React from 'react';

function MagicIcon({ width = 20, height = 20 }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="paint0_linear_299_2"
          x1="11.3333"
          y1="5.9993"
          x2="0"
          y2="5.9993"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4D91FF" />
          <stop offset="0.5" stopColor="#620A9C" />
          <stop offset="1" stopColor="#FF00CC" />
        </linearGradient>
        <clipPath id="clip0_299_2">
          <rect width="12" height="12" fill="white" />
        </clipPath>
      </defs>
      <g clipPath="url(#clip0_299_2)">
        <path
          d="M4.88958 1.55633L4.10417 1.85008C4.04167 1.873 4 1.93341 4 2.00008C4 2.06675 4.04167 2.12716 4.10417 2.15008L4.88958 2.44383L5.18333 3.22925C5.20625 3.29175 5.26667 3.33341 5.33333 3.33341C5.4 3.33341 5.46042 3.29175 5.48333 3.22925L5.77708 2.44383L6.5625 2.15008C6.625 2.12716 6.66667 2.06675 6.66667 2.00008C6.66667 1.93341 6.625 1.873 6.5625 1.85008L5.77708 1.55633L5.48333 0.770915C5.46042 0.708415 5.4 0.666748 5.33333 0.666748C5.26667 0.666748 5.20625 0.708415 5.18333 0.770915L4.88958 1.55633ZM0.960417 8.90425C0.570833 9.29383 0.570833 9.92716 0.960417 10.3188L1.68125 11.0397C2.07083 11.4292 2.70417 11.4292 3.09583 11.0397L11.0396 3.09383C11.4292 2.70425 11.4292 2.07091 11.0396 1.67925L10.3188 0.960498C9.92917 0.570915 9.29583 0.570915 8.90417 0.960498L0.960417 8.90425ZM10.0958 2.38758L7.90833 4.57508L7.42292 4.08966L9.61042 1.90216L10.0958 2.38758ZM0.15625 3.10841C0.0625 3.14383 0 3.23341 0 3.33341C0 3.43341 0.0625 3.523 0.15625 3.55841L1.33333 4.00008L1.775 5.17716C1.81042 5.27091 1.9 5.33341 2 5.33341C2.1 5.33341 2.18958 5.27091 2.225 5.17716L2.66667 4.00008L3.84375 3.55841C3.9375 3.523 4 3.43341 4 3.33341C4 3.23341 3.9375 3.14383 3.84375 3.10841L2.66667 2.66675L2.225 1.48966C2.18958 1.39591 2.1 1.33341 2 1.33341C1.9 1.33341 1.81042 1.39591 1.775 1.48966L1.33333 2.66675L0.15625 3.10841ZM7.48958 8.44175C7.39583 8.47717 7.33333 8.56675 7.33333 8.66675C7.33333 8.76675 7.39583 8.85633 7.48958 8.89175L8.66667 9.33341L9.10833 10.5105C9.14375 10.6042 9.23333 10.6667 9.33333 10.6667C9.43333 10.6667 9.52292 10.6042 9.55833 10.5105L10 9.33341L11.1771 8.89175C11.2708 8.85633 11.3333 8.76675 11.3333 8.66675C11.3333 8.56675 11.2708 8.47717 11.1771 8.44175L10 8.00008L9.55833 6.823C9.52292 6.72925 9.43333 6.66675 9.33333 6.66675C9.23333 6.66675 9.14375 6.72925 9.10833 6.823L8.66667 8.00008L7.48958 8.44175Z"
          fill="url(#paint0_linear_299_2)"
        />
      </g>
    </svg>
  );
}

export default MagicIcon;
