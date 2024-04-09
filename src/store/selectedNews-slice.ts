import {createSlice, payloadAction} from "@reduxjs/toolkit";
import Article from '../Type/NewsType';

const initialState: Article[] = {
    articles: []
};

export const selectedNewsSlice = createSlice({
    name: 'selectedNews',
    initialState,
    reducers: {
        selectedItems(
            state,
            action: payloadAction<Article[]>
        ) {
            state.articles = [...action.payload]
        }
    }
});
export const {selectedItems} = selectedNewsSlice.actions;
