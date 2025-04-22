import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
import lang from '../langConstants'

const MovieListContainer = () => {
  const movies = useSelector((store) => store.movies)
  const langKey = useSelector((store) => store.langConfig.langSelect) 

  return (
    movies && (
    <div className='absolute mt-[56%] md:mt-[50%] w-screen bg-black'>
        <MovieList title={lang[langKey].nowPlayingText} movies={movies?.nowPlayingMovies}/>
        <MovieList title={lang[langKey].latestText} movies={movies?.addLatestMovies}/>
        <MovieList title={lang[langKey].trendingText} movies={movies?.trendingMovie}/>
        <MovieList title={lang[langKey].popularText} movies={movies?.popularMovie}/>
        <MovieList title={lang[langKey].upcomingText} movies={movies?.upcomingMovie}/>
        <MovieList title={lang[langKey].awardWiningText} movies={movies?.nowPlayingMovies}/>
    </div>
    )
  )
}

export default MovieListContainer;