function TabDetails() {
    return (
        <div className="weather__tab tab-details">
            <div className="weather__tab-container weather__tab-container_details">
                <h2 className="header header_details">Aktobe</h2>
                <ul className="tab-details__list">
                    <li className="tab-details__list-item">
                        Temperature: <span className="details__temp">14&#176;</span>
                    </li>
                    <li className="tab-details__list-item">
                        Feels like: <span className="details__feels">14&#176;</span>
                    </li>
                    <li className="tab-details__list-item">
                        Weather: <span className="details__weather">Clouds</span>
                    </li>
                    <li className="tab-details__list-item">
                        Sunrise: <span className="details__sunrise">03:21</span>
                    </li>
                    <li className="tab-details__list-item">
                        Sunset: <span className="details__sunset">18:54</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default TabDetails