import React from 'react'
import { useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer'

const BackgroundVideo = ({movieId}) => {
    const trailerVideo = useSelector((store) => store.movies?.movieTrailer)
   
    useMovieTrailer(movieId);

  return (
    <div className='absolute'>
        <iframe className='w-screen aspect-video absolute' src={"https://www.youtube.com/embed/"+ trailerVideo?.key + "?autoplay=1&mute=1&loop=1&controls=0"} 
            title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin">
            </iframe>
    </div>
  )
}

export default BackgroundVideo;