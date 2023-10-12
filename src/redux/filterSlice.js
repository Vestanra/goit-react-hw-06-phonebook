import { createSlice } from "@reduxjs/toolkit";

export const filterInitialState = {
    value: '',
};

const filterSlise = createSlice({
    name: 'filter',
    initialState: filterInitialState,
    reducers: {
        changeFilter(state, action) {
            state.value = action.payload;
        }
    }
});

export const getFilter = state => state.filter.filter;

export const filterReducer = filterSlise.reducer;
export const { changeFilter } = filterSlise.actions;