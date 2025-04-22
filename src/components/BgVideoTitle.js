import React, { useState } from "react";
import { MoviePlayer_URL } from "../constants";
import { BsInfoCircle } from "react-icons/bs";

const BgVideoTitle = ({ title, description, id }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className="absolute text-white font-serif bg-gradient-to-b from-black w-screen aspect-video md:mt-0 mt-[11px]">
      <div className="my-[17%] mx-4 md:mx-10">
        <h1 className="text-xl md:text-6xl font-serif font-extrabold">
          {title}
        </h1>

        {!isPlaying && (
          <>
            {showDescription && (
              <p className="md:w-1/2 text-xs md:text-lg my-1 md:my-4">
                {description}
              </p>
            )}

            <div className="flex flex-wrap md:ml-0 my-2 md:my-7">
              <button
                className="bg-white text-black w-20 text-sm md:w-36 h-5 md:h-10 rounded-md hover:bg-opacity-80"
                onClick={() => setIsPlaying(true)}>
                ▶ Play
              </button>

              <button
                className="bg-gray-500 text-black flex items-center justify-center w-[110px] text-sm md:w-36 h-5 md:h-10 rounded-md mx-3 hover:bg-opacity-80"
                onClick={() => setShowDescription(!showDescription)}>
                <BsInfoCircle />  More Info
              </button>
            </div>
          </>
        )}
      </div>

      {isPlaying && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex justify-center items-center">
          <div className="relative w-full h-screen">
            <button
              className="absolute top-4 right-6 text-white text-3xl z-10"
              onClick={() => setIsPlaying(false)}>
              ✖
            </button>

            <iframe
              src={MoviePlayer_URL + id}
              allowFullScreen
              className="w-full h-full rounded-md"
              title="Movie Player"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default BgVideoTitle;
