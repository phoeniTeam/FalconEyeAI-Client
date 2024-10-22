import React, { useState } from "react";
import styles from "../../styles";
import { FaFilter } from "react-icons/fa6";
import { creationsImages } from "../../assets";
import { IoSearch } from "react-icons/io5";

function Home() {
  const [inputColor, setInputColor] = useState(false);
  return (
    <div className={`px-9 flex-grow overflow-auto py-8 `}>
      <div className="w-full flex flex-col justify-between">
        <div className={`${styles.heading1} text-center`}>
          Unleash Your Creativity <br />
          With{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-secondary">
            FalconEye
          </span>
        </div>
        <div className={`flex flex-col gap-2 pb-5 pt-10`}>
          <div className={`${styles.heading5}  `}>
            {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-secondary">
              {" "}
              Community{" "}
            </span>
            Creations
          </div>
          <div className="flex justify-start items-center gap-2">
            <label
              onFocus={() => setInputColor(true)}
              onBlur={() => setInputColor(false)}
              className={`flex items-center gap-2 input min-h-10 h-10 border border-grayLight outline-black
                ${inputColor ? "bg-[#131313]" : ""} w-[55vw] lg:w-[38vw] rounded-full 
               focus-within:border-grayLight focus-within:outline-none`}
            >
              <IoSearch size={24} className="text-grayLight fill-current" />
              <input
                type="search"
                placeholder="Search..."
                className=" placeholder:text-grayLight w-full"
              />
            </label>
            <div className="btn btn-circle border-none bg-[#131313] hover:bg-[#131313] min-h-10 h-10 w-10 ">
              <FaFilter className="text-grayLight w-5 h-5" />
            </div>
          </div>
        </div>

        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 ">
          {creationsImages.map((creation, index) => (
            <div
              key={index}
              className="mb-4 break-inside-avoid cursor-pointer"
            >
              <img
                className={`${styles.transition500} rounded-xl opacity-80 hover:opacity-100`}
                src={creation}
                alt="Photo"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
    );
}

export default Home;
