import React, { useState } from "react";
import styles from "../../styles";
import { FaFilter } from "react-icons/fa6";
import { creationsImages } from "../../assets";

function Home() {
  const [inputColor, setInputColor] = useState(false);
  return (
    <div className="flex-grow">
      <div className="pt-2 px-4 w-full flex flex-col justify-between">
        <div className={`${styles.heading3} text-center py-3 text-white `}>
          Unleash Your Creativity <br />
          With{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#333399] via-[#333399] to-[#FF00CC]">
            FalconEye
          </span>
        </div>
        <div className={`flex flex-col gap-2 py-3 px-10`}>
          <div className={`${styles.heading5} text-white `}>
            {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#333399] via-[#333399] to-[#FF00CC]">
              {" "}
              Community{" "}
            </span>
            Creations
          </div>
          <div className="flex justify-start items-center gap-2">
            <label
              onFocus={() => setInputColor(true)}
              onBlur={() => setInputColor(false)}
              className={`flex items-center gap-2 input min-h-10 h-10 border border-[#38383E] outline-black
                ${inputColor ? 'bg-[#131313]' : ''}  w-[38vw] rounded-full 
               focus-within:border-[#38383E] focus-within:outline-none`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="#38383E"
                className="h-5 w-5 opacity-70"
              >
                <path
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                />
              </svg>
              <input
                type="search"
                placeholder="Search..."
                className="text-white placeholder:text-[#38383E] w-full"
              />
            </label>
            <div className="btn  btn-circle border-none bg-[#131313] hover:bg-[#131313] min-h-10 h-10 w-10 ">
              <FaFilter className="text-[#38383E] w-5 h-5" />
            </div>
          </div>
        </div>

        <div className='columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 '>
          {creationsImages.map((creation, index) => (
            <div key={index} className='mb-4 break-inside-avoid cursor-pointer'>
              <img className={`${styles.transition500} rounded-xl opacity-80 hover:opacity-100`} src={creation} alt="Photo" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
