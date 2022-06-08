import {useEffect, useState} from 'react'
import logo from '../logo.svg'
import Form from "./Form";
import TabNow from "./Tab-now";
import TabDetails from "./Tab-details";
import TabForecast from "./Tab-forecast";
import Locations from "./Locations";
import {API, weatherData} from "../api";
import Tabs from "./Tabs";
import {getCelsius} from "../utils";

function App() {
  return (
      <Weather />
  )
}

function Weather() {
    const [valueInput, setValue] = useState('Moscow');
    const [data, setData] = useState({});

    async function handleSubmit(event) {
        event.preventDefault();

        if (!valueInput.trim()) return;

        const data = await weatherData(API.URL_MAIN, valueInput);
        setData(data);
        setValue('');

        console.log(data);
    }

    return (
      <div className={'weather'}>
        <div className={'weather__container'}>
          <Form onChange={setValue} cityName={valueInput} submit={handleSubmit} />
          <div className="weather__main flex">
            <Tabs name={data.name} temp={getCelsius(data.main.temp)} message={data.message}/>
            <Locations />
          </div>
        </div>
      </div>
    )
}



export default App
