import React, { useState,useRef,useEffect } from 'react'
import Search from './components/search';
import Weather from './components/weather';
import AQICard from './components/aqiCard';
import './index.css';
import './radio.css';
const BASE_URL = "https://weather-aqi-app-7s4z.onrender.com";


function App() {
  const requestRef = useRef(0);
  const[weather,setWeather] = useState(null);
  const[aqi,setAqi] = useState(null);
  const[loading,setLoading] = useState(false);
  const[error,setError] =  useState(null);
  const[view,setView] = useState(null)
  const[time,setTime] = useState(new Date());
  const fetchData = async (city) => {
    if (!city||!city.trim()) {
      return;
    }
    const id = ++requestRef.current;
    setWeather(null);
    setAqi(null);

    try{
      setLoading(true);
      setError(null);
      

      const response = await fetch(`${BASE_URL}/weather?city=${city}`);
      
      const weatherData = await response.json();
    
      if (!response.ok) {
        throw new Error(weatherData.error || 'Failed to fetch weather data');
      }
      if (id !== requestRef.current) return;
      setWeather(weatherData);
      setView('weather');
        // Set view to show weather by default

      if (weatherData?.coord?.lat !== undefined && weatherData?.coord?.lon !== undefined) {
        const { lat, lon } = weatherData.coord;
        const aqiResponse = await fetch(
          `${BASE_URL}/aqi?lat=${lat}&lon=${lon}`,
        );
        if (!aqiResponse.ok) {
          throw new Error('Failed to fetch AQI data');
        }
        const aqiData = await aqiResponse.json();
        setAqi(aqiData);
        
      
    }
  }
    catch(err){
      setError(err);
    }
    finally{
      setLoading(false);
    }
  }
  useEffect(()=>{
    const interval = setInterval(()=>{   
      setTime(new Date());
    },1000);
    return()=>clearInterval(interval);
  })
  return (
    <div className="grid h-screen w-full place-items-center bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-700 to-black">
      <section className="grid min-h-[600px] w-full max-w-md rounded-2xl bg-gradient-to-tl from-purple-800 via-violet-900 to-purple-800 p-6">
      <div className="flex h-full flex-col gap-y-5 text-violet-100">
        
          <Search onSearch={fetchData} />
          

          <h1 className="text-xl text-violet-200 drop-shadow-[0_0_8px_#c084fc]">
           {time.toDateString()} | {time.toLocaleTimeString()}
          </h1>
          {!(weather || aqi) && (
            <h1 className="text-2xl font-extrabold m-2 p-2">
              Weather,AQI... All in one place</h1>
          )}
        <main className="relative flex-1">
        {loading && <p>Loading...</p>}
        {error && <p className="text-magenta-500">Error: {error.message}</p>}
      {(weather || aqi) && (
        <div className="package-container" >
          <div className="package-tab-wrapper">
            <input id = "weather" type ="radio" name='view' value='weather' checked={view==='weather'} onChange={(e)=>setView(e.target.value)} className="input"/>
          <label htmlFor="weather" className="package-tab">Weather</label>
        
            <input id = "aqi" type ="radio" name='view' value='aqi' checked={view==='aqi'} onChange={(e)=>setView(e.target.value)} className="input"/>
          <label htmlFor="aqi" className='package-tab'>AQI</label>
          </div>
        </div>
      )}
      {view === "weather" && weather && (
              <>
                <Weather data={weather} />

                <div className="absolute inset-x-0 bottom-0 grid grid-cols-2 border-t border-violet-500 pt-3 text-violet-300">
                  
                  <div>
                    <p className="text-sm font-extrabold">
                      {weather.main.humidity}%
                    </p>
                    <p className="text-sm">Humidity</p>
                  </div>

                  <div>
                    <p className="text-sm font-extrabold">
                      {weather.wind.speed} m/s
                    </p>
                    <p className="text-sm">Wind Speed</p>
                  </div>

                </div>
              </>
            )}

            
            {view === "aqi" && aqi && 
            (
              <>
            <AQICard data={aqi} city={weather?.name}/>
            <div className="absolute inset-x-0 bottom-0 grid grid-cols-2 border-t border-violet-500 pt-3 text-violet-300">
                  
                  <div>
                    <p className="text-sm font-extrabold">
                      {aqi?.list?.[0]?.components?.pm2_5}%
                    </p>
                    <p className="text-sm">PM2.5</p>
                  </div>

                  <div>
                    <p className="text-sm font-extrabold">
                      {aqi?.list?.[0]?.components?.pm10}%
                    </p>
                    <p className="text-sm">PM10</p>
                  </div>

                </div>
             </>
            )}
      </main>
      </div>
      </section>
      </div>
  )
}
export default App;
