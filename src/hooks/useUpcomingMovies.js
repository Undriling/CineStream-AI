import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovie } from "../utils/movieSlice";
import { useCallback, useEffect } from "react";
import { API_Options, UpcomingMovie_URL } from "../constants";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const upcomingMovie = useSelector((store) => store.movies.upcomingMovie)

    const getUpcomingMovies = useCallback (async () => {
      const data = await fetch(UpcomingMovie_URL, API_Options)

      const json = await data.json();

      dispatch(addUpcomingMovie(json.results))
    }, [dispatch]);

    useEffect(() => {
      !upcomingMovie && getUpcomingMovies();
    }, [upcomingMovie, getUpcomingMovies]);

}

export default useUpcomingMovies;