import {Link} from "react-router-dom";

function Help() {
    return (
        <div className={'weather'}>
            <Link className={"weather__link"} to="/weather-app/">Back</Link>
            <div className={'weather__container'}>
                <div className="weather__main help flex">
                    <h2 className={"help__header"}>
                        This is the WeatherApp!
                    </h2>
                    <p className={"help__desc"}>
                        In it, you can watch the weather forecast both for the current time and for several hours ahead.
                        Any city in the world!
                    </p>
                    <p className={"help__credits"}>Created by losyashboi</p>
                </div>
            </div>
        </div>
    )
}

export default Help
