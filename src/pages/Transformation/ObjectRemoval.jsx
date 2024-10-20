import React from "react";
import styles from "../../styles";

function ObjectRemoval() {
  return (
    <div className="pt-2 px-9 w-full flex flex-col justify-between ">
      <div className="flex w-full items-center justify-between">
        <div className="flex flex-col items-start gap-4 ">
          <div className={`${styles.heading3} text-white `}>Object Removal</div>
          <div className={`${styles.paragraph2} text-white `}>
            Identify and elimante objects from image
          </div>
        </div>
        <div className=" ">
          <svg
            width="110"
            height="110"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100.041 183.356C54.0169 183.356 16.7073 146.047 16.7073 100.022C16.7073 53.9992 54.0169 16.6896 100.041 16.6896C146.064 16.6896 183.374 53.9992 183.374 100.022C183.374 146.047 146.064 183.356 100.041 183.356ZM100.041 64.6676L64.6853 100.022L100.041 135.378L135.396 100.022L100.041 64.6676Z"
              fill="url(#paint0_linear_132_2)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_132_2"
                x1="100.041"
                y1="16.6896"
                x2="100.041"
                y2="183.356"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#333399" />
                <stop offset="0.5" stop-color="#333399" />
                <stop offset="1" stop-color="#FF00CC" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="imageTitle" className="text-white">Image Title</label>
        <input
          type="text"
          id="imageTitle"
          className="input input-bordered text-white border border-[#38383E]
    focus-within:border-[#38383E] min-h-10 h-11 w-full outline-none focus:outline-none"
        />
      </div>
    </div>
  );
}

export default ObjectRemoval;
