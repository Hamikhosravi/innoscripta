import {createSlice, payloadAction} from "@reduxjs/toolkit";

const initialState: string = {
    letters: "",
    subject:""
};

export const filteredSlice = createSlice({
    name: 'filtered',
    initialState,
    reducers: {
        searchBox(
            state,
            action: payloadAction<string>
        ) {
            state.letters = action.payload
        },
        selectSubject(
            state,
            action: payloadAction<string>
        ) {
            state.subject = action.payload
        }
    }
});

export const {searchBox, selectSubject} = filteredSlice.actions;
