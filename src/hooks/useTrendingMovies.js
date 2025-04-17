import { useDispatch, useSelector } from "react-redux";
import { addTrendingMovie } from "../utils/movieSlice";
import { useCallback, useEffect } from "react";
import { API_Options, TrendingMovie_URL } from "../constants";

const useTrendingMovies = () => {
    const dispatch = useDispatch();
    const trendingMovie = useSelector((store) => store.movies.trendingMovie)

    const getTrendingMovies = useCallback (async () => {
      const data = await fetch(TrendingMovie_URL, API_Options)

      const json = await data.json();

      dispatch(addTrendingMovie(json.results))
    }, [dispatch]);

    useEffect(() => {
      !trendingMovie && getTrendingMovies();
    }, [trendingMovie, getTrendingMovies]);

}

export default useTrendingMovies;