import React from 'react'
import MovieCard from './MovieCard'
// import { useSelector } from 'react-redux';

const MovieList = ({title, movies}) => {

     return (
    <div className='-mt-32 px-8 my-40'>
        <h1 className='text-white text-2xl font-serif my-2'>{title}</h1>
        <div className='flex overflow-x-scroll scrollbar-hide overflow-y-hidden'>
            <div className='flex'>
                {
                    movies?.map((movie) => (<MovieCard key={movie?.id} posterPath={movie?.poster_path} />))
                }
            </div>
        </div>
    </div>
  )
}

export default MovieList;