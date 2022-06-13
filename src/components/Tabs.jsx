import TabNow from "./Tab-now";
import TabDetails from "./Tab-details";
import TabForecast from "./Tab-forecast";
import {getCelsius, getTime} from "../utils";

function Tabs({dataMain, dataForecast, onFavorite}) {
    // const {name, temp, feelTemp, weather, sunriseTime, sunsetTime} = props

    const data = {
        name: dataMain.name,
        temp: getCelsius(dataMain.main?.temp),
        feelTemp: getCelsius(dataMain.main?.feels_like),
        weather: (dataMain.weather ?? {})[0]?.main,
        sunrise: getTime(dataMain.sys?.sunrise),
        sunset: getTime(dataMain.sys?.sunset)
    }

    return (
        <div className="weather__tabs flex">
            <input className="wrap-input" type="radio" name="wrap-input" id="wrap-btn_now" value=""
                   defaultChecked={true}/>
            <label className="wrap-btn" htmlFor="wrap-btn_now">Now</label>
            <input className="wrap-input" type="radio" name="wrap-input" id="wrap-btn_details" value=""/>
            <label className="wrap-btn" htmlFor="wrap-btn_details">Details</label>
            <input className="wrap-input" type="radio" name="wrap-input" id="wrap-btn_forecast" value=""/>
            <label className="wrap-btn" htmlFor="wrap-btn_forecast">Forecast</label>
            <TabNow name={data.name} temp={data.temp} onFavorite={onFavorite}/>
            <TabDetails name={data.name} temp={data.temp} feelTemp={data.feelTemp} weather={data.weather}
                        sunrise={data.sunrise} sunset={data.sunset}/>
            <TabForecast data={dataForecast}/>
            {/*<TabNow />*/}
            {/*<TabDetails />*/}
            {/*<TabForecast />*/}
        </div>
    )
}

export default Tabs;