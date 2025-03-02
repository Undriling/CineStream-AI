import { useDispatch } from "react-redux";
import { addTrendingMovie, addUpcomingMovie } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_Options, UpcomingMovie_URL } from "../constants";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();

    const getUpcomingMovies = async () => {
      const data = await fetch(UpcomingMovie_URL, API_Options)

      const json = await data.json();

      dispatch(addUpcomingMovie(json.results))
    };

    useEffect(() => {
      getUpcomingMovies();
    }, []);

}

export default useUpcomingMovies;