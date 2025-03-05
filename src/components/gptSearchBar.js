import React from 'react'
import { useSelector } from 'react-redux';
import lang from '../langConstants';

import useHandleGenaiSearch from '../hooks/useHandleGenaiSearch';

const GptSearchBar = () => {
    const langKey = useSelector((store) => store.langConfig.langSelect)
    
    const {gptSearchInput, handleGenaiSearch} = useHandleGenaiSearch();

  return (
    <div className='pt-[10%] flex justify-center'>
        <form className='w-1/2 bg-black grid grid-cols-12 font-serif rounded-lg' onSubmit={(e) => e.preventDefault()}>
            <input ref={gptSearchInput} className='p-2 m-2 col-span-9 rounded-lg' name='GPT Search Box' placeholder={lang[langKey].searchPlaceholder}/>
            <button className='p-2 m-2 col-span-3 bg-red-600 text-black text-lg rounded-lg' onClick={handleGenaiSearch}>{lang[langKey].search}</button>
          </form>
    </div>
  )
}

export default GptSearchBar;