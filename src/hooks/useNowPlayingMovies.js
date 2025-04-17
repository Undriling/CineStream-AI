import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useCallback, useEffect } from "react";
import { API_Options, NowPlayingMovie_URL } from "../constants";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies)

    const getNowPlayingMovies = useCallback (async () => {
      const data = await fetch(NowPlayingMovie_URL, API_Options)

      const json = await data.json();
    //   console.log(json.results)

      dispatch(addNowPlayingMovies(json.results))
    }, [dispatch]);

    useEffect(() => {
      !nowPlayingMovies && getNowPlayingMovies();
    }, [nowPlayingMovies, getNowPlayingMovies]);

}

export default useNowPlayingMovies;

