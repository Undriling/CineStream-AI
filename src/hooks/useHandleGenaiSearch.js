import { genAiMovieSearch } from '../utils/gptSlice';
import { useDispatch } from 'react-redux';
import genAI from '../utils/geminiai';
import { API_Options } from '../constants';
import { useRef } from 'react';

const useHandleGenaiSearch = () => {
    const dispatch = useDispatch();
    const gptSearchInput = useRef(null);

    const searchMoviesFrmTMDB = async (movie) => {
          const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+ movie +"&include_adult=false&language=en-US&page=1", API_Options)
    
          const json = await data.json();
          return json.results;
        }

    const handleGenaiSearch = async () => {

        const prompt = "Act like a movie recomandation system . Give me some movie results for the query :"+gptSearchInput.current.value+".Give me top 5 movie names suggestions which is seprated by comma like the example result ahead. Example result : Golmall, Don, Koi Mil Gya, Hera Pheri, Phir Hera Pheri";
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  
        const result = await model.generateContent(prompt);
        // console.log(result.response.text());
  
        const genaiMovies = result.response.text().split(",");
        
        const moviesArray = genaiMovies?.map((movie) => searchMoviesFrmTMDB(movie));
  
        const movieResults = await Promise.all(moviesArray);
        
        dispatch(genAiMovieSearch({movieNames: genaiMovies, movieResults: movieResults}))
      }

      return {gptSearchInput, handleGenaiSearch};
}

export default useHandleGenaiSearch;