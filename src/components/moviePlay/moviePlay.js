import React, { useRef, useState } from "react";
import { Movie_Banner_URL, MoviePlayer_URL } from "../../constants";
import { FaPlay } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";

const MoviePlay = ({ movieId, onClose, movies }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const vdoPlayerRef = useRef(null);

  const movie = movies.find((m) => m.id === movieId);
  if (!movie) return null;

  const handlePlay = () => {
    setIsPlaying(true);

    setTimeout(() => {
      if (vdoPlayerRef.current?.requestFullscreen) {
        vdoPlayerRef.current.requestFullscreen();
      }
    }, 200);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-95 z-50 overflow-y-auto scrollbar-hide">
      <div className="relative w-full md:w-[60%] mx-auto mt-10">
        <button
          className="absolute top-4 right-6 text-gray-500 text-3xl z-10"
          onClick={() => {
            setIsPlaying(false);
            onClose();
          }}>
          <RxCross1 />
        </button>

        {isPlaying ? (
          <div
            ref={vdoPlayerRef}
            className="w-full h-full md:h-screen rounded-md">
            <iframe
              src={MoviePlayer_URL + movieId}
              allowFullScreen
              className="w-full h-full md:h-screen rounded-md opacity-100"
               referrerpolicy="no-referrer-when-downgrade"
              title="Movie Player"
            />

            <div className="absolute top-4 right-6 text-white text-xl z-10 md:hidden cursor-pointer">
              <button
                className="cursor-pointer"
                onClick={() => {
                  setIsPlaying(false);
                  onClose();
                }}>
                ✖
              </button>
            </div>
          </div>
        ) : (
          <div
            className={`relative w-full transition-all duration-300 ${
              isPlaying ? "h-screen" : "h-[60vh] md:h-[80vh]"
            }`}>
            <img
              src={Movie_Banner_URL + movie?.poster_path}
              alt={movie?.title}
              className="w-full h-full object-fill rounded-md"
            />

            <button
              onClick={handlePlay}
              className="absolute bottom-10 left-10 bg-gray-300 text-black px-6 py-2 text-lg font-bold rounded-md hover:opacity-80 flex items-center gap-2">
              <FaPlay /> Play
            </button>
          </div>
        )}

        {!isPlaying && (
          <div
            className={`transition-opacity duration-300 ${
              isPlaying ? "opacity-0" : "opacity-100"
            }`}>
            <div className="text-white px-6 py-4 md:px-10 md:py-8">
              <h2 className="text-3xl font-bold mb-2 font-serif">
                {movie?.title}
              </h2>
              <div className="flex items-center gap-4 text-sm md:text-base text-gray-400 mb-4">
                <span className="text-green-400 font-bold">
                  {Math.floor(movie?.vote_average * 10)}% Match
                </span>
                <span>{new Date(movie?.release_date).getFullYear()}</span>
                <span className="border border-gray-500 px-1 rounded text-xs">
                  {movie?.original_language.toUpperCase()}
                </span>
              </div>
              <p className="text-sm md:text-base text-gray-300 max-w-3xl font-serif">
                {movie?.overview}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MoviePlay;
