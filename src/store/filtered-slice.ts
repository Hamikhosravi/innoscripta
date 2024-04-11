import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type Filter = {
    letter: string;
    subject: string
}

const initialState: Filter = {
    letters: "",
    subject:"Arts"
};

export const filteredSlice = createSlice({
    name: 'filtered',
    initialState,
    reducers: {
        searchBox(
            state,
            action: PayloadAction<string>
        ) {
            state.letters = action.payload
        },
        selectedSubject(
            state,
            action: PayloadAction<string>
        ) {
            state.subject = action.payload
        }
    }
});

export const {searchBox, selectedSubject} = filteredSlice.actions;
