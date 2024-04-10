import {configureStore} from "@reduxjs/toolkit";
import {newsSlice} from './news-slice';
import {selectedNewsSlice} from "./selectedNews-slice";
import {filteredSlice} from "./filtered-slice";

export const store = configureStore({
    reducer: {
        news: newsSlice.reducer,
        selectedNews: selectedNewsSlice.reducer,
        filtered: filteredSlice.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
