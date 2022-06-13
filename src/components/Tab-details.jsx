function TabDetails(props) {
    const {name, temp, feelTemp, weather, sunrise, sunset} = props;

    return (
        <div className="weather__tab tab-details">
            <div className="weather__tab-container weather__tab-container_details">
                <h2 className="header header_details">{name}</h2>
                <ul className="tab-details__list">
                    <li className="tab-details__list-item">
                        Temperature: <span className="details__temp">{temp}&#176;</span>
                    </li>
                    <li className="tab-details__list-item">
                        Feels like: <span className="details__feels">{feelTemp}&#176;</span>
                    </li>
                    <li className="tab-details__list-item">
                        Weather: <span className="details__weather">{weather}</span>
                    </li>
                    <li className="tab-details__list-item">
                        Sunrise: <span className="details__sunrise">{sunrise}</span>
                    </li>
                    <li className="tab-details__list-item">
                        Sunset: <span className="details__sunset">{sunset}</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default TabDetails