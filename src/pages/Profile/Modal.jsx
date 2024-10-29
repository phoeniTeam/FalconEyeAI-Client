import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { FaUpload, FaRedo } from 'react-icons/fa';
import defaultUserImage from '../../assets/home/users/default-user.png';
import styles from '../../styles';

const Modal = ({ isOpen, onClose, onConfirm }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleOutsideClick = (e) => {
    if (e.target.className.includes('modal-overlay')) {
      onClose();
    }
  };

  const handleImageUpload = (file) => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(file);
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleConfirmImage = () => {
    const imageToSave = imagePreview || defaultUserImage;
    onConfirm(imageToSave);
    onClose();
  };

  const handleImageReset = () => {
    setSelectedImage(null);
    setImagePreview(null);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const files = e.dataTransfer.files;
    if (files && files[0]) {
      handleImageUpload(files[0]);
    }
  };

  return (
    <>
      {isOpen && (
        <div
          className="modal-overlay fixed inset-0 flex justify-center items-center z-50 
                     bg-black bg-opacity-10 backdrop-filter backdrop-blur-md"
          onClick={handleOutsideClick}
        >
          <div className={`modal-content bg-gray-800 max-w-md w-96 p-7 rounded-md shadow-2xl relative`}>
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
              onClick={onClose}
              title="Close"
            >
              <IoMdClose size={24} />
            </button>

            <h2 className={`${styles.heading4} text-center text-white mb-6`}>
              Upload Profile Photo
            </h2>

            <div className="flex flex-col items-center mb-6">
              <div className="relative w-36 h-36 mb-4">
                <img
                  src={imagePreview || defaultUserImage}
                  alt="Profile"
                  className="w-full h-full rounded-full border-4 border-blue-500 shadow-lg object-cover"
                />
                {imagePreview && (
                  <button
                    onClick={handleImageReset}
                    className="absolute bottom-1 right-1 p-1 rounded-full bg-red-500 hover:bg-red-600 text-white transition"
                    title="Reset"
                  >
                    <FaRedo />
                  </button>
                )}
              </div>

              <div 
                className="border-dashed border-2 border-gray-500 p-4 w-full text-center cursor-pointer hover:bg-gray-700 transition"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onClick={() => document.getElementById('file-input').click()} 
              >
                <p className="text-white mb-2">Drag & Drop your image here or</p>
                <p className="text-white inline-flex items-center">
                  <FaUpload className="mr-2" />
                  <span>Upload Image</span>
                </p>
                <input
                  type="file"
                  id="file-input"
                  accept="image/*"
                  onChange={(e) => handleImageUpload(e.target.files[0])}
                  className="hidden"
                />
              </div>

              <button
                onClick={handleConfirmImage}
                className={`${styles.newGradientButton} text-white py-2 px-4 rounded transition mt-4`}
              >
                Confirm Upload
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
