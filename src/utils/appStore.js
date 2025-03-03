import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./userSlice";
import movieReducer from "./movieSlice";
import gptReducer from "./gptSlice";
import langReducer from "./langConfigSlice";

const AppStore = configureStore(
   {
        reducer: {
            user: userReducer,
            movies: movieReducer,
            gpt: gptReducer,
            langConfig: langReducer
        }
   }
)

export default AppStore;