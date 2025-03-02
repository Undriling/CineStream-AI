import { useDispatch } from "react-redux";
import { addPopularMovie } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_Options, PopularMovie_URL } from "../constants";

const usePopularMovies = () => {
    const dispatch = useDispatch();

    const getPopularMovies = async () => {
      const data = await fetch(PopularMovie_URL, API_Options)

      const json = await data.json();

      dispatch(addPopularMovie(json.results))
    };

    useEffect(() => {
      getPopularMovies();
    }, []);

}

export default usePopularMovies;