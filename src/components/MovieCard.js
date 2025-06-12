import React from "react";
import { Movie_Banner_URL } from "../constants";
// import { Play } from "lucide-react";

const MovieCard = ({ posterPath, id, onClick, title, overview, rating, releaseDate }) => {
  if (!posterPath) return null;

  // const goToReviewPage = () => {
  //   window.open(MoviePage_URLPi + id + MoviePage_URLPii, '_blank')
  //   console.log("Movie ID:", id);
  // };

  // const handleClick = () => {
  //   window.open(MoviePlayer_URL + id, '_blank')
  // };

  return (

    <div
      className="min-w-[150px] md:min-w-[250px] lg:min-w-[250px] h-[160px] md:-mx-0 mx-2 cursor-pointer transition-transform duration-300 hover:scale-105"
      onClick={() => onClick(id)}>
      <img
        className="rounded w-[235px] h-[150px] object-fill"
        alt="Movie Banner"
        src={Movie_Banner_URL + posterPath}
        onClick={() => onClick(id)}
        draggable={false}
      />

      {/* Hover Overlay */}
      {/* <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 rounded-2xl flex flex-col justify-between text-white z-10"> */}
        {/* Extra Image */}
        {/* <img
          src={Movie_Banner_URL + posterPath}
          alt="Movie Preview"
          className="rounded-md mb-2 object-cover w-[390px] h-[390px]"
        /> */}

        {/* Details */}
        {/* <div className="space-y-1">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm line-clamp-3">{overview}</p>
          <p className="text-green-400 text-sm font-medium">{Math.floor(rating * 10)}% Match</p>
          <p className="text-gray-400 text-sm font-medium">{new Date(releaseDate).getFullYear()}</p>
        </div> */}

        {/* Play Button */}
        {/* <button
          onClick={() => onClick(id)}
          className="mt-2 w-full flex items-center justify-center bg-red-600 hover:bg-red-700 text-white py-2 rounded-md transition-colors"
        >
          <Play size={18} className="mr-2" />
          Play
        </button> */}
      {/* </div> */}
    </div>
  );
};

export default MovieCard;
