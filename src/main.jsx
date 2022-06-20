import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from './components/App'
import './css/style.css'
import './css/normalize.css'
import Help from "./components/Help";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="Help" element={<Help />} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
