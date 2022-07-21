import TabNow from "./Tab-now";
import TabDetails from "./Tab-details";
import TabForecast from "./Tab-forecast";
import {useSelector} from "react-redux";

const errorStyle = {
    paddingLeft: '15px',
    alignSelf: 'center',
    fontSize: '40px',
}

function Tabs() {
    const error = useSelector(state => state.forecast.error);

    return (
        <div className="weather__tabs flex">
            <Wrapper/>
            {error ? <h2 style={errorStyle}>{error}</h2> : <><TabNow/>
                <TabDetails/>
                <TabForecast/></>
            }

        </div>
    )
}

function Wrapper() {
    return (
        <>
            <input className="wrap-input" type="radio" name="wrap-input" id="wrap-btn_now" value=""
                   defaultChecked={true}/>
            <label className="wrap-btn" htmlFor="wrap-btn_now">Now</label>
            <input className="wrap-input" type="radio" name="wrap-input" id="wrap-btn_details" value=""/>
            <label className="wrap-btn" htmlFor="wrap-btn_details">Details</label>
            <input className="wrap-input" type="radio" name="wrap-input" id="wrap-btn_forecast" value=""/>
            <label className="wrap-btn" htmlFor="wrap-btn_forecast">Forecast</label>
        </>
    )
}

export default Tabs;
