import React from "react";
import { Heart, Trash2 } from "lucide-react";
import { Link } from "react-router";
import { useFavorites } from "../hooks/useFavoritesContext";
import MovieCard from "./MovieCard";
// import MoviePlay from "./moviePlay/moviePlay";
// import HeaderHome from "./HeaderHome";

const Favorites = () => {
  const { favorites, clearFavorites } = useFavorites();
//   const [selectedMovieId, setSelectedMovieId] =
//     useState(null);

//   const handleCardClick = (id) => setSelectedMovieId(id);
//     const closeModal = () => setSelectedMovieId(null);

  if (favorites.length === 0) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col">

        {/* Empty State */}
        <div className="flex-grow flex flex-col items-center justify-center p-6 text-center">
          <Heart className="h-20 w-20 text-gray-600 mb-4" />
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            No Favorites Yet
          </h1>
          <p className="text-gray-400 text-base md:text-lg mb-6 max-w-md">
            Start adding movies to your favorites to see
            them here. Browse our collection and click the
            heart icon on any movie you love!
          </p>
          <Link to="/browse">
            <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white text-sm md:text-base transition">
              Browse Movies
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-4 md:p-6 flex flex-col gap-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Heart className="h-8 w-8 text-red-500 fill-current" />
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">
                My Favorites
              </h1>
              <p className="text-gray-400 text-sm md:text-base">
                {favorites.length} movie
                {favorites.length !== 1 ? "s" : ""} in your
                collection
              </p>
            </div>
          </div>

          <Link to="/browse">
            <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white text-sm md:text-base transition">
              Browse Movies
            </button>
          </Link>

          <button
            onClick={clearFavorites}
            className="flex items-center gap-2 border border-red-600 text-red-500 hover:bg-red-600 hover:text-white px-3 py-1.5 rounded transition text-sm md:text-base">
            <Trash2 className="h-4 w-4" />
            Clear All
          </button>
        </div>

        {/* Movies Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {favorites.map((movie) => (
            <MovieCard
              key={movie.id}
              {...movie}
              onClick={() => {}}
            />
          ))}

          {/* Play Screen */}
          {/* {selectedMovieId && (
            <MoviePlay
              movieId={selectedMovieId}
              onClose={closeModal}
              title={title}
              movies={movies}
            />
          )} */}
        </div>
      </main>
    </div>
  );
};

export default Favorites;
