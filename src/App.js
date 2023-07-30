import axios from 'axios';
import TenDayF from './components/TenDayF';
import Daily from './components/Daily';
import Header from './components/Header';

import { useState, useEffect } from 'react';


import './App.css';
import City from './components/City';
import NavBar from './components/NavBar';


function App() {
  // define my state
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
  console.log(location)

  // variable to store the api url
  
  //  const url = `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&hourly=temperature_2m,relativehumidity_2m,dewpoint_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,weathercode,surface_pressure,cloudcover,visibility,evapotranspiration,windspeed_10m,windspeed_80m,windgusts_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,uv_index_clear_sky_max,precipitation_sum,rain_sum,showers_sum,snowfall_sum,precipitation_hours,precipitation_probability_max,windspeed_10m_max,windgusts_10m_max,winddirection_10m_dominant,shortwave_radiation_sum,et0_fao_evapotranspiration&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=auto&past_days=7&forecast_days=14`
  
  // function to fetch data

  // const fetchData = async() => {

  //   try {
  //     const response = await axios.get(url);
  //     setData(response.data);
  //     console.log(data)
  //   }catch(error){
  //     console.log(error);
  //   }
    
  // }

  // function to fetch location

  const fetchLocation = async (value) => {
    
    try{
      const response = await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${value}&count=10&language=en&format=json`);
     
      console.log(response.data);

    }catch(error){
      console.error(error);
    }
  }

  // handle change

  const handleChange = (value) => {
    setLocation(value);
    fetchLocation(value);
  }

  // useEffect(() => {
  //   fetchData();
  // },[location])
  
  return (
    <div className="App">
      <Header 
        location={location}
        setLocation={setLocation}
        handleChange={handleChange}
      />
      <City 
        location={location}
      />
      <NavBar />
      <TenDayF />
      <Daily /> 
    </div>
  );
}

export default App;
