import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const GptSearchResults = () => {
    const {movieNames, movieResults} = useSelector((store) => store.gpt);

  if (movieResults) return (
    <div className='p-2 mx-2 mt-14 bg-black text-white rounded-lg bg-opacity-60'>
        <div className='md:mt-36'>
            { movieNames?.map((movieName,index) => (
                <MovieList key={movieName} title={movieNames?.[index]} movies={movieResults?.[index]}/>
            )) }
        </div>
    </div>
  )
};

export default GptSearchResults;