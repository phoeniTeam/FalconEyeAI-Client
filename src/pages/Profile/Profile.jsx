import React, { useState } from "react";
import { FaUserTie, FaFilter } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import MagicIcon from '../../assets/icons/magician';
import CreditIcon from "../../assets/icons/creditIcon"; 
import styles from "../../styles";
import { creationsImages } from '../../assets';
import Modal from '../Profile/Modal';

function Profile() {
  const [inputColor, setInputColor] = useState(false); 
  const [name, setName] = useState("Abdulaziz"); 
  const [userName] = useState("@abdulaziz123");
  const [isModalOpen, setIsModalOpen] = useState(false); 

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

  return (
    <div className={styles.wrapper}>
      <div className="pt-2 px-4 flex flex-col justify-between">
        <div className="flex gap-8 items-start">
          <div className="relative w-24 h-24 flex justify-center items-center bg-[#1d1a1a] rounded-full">
            <FaUserTie
              size={48}
              className="text-white cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            />
          </div>

          <div className="flex flex-col mt-2">
            <input
              className="bg-transparent text-white outline-none mt-1 pr-16 py-1"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Edit your name"
            />
            
            <input
              className="bg-transparent text-gray-400 outline-none py-1"
              value={userName}
              readOnly
              placeholder="Username"
            />
            <div className="flex gap-10 mt-3">
              <div className="rounded-full p-1 items-center">
                <MagicIcon />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div className={`flex space-x-2 mt-4 mb-4 ${styles.paragraph1}`}>
            <span>Your</span>
            <span className={styles.primaryText}>Creations</span>
          </div>

          <div className="flex justify-start items-center gap-2">
            <label
              onFocus={() => setInputColor(true)}
              onBlur={() => setInputColor(false)}
              className={`flex items-center gap-2 input min-h-10 h-10 border border-grayLight outline-black
                ${inputColor ? "bg-[#131313]" : ""}  w-[38vw] rounded-full 
               focus-within:border-grayLight focus-within:outline-none`}
            >
              <IoSearch size={24} className="text-grayLight fill-current" />
              <input
                type="search"
                placeholder="Search..."
                className="placeholder:text-grayLight w-full bg-transparent outline-none"
              />
            </label>
            <div className="btn btn-circle border-none bg-[#131313] hover:bg-[#131313] min-h-10 h-10 w-10 ">
              <FaFilter className="text-grayLight w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className='columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 mt-5'>
          {creationsImages.map((creation, index) => (
            <div key={index} className='relative mb-3 break-inside-avoid cursor-pointer group'>
              <img
                className={`${styles.transition500} rounded-xl opacity-80 group-hover:opacity-100`}
                src={creation}
                alt={`Creation ${index + 1}`}
              />
              {/* Text on Hover */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-center px-4">
                  {imageDescriptions[index]}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center space-x-2 absolute lg:top-10 lg:right-16 right-10">
          <CreditIcon /> 
          <div className={`${styles.heading4} text-white`}>236</div> 
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default Profile;
