import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { App, Weather } from './components/App'
import './css/style.css'
import './css/normalize.css'
import Help from "./components/Help";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path="/weather-app/" element={<App />}>
                <Route index element={<Weather />} />
                <Route path="help" element={<Help />} />
            </Route>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
