import React from 'react';

function SmallCreditIcon({ size = 10 }) {
  return (
    <svg 
      width={size} 
      height={size} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M36.6711 19.9918C36.6711 29.1966 29.2093 36.6585 20.0045 36.6585C10.7998 36.6585 3.33789 29.1966 3.33789 19.9918C3.33789 10.7871 10.7998 3.32514 20.0045 3.32514C29.2093 3.32514 36.6711 10.7871 36.6711 19.9918ZM12.9335 19.9918L20.0045 27.0629L27.0756 19.9918L20.0045 12.9208L12.9335 19.9918Z"
        fill="url(#paint0_linear_159_7)"
      />
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

export default SmallCreditIcon;
