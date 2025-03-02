import React, { useState } from 'react'

const BgVideoTitle = ({title, description}) => {
    const [showDescription, setShowDescription] = useState(false)

  return (
    <div className='absolute text-white font-serif bg-gradient-to-b from-black w-screen aspect-video'>
        <div className='my-[17%] mx-10'>
            <h1 className='text-6xl font-serif font-extrabold'>{title}</h1>
            {showDescription && <p className='w-1/2 text-lg my-4 '>{description}</p>}
            <div className='flex flex-wrap my-7'>
                <button className='bg-white text-black w-36 h-10 rounded-md hover:bg-opacity-80'>▶ Play</button>
                <button className='bg-gray-500 text-black w-36 h-10 rounded-md mx-3 hover:bg-opacity-80' onClick={() => setShowDescription(!showDescription)}> More Info</button>
            </div>
        </div>
    </div>
  )
}

export default BgVideoTitle;