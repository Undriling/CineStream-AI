import React from 'react'
import { Movie_Banner_URL, MoviePage_URLPi, MoviePage_URLPii } from '../constants'

const MovieCard = ({posterPath, id}) => {

  const goToReviewPage = () => {
    window.open(MoviePage_URLPi+id+MoviePage_URLPii, '_blank')
  };

  return (
    <div className='w-[220px]'>
        <img className='w-[210px] h-[210px] rounded-lg cursor-pointer' alt='Movie Banner' src={Movie_Banner_URL + posterPath} onClick={goToReviewPage}/>
    </div>
  )
}

export default MovieCard;