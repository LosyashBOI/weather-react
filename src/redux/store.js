import {getStorageData, STORAGE} from "../utils";
import {configureStore} from "@reduxjs/toolkit";
import {reducer as mainDataReducer} from "./mainData";
import {reducer as forecastDataReducer} from "./forecastData";
import {reducer as favoriteListReducer} from "./favoriteList";

const defaultLocations = ['Los Angeles', 'New York', 'Kyiv', 'Tokyo', 'Berlin'];

const storageFavoriteList = getStorageData(STORAGE.FAVORITE_LIST) ?? defaultLocations;

const storage = {
    list: {
        items: storageFavoriteList
    }
}

const store = configureStore({
    reducer: {
        main: mainDataReducer,
        forecast: forecastDataReducer,
        list: favoriteListReducer
    },
    preloadedState: storage
});

export default store;
