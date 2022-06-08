
function Locations() {
    return (
        <div className="weather__locations">
            <h2 className="header header_locations">
                Added Locations:
            </h2>
            <ul className="weather__locations-list">
                <li className="weather__locations-list-item flex">
                    <button className="weather__locations-favorite-btn">
                        Amur
                    </button>
                    <button className="weather__location-del"></button>
                </li>
                <li className="weather__locations-list-item flex">
                    <button className="weather__locations-favorite-btn">
                        Samara
                    </button>
                    <button className="weather__location-del"></button>
                </li>
                <li className="weather__locations-list-item flex">
                    <button className="weather__locations-favorite-btn">
                        Bali
                    </button>
                    <button className="weather__location-del"></button>
                </li>
                <li className="weather__locations-list-item flex">
                    <button className="weather__locations-favorite-btn">
                        Dane
                    </button>
                    <button className="weather__location-del"></button>
                </li>
                <li className="weather__locations-list-item flex">
                    <button className="weather__locations-favorite-btn">
                        Kilo
                    </button>
                    <button className="weather__location-del"></button>
                </li>
                <li className="weather__locations-list-item flex">
                    <button className="weather__locations-favorite-btn">
                        Nur-Sultan
                    </button>
                    <button className="weather__location-del"></button>
                </li>
            </ul>
        </div>
    )
}

export default Locations