import { useDispatch, useSelector } from "react-redux";
import { addLatestMovies } from "../utils/movieSlice";
import { useCallback, useEffect } from "react";
import { API_Options, latestMovie_URL } from "../constants";

const useLatestMovies = () => {
    const dispatch = useDispatch();
    const latestMovies = useSelector((store) => store.movies.addLatestMovies)

    const getLatestMovies = useCallback (async () => {
      const data = await fetch(latestMovie_URL, API_Options)

      const json = await data.json();
      console.log(json.results)

      dispatch(addLatestMovies(json.results))
    }, [dispatch]);

    useEffect(() => {
      !latestMovies && getLatestMovies();
    }, [latestMovies, getLatestMovies]);

}

export default useLatestMovies;

