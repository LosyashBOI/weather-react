import {useEffect, useState} from 'react'
import Form from "./Form";
import Locations from "./Locations";
import {API, weatherData} from "../api";
import Tabs from "./Tabs";
import {getStorageData, setStorageData, STORAGE} from "../utils";

const defaultLocations = ['Moscow', 'Los Angeles', 'New York', 'Kyiv', 'Tokyo', 'Berlin'];
const storageCity = getStorageData(STORAGE.CURRENT_CITY) ?? 'Moscow';
const storageFavoriteList = getStorageData(STORAGE.FAVORITE_LIST) ?? defaultLocations;

function App() {
  return (
      <Weather />
  )
}

function Weather() {
    const [valueInput, setValue] = useState('');
    const [dataMain, setDataMain] = useState({});
    const [dataForecast, setDataForecast] = useState({});
    const [favoriteList, setFavoriteList] = useState([]);
    const [currentCity, setCurrentCity] = useState('');

    useEffect(() => {
        showWeather(storageCity);
        setFavoriteList(storageFavoriteList);
    }, []);

    useEffect(() => {
        setStorageData(STORAGE.CURRENT_CITY, currentCity);
    }, [currentCity]);

    useEffect(() => {
        setStorageData(STORAGE.FAVORITE_LIST, favoriteList);
    }, [favoriteList]);

    async function showWeather(city) {
        try {
            const responseMain = await weatherData(API.URL_MAIN, city);
            const responseForecast = await weatherData(API.URL_FORECAST, city);

            if (!responseMain.name) {
                alert(`Error: ${responseMain.message}`);
                return;
            }

            setCurrentCity(city);
            setDataMain(responseMain);
            setDataForecast(responseForecast);
            // console.log(responseMain);
        } catch (e) {
            console.log(e)
        }
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (!valueInput.trim()) return;

        showWeather(valueInput)

        setValue('');
    }

    function addFavorite() {
        const city = dataMain.name;
        const isFavorite = favoriteList.includes(city);

        if (!city || isFavorite) return;

        setFavoriteList([city, ...favoriteList]);
    }

    function removeFavorite(city) {
        const filteredList = favoriteList.filter(item => item !== city);

        setFavoriteList(filteredList);
    }

    return (
      <div className={'weather'}>
          {/*<button onClick={() => localStorage.clear()}>Clear</button>*/}
          <div className={'weather__container'}>
            <Form onChange={setValue} cityName={valueInput} submit={handleSubmit} />
            <div className="weather__main flex">
                <Tabs dataMain={dataMain} dataForecast={dataForecast} onFavorite={addFavorite} />
                <Locations locations={favoriteList} showWeather={showWeather} removeFavorite={removeFavorite}/>
            </div>
          </div>
      </div>
    )
}

export default App
