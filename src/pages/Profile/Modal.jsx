import React, { useEffect, useState } from 'react';
import { IoMdClose, IoMdCloudUpload, IoMdRefresh } from 'react-icons/io';
import { FaUserTie } from 'react-icons/fa';
import { GiConfirmed } from 'react-icons/gi';
import styles from '../../styles';

const Modal = ({ isOpen, onClose }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      onClose();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageReset = () => {
    setSelectedImage(null);
  };

  const handleConfirmImage = () => {
    if (selectedImage) {
      console.log('Image confirmed:', selectedImage);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 modal-overlay"
      onClick={handleOutsideClick}
    >
      <div className={`bg-grayDark rounded-lg shadow-lg p-8 w-full max-w-md sm:max-w-lg relative mx-4 ${styles.modalContainer}`}>
        <button onClick={onClose} className={`absolute top-4 right-4 ${styles.closeButton}`}>
          <IoMdClose size={24} />
        </button>

        <h2 className={`text-2xl font-semibold text-center mb-6 ${styles.primaryText}`}>Edit Your Photo</h2>

        <div className="flex flex-col items-center mb-4">
          {selectedImage ? (
            <img
              src={selectedImage}
              alt="User"
              className={`w-28 h-28 object-cover rounded-full shadow-lg mb-4 ${styles.imagePreview}`}
            />
          ) : (
            <FaUserTie className={`w-28 h-28 text-gray-400 mb-4 ${styles.defaultIcon}`} />
          )}
          <p className={`text-center ${styles.secondaryText}`}>You can upload or change your photo here.</p>
        </div>

        <div className="flex justify-between items-center w-full mt-6 space-x-2">
          <label className={`flex items-center justify-center cursor-pointer py-2 px-4 rounded-lg shadow-md transition-all focus:outline-none ${styles.primaryButton}`}>
            <IoMdCloudUpload size={24} className="mr-2" />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
            Upload Photo
          </label>

          <button
            onClick={handleImageReset}
            className={`flex items-center justify-center py-2 px-4 rounded-lg shadow-md transition-all focus:outline-none ${selectedImage ? styles.resetButtonActive : styles.resetButtonDisabled}`}
            disabled={!selectedImage}
          >
            <IoMdRefresh size={24} className="mr-2" />
            Reset
          </button>

          <button
            onClick={handleConfirmImage}
            className={`flex items-center justify-center py-2 px-4 rounded-lg shadow-md focus:outline-none ${selectedImage ? styles.confirmButtonActive : styles.confirmButtonDisabled}`}
            disabled={!selectedImage}
          >
            <GiConfirmed size={24} className="mr-2" />
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
