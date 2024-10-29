import React from "react";

const ImageCard2 = ({ onClick, image, description,  }) => {
  return (
    <div
      onClick={onClick}
      className="relative mb-4 break-inside-avoid cursor-pointer group overflow-hidden rounded-xl">
      <img
        className="transition duration-500 rounded-xl opacity-80 group-hover:opacity-100 group-hover:scale-[1.02]"
        src={image}
        alt="Creation"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between  opacity-0 group-hover:opacity-100 transition-opacity duration-300">



        <p className="text-darkWhite text-xs px-5 mt-48 p-2">
          {description.charAt(0).toUpperCase() + description.slice(1)}
        </p>
      </div>
    </div>
  );
};

export default ImageCard2;
