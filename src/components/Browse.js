import React from 'react'
import HeaderHome from './HeaderHome';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import MovieListContainer from './MovieListContainer';

const Browse = () => {

  useNowPlayingMovies();
  
  return (
    <div>
      <HeaderHome />
      <MainContainer />
      <MovieListContainer/>
    </div>
  )
}

export default Browse;