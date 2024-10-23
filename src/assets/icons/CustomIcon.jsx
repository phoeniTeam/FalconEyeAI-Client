import React from 'react';

function CustomIcon({ size = 20 }) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 32 32"
      height={size}
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
       <path d="M16 4C9.383 4 4 9.383 4 16s5.383 12 12 12 12-5.383 12-12S22.617 4 16 4zm0 2c5.535 0 10 4.465 10 10s-4.465 10-10 10S6 21.535 6 16 10.465 6 16 6zm0 7a3 3 0 1 0 .002 6.002A3 3 0 0 0 16 13z" 
       fill="url(#paint0_linear_159_7)" />
  <defs>
        <linearGradient
          id="paint0_linear_159_7"
          x1="3.33789"
          y1="19.9918"
          x2="36.6711"
          y2="19.9918"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#333399" />
          <stop offset="0.5" stopColor="#333399" />
          <stop offset="1" stopColor="#FF00CC" />
        </linearGradient>
      </defs>



     
    </svg>
  );
}

export default CustomIcon;
