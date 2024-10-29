import React, { useState } from 'react';
import { IoMdClose, IoMdCloudUpload, IoMdRefreshCircle } from 'react-icons/io';
import { BsFillCheckCircleFill } from 'react-icons/bs';
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

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
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

  return (
    <>
      {isOpen && (
        <div
          className="modal-overlay fixed inset-0 bg-gray-900 bg-opacity-80 flex justify-center items-center z-50"
          onClick={handleOutsideClick}
        >
          <div className={`modal-content ${styles.newGradientButton} max-w-md w-full p-8 rounded-2xl shadow-2xl relative`}>
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
              onClick={onClose}
              title="Close"
            >
              <IoMdClose size={24} />
            </button>

            <h2 className="text-2xl font-bold text-center text-white mb-8">Upload Profile Photo</h2>
            
            <div className="flex flex-col items-center mb-8">
              <div className="relative w-36 h-36 mb-6">
                <img
                  src={imagePreview || defaultUserImage}
                  alt="Profile"
                  className="w-full h-full rounded-full border-4 border-blue-500 shadow-lg object-cover"
                />
                {imagePreview && (
                  <button
                    onClick={handleImageReset}
                    className="absolute -bottom-2 -right-2 bg-red-600 text-white rounded-full p-2 hover:bg-red-700 transition"
                    title="Reset Image"
                  >
                    <IoMdRefreshCircle size={20} />
                  </button>
                )}
              </div>

              <label className="flex flex-col items-center cursor-pointer text-blue-400 mb-8">
                <IoMdCloudUpload size={48} className="hover:text-blue-500 transition" />
                <span className="mt-2 text-sm text-gray-300">Choose an image file</span>
                <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
              </label>
            </div>

            <div className="flex justify-center">
              <button
                onClick={handleConfirmImage}
                className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition"
                title="Confirm"
              >
                <BsFillCheckCircleFill size={20} />
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
