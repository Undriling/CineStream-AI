import { createSlice } from "@reduxjs/toolkit";

const langConfigSlice = createSlice ({
    name: "langConfig",
    initialState: {
        langSelect: "en"
    },
    reducers: {
        changeLang: (state, action) => {
            state.langSelect = action.payload;
        }
    }
});


export const {changeLang} = langConfigSlice.actions;

export default langConfigSlice.reducer;