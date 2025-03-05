import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovie } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_Options, UpcomingMovie_URL } from "../constants";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const upcomingMovie = useSelector((store) => store.movies.upcomingMovie)

    const getUpcomingMovies = async () => {
      const data = await fetch(UpcomingMovie_URL, API_Options)

      const json = await data.json();

      dispatch(addUpcomingMovie(json.results))
    };

    useEffect(() => {
      !upcomingMovie && getUpcomingMovies();
    }, []);

}

export default useUpcomingMovies;