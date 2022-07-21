import {createSlice} from "@reduxjs/toolkit";

const favoriteListSlice = createSlice({
    name: 'favoriteList',
    initialState: {
        items: []
    },
    reducers: {
        addCity(state, action) {
            const isNotFavorite = !state.items.includes(action.payload);

            if (isNotFavorite && action.payload) {
                state.items.push(action.payload);
            }
        },
        removeCity(state, action) {
            state.items = state.items.filter(item => item !== action.payload);
        }
    },
});

const { actions, reducer } = favoriteListSlice;

export const { addCity, removeCity } = actions;
export { reducer };
