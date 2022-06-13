
function Locations({locations, showWeather, removeFavorite}) {
    return (
        <div className="weather__locations">
            <h2 className="header header_locations">
                Added Locations:
            </h2>
            <LocationsList locations={locations} showWeather={showWeather} removeFavorite={removeFavorite} />
        </div>
    )
}

function LocationsList({locations, showWeather, removeFavorite}) {
    const list = locations.map((item, index) =>
        <LocationsItem key={index} name={item} showWeather={showWeather} removeFavorite={removeFavorite}/>
    );

    return (
        <ul className="weather__locations-list">
            {list}
        </ul>
    )
}

function LocationsItem({name, showWeather, removeFavorite}) {
    return (
        <li className="weather__locations-list-item flex">
            <button className="weather__locations-favorite-btn" onClick={() => showWeather(name)}>
                {name}
            </button>
            <button className="weather__location-del" onClick={() => removeFavorite(name)}></button>
        </li>
    )
}

export default Locations