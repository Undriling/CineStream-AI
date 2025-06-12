import React, { useEffect, useRef, useState } from "react";
import MovieCard from "./MovieCard";
import MoviePlay from "./moviePlay/moviePlay";
import { ChevronLeft, ChevronRight } from "lucide-react";

const MovieList = ({ title, movies }) => {
  const scrollRef = useRef(null);
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const handleCardClick = (id) => setSelectedMovieId(id);
  const closeModal = () => setSelectedMovieId(null);

  const scrollByWidth = () =>
    scrollRef.current?.firstChild?.offsetWidth * 3 || 300;

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({
      left: dir === "left" ? -scrollByWidth() : scrollByWidth(),
      behavior: "smooth",
    });
  };

  const updateScrollButtons = () => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
  };

  // useEffect(() => {
  //   const el = scrollRef.current;
  //   if (el) {
  //     el.addEventListener("scroll", updateScrollButtons);
  //     updateScrollButtons();
  //     return () => el.removeEventListener("scroll", updateScrollButtons);
  //   }
  // }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    updateScrollButtons(); // Initial check

    el.addEventListener("scroll", updateScrollButtons);
    window.addEventListener("resize", updateScrollButtons);

    return () => {
      el.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, []);

  return (
    <div className="relative md:mx-8 mx-3 -my-2 md:my-0">
      <h1 className="text-white text-lg md:text-2xl font-serif my-2">
        {title}
      </h1>

      <div className="relative group">
        {/* Left Arrow */}
        {canScrollLeft && (
          <button
            onClick={() => scroll("left")}
            className="hidden group-hover:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black text-white p-2 rounded-full">
            <ChevronLeft size={24} />
          </button>
        )}

        {/* Scrollable Movie Row */}
        <div
          ref={scrollRef}
          className="flex overflow-x-scroll overflow-y-hidden scrollbar-hide scroll-smooth">
          {movies?.map((movie) => (
            <MovieCard
              key={movie?.id}
              posterPath={movie?.poster_path}
              id={movie?.id}
              title={movie.title}
              overview={movie.overview}
              rating={movie.vote_average}
              releaseDate={movie.release_date}
              onClick={handleCardClick}
            />
          ))}
        </div>

        {/* Right Arrow */}
        {canScrollRight && (
          <button
            onClick={() => scroll("right")}
            className="hidden group-hover:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black text-white p-2 rounded-full">
            <ChevronRight size={24} />
          </button>
        )}
      </div>

      {/* Modal */}
      {selectedMovieId && (
        <MoviePlay
          movieId={selectedMovieId}
          onClose={closeModal}
          title={title}
          movies={movies}
        />
      )}
    </div>
  );
};

export default MovieList;
