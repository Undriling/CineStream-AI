import React, { useEffect, useState } from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const GptSearchResults = () => {
  const { movieNames, movieResults, isLoading } = useSelector(
    (store) => store.gpt
  );

  const [count, setCount] = useState(10);

  useEffect(() => {
    if (!isLoading) return;

    setCount(10);

    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev === 1) {
          clearInterval(interval);
          return 1;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isLoading]);


  if (isLoading) {
    return (
      // <div className="text-white flex justify-center items-center h-64">
      //   <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-red-700 border-solid" />
      //   <p className="ml-4 font-serif text-2xl text-gray-300">AI is thinking…<br/> Please Wait</p>
      // </div>
      <div className="text-white flex flex-col justify-center items-center h-64">
        <div className="flex items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-red-700 border-solid" />
          <p className="ml-4 font-serif text-2xl text-gray-300">
            AI is thinking…
            <br />
            Please Wait
          </p>
        </div>

        {/* Countdown */}
        <p className="mt-4 text-5xl font-bold text-red-900 animate-pulse">
          {count}
        </p>

        {/* Progress bar */}
        <div className="w-48 bg-gray-700 h-2 rounded mt-3">
          <div
            className="bg-red-900 h-2 rounded transition-all duration-1000"
            style={{ width: `${(count / 10) * 100}%` }}
          />
        </div>
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
