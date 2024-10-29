import React, { useState } from "react";
import { FaUserTie, FaEdit, } from "react-icons/fa";
import { IoSearch, IoPencilOutline, IoCheckmarkOutline } from "react-icons/io5";
import styles from "../../styles";
import Modal from '../Profile/Modal';
import ImageCard from '../../components/ImageCard.jsx';
import CreditIcon from "../../assets/icons/creditIcon";
import useUserProfile from '../../hooks/creator/useUserProfile.js';
import searchForImage from '../../utils/searchForTerm.js';
import Filter from '../../components/Filter.jsx';
import CheckmarkIcon from "../../assets/icons/CheckmarkIcon.jsx";
import MagicIcon from "../../assets/icons/magician.jsx"



function Profile() {
  const [inputColor, setInputColor] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('All');
  const [isEditing, setIsEditing] = useState(false);
  const {
    name,
    userName,
    creditBalance,
    creations,
    profilePhoto,
    loading,
    error,
    setName,
    updateName,
    updateProfilePhoto,
  } = useUserProfile();

  const transformationMap = {
    'All': null,
    'Image-Restore': 'image-restore',
    'Generative-Fill': 'generative-fill',
    'Object-Removal': 'object-removal',
    'Object-Recolor': 'object-recolor',
    'Background-Removal': 'e_background_removal',
  };

  const filteredCreations = searchForImage(searchTerm, creations).filter(image => {
    const dbValue = transformationMap[filterType];
    return dbValue ? image.transformationType.toLowerCase() === dbValue : true;
  });

  const handleFilterChange = (type) => {
    setFilterType(type);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      updateName(name);
      setIsEditing(false);
    }
  };

  return (
    <div className={styles.innerWrapper}>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div
                className="relative w-24 h-24 flex justify-center items-center bg-[#1d1a1a] rounded-full cursor-pointer"
                onClick={() => setIsModalOpen(true)}
              >
                {profilePhoto ? (
                  <img
                    src={profilePhoto}
                    alt="Profile"
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  <FaUserTie size={48} className="text-white" />
                )}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center">
                  {isEditing ? (
                    <input
                      className="bg-transparent outline-none mt-1 border-b-[1px] w-36 border-gray-300 text-lg focus:border-blue-500 transition duration-50"
                      value={name}
                      onChange={handleNameChange}
                      onKeyDown={handleKeyDown}
                      onFocus={() => setInputColor(true)}
                      onBlur={() => setInputColor(false)}
                    />
                  ) : (
                    <span className="text-white text-xl">{name}</span>
                  )}

                  <div className="ml-2 flex-shrink-0 cursor-pointer"
                    onClick={() => {
                      if (isEditing) {
                        updateName(name);
                        setIsEditing(false);
                      } else {
                        setIsEditing(true);
                      }
                    }}
                  >
                    {isEditing ? (
                      <CheckmarkIcon size={20} className="text-white hover:text-gray-400 transition duration-200 mt-5" />
                    ) : (
                      <FaEdit size={17} className="text-white hover:text-gray-400 transition duration-200" />
                    )}
                  </div>
                </div>



                <input
                  className="bg-transparent text-gray-400 outline-none py-1 text-sm"
                  value={userName}
                  readOnly
                  placeholder="Username"
                />

                <div className="flex items-center mt-2">
                  <MagicIcon width={18} height={18} /> 
                  <span className="text-white relative left-2">{creations.length}</span>
                </div>

                {error && <div className="text-red-500">{error}</div>}
              </div>
            </div>


            <div className="flex items-center gap-2 mb-14 relative lg:right-0 right-12">
              <CreditIcon />
              <div className={`${styles.heading4}`}>{creditBalance}</div>
            </div>
          </div>

          <div className="flex flex-col justify-between mt-6">
            <div className="mt-10">
              <div className={`flex space-x-2 mt-3 mb-2 ${styles.paragraph1}`}>
                <span>Your</span>
                <span className={styles.primaryText}>Creations</span>
              </div>

              <div className="flex justify-start items-center gap-2">
                <label
                  onFocus={() => setInputColor(true)}
                  onBlur={() => setInputColor(false)}
                  className={`flex items-center gap-2 input min-h-10 h-10 border border-grayLight outline-black ${inputColor ? 'bg-[#131313]' : ''} w-[55vw] lg:w-[38vw] rounded-full focus-within:border-grayLight focus-within:outline-none`}
                >
                  <IoSearch size={24} className="text-grayLight fill-current" />
                  <input
                    type="search"
                    placeholder="Search..."
                    className="placeholder:text-grayLight w-full"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </label>
                <Filter onFilterChange={handleFilterChange} />
              </div>
            </div>

            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 mt-10">
              {filteredCreations.map((image, index) => (
                <ImageCard
                  key={index}
                  image={image.transformationUrl}
                  description={image.title}
                />
              ))}
            </div>
          </div>

          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onConfirm={updateProfilePhoto}
          />
        </>
      )
      }
    </div >
  );
}

export default Profile;
