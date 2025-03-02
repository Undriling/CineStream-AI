import React from 'react'
import { Movie_Banner_URL } from '../constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-[220px]'>
        <img className='w-[210px] h-[210px] rounded-lg cursor-pointer' alt='Movie Banner' src={Movie_Banner_URL + posterPath} />
    </div>
  )
}

export default MovieCard;