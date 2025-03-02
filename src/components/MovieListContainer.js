import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const MovieListContainer = () => {
  const movies = useSelector((store) => store.movies)

  return (
    movies && (
    <div className='absolute mt-[50%] w-screen bg-black'>
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies}/>
        <MovieList title={"Trending"} movies={movies?.trendingMovie}/>
        <MovieList title={"Popular"} movies={movies?.popularMovie}/>
        <MovieList title={"Upcoming"} movies={movies?.upcomingMovie}/>
        <MovieList title={"Award Wining"} movies={movies?.nowPlayingMovies}/>
    </div>
    )
  )
}

export default MovieListContainer;