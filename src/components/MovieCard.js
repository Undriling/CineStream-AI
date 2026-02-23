import React from "react";
import { Movie_Banner_URL } from "../constants";
import { Heart, Play } from "lucide-react";
import { useFavorites } from "../hooks/useFavoritesContext";

const MovieCard = ({
  posterPath,
  id,
  onClick,
  title,
  rating,
  releaseDate,
  original_language,
}) => {
  const {
    addToFavorites,
    removeFromFavorites,
    isFavorite,
  } = useFavorites();

  const isFav = isFavorite(id);

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    if (isFav) {
      removeFromFavorites(id);
    } else {
      addToFavorites({
        posterPath,
        id,
        title,
        rating,
        releaseDate,
        original_language,
      });
    }
  };

  if (!posterPath) return null;

  return (
    <div
      className="w-[130px] md:w-[180px] lg:w-[200px] flex-shrink-0 bg-white rounded-lg overflow-hidden shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
      onClick={() => onClick(id)}
    >
      {/* Movie Poster */}
      <div className="relative w-full h-[185px] md:h-[240px] lg:h-[300px]">
        <img
          src={Movie_Banner_URL + posterPath}
          alt={title}
          className="w-full h-[180px] md:h-[220px] lg:h-[280px] object-cover"
          draggable={false}
        />

        {/* Floating Button */}
        <div className="absolute top-2 left-2 flex flex-col space-y-2">
          <button
            className={`
              flex items-center justify-center
              h-8 w-8
              rounded-full
              border border-gray-600
              bg-gray-800 hover:bg-gray-700
              transition
              ${isFav ? "text-red-500" : "text-white"}
            `}
            onClick={handleFavoriteClick}
            title={isFav ? "Remove from favorites" : "Add to favorites"}
          >
            <Heart
              className={`h-4 w-4 ${isFav ? "fill-current" : ""}`}
            />
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
        <span className="border border-gray-500 px-1 rounded text-xs text-gray-800">
          {original_language?.toUpperCase()}
        </span>
        <h3 className="text-sm md:text-base font-semibold line-clamp-1 text-black">
          {title}
        </h3>
        <p className="text-gray-600 text-xs md:text-sm">
          {releaseDate
            ? new Date(releaseDate).getFullYear()
            : "Year Unknown"}
          {rating !== undefined && (
            <span className="ml-2 text-green-600 font-medium">
              {Math.floor(rating * 10)}% Match
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
