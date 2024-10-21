import React from "react";
import { FaUserTie, FaFilter } from "react-icons/fa";
import { MdStars } from "react-icons/md";
import { FaDotCircle } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import styles from "../../styles";
import { IoSearch } from "react-icons/io5";
import { creationsImages } from '../../assets';
import { motion } from "framer-motion";

function Profile() {
  return (
    <div className={styles.wrapper}>
      <div className="pt-2 px-4 flex flex-col justify-between">
        <div className="flex gap-8 items-start">
          <div className=" relative w-24 h-24 flex justify-center items-center bg-[#1d1a1a] rounded-full">
            <FaUserTie size={48} className="text-white" />
            <FaEdit className=" absolute top-0 left-24 text-darkWhite fill-current cursor-pointer" />
          </div>

          <div className="flex flex-col mt-2">
            <p className={styles.paragraph1}>Abdulaziz</p>
            <div className="flex gap-10 mt-3 ">
              <div
                className={`${styles.primaryBackground} rounded-full p-1 items-center`}
              >
                <FaDotCircle className="text-white" size={20} />
              </div>
              <div
                className={`${styles.primaryBackground} rounded-full p-1 items-center`}
              >
                <MdStars className="text-white" size={20} />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div className={`flex space-x-2 mt-4 mb-4 ${styles.paragraph1}`}>
            <span>Your</span>
            <span className={styles.primaryText}>Creations</span>
          </div>

          <div className="flex items-center">
            <div className="flex items-center w-[100%]">
              <IoSearch className="h-5 w-5 ml-2 opacity-70 text-[#38383E]" />
              <input
                type="search"
                placeholder="Search..."
                className="text-white placeholder:text-[#38383E] bg-transparent focus:outline-none w-full pl-2"
              />
            </div>
            <div className="ml-3 btn btn-circle border-none bg-[#131313] hover:bg-[#131313] min-h-10 h-10 w-10">
              <FaFilter className="text-[#38383E] w-5 h-5" />
            </div>
          </div>
        </div>

        <div className='columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 mt-5 '>
                    {creationsImages.map((creation, index) => (
                        <div key={index} className='mb-3 break-inside-avoid cursor-pointer'>
                            <img className={`${styles.transition500} rounded-xl opacity-80 hover:opacity-100`} src={creation} alt="Photo" />
                        </div>
                    ))}
                </div>
      </div>
    </div>
  );
}

export default Profile;
