import React from "react";

const ImageCard = ({ image, description, userImage, userName }) => {
  return (
    <div className="relative mb-4 break-inside-avoid cursor-pointer group overflow-hidden rounded-xl">
      <img
        className="transition duration-500 rounded-xl opacity-80 group-hover:opacity-100 group-hover:scale-[1.02]"
        src={image}
        alt="Creation"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between  opacity-0 group-hover:opacity-100 transition-opacity duration-300">

        {userImage && userName && (
          <div className="flex items-center gap-2 p-2 w-full">
            <img
              src={userImage}
              alt="User"
              className="w-8 h-8 rounded-full"
            />
            <span className="text-white text-sm">{userName}</span>
          </div>
        )}


        <p className="text-darkWhite text-xs px-5  bottom-3 p-2">
          {description.charAt(0).toUpperCase() + description.slice(1)}
        </p>
      </div>
    </div>
  );
};

export default ImageCard;
