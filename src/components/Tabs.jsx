import TabNow from "./Tab-now";
import TabDetails from "./Tab-details";
import TabForecast from "./Tab-forecast";

function Tabs(props) {
    return (
        <div className="weather__tabs flex">
            <input className="wrap-input" type="radio" name="wrap-input" id="wrap-btn_now" value=""/>
            <label className="wrap-btn" htmlFor="wrap-btn_now">Now</label>
            <input className="wrap-input" type="radio" name="wrap-input" id="wrap-btn_details" value=""/>
            <label className="wrap-btn" htmlFor="wrap-btn_details">Details</label>
            <input className="wrap-input" type="radio" name="wrap-input" id="wrap-btn_forecast" value=""/>
            <label className="wrap-btn" htmlFor="wrap-btn_forecast">Forecast</label>
            <TabNow name={props.name} temp={props.temp} message={props.message}/>
            <TabDetails />
            <TabForecast />
        </div>
    )
}

export default Tabs;