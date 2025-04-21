import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieNames: null,
    movieResults: null,
    isLoading: false
  },
  reducers: {
    toggleGptSearch: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    genAiMovieSearch: (state, actions) => {
      const { movieNames, movieResults } = actions.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
      state.isLoading = false;
    },
    clearGptResults: (state) => {
      state.movieNames = null;
      state.movieResults = null;
      state.isLoading = false;
    },
    setGptResultsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { toggleGptSearch, genAiMovieSearch, clearGptResults, setGptResultsLoading } = gptSlice.actions;

export default gptSlice.reducer;
