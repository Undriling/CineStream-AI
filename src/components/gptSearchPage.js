import React from 'react'
import { Bg_URL } from '../constants';
import GptSearchBar from './gptSearchBar';
import GptSearchResults from './gptSearchResults';

const GptSearchPage = () => {
  return (
    <>
      <div className='absolute -z-10' >
            <img src={Bg_URL} alt='bg-image' className='h-screen object-cover md:h-auto'/>
      </div> 
      <div className=''>  
        <GptSearchBar/>
        <GptSearchResults/>
      </div>
    </>
    
  )
}

export default GptSearchPage;