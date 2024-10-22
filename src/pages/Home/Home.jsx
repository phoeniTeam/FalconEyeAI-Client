import React, { useState } from "react";
import styles from "../../styles";
import { FaFilter } from "react-icons/fa6";
import { creationsImages } from "../../assets";
import user from "../../assets/home/users/user.webp"; // Corrected import for the single user image
import { IoSearch } from "react-icons/io5";

function Home() {
  const [inputColor, setInputColor] = useState(false);

  const imageDescriptions = [
    "This is the description for image 1.",
    "This is the description for image 2.",
    "This is the description for image 3.",
    "This is the description for image 4.",
    "This is the description for image 5.",
    "This is the description for image 6.",
    "This is the description for image 7.",
    "This is the description for image 8.",
    "This is the description for image 9.",
    "This is the description for image 10."
  ];

  const userNames = [
    "User 1",
    "User 2",
    "User 3",
    "User 4",
    "User 5",
    "User 6",
    "User 7",
    "User 8",
    "User 9",
    "User 10"
  ];

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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-secondary">
              Community
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

        {/* Gallery Section */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 mt-5">
          {creationsImages.map((creation, index) => (
            <div key={index} className="relative mb-4 break-inside-avoid cursor-pointer group">
              {/* Image section */}
              <img
                className={`${styles.transition500} rounded-xl opacity-80 group-hover:opacity-100`}
                src={creation}
                alt={`Creation ${index + 1}`}
              />

             
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
                {/* User info */}
                <div className="flex items-center gap-2  p-2 rounded-lg w-full">
                  <img
                    src={user} 
                    alt={`User ${index + 1}`}
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-white text-sm">{userNames[index]}</span>
                </div>

                {/* Text description */}
                <p className="text-white text-center px-4 absolute bottom-3 p-2  bg-black bg-opacity-50 flex flex-col justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {imageDescriptions[index]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
