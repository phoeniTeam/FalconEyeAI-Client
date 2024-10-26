import React from 'react';

function SmallCreditIcon({ width = 32, height = 32 }) {
    return (
        <svg
            width={width}
            height={height}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M29.3369 15.9935C29.3369 23.3573 23.3674 29.3268 16.0036 29.3268C8.63982 29.3268 2.67029 23.3573 2.67029 15.9935C2.67029 8.62975 8.63982 2.66015 16.0036 2.66015C23.3674 2.66015 29.3369 8.62975 29.3369 15.9935ZM10.3468 15.9935L16.0036 21.6504L21.6605 15.9935L16.0036 10.3367L10.3468 15.9935Z"
                fill="url(#paint0_linear_159_15)"
            />
            <defs>
                <linearGradient
                    id="paint0_linear_159_15"
                    x1="2.67029"
                    y1="15.9935"
                    x2="29.3369"
                    y2="15.9935"
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
