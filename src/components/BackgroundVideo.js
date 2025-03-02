import React from 'react'
import { useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer'

const BackgroundVideo = ({movieId}) => {
    const trailerVideo = useSelector((store) => store.movies?.movieTrailer)
   
    useMovieTrailer(movieId);

  return (
    <div className='absolute'>
        <iframe className='w-screen aspect-video absolute' src={"https://www.youtube.com/embed/"+ trailerVideo?.key + "?playlist="+ trailerVideo?.key + "&autoplay=1&mute=1&loop=1&controls=0&rel=0&showinfo=0&modestbranding=1&iv_load_policy=3"} 
            title="YouTube video player"  allow="autoplay; encrypted-media; web-share" 
            referrerPolicy="strict-origin-when-cross-origin">
            </iframe>
    </div>
  )
}

export default BackgroundVideo;