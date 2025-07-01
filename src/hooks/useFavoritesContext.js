import React, {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

// Create the context
const FavoritesContext = createContext(undefined);

// Custom hook to access the context
export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error(
      "useFavorites must be used within a FavoritesProvider"
    );
  }
  return context;
};

// Provider component
export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  // Load from localStorage on mount
  useEffect(() => {
    const savedFavorites = localStorage.getItem(
      "movieFavorites"
    );
    if (savedFavorites) {
      try {
        setFavorites(JSON.parse(savedFavorites));
      } catch (error) {
        console.error(
          "Failed to parse favorites from localStorage:",
          error
        );
      }
    }
  }, []);

  // Save to localStorage on update
  useEffect(() => {
    localStorage.setItem(
      "movieFavorites",
      JSON.stringify(favorites)
    );
  }, [favorites]);

  const addToFavorites = (movie) => {
    setFavorites((prev) => {
      if (prev.some((fav) => fav.id === movie.id))
        return prev;
      return [...prev, movie];
    });
  };

  const removeFromFavorites = (movieId) => {
    setFavorites((prev) =>
      prev.filter((movie) => movie.id !== movieId)
    );
  };

  const isFavorite = (movieId) => {
    return favorites.some((movie) => movie.id === movieId);
  };

  const clearFavorites = () => {
    setFavorites([]);
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
        clearFavorites,
      }}>
      {children}
    </FavoritesContext.Provider>
  );
};
