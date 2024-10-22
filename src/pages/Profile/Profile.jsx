import React, { useState } from "react";
import { FaUserTie, FaFilter, FaDotCircle, FaEdit } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaWandMagicSparkles } from "react-icons/fa6";
import styles from "../../styles";
import { creationsImages } from '../../assets';

function Profile() {
  const [name, setName] = useState("Abdulaziz"); // Editable name
  const [userName] = useState("abdulaziz123"); // Non-editable username
  const [userImage, setUserImage] = useState(null); // For uploaded image

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

  const handleImageUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = URL.createObjectURL(e.target.files[0]); // Create a URL for the uploaded image
      setUserImage(file);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className="pt-2 px-4 flex flex-col justify-between">
        <div className="flex gap-8 items-start">
          <div className="relative w-24 h-24 flex justify-center items-center bg-[#1d1a1a] rounded-full">
            {userImage ? (
              <img
                src={userImage}
                alt="User"
                className="w-full h-full object-cover rounded-full cursor-pointer"
                onClick={() => document.getElementById('file-input').click()}
              />
            ) : (
              <FaUserTie
                size={48}
                className="text-white cursor-pointer"
                onClick={() => document.getElementById('file-input').click()}
              />
            )}
            <input
              type="file"
              id="file-input"
              accept="image/*"
              onChange={handleImageUpload}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <FaEdit className="absolute top-0 left-24 text-darkWhite fill-current cursor-pointer" />
          </div>

          <div className="flex flex-col mt-2">
            {/* Editable name input */}
            <input
              className="bg-transparent text-white border-b border-white outline-none mt-1 pr-16 py-1"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Edit your name"
            />
            
            {/* Non-editable username input */}
            <input
              className="bg-transparent text-gray-400 border-b border-gray-400 outline-none mt-1 py-1"
              value={userName}
              readOnly
              placeholder="Username"
            />
            <div className="flex gap-10 mt-3">
              <div className={`${styles.primaryBackground} rounded-full p-1 items-center`}>
                <FaDotCircle className="text-white" size={20} />
              </div>
              <div className={`${styles.primaryBackground} rounded-full p-1 items-center`}>
                <FaWandMagicSparkles className="text-white" size={20} />
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
      </div>
    </div>
  );
}

export default Profile;
