import React, { useState } from "react";
import MovieCard from "./MovieCard";
import MoviePlay from "./moviePlay/moviePlay";

const MovieList = ({ title, movies }) => {
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  const handleCardClick = (id) => {
    setSelectedMovieId(id);
  };

  //   console.log(movies);

  const closeModal = () => setSelectedMovieId(null);

  return (
    <div className="md:-mt-32 md:x-8 mx-3 my-7 md:my-40">
      <h1 className="text-white text-lg md:text-2xl font-serif my-2">
        {title}
      </h1>
      <div className="flex overflow-x-scroll scrollbar-hide overflow-y-hidden">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard
              key={movie?.id}
              posterPath={movie?.poster_path}
              id={movie?.id}
              onClick={handleCardClick}
            />
          ))}
        </div>
      </div>

      {selectedMovieId && (
        <MoviePlay
          movieId={selectedMovieId}
          onClose={closeModal}
          title={title}
          movies={movies}
        />
      )}
    </div>
  );
};

export default MovieList;
