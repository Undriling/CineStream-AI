import React from "react";
import { Movie_Banner_URL } from "../constants";

const MovieCard = ({ posterPath, id, onClick }) => {
  if (!posterPath) return null;

  // const goToReviewPage = () => {
  //   window.open(MoviePage_URLPi + id + MoviePage_URLPii, '_blank')
  //   console.log("Movie ID:", id);
  // };

  // const handleClick = () => {
  //   window.open(MoviePlayer_URL + id, '_blank')
  // };

  return (
    <div className="w-[150px] md:w-[200px] h-[250px] rounded-lg md:mx-0 mx-2 hover:scale-110 transition-transform duration-200 ease-in-out">
      <img
        className="w-[185px] h-[240px] rounded-lg cursor-pointer"
        alt="Movie Banner"
        src={Movie_Banner_URL + posterPath}
        onClick={() => onClick(id)}
      />
    </div>
  );
};

export default MovieCard;
