import { genAiMovieSearch, setGptResultsLoading } from "../utils/gptSlice";
import { useDispatch } from "react-redux";
import genAI from "../utils/geminiai";
import {
  API_Options,
  SearchMoviesFrm_TMDBi,
  SearchMoviesFrm_TMDBii,
} from "../constants";
import { useRef } from "react";

const useHandleGenaiSearch = () => {
  const dispatch = useDispatch();
  const gptSearchInput = useRef(null);

  const searchMoviesFrmTMDB = async (movie) => {
    const data = await fetch(
      SearchMoviesFrm_TMDBi + movie + SearchMoviesFrm_TMDBii,
      API_Options
    );

    const json = await data.json();
    return json.results;
  };

  const handleGenaiSearch = async () => {
    dispatch(setGptResultsLoading(true));

    const prompt =
      "Act like a movie recomandation system . Give me some movie results for the query :" +
      gptSearchInput.current.value +
      "Return up to 5 movie name suggestions based on the query. If an exact match exists, return it as the first item. Then add up to 4 related or partial match movie names. Separate all names with commas. For example: Tum Ho Naa, Tum Mile, Tum Bin, Tumko Na Bhool Payenge, Tum Se Achcha Kaun Hai";
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(prompt);
    // console.log(result.response.text());

    const genaiMovies = result.response.text().split(",");

    const moviesArray = genaiMovies?.map((movie) => searchMoviesFrmTMDB(movie));

    const movieResults = await Promise.all(moviesArray);

    dispatch(
      genAiMovieSearch({ movieNames: genaiMovies, movieResults: movieResults })
    );
  };

  return { gptSearchInput, handleGenaiSearch };
};

export default useHandleGenaiSearch;
