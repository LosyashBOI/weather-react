
function TabForecast() {
    return (
        <div className="weather__tab tab-forecast">
            <div className="weather__tab-container weather__tab-container_forecast">
                <h2 className="header header_forecast">
                    Aktobe
                </h2>
                <ListForecast />
            </div>
        </div>
    )
}

function ListForecast() {
    return (
        <ul className="tab-forecast__list">
            <ListItemForecast date={'17 May'} time={'15:00'} temp={13} feelTemp={10} weather={'Sun'}/>
            <ListItemForecast date={'17 May'} time={'18:00'} temp={12} feelTemp={10} weather={'Rain'}/>
            <ListItemForecast date={'17 May'} time={'21:00'} temp={10} feelTemp={8} weather={'Rain'}/>
            <ListItemForecast date={'17 May'} time={'0:00'} temp={5} feelTemp={0} weather={'Rain'}/>
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