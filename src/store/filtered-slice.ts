import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {DatesPicker} from "../Type/DatesPicker";


type Filter = {
    letter: string;
    subject: string;
    dates: DatesPicker
}

const initialState: Filter = {
    letters: "",
    subject:"Arts",
    dates:{}
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
        },
        pickedDates(
            state,
            action: PayloadAction<DatesPicker>
        ) {
            state.dates = action.payload
        }
    }
});

export const {searchBox, selectedSubject, pickedDates} = filteredSlice.actions;
