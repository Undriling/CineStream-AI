import React from "react";
import { Movie_Banner_URL } from "../constants";
import { Play } from "lucide-react";

const MovieCard = ({ posterPath, id, onClick, title, rating, releaseDate }) => {
  if (!posterPath) return null;

  return (
    <div
      className="min-w-[130px] md:min-w-[180px] lg:min-w-[200px] flex-shrink-0 bg-white rounded-lg overflow-hidden shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
      onClick={() => onClick(id)}
    >
      {/* Movie Poster */}
      <div className="relative w-full h-[220px] md:h-[260px] lg:h-[300px]">
        <img
          src={Movie_Banner_URL + posterPath}
          alt={title}
          className="w-full h-[180px] md:h-[220px] lg:h-[280px] object-cover"
          draggable={false}
        />

        {/* Optional Floating Buttons */}
        <div className="absolute top-2 left-2 flex flex-col space-y-2">
          <button
            className="bg-green-500 text-white p-1 rounded-full text-xs"
            title="Info"
          >
            !
          </button>
          <button
            className="bg-pink-500 text-white p-1 rounded-full text-xs"
            title="Favorite"
          >
            ❤
          </button>
        </div>

        {/* Play Button */}
        <button
          onClick={() => onClick(id)}
          className="absolute bottom-2 right-2 bg-yellow-400 p-2 rounded-full shadow-lg hover:bg-yellow-500 transition"
        >
          <Play size={20} className="text-black" />
        </button>
      </div>

      {/* Movie Info */}
      <div className="p-3">
        <h3 className="text-sm md:text-base font-semibold line-clamp-1 text-black">{title}</h3>
        <p className="text-gray-600 text-xs md:text-sm">
          {releaseDate ? new Date(releaseDate).getFullYear() : "Year Unknown"}
          {rating !== undefined && (
            <span className="ml-2 text-green-600 font-medium">{Math.floor(rating * 10)}% Match</span>
          )}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
