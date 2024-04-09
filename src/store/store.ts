import {configureStore} from "@reduxjs/toolkit";
import {newsSlice} from './news-slice';
import {selectedNewsSlice} from "./selectedNews-slice";

export const store = configureStore({
    reducer: {
        news: newsSlice.reducer,
        selectedNews: selectedNewsSlice.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
