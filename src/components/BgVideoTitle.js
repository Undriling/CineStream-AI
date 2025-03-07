import React, { useState } from 'react'
import { MoviePage_URLPi, MoviePage_URLPii } from '../constants';

const BgVideoTitle = ({title, description, id}) => {
    const [showDescription, setShowDescription] = useState(false)

    const goToReviewPage = () => {
        window.open(MoviePage_URLPi + id + MoviePage_URLPii, '_blank')
      };

  return (
    <div className='absolute text-white font-serif bg-gradient-to-b from-black w-screen aspect-video md:mt-0 mt-20'>
        <div className='my-[17%] mx-4 md:mx-10'>
            <h1 className='text-xl md:text-6xl font-serif font-extrabold'>{title}</h1>
            {showDescription && <p className='md:w-1/2 text-xs md:text-lg my-1 md:my-4 '>{description}</p>}
            <div className='flex flex-wrap md:ml-0 my-2 md:my-7'>
                <button className='bg-white text-black w-20 md:w-36 h-6 md:h-10 rounded-md hover:bg-opacity-80' onClick={goToReviewPage}>▶ Play</button>
                <button className=' bg-gray-500 text-black w-20 md:w-36 h-6 md:h-10 rounded-md mx-3 hover:bg-opacity-80' onClick={() => setShowDescription(!showDescription)}> More Info</button>
            </div>
        </div>
    </div>
  )
}

export default BgVideoTitle;