import React from 'react'
import MovieCard from './MovieCard'
// import { useSelector } from 'react-redux';

const MovieList = ({title, movies}) => {

     return (
    <div className='md:-mt-32 md:x-8 mx-3 my-7 md:my-40'>
        <h1 className='text-white text-lg md:text-2xl font-serif my-2'>{title}</h1>
        <div className='flex overflow-x-scroll scrollbar-hide overflow-y-hidden'>
            <div className='flex'>
                {
                    movies?.map((movie) => (<MovieCard key={movie?.id} posterPath={movie?.poster_path} id={movie?.id}/>))
                }
            </div>
        </div>
    </div>
  )
}

export default MovieList;