import {useEffect} from 'react'
import Form from "./Form";
import Locations from "./Locations";
import {API, weatherData} from "../api";
import Tabs from "./Tabs";
import {getStorageData, setStorageData, STORAGE} from "../utils";
import {createStore} from "redux";
import weatherApp from "../reducers";
import {Provider, useDispatch} from "react-redux";
import {getForecast, getMain} from "../actions";
import {Link} from "react-router-dom";

const defaultLocations = ['Los Angeles', 'New York', 'Kyiv', 'Tokyo', 'Berlin'];
const defaultCity = 'Moscow';

const storageCity = getStorageData(STORAGE.CURRENT_CITY) ?? defaultCity;
const storageFavoriteList = getStorageData(STORAGE.FAVORITE_LIST) ?? defaultLocations;

const storage = {
    list: storageFavoriteList
}

const store = createStore(weatherApp, storage);

console.log(store.getState());


function App() {
    return (
        <Provider store={store}>
            <Weather/>
        </Provider>
    )
}

function Weather() {
    const dispatch = useDispatch();

    useEffect(() => {
        showWeather(storageCity);
    }, []);

    async function showWeather(city) {
        try {
            const responseMain = await weatherData(API.URL_MAIN, city);
            const responseForecast = await weatherData(API.URL_FORECAST, city);

            if (!responseMain.name) {
                alert(`Error: ${responseMain.message}`);
                return;
            }

            setStorageData(STORAGE.CURRENT_CITY, city);

            dispatch(getMain(responseMain));
            dispatch(getForecast(responseForecast));
            // console.log(responseMain);
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className={'weather'}>
            {/*<button onClick={() => localStorage.clear()}>Clear</button>*/}
                <Link className={"weather__link"} to="/Help">Help</Link>
            <div className={'weather__container'}>
                <Form showWeather={showWeather}/>
                <div className="weather__main flex">
                    <Tabs/>
                    <Locations showWeather={showWeather}/>
                </div>
            </div>
        </div>
    )
}

export default App
