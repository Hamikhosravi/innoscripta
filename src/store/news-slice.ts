import {createSlice, payloadAction} from "@reduxjs/toolkit";
import Article from '../Type/NewsType';

const initialState: Article[] = {
    articles: []
};

export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        pushNews(
            state,
            action: payloadAction<Article[]>
        ) {
            state.articles = [...action.payload]
        }
    }
});
export const {pushNews} = newsSlice.actions;
