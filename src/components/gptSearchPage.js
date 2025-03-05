import React from 'react'
import { Bg_URL } from '../constants';
import GptSearchBar from './gptSearchBar';
import GptSearchResults from './gptSearchResults';

const GptSearchPage = () => {
  return (
    <div className=''>
        <div className='absolute  bg-[length:200%] -z-10' >
            <img src={Bg_URL} alt='bg-image' className='filter blur-[1.5px]'/>
        </div>
        <GptSearchBar/>
        <GptSearchResults/>
    </div>
  )
}

export default GptSearchPage;