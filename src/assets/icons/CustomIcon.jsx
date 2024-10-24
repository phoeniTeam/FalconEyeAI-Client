import React from 'react';

function CustomIcon( { width = 20, height = 20 }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.3356 9.996C18.3356 14.5984 14.6047 18.3293 10.0022 18.3293C5.3999 18.3293 1.66895 14.5984 1.66895 9.996C1.66895 5.39366 5.3999 1.66266 10.0022 1.66266C14.6047 1.66266 18.3356 5.39366 18.3356 9.996ZM6.46674 9.996L10.0022 13.5315L13.5378 9.996L10.0022 6.4605L6.46674 9.996Z"
        fill="url(#paint0_linear_332_2)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_332_2"
          x1="1.66895"
          y1="9.996"
          x2="18.3356"
          y2="9.996"
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
