import { useDispatch, useSelector } from "react-redux";
import { API_Options } from "../constants";
import { addMovieTrailer } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    const movieTrailer = useSelector((store) => store.movies.movieTrailer)

    const getTrailerVideo = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/"+ movieId +"/videos?language=en-US", API_Options)

        const json = await data.json();
        
        const filteredData = json?.results.filter((e)=> e.type === "Trailer")
        const trailer = filteredData.length ? filteredData[0] : json?.results[0];
        dispatch(addMovieTrailer(trailer))
    }

    useEffect(() => {
        !movieTrailer && getTrailerVideo()
    }, []);
    
};

export default useMovieTrailer;