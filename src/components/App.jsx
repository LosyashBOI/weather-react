import {useEffect} from 'react'
import Form from "./Form";
import Locations from "./Locations";
import Tabs from "./Tabs";
import {getStorageData, setStorageData, STORAGE} from "../utils";
import {Provider, useDispatch} from "react-redux";
import {Link, Outlet} from "react-router-dom";
import fetchMainData from "../redux/mainData";
import fetchForecastData, {setCity} from "../redux/forecastData";
import store from "../redux/store";

const defaultCity = 'Moscow';
const storageCity = getStorageData(STORAGE.CURRENT_CITY) ?? defaultCity;

function App() {
    return (
        <Provider store={store}>
            <Outlet />
        </Provider>
    )
}

function Weather() {
    const dispatch = useDispatch();

    useEffect(() => {
        showWeather(storageCity);
        // console.log('useEffect');
    }, []);

    function showWeather(city) {
        setStorageData(STORAGE.CURRENT_CITY, city);

        dispatch(fetchMainData(city));
        dispatch(fetchForecastData(city));
        // dispatch(setCity(city));
        // console.log(city);
    }

    return (
        <div className={'weather'}>
            {/*<button onClick={() => localStorage.clear()}>Clear</button>*/}
            <Link className={"weather__link"} to="help">Help</Link>
            <div className={'weather__container'}>
                <Form showWeather={showWeather} />
                <div className="weather__main flex">
                    <Tabs />
                    <Locations showWeather={showWeather} />
                </div>
            </div>
        </div>
    )
}

export { App, Weather };
