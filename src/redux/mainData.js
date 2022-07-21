import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {API, weatherData} from "../api";
import fetchForecastData from "./forecastData";

const fetchMainData = createAsyncThunk(
    'data/fetchMainData',
    async (cityName, {rejectWithValue}) => {
        try {
            const response = await weatherData(API.URL_MAIN, cityName);
            // console.log(response);

            if (response.cod !== 200) {
                throw new Error(response.message);
            }

            return mainData(response);
        } catch (e) {
            console.log(e);
            return rejectWithValue(e.message)
        }
    }
);

const mainDataSlice = createSlice({
    name: 'main',
    initialState: {
        data: {},
        error: null
    },
    reducers: {},
    extraReducers: {
        [fetchMainData.fulfilled]: (state, action) => {
            state.error = null;
            state.data = action.payload;
        },
        [fetchMainData.rejected]: (state, action) => {
            state.error = action.payload;
        }
    }
});

function mainData(data) {
    const {
        main: {
            temp,
            feels_like: feelsLike,
        },
        name,
        weather: {
            0: {
                main: weather,
            },
        },
        sys: {
            sunrise,
            sunset,
        },
    } = data;

    return {temp, feelsLike, name, weather, sunrise, sunset};
}

export const { reducer } = mainDataSlice;
export default fetchMainData;
