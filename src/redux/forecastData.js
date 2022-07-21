import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {API, weatherData} from "../api";

const fetchForecastData = createAsyncThunk(
    'data/fetchForecastData',
    async (cityName, {rejectWithValue}) => {
       try {
          const response = await weatherData(API.URL_FORECAST, cityName);

          if (response.cod !== '200') {
             throw new Error(response.message);
          }
          // console.log(response);
          const name = response.city.name;
          const data = response.list.map(item => forecastData(item));
          // console.log(data);

          return { data, name };
       } catch (e) {
          console.log(e);
          return rejectWithValue(e.message)
       }
    }
);

const forecastDataSlice = createSlice({
   name: 'forecast',
   initialState: {
      items: [],
      city: null,
      error: null
   },
   reducers: {},
   extraReducers: {
      [fetchForecastData.fulfilled]: (state, action) => {
         state.error = null;
         state.items = action.payload.data;
         state.city = action.payload.name;
         // console.log(action.payload);
      },
      [fetchForecastData.rejected]: (state, action) => {
         state.error = action.payload;
      }
   }
});

function forecastData(data) {
   const {
      dt_txt: date,
      dt: time,
      main: {
         temp,
         feels_like: feelsLike,
      },
      weather: {
         0: {
            main: weather,
         },
      },
   } = data;

   return {temp, feelsLike, weather, time, date};
}

export const { reducer } = forecastDataSlice;
export const { setCity } = forecastDataSlice.actions;
export default fetchForecastData;
