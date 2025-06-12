import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const GptSearchResults = () => {
  const { movieNames, movieResults, isLoading } = useSelector(
    (store) => store.gpt
  );

  if (isLoading) {
    return (
      <div className="text-white flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-red-700 border-solid" />
        <p className="ml-4 font-serif text-2xl text-gray-300">Searching...</p>
      </div>
    );
  }

  if (movieResults)
    return (
      <div className="p-2 mx-2 mt-14 bg-black text-white rounded-lg bg-opacity-60">
        <div className="md:mt-30">
          {movieNames?.map((movieName, index) => (
            <MovieList
              key={movieName}
              title={movieNames?.[index]}
              movies={movieResults?.[index]}
            />
          ))}
        </div>
      </div>
    );
};

export default GptSearchResults;
