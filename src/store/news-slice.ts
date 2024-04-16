import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {Article, NewYorkTimes , GuardianApi} from '../interface/NewsType';

type APITypes = Article | NewYorkTimes | GuardianApi

interface NewsState {
    articles: APITypes[];
    selectedArticles: APITypes[];
}

const initialState: NewsState = {
    articles: [],
    selectedArticles: []
};

export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        pushNews(state, action: PayloadAction<APITypes[]>) {
            state.articles = action.payload;
        },
        selectedItems(state, action: PayloadAction<APITypes[]>) {
            state.selectedArticles = action.payload;
        }
    }
});

export const { pushNews, selectedItems } = newsSlice.actions;
