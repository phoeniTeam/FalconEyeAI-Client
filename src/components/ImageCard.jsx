import React from "react";

const ImageCard = ({ image, description, userImage, userName }) => {
  return (
    <div className="relative mb-4 break-inside-avoid cursor-pointer group">
      <img
        className="transition duration-500 rounded-xl opacity-80 group-hover:opacity-100"
        src={image}
        alt="Creation"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
       
        {userImage && userName && (
          <div className="flex items-center gap-2 p-2 rounded-lg w-full">
            <img
              src={userImage}
              alt="User"
              className="w-8 h-8 rounded-full"
            />
            <span className="text-white text-sm">{userName}</span>
          </div>
        )}

       
        <p className="text-white text-center px-5 absolute bottom-3 p-2">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ImageCard;
