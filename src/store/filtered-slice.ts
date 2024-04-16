import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {DatesPicker} from "../Type/DatesPicker";


type Filter = {
    letter: string;
    subject: string;
    source: string[];
    dates: DatesPicker
}

const initialState: Filter = {
    letters: "",
    subject: "Arts",
    source: ["New York Times"],
    dates: {}
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
        selectedSource(
            state,
            action: PayloadAction<string>
        ) {
            state.source = action.payload
        },
        pickedDates(
            state,
            action: PayloadAction<DatesPicker>
        ) {
            state.dates = action.payload
        }
    }
});

export const {searchBox, selectedSubject, selectedSource, pickedDates} = filteredSlice.actions;
