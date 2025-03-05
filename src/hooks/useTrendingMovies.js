import { useDispatch, useSelector } from "react-redux";
import { addTrendingMovie } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_Options, TrendingMovie_URL } from "../constants";

const useTrendingMovies = () => {
    const dispatch = useDispatch();
    const trendingMovie = useSelector((store) => store.movies.trendingMovie)

    const getTrendingMovies = async () => {
      const data = await fetch(TrendingMovie_URL, API_Options)

      const json = await data.json();

      dispatch(addTrendingMovie(json.results))
    };

    useEffect(() => {
      !trendingMovie && getTrendingMovies();
    }, []);

}

export default useTrendingMovies;