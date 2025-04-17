import { useDispatch, useSelector } from "react-redux";
import { API_Options, GetTrailer_URLi, GetTrailer_URLii } from "../constants";
import { addMovieTrailer } from "../utils/movieSlice";
import { useCallback, useEffect } from "react";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    const movieTrailer = useSelector((store) => store.movies.movieTrailer)

    const getTrailerVideo = useCallback (async () => {
        const data = await fetch(GetTrailer_URLi + movieId + GetTrailer_URLii , API_Options)

        const json = await data.json();
        
        const filteredData = json?.results.filter((e)=> e.type === "Trailer")
        const trailer = filteredData.length ? filteredData[0] : json?.results[0];
        dispatch(addMovieTrailer(trailer))
    }, [dispatch, movieId])

    useEffect(() => {
        !movieTrailer && getTrailerVideo()
    }, [movieTrailer, getTrailerVideo]);
    
};

export default useMovieTrailer;