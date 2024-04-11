import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Article from '../Type/NewsType';

interface NewsState {
    articles: Article[];
    selectedArticles: Article[];
}

const initialState: NewsState = {
    articles: [],
    selectedArticles: []
};

export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        pushNews(state, action: PayloadAction<Article[]>) {
            state.articles = action.payload;
        },
        selectedItems(state, action: PayloadAction<Article[]>) {
            state.selectedArticles = action.payload;
        }
    }
});

export const { pushNews, selectedItems } = newsSlice.actions;
