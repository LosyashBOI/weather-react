import {getCelsius, getDate, getTime} from "../utils";
import {useSelector} from "react-redux";

function TabForecast() {
    const data = useSelector(state => state.forecast);
    // console.log(data);

    return (
        <div className="weather__tab tab-forecast">
            <div className="weather__tab-container weather__tab-container_forecast">
                <h2 className="header header_forecast">{data.city}</h2>
                <ListForecast data={data} />
            </div>
        </div>
    )
}

function ListForecast({data}) {
    const list = data.items.map((item, index) =>
        <ListItemForecast key={index}
                          date={getDate(item?.date)}
                          time={getTime(item?.time)}
                          temp={getCelsius(item?.temp)}
                          feelTemp={getCelsius(item?.feelsLike)}
                          weather={item?.weather}/>
    );

    return (
        <ul className="tab-forecast__list">
            {list}
        </ul>
    )
}

function ListItemForecast({date, time, temp, feelTemp, weather}) {
    return (
        <li className="tab-forecast__list-item flex">
            <div className="tab-forecast__item-top flex">
                <span className="tab-forecast__date">{date}</span>
                <span className="tab-forecast__time">{time}</span>
            </div>
            <div className="tab-forecast__item-bottom flex">
                <div className="tab-forecast__briefly-condition">
                    <p className="tab-forecast__temp">
                        Temperature: <span>{temp}&#176;</span>
                    </p>
                    <p className="tab-forecast__feels">
                        Feels like: <span>{feelTemp}&#176;</span>
                    </p>
                </div>
                <div className="tab-forecast__weather">{weather}</div>
            </div>
        </li>
    )
}

export default TabForecast
