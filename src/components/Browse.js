import React from 'react'
import HeaderHome from './HeaderHome';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import MovieListContainer from './MovieListContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTrendingMovies from '../hooks/useTrendingMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import { useSelector } from 'react-redux';
import GptSearchPage from './gptSearchPage';

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt?.showGptSearch)

  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  useUpcomingMovies();
  
  return (
    <div>
      <HeaderHome />
      { showGptSearch ? <GptSearchPage/> 
        : (<>
            <MainContainer />
            <MovieListContainer />
          </>)
      }
    </div>
  )
}

export default Browse;