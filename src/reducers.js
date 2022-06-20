import {ADD_CITY, REMOVE_CITY, MAIN, FORECAST} from "./actions";
import {combineReducers} from "redux";

function citiesList(state = [], action) {
    switch (action.type) {
        case ADD_CITY:
            const isFavorite = state.includes(action.name);

            if (!action.name || isFavorite) return state;

            return [action.name, ...state];
        case REMOVE_CITY:
            return state.filter(item => item !== action.name);
        default:
            return state;
    }
}


function mainData(state = {}, action) {
    if (action.type === MAIN) {
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
        } = action.main;

        return {temp, feelsLike, name, weather, sunrise, sunset}
    }

    return state;
}

function forecastData(state = {}, action) {
    if (action.type === FORECAST) {
        return action.forecast;
    }

    return state;
}

const weatherApp = combineReducers({
    main: mainData,
    forecast: forecastData,
    list: citiesList
});

export default weatherApp