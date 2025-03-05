import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
        movieNames: null,
        movieResults: null
    },
    reducers: {
        toggleGptSearch: (state) => {
            state.showGptSearch = !state.showGptSearch
        },
        genAiMovieSearch: (state, actions) => {
            const {movieNames, movieResults} = actions.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        },
    }
});

export const {toggleGptSearch, genAiMovieSearch} = gptSlice.actions;

export default gptSlice.reducer;
