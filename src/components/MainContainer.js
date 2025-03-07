import React from 'react'
import BackgroundVideo from './BackgroundVideo'
import BgVideoTitle from './BgVideoTitle'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies)

    if (!movies) return;

    const mainMovies = movies[0];

    const { id, original_title, overview} = mainMovies;

  return (
    <div className='md:mt-0'>
        <BackgroundVideo movieId={id}/>
        <BgVideoTitle title={original_title} description={overview} id={id} />
    </div>
  )
}

export default MainContainer;